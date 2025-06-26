import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { useSelector } from "react-redux";
import { Form } from "antd";
import { useEffect } from "react";
import CustomInput from "../../../utils/CustomInput";

const GeneralSettings = () => {
  const { user } = useSelector((state) => state.auth);
  const [form] = Form.useForm();
  useEffect(() => {
    if (user) {
      form.setFieldsValue({
        fullName: user?.fullName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
      });
    }
  }, [user, form]);
  return (
    <div className="w-full px-5">
      {/* Back Button and Title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center my-6">
          <Link to="/">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">General Settings</h1>
        </div>
      </div>

      {/* Profile Information */}
      <div className="w-full h-full max-w-xl mx-auto bg-white px-5 py-10 gap-8 border border-gray-700 mt-10">
        {/* Profile Picture */}
        <h1 className="text-xl text-gray-600 text-center mb-2">
          Profile Picture
        </h1>
        <img
          className="size-32 rounded-full mx-auto"
          src={`${imageBaseUrl}${user?.profileImage?.imageUrl}`}
          alt=""
        />

        {/* Personal Details */}
        <Form
          form={form}
          layout="vertical"
          className="w-full col-span-full md:col-span-9 space-y-6 mt-10"
        >
          {/* Full Name */}
          <Form.Item label="Full Name" name="fullName">
            <CustomInput placeholder="Enter your full name" />
          </Form.Item>
          {/* Email */}
          <Form.Item label="Email" name="email">
            <CustomInput placeholder="Enter your email" readOnly />
          </Form.Item>

          <Link to="/settings/edit-general-settings" className="flex justify-center">
            <button className="w-full px-8 py-3 bg-primary text-white rounded-lg">
              Edit Profile
            </button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default GeneralSettings;
