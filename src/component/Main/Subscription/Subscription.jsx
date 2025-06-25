import { useState, useEffect } from "react";
import { Modal, Slider, Input, Form, message } from "antd";
import { FaPlus } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import lomi from "../../../assets/subscription/lomi.png";
import flower from "../../../assets/subscription/flower.png";
import premium from "../../../assets/subscription/premium.png";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const Subscription = () => {
  // State for modals
  const [isLomiModalOpen, setIsLomiModalOpen] = useState(false);
  const [isFlowerModalOpen, setIsFlowerModalOpen] = useState(false);
  const [isPremiumModalOpen, setIsPremiumModalOpen] = useState(false);
  const [isMailModalOpen, setIsMailModalOpen] = useState(false);

  // State for subscription data
  const [subscriptions, setSubscriptions] = useState({
    lomi: { count: 50, originalPrice: 20.0, discountPrice: 17.0 },
    flower: { count: 30, originalPrice: 20.0, discountPrice: 17.0 },
    premium: {
      lomiCount: 5,
      flowerCount: 10,
      originalPrice: 20.0,
      discountPrice: 17.0,
    },
  });

  // Local state for real-time updates in modals
  const [lomiFormValues, setLomiFormValues] = useState(subscriptions.lomi);
  const [flowerFormValues, setFlowerFormValues] = useState(subscriptions.flower);
  const [premiumFormValues, setPremiumFormValues] = useState(subscriptions.premium);

  // Form instances
  const [lomiForm] = Form.useForm();
  const [flowerForm] = Form.useForm();
  const [premiumForm] = Form.useForm();
  const [mailForm] = Form.useForm();

  // Sync form with local state when modal opens
  useEffect(() => {
    if (isLomiModalOpen) {
      setLomiFormValues(subscriptions.lomi);
      lomiForm.setFieldsValue(subscriptions.lomi);
    }
  }, [isLomiModalOpen, subscriptions.lomi, lomiForm]);

  useEffect(() => {
    if (isFlowerModalOpen) {
      setFlowerFormValues(subscriptions.flower);
      flowerForm.setFieldsValue(subscriptions.flower);
    }
  }, [isFlowerModalOpen, subscriptions.flower, flowerForm]);

  useEffect(() => {
    if (isPremiumModalOpen) {
      setPremiumFormValues(subscriptions.premium);
      premiumForm.setFieldsValue(subscriptions.premium);
    }
  }, [isPremiumModalOpen, subscriptions.premium, premiumForm]);

  // Handle modal open/close
  const handleOpenModal = (type) => {
    switch (type) {
      case "lomi":
        setIsLomiModalOpen(true);
        break;
      case "flower":
        setIsFlowerModalOpen(true);
        break;
      case "premium":
        setIsPremiumModalOpen(true);
        break;
      case "mail":
        setIsMailModalOpen(true);
        break;
      default:
        break;
    }
  };

  const handleCloseModal = (type) => {
    switch (type) {
      case "lomi":
        setIsLomiModalOpen(false);
        lomiForm.resetFields();
        setLomiFormValues(subscriptions.lomi);
        break;
      case "flower":
        setIsFlowerModalOpen(false);
        flowerForm.resetFields();
        setFlowerFormValues(subscriptions.flower);
        break;
      case "premium":
        setIsPremiumModalOpen(false);
        premiumForm.resetFields();
        setPremiumFormValues(subscriptions.premium);
        break;
      case "mail":
        setIsMailModalOpen(false);
        mailForm.resetFields();
        break;
      default:
        break;
    }
  };

  // Handle count increment/decrement for Lomi and Flower
  const handleCountChange = (type, form, setFormValues, increment, field = "count") => {
    setFormValues((prev) => {
      const currentCount = prev[field] || 1;
      const newCount = Math.max(1, currentCount + (increment ? 1 : -1));
      form.setFieldsValue({ [field]: newCount });
      return { ...prev, [field]: newCount };
    });
  };

  // Handle slider changes
  const handleSliderChange = (field, value, form, setFormValues) => {
    form.setFieldsValue({ [field]: value });
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // Handle save changes
  const handleSaveChanges = (type, values) => {
    setSubscriptions((prev) => ({
      ...prev,
      [type]: values,
    }));
    message.success(
      `${type.charAt(0).toUpperCase() + type.slice(1)} subscription updated successfully!`
    );
    handleCloseModal(type);
  };

  // Handle send mail
  const handleSendMail = (values) => {
    console.log("Mail data:", values);
    message.success("Mail sent to all users successfully!");
    handleCloseModal("mail");
  };

  return (
    <section className="w-full px-5">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-[19px] mb-4">
        <h1 className="text-2xl font-semibold">Subscription Management</h1>
        <button
          onClick={() => handleOpenModal("mail")}
          className="px-8 py-3 bg-primary text-white flex justify-center items-center gap-1 rounded-md text-sm"
        >
          <FaPlus />
          Send Mail to All Users
        </button>
      </div>

      <div className="w-full flex gap-8 mt-10">
        {/* LOMI Card */}
        <div className="w-full max-w-[300px] h-[330px] p-5 border-2 rounded-3xl border-primary bg-white">
          <div className="flex justify-end mb-8">
            <button className="cursor-pointer" onClick={() => handleOpenModal("lomi")}>
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={lomi} alt="lomi" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">LOMI</h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{subscriptions.lomi.count}</h1>
              <h1>Count</h1>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">${subscriptions.lomi.discountPrice.toFixed(2)}</h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>

        {/* Flower Card */}
        <div className="w-full max-w-[300px] h-[330px] p-5 border-2 rounded-3xl border-[#CF1B22] bg-white">
          <div className="flex justify-end mb-8">
            <button className="cursor-pointer" onClick={() => handleOpenModal("flower")}>
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={flower} alt="flower" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">Flower</h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{subscriptions.flower.count}</h1>
              <h1>Count</h1>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">${subscriptions.flower.discountPrice.toFixed(2)}</h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>

        {/* Premium Card */}
        <div className="w-full max-w-[300px] h-[330px] p-5 border-2 rounded-3xl border-[#E57836] bg-white">
          <div className="flex justify-end mb-8">
            <button className="cursor-pointer" onClick={() => handleOpenModal("premium")}>
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={premium} alt="premium" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">Premium</h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <div className="flex gap-4 items-center mb-2">
                <h1 className="text-sm font-bold">Lomi: {subscriptions.premium.lomiCount}</h1>
                <h1 className="text-sm font-bold">Flower: {subscriptions.premium.flowerCount}</h1>
              </div>
              <h1 className="text-xl md:text-2xl font-bold mt-2">${subscriptions.premium.discountPrice.toFixed(2)}</h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>
      </div>

      {/* LOMI Edit Modal */}
      <Modal
        title="Edit Lomi"
        open={isLomiModalOpen}
        onCancel={() => handleCloseModal("lomi")}
        footer={null}
        width={500}
        centered
      >
        <Form
          form={lomiForm}
          layout="vertical"
          onFinish={(values) => handleSaveChanges("lomi", values)}
          className="mt-6 p-4"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center gap-5">
              <h1 className="text-sm font-semibold">Lomi Count</h1>
              <div>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() => handleCountChange("lomi", lomiForm, setLomiFormValues, false)}
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">{lomiFormValues.count}</span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() => handleCountChange("lomi", lomiForm, setLomiFormValues, true)}
                >
                  <PlusOutlined size={16} />
                </button>
              </div>
            </div>
            <Form.Item name="count" className="hidden">
              <Input />
            </Form.Item>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">{lomiFormValues.count}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Original Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="originalPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("originalPrice", value, lomiForm, setLomiFormValues)}
                    value={lomiFormValues.originalPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${lomiFormValues.originalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Discount Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="discountPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("discountPrice", value, lomiForm, setLomiFormValues)}
                    value={lomiFormValues.discountPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${lomiFormValues.discountPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              Sale Amount (price will be reduced and shown in the app)
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => handleCloseModal("lomi")}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Modal>

      {/* Flower Edit Modal */}
      <Modal
        title="Edit Flower"
        open={isFlowerModalOpen}
        onCancel={() => handleCloseModal("flower")}
        footer={null}
        width={500}
        centered
      >
        <Form
          form={flowerForm}
          layout="vertical"
          onFinish={(values) => handleSaveChanges("flower", values)}
          className="mt-6 p-4"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center gap-5">
              <h1 className="text-sm font-semibold">Flower Count</h1>
              <div>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() => handleCountChange("flower", flowerForm, setFlowerFormValues, false)}
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">{flowerFormValues.count}</span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() => handleCountChange("flower", flowerForm, setFlowerFormValues, true)}
                >
                  <PlusOutlined size={16} />
                </button>
              </div>
            </div>
            <Form.Item name="count" className="hidden">
              <Input />
            </Form.Item>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">{flowerFormValues.count}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Original Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="originalPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("originalPrice", value, flowerForm, setFlowerFormValues)}
                    value={flowerFormValues.originalPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${flowerFormValues.originalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Discount Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="discountPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("discountPrice", value, flowerForm, setFlowerFormValues)}
                    value={flowerFormValues.discountPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${flowerFormValues.discountPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              Sale Amount (price will be reduced and shown in the app)
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => handleCloseModal("flower")}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Modal>

      {/* Premium Edit Modal */}
      <Modal
        title="Edit Premium"
        open={isPremiumModalOpen}
        onCancel={() => handleCloseModal("premium")}
        footer={null}
        width={500}
        centered
      >
        <Form
          form={premiumForm}
          layout="vertical"
          onFinish={(values) => handleSaveChanges("premium", values)}
          className="mt-6 p-4"
        >
          <div className="mb-6">
            <div className="flex justify-between items-center gap-5">
              <h1 className="text-sm font-semibold">Lomi Count</h1>
              <div>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange("premium", premiumForm, setPremiumFormValues, false, "lomiCount")
                  }
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">{premiumFormValues.lomiCount}</span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange("premium", premiumForm, setPremiumFormValues, true, "lomiCount")
                  }
                >
                  <PlusOutlined size={16} />
                </button>
              </div>
            </div>
            <Form.Item name="lomiCount" className="hidden">
              <Input />
            </Form.Item>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">{premiumFormValues.lomiCount}</span>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center gap-5">
              <h1 className="text-sm font-semibold">Flower Count</h1>
              <div>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange("premium", premiumForm, setPremiumFormValues, false, "flowerCount")
                  }
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">{premiumFormValues.flowerCount}</span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange("premium", premiumForm, setPremiumFormValues, true, "flowerCount")
                  }
                >
                  <PlusOutlined size={16} />
                </button>
              </div>
            </div>
            <Form.Item name="flowerCount" className="hidden">
              <Input />
            </Form.Item>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">{premiumFormValues.flowerCount}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Original Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="originalPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("originalPrice", value, premiumForm, setPremiumFormValues)}
                    value={premiumFormValues.originalPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${premiumFormValues.originalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Discount Price</label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="discountPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={10000}
                    step={0.01}
                    marks={{ 1: "$1", 10000: "$10000" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) => handleSliderChange("discountPrice", value, premiumForm, setPremiumFormValues)}
                    value={premiumFormValues.discountPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">${premiumFormValues.discountPrice.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mt-1">
              Sale Amount (price will be reduced and shown in the app)
            </p>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => handleCloseModal("premium")}
              className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </Form>
      </Modal>

      {/* Send Mail Modal */}
      <Modal
        title="Send Mail to all users"
        open={isMailModalOpen}
        onCancel={() => handleCloseModal("mail")}
        footer={null}
        width={600}
        centered
      >
        <Form
          form={mailForm}
          layout="vertical"
          onFinish={handleSendMail}
          className="mt-6"
        >
          <div className="mb-1">
            <label className="block text-sm font-medium mb-2">Mail</label>
            <Form.Item
              name="email"
              rules={[{ required: true, type: "email", message: "Please enter a valid email!" }]}
            >
              <Input
                placeholder="Info@gmail.com"
                className="h-12"
                prefix={
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 mr-2">
                    <span className="text-xs">👤</span>
                  </div>
                }
              />
            </Form.Item>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Message</label>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter a message!" }]}
            >
              <TextArea
                rows={8}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                className="resize-none"
              />
            </Form.Item>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-12 py-2 bg-primary text-white rounded-md  transition-colors"
            >
              Send
            </button>
          </div>
        </Form>
      </Modal>
    </section>
  );
};

export default Subscription;