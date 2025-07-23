import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../utils/CustomButton";
import { Spin } from "antd";

// Mock data for privacy policy demonstration
const mockPrivacyPolicyData = {
  privacyPolicy: `
    <div className="privacy-policy-content">
      <h2>Privacy Policy</h2>
      <p>
        At Our Company, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our platform.
      </p>
      <h3>Information We Collect</h3>
      <p>
        We collect information you provide directly, such as your name, email address, and account details when you register or interact with our services. We also collect usage data, including IP addresses and browsing behavior, to improve our platform.
      </p>
      <h3>How We Use Your Information</h3>
      <ul>
        <li>To provide and maintain our services.</li>
        <li>To personalize your experience and deliver relevant content.</li>
        <li>To communicate with you, including sending service-related updates.</li>
        <li>To analyze usage and improve our platform's performance.</li>
      </ul>
      <h3>Data Sharing</h3>
      <p>
        We do not sell or share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or with your consent.
      </p>
      <h3>Data Security</h3>
      <p>
        We implement industry-standard security measures to protect your data. However, no system is completely secure, and we encourage you to use strong passwords and enable two-factor authentication.
      </p>
      <h3>Your Rights</h3>
      <p>
        You have the right to access, update, or delete your personal information. Contact us at <a href="mailto:privacy@company.com">privacy@company.com</a> to exercise these rights.
      </p>
      <h3>Contact Us</h3>
      <p>
        For questions about this Privacy Policy, reach out to us at <a href="mailto:privacy@company.com">privacy@company.com</a> or visit our website at <a href="https://www.company.com/privacy">www.company.com/privacy</a>.
      </p>
    </div>
  `,
};

const PrivacyPolicy = () => {
  // Use mock data instead of API call for demo purposes
  const responseData = mockPrivacyPolicyData;
  const isLoading = false;

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Spin />
      </div>
    );
  }
  return (
    <section className="w-full h-full px-5">
      <div className="flex justify-between items-center py-4 mb-4">
        <div className="flex gap-2 items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Privacy Policy</h1>
        </div>
        <Link to={"/settings/edit-privacy-policy"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>Edit</span>
          </CustomButton>
        </Link>
      </div>
      {/* Render mock data */}
      <div
        dangerouslySetInnerHTML={{ __html: responseData?.privacyPolicy }}
        className="bg-white p-5 rounded-lg"
      ></div>
    </section>
  );
};

export default PrivacyPolicy;
