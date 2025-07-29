import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Form, Input, message, Modal, Slider, Switch } from "antd";
import { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import flower from "../../../assets/subscription/flower.png";
import lomi from "../../../assets/subscription/lomi.png";
import premium from "../../../assets/subscription/premium.png";

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
  const [lomiFormValues, setLomiFormValues] = useState({
    ...subscriptions.lomi,
    isBundle: false,
    bundles: [
      {
        bundleName: "",
        count: 50,
        originalPrice: 20.0,
        discountPrice: 17.0,
      },
    ],
  });

  const [flowerFormValues, setFlowerFormValues] = useState({
    ...subscriptions.flower,
    isBundle: false,
    bundles: [
      {
        bundleName: "",
        count: 30,
        originalPrice: 20.0,
        discountPrice: 17.0,
      },
    ],
  });

  const [premiumFormValues, setPremiumFormValues] = useState(
    subscriptions.premium
  );

  // Form instances
  const [lomiForm] = Form.useForm();
  const [flowerForm] = Form.useForm();
  const [premiumForm] = Form.useForm();
  const [mailForm] = Form.useForm();

  // Sync form with local state when modal opens
  useEffect(() => {
    if (isLomiModalOpen) {
      const initialValues = {
        ...subscriptions.lomi,
        isBundle: false,
        bundles: [
          {
            bundleName: "",
            count: subscriptions.lomi.count,
            originalPrice: subscriptions.lomi.originalPrice,
            discountPrice: subscriptions.lomi.discountPrice,
          },
        ],
      };
      setLomiFormValues(initialValues);
      lomiForm.setFieldsValue(initialValues);
    }
  }, [isLomiModalOpen, subscriptions.lomi, lomiForm]);

  useEffect(() => {
    if (isFlowerModalOpen) {
      const initialValues = {
        ...subscriptions.flower,
        isBundle: false,
        bundles: [
          {
            bundleName: "",
            count: subscriptions.flower.count,
            originalPrice: subscriptions.flower.originalPrice,
            discountPrice: subscriptions.flower.discountPrice,
          },
        ],
      };
      setFlowerFormValues(initialValues);
      flowerForm.setFieldsValue(initialValues);
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
        break;
      case "flower":
        setIsFlowerModalOpen(false);
        flowerForm.resetFields();
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

  // Handle bundle toggle
  const handleBundleToggle = (type, checked) => {
    if (type === "lomi") {
      const newValues = {
        ...lomiFormValues,
        isBundle: checked,
        bundles: checked ? lomiFormValues.bundles : [lomiFormValues.bundles[0]],
      };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newValues = {
        ...flowerFormValues,
        isBundle: checked,
        bundles: checked
          ? flowerFormValues.bundles
          : [flowerFormValues.bundles[0]],
      };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Add new bundle
  const addBundle = (type) => {
    if (type === "lomi") {
      const newBundle = {
        bundleName: "",
        count: 50,
        originalPrice: 20.0,
        discountPrice: 17.0,
      };
      const newValues = {
        ...lomiFormValues,
        bundles: [...lomiFormValues.bundles, newBundle],
      };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newBundle = {
        bundleName: "",
        count: 30,
        originalPrice: 20.0,
        discountPrice: 17.0,
      };
      const newValues = {
        ...flowerFormValues,
        bundles: [...flowerFormValues.bundles, newBundle],
      };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Remove bundle
  const removeBundle = (type, index) => {
    if (type === "lomi") {
      const newBundles = lomiFormValues.bundles.filter((_, i) => i !== index);
      const newValues = {
        ...lomiFormValues,
        bundles:
          newBundles.length > 0 ? newBundles : [lomiFormValues.bundles[0]],
      };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newBundles = flowerFormValues.bundles.filter((_, i) => i !== index);
      const newValues = {
        ...flowerFormValues,
        bundles:
          newBundles.length > 0 ? newBundles : [flowerFormValues.bundles[0]],
      };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Handle count increment/decrement for bundles
  const handleBundleCountChange = (type, bundleIndex, increment) => {
    if (type === "lomi") {
      const newBundles = [...lomiFormValues.bundles];
      const currentCount = newBundles[bundleIndex].count || 1;
      newBundles[bundleIndex].count = Math.max(
        1,
        currentCount + (increment ? 1 : -1)
      );

      const newValues = { ...lomiFormValues, bundles: newBundles };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newBundles = [...flowerFormValues.bundles];
      const currentCount = newBundles[bundleIndex].count || 1;
      newBundles[bundleIndex].count = Math.max(
        1,
        currentCount + (increment ? 1 : -1)
      );

      const newValues = { ...flowerFormValues, bundles: newBundles };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Handle bundle slider changes
  const handleBundleSliderChange = (type, bundleIndex, field, value) => {
    if (type === "lomi") {
      const newBundles = [...lomiFormValues.bundles];
      newBundles[bundleIndex][field] = value;

      const newValues = { ...lomiFormValues, bundles: newBundles };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newBundles = [...flowerFormValues.bundles];
      newBundles[bundleIndex][field] = value;

      const newValues = { ...flowerFormValues, bundles: newBundles };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Handle bundle name change
  const handleBundleNameChange = (type, bundleIndex, value) => {
    if (type === "lomi") {
      const newBundles = [...lomiFormValues.bundles];
      newBundles[bundleIndex].bundleName = value;

      const newValues = { ...lomiFormValues, bundles: newBundles };
      setLomiFormValues(newValues);
      lomiForm.setFieldsValue(newValues);
    } else if (type === "flower") {
      const newBundles = [...flowerFormValues.bundles];
      newBundles[bundleIndex].bundleName = value;

      const newValues = { ...flowerFormValues, bundles: newBundles };
      setFlowerFormValues(newValues);
      flowerForm.setFieldsValue(newValues);
    }
  };

  // Handle count increment/decrement for Premium
  const handleCountChange = (
    type,
    form,
    setFormValues,
    increment,
    field = "count"
  ) => {
    setFormValues((prev) => {
      const currentCount = prev[field] || 1;
      const newCount = Math.max(1, currentCount + (increment ? 1 : -1));
      form.setFieldsValue({ [field]: newCount });
      return { ...prev, [field]: newCount };
    });
  };

  // Handle slider changes for Premium
  const handleSliderChange = (field, value, form, setFormValues) => {
    form.setFieldsValue({ [field]: value });
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // Handle save changes
  const handleSaveChanges = (type, values) => {
    if (type === "lomi" || type === "flower") {
      // For bundle mode, save the first bundle data to main subscription
      const mainData =
        values.isBundle && values.bundles?.length > 0
          ? {
              count: values.bundles[0].count,
              originalPrice: values.bundles[0].originalPrice,
              discountPrice: values.bundles[0].discountPrice,
            }
          : {
              count: values.count || values.bundles[0].count,
              originalPrice:
                values.originalPrice || values.bundles[0].originalPrice,
              discountPrice:
                values.discountPrice || values.bundles[0].discountPrice,
            };

      setSubscriptions((prev) => ({
        ...prev,
        [type]: mainData,
      }));
    } else {
      setSubscriptions((prev) => ({
        ...prev,
        [type]: values,
      }));
    }

    message.success(
      `${
        type.charAt(0).toUpperCase() + type.slice(1)
      } subscription updated successfully!`
    );
    handleCloseModal(type);
  };

  // Handle send mail
  const handleSendMail = (values) => {
    console.log("Mail data:", values);
    message.success("Mail sent to all users successfully!");
    handleCloseModal("mail");
  };

  // Render bundle form fields
  const renderBundleFields = (type, bundle, bundleIndex, formValues) => (
    <div
      key={bundleIndex}
      className="border border-gray-200 rounded-lg p-4 mb-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold">Bundle {bundleIndex + 1}</h3>
        {formValues.isBundle && formValues.bundles.length > 1 && (
          <button
            type="button"
            onClick={() => removeBundle(type, bundleIndex)}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove
          </button>
        )}
      </div>

      {formValues.isBundle && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Bundle Name</label>
          <Input
            placeholder="Enter your bundle Name"
            value={bundle.bundleName}
            onChange={(e) =>
              handleBundleNameChange(type, bundleIndex, e.target.value)
            }
            className="h-10"
          />
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-center gap-5">
          <h4 className="text-sm font-semibold">
            {type === "lomi" ? "LOMI" : "Flower"} Count
          </h4>
          <div>
            <button
              type="button"
              className="px-3 py-1 border hover:bg-gray-100"
              onClick={() => handleBundleCountChange(type, bundleIndex, false)}
            >
              <MinusOutlined size={16} />
            </button>
            <span className="px-2 py-[7px] bg-black text-white">
              {bundle.count}
            </span>
            <button
              type="button"
              className="px-3 py-1 border hover:bg-gray-100"
              onClick={() => handleBundleCountChange(type, bundleIndex, true)}
            >
              <PlusOutlined size={16} />
            </button>
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-lg font-semibold">{bundle.count}</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Original Price</label>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              min={1}
              max={100}
              step={1}
              marks={{ 1: "$1", 100: "$100" }}
              tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
              onChange={(value) =>
                handleBundleSliderChange(
                  type,
                  bundleIndex,
                  "originalPrice",
                  value
                )
              }
              value={bundle.originalPrice}
            />
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-lg font-semibold">
            ${bundle.originalPrice.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Discount Price</label>
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <Slider
              min={1}
              max={100}
              step={1}
              marks={{ 1: "$1", 100: "$100" }}
              tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
              onChange={(value) =>
                handleBundleSliderChange(
                  type,
                  bundleIndex,
                  "discountPrice",
                  value
                )
              }
              value={bundle.discountPrice}
            />
          </div>
        </div>
        <div className="text-center mt-2">
          <span className="text-lg font-semibold">
            ${bundle.discountPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-xs text-gray-500 text-center mt-1">
          Sale Amount (price will be reduced and shown in the app)
        </p>
      </div>
    </div>
  );

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
            <button
              className="cursor-pointer"
              onClick={() => handleOpenModal("lomi")}
            >
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={lomi} alt="lomi" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">
            LOMI
          </h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                {subscriptions.lomi.count}
              </h1>
              <h1>Count</h1>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                ${subscriptions.lomi.discountPrice.toFixed(2)}
              </h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>

        {/* Flower Card */}
        <div className="w-full max-w-[300px] h-[330px] p-5 border-2 rounded-3xl border-[#CF1B22] bg-white">
          <div className="flex justify-end mb-8">
            <button
              className="cursor-pointer"
              onClick={() => handleOpenModal("flower")}
            >
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={flower} alt="flower" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">
            Flower
          </h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                {subscriptions.flower.count}
              </h1>
              <h1>Count</h1>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">
                ${subscriptions.flower.discountPrice.toFixed(2)}
              </h1>
              <h1>Price</h1>
            </div>
          </div>
        </div>

        {/* Premium Card */}
        <div className="w-full max-w-[300px] h-[330px] p-5 border-2 rounded-3xl border-[#E57836] bg-white">
          <div className="flex justify-end mb-8">
            <button
              className="cursor-pointer"
              onClick={() => handleOpenModal("premium")}
            >
              <BiPencil size={30} className="text-gray-700" />
            </button>
          </div>
          <img src={premium} alt="premium" className="size-16 mx-auto" />
          <h1 className="text-center text-2xl md:text-3xl font-bold mt-5">
            Premium
          </h1>
          <div className="flex justify-center text-center items-center gap-8 mt-5">
            <div>
              <div className="flex gap-4 items-center mb-2">
                <h1 className="text-sm font-bold">
                  Lomi: {subscriptions.premium.lomiCount}
                </h1>
                <h1 className="text-sm font-bold">
                  Flower: {subscriptions.premium.flowerCount}
                </h1>
              </div>
              <h1 className="text-xl md:text-2xl font-bold mt-2">
                ${subscriptions.premium.discountPrice.toFixed(2)}
              </h1>
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
        centered
        width={600}
        bodyStyle={{
          maxHeight: "600px", // Set a fixed height for the modal content
          overflowY: "auto",
          margin: 0,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Form
          form={lomiForm}
          layout="vertical"
          onFinish={(values) => handleSaveChanges("lomi", values)}
          className="mt-6 p-4"
        >
          {/* Bundle Toggle */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Is it a bundle?</span>
              <Switch
                checked={lomiFormValues.isBundle}
                onChange={(checked) => handleBundleToggle("lomi", checked)}
                className="bg-gray-400"
                style={{
                  backgroundColor: lomiFormValues.isBundle
                    ? "#52c41a"
                    : undefined,
                }}
              />
            </div>
          </div>

          {/* Bundle Fields */}
          {lomiFormValues.bundles.map((bundle, index) =>
            renderBundleFields("lomi", bundle, index, lomiFormValues)
          )}

          {/* Add Another Bundle Button */}
          {lomiFormValues.isBundle && (
            <div className="mb-6 text-center">
              <button
                type="button"
                onClick={() => addBundle("lomi")}
                className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-2 mx-auto"
              >
                <PlusOutlined />
                Add Another Bundle
              </button>
            </div>
          )}

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
        width={600}
        centered
        bodyStyle={{
          maxHeight: "600px", // Set a fixed height for the modal content
          overflowY: "auto",
          margin: 0,
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Form
          form={flowerForm}
          layout="vertical"
          onFinish={(values) => handleSaveChanges("flower", values)}
          className="mt-6 p-4"
        >
          {/* Bundle Toggle */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Is it a bundle?</span>
              <Switch
                checked={flowerFormValues.isBundle}
                onChange={(checked) => handleBundleToggle("flower", checked)}
                className="bg-gray-400"
                style={{
                  backgroundColor: flowerFormValues.isBundle
                    ? "#52c41a"
                    : undefined,
                }}
              />
            </div>
          </div>

          {/* Bundle Fields */}
          {flowerFormValues.bundles.map((bundle, index) =>
            renderBundleFields("flower", bundle, index, flowerFormValues)
          )}

          {/* Add Another Bundle Button */}
          {flowerFormValues.isBundle && (
            <div className="mb-6 text-center">
              <button
                type="button"
                onClick={() => addBundle("flower")}
                className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-2 mx-auto"
              >
                <PlusOutlined />
                Add Another Bundle
              </button>
            </div>
          )}

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
                    handleCountChange(
                      "premium",
                      premiumForm,
                      setPremiumFormValues,
                      false,
                      "lomiCount"
                    )
                  }
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">
                  {premiumFormValues.lomiCount}
                </span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange(
                      "premium",
                      premiumForm,
                      setPremiumFormValues,
                      true,
                      "lomiCount"
                    )
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
              <span className="text-lg font-semibold">
                {premiumFormValues.lomiCount}
              </span>
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
                    handleCountChange(
                      "premium",
                      premiumForm,
                      setPremiumFormValues,
                      false,
                      "flowerCount"
                    )
                  }
                >
                  <MinusOutlined size={16} />
                </button>
                <span className="px-2 py-[7px] bg-black text-white">
                  {premiumFormValues.flowerCount}
                </span>
                <button
                  type="button"
                  className="px-3 py-1 border hover:bg-gray-100"
                  onClick={() =>
                    handleCountChange(
                      "premium",
                      premiumForm,
                      setPremiumFormValues,
                      true,
                      "flowerCount"
                    )
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
              <span className="text-lg font-semibold">
                {premiumFormValues.flowerCount}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Original Price
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="originalPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={100}
                    step={1}
                    marks={{ 1: "$1", 100: "$100" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) =>
                      handleSliderChange(
                        "originalPrice",
                        value,
                        premiumForm,
                        setPremiumFormValues
                      )
                    }
                    value={premiumFormValues.originalPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">
                ${premiumFormValues.originalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Discount Price
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <Form.Item name="discountPrice" className="mb-0">
                  <Slider
                    min={1}
                    max={100}
                    step={1}
                    marks={{ 1: "$1", 100: "$100" }}
                    tooltip={{ formatter: (value) => `$${value.toFixed(2)}` }}
                    onChange={(value) =>
                      handleSliderChange(
                        "discountPrice",
                        value,
                        premiumForm,
                        setPremiumFormValues
                      )
                    }
                    value={premiumFormValues.discountPrice}
                  />
                </Form.Item>
              </div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold">
                ${premiumFormValues.discountPrice.toFixed(2)}
              </span>
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
        height={500}
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
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email!",
                },
              ]}
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
