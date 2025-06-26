import { Form } from "antd";
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import CustomInput from "../../../utils/CustomInput";

const PasswordSettings = () => {
  return (
    <div className="w-full px-5">
      {/* Back Button and Title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center my-6">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Password Settings</h1>
        </div>
      </div>
      <div className="w-full h-full max-w-xl mx-auto bg-white px-5 py-10 border border-gray-700 gap-8 mt-10">
        <Form layout="vertical" className="w-full space-y-6">
          {/* Current Password */}
          <Form.Item label="Old Password" name="oldPassword">
            <CustomInput
              type="password"
              placeholder="Enter your old password"
              isPassword
            />
          </Form.Item>
          {/* New Password */}
          <Form.Item label="New Password" name="newPassword">
            <CustomInput
              type="password"
              placeholder="Enter your new password"
              isPassword
            />
          </Form.Item>
          {/* Confirm New Password */}
          <Form.Item label="Confirm New Password" name="confirmNewPassword">
            <CustomInput
              type="password"
              placeholder="Confirm your new password"
              isPassword
            />
          </Form.Item>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button className="w-full px-8 py-3 bg-primary text-white rounded-lg">
             
             Save Changes
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default PasswordSettings;
