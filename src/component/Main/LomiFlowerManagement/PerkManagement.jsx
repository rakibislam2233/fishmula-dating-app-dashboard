import { useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FaMars, FaVenus } from "react-icons/fa6";
import { Modal, Form, Input, Button } from "antd";
import CustomInput from "../../../utils/CustomInput";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const PerkManagement = () => {
  const [isMaleModalOpen, setIsMaleModalOpen] = useState(false);
  const [isFemaleModalOpen, setIsFemaleModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [email, setEmail] = useState("info@gmail.com");
  const [message, setMessage] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );

  // Male features state
  const [maleFeatures, setMaleFeatures] = useState([
    {
      id: Date.now(), // Unique ID for each feature
      feature: "Profile Discovery",
      details: "Swipe left/right on 5 profiles per day",
      lomiCount: 0,
      flowerCount: 0,
    },
  ]);

  // Female features state
  const [femaleFeatures, setFemaleFeatures] = useState([
    {
      id: Date.now(), // Unique ID for each feature
      feature: "Access",
      details: "Free & Unlimited Swipes and Messages",
    },
  ]);

  const handleEditClick = (gender) => {
    if (gender === "male") setIsMaleModalOpen(true);
    else setIsFemaleModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsMaleModalOpen(false);
    setIsFemaleModalOpen(false);
    setIsEmailModalOpen(false);
  };

  const handleSaveChanges = (gender) => {
    if (gender === "male") {
      setMessage("Male Features updated");
    } else {
      setMessage("Female Features updated");
    }
    setIsEmailModalOpen(true);
    handleCloseModal();
  };

  const handleSendEmail = () => {
    if (email && message) {
      console.log("Email sent to:", email, "with message:", message);
      handleCloseModal();
    } else {
      alert("Please fill in all fields.");
    }
  };

  const updateFeature = (index, field, value, gender) => {
    const features =
      gender === "male" ? [...maleFeatures] : [...femaleFeatures];
    features[index] = { ...features[index], [field]: value };
    if (gender === "male") {
      setMaleFeatures(features);
    } else {
      setFemaleFeatures(features);
    }
  };

  const addMaleFeature = () => {
    setMaleFeatures([
      ...maleFeatures,
      {
        id: Date.now(),
        feature: "",
        details: "",
        lomiCount: 0,
        flowerCount: 0,
      },
    ]);
  };

  const addFemaleFeature = () => {
    setFemaleFeatures([
      ...femaleFeatures,
      {
        id: "",
        feature: "",
        details: "",
      },
    ]);
  };

  const removeMaleFeature = (index) => {
    if (maleFeatures.length > 1) {
      setMaleFeatures(maleFeatures.filter((feature) => feature.id !== index));
    } else {
      alert("At least one feature must remain.");
    }
  };

  const removeFemaleFeature = (index) => {
    console.log("first", femaleFeatures, index);
    if (femaleFeatures.length > 1) {
      setFemaleFeatures(femaleFeatures.filter((_, i) => i !== index));
    } else {
      alert("At least one feature must remain.");
    }
  };

  return (
    <section className="w-full flex gap-5">
      {/* Male Card */}
      <div className="w-full h-60 bg-white border-2 border-primary rounded-lg p-6 max-w-56 relative">
        <div className="flex justify-end mb-5">
          <button
            className="cursor-pointer"
            onClick={() => handleEditClick("male")}
          >
            <BiPencil className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[75px] bg-[#FEF7DB] rounded-full border-2 border-primary flex items-center justify-center mb-3">
            <FaMars className="size-7 text-[#93D6F4]" />
          </div>
          <span className="text-center text-xl font-semibold mt-2">MALE</span>
        </div>
      </div>

      {/* Female Card */}
      <div className="w-full h-60 bg-white border-2 border-[#d3465e] rounded-lg p-6 max-w-56 relative">
        <div className="flex justify-end mb-5">
          <button
            className="cursor-pointer"
            onClick={() => handleEditClick("female")}
          >
            <BiPencil className="w-7 h-7 text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[75px] bg-[#FEEAEF] rounded-full border-2 border-[#EF687E] flex items-center justify-center mb-3">
            <FaVenus className="size-7 text-[#F28598]" />
          </div>
          <span className="text-center text-xl font-semibold mt-2">FEMALE</span>
        </div>
      </div>

      {/* Male Features Modal */}
      <Modal
        title="Male Features"
        open={isMaleModalOpen}
        onCancel={handleCloseModal}
        centered
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => handleSaveChanges("male")}
          >
            Save Changes
          </Button>,
        ]}
      >
        <div className="max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
          <Form layout="vertical">
            {maleFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="mb-4 border-2 border-dotted border-gray-300 p-2 relative"
              >
                {maleFeatures.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => removeMaleFeature(feature.id)}
                      className=" text-red-500 hover:text-red-700 cursor-pointer"
                    />
                  </div>
                )}
                <Form.Item label={`Feature ${index + 1}`}>
                  <CustomInput
                    value={feature.feature}
                    onChange={(e) =>
                      updateFeature(index, "feature", e.target.value, "male")
                    }
                  />
                </Form.Item>
                <Form.Item label="Details">
                  <CustomInput
                    isTextArea
                    value={feature.details}
                    onChange={(e) =>
                      updateFeature(index, "details", e.target.value, "male")
                    }
                    rows={2}
                  />
                </Form.Item>
                <div className="flex justify-between items-center gap-5 mb-4">
                  <h1 className="text-sm">Lomi Count</h1>
                  <div>
                    <button
                      type="button"
                      className="px-3 py-1 border hover:bg-gray-100"
                      onClick={() =>
                        updateFeature(
                          index,
                          "lomiCount",
                          Math.max(0, feature.lomiCount - 1),
                          "male"
                        )
                      }
                    >
                      <MinusOutlined size={16} />
                    </button>
                    <span className="px-3 py-[7px] bg-black text-white">
                      {feature.lomiCount}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1 border hover:bg-gray-100"
                      onClick={() =>
                        updateFeature(
                          index,
                          "lomiCount",
                          feature.lomiCount + 1,
                          "male"
                        )
                      }
                    >
                      <PlusOutlined size={16} />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-5">
                  <h1 className="text-sm">Flower Count</h1>
                  <div>
                    <button
                      type="button"
                      className="px-3 py-1 border hover:bg-gray-100"
                      onClick={() =>
                        updateFeature(
                          index,
                          "flowerCount",
                          Math.max(0, feature.flowerCount - 1),
                          "male"
                        )
                      }
                    >
                      <MinusOutlined size={16} />
                    </button>
                    <span className="px-3 py-[7px] bg-black text-white">
                      {feature.flowerCount}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1 border hover:bg-gray-100"
                      onClick={() =>
                        updateFeature(
                          index,
                          "flowerCount",
                          feature.flowerCount + 1,
                          "male"
                        )
                      }
                    >
                      <PlusOutlined size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <Button
              type="dashed"
              onClick={addMaleFeature}
              block
              icon={<PlusOutlined />}
              className="mt-4"
            >
              Add Feature
            </Button>
          </Form>
        </div>
      </Modal>

      {/* Female Features Modal */}
      <Modal
        title="Female Features"
        open={isFemaleModalOpen}
        onCancel={handleCloseModal}
        centered
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button
            key="save"
            type="primary"
            onClick={() => handleSaveChanges("female")}
          >
            Save Changes
          </Button>,
        ]}
      >
        <div className="max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
          <Form layout="vertical">
            {femaleFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="mb-4 border-2 border-dotted border-gray-300 p-2 relative"
              >
                {femaleFeatures.length > 1 && (
                  <div className="flex justify-end">
                    <Button
                      type="text"
                      icon={<DeleteOutlined />}
                      onClick={() => removeFemaleFeature(index)}
                      className=" text-red-500 hover:text-red-700 cursor-pointer"
                    />
                  </div>
                )}
                <Form.Item label={`Feature ${index + 1}`}>
                  <CustomInput
                    value={feature.feature}
                    onChange={(e) =>
                      updateFeature(index, "feature", e.target.value, "female")
                    }
                  />
                </Form.Item>
                <Form.Item label="Details">
                  <CustomInput
                    isTextArea
                    value={feature.details}
                    onChange={(e) =>
                      updateFeature(index, "details", e.target.value, "female")
                    }
                    rows={2}
                  />
                </Form.Item>
              </div>
            ))}
            <Button
              type="dashed"
              onClick={addFemaleFeature}
              block
              icon={<PlusOutlined />}
              className="mt-4"
            >
              Add Feature
            </Button>
          </Form>
        </div>
      </Modal>

      {/* Email Modal */}
      <Modal
        title="Mail"
        open={isEmailModalOpen}
        onCancel={handleCloseModal}
        footer={[
          <Button
            key="send"
            type="primary"
            onClick={handleSendEmail}
            style={{ backgroundColor: "#6B2D26", borderColor: "#6B2D26" }}
          >
            Send
          </Button>,
        ]}
      >
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item label="Message">
            <Input.TextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
            />
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
};

export default PerkManagement;
