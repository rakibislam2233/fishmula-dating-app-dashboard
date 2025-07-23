
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../../utils/CustomButton";
// Mock data for safety tips demonstration
const mockSafetyTipsData = {
  safetyTips: `
    <div className="safety-tips-content">
      <h2>Safety Tips</h2>
      <p>
        Your safety is our priority. Follow these guidelines to ensure a secure and pleasant experience with our platform.
      </p>
      <h3>Protect Your Personal Information</h3>
      <p>
        Never share sensitive information such as passwords, bank details, or personal identification numbers with anyone. Use strong, unique passwords for your account.
      </p>
      <h3>Secure Your Account</h3>
      <ul>
        <li>Enable two-factor authentication (2FA) to add an extra layer of security.</li>
        <li>Regularly update your password and avoid reusing passwords across platforms.</li>
        <li>Be cautious of phishing attempts and only click links from trusted sources.</li>
      </ul>
      <h3>Safe Interactions</h3>
      <p>
        When interacting with others on our platform, verify the identity of users before sharing personal details. Report any suspicious activity to our support team immediately.
      </p>
      <h3>Contact Support</h3>
      <p>
        If you encounter any issues or have safety concerns, contact our support team at <a href="mailto:support@company.com">support@company.com</a> or visit our help center at <a href="https://www.company.com/help">www.company.com/help</a>.
      </p>
    </div>
  `
};

const SafetyTips = () => {
  // Use mock data instead of API call for demo purposes
  const responseData = mockSafetyTipsData;

  return (
    <section className="w-full h-full px-5 pb-5">
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4 items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Safety Tips</h1>
        </div>
        <Link to={"/settings/edit-safety-tips"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>Edit</span>
          </CustomButton>
        </Link>
      </div>
      {/* Render mock data */}
      <div dangerouslySetInnerHTML={{ __html: responseData?.safetyTips }} className="bg-white p-5 rounded-lg"></div>
    </section>
  );
};

export default SafetyTips;
