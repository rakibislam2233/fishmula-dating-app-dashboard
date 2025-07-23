
import { IoChevronBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import CustomButton from "../../../utils/CustomButton";
// Mock data for demonstration
const mockAboutUsData = {
  aboutUs: `
    <div className="about-us-content">
      <h2>Welcome to Our Company</h2>
      <p>
        We are a passionate team dedicated to delivering innovative solutions that empower businesses and individuals. Founded in 2020, our mission is to create cutting-edge technology that makes a difference in the world.
      </p>
      <h3>Our Vision</h3>
      <p>
        To be a global leader in technology innovation, fostering a community of creativity and collaboration.
      </p>
      <h3>Our Values</h3>
      <ul>
        <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
        <li>Innovation: We embrace change and creativity to deliver the best solutions.</li>
        <li>Community: We believe in building strong, supportive communities.</li>
      </ul>
      <h3>Contact Us</h3>
      <p>
        Reach out to us at <a href="mailto:info@company.com">info@company.com</a> or visit our website at <a href="https://www.company.com">www.company.com</a>.
      </p>
    </div>
  `
};

const AboutUs = () => {
  // Use mock data instead of API call for demo purposes
  const responseData = mockAboutUsData;

  return (
    <section className="w-full h-full px-5 pb-5">
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-4 items-center">
          <Link to="/settings">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">About Us</h1>
        </div>
        <Link to={"/settings/edit-about-us"}>
          <CustomButton border>
            <TbEdit className="size-5" />
            <span>Edit</span>
          </CustomButton>
        </Link>
      </div>
      {/* Render mock data */}
      <div dangerouslySetInnerHTML={{ __html: responseData?.aboutUs }} className="bg-white p-5 rounded-lg"></div>
    </section>
  );
};

export default AboutUs;