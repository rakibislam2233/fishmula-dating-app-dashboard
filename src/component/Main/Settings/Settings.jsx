import { useState } from "react";
import { Link } from "react-router-dom";

const Settings = () => {
  const [activeItem, setActiveItem] = useState(0);

  const settingsItems = [
    {
      title: "General Settings",
      path: "/settings/general-settings",
    },
    {
      title: "Password Change",
      path: "/settings/password-change",
    },
    {
      title: "Onboarding Editor",
      path: "/settings/onboarding-editor",
    },
    {
      title: "Preferred Countries",
      path: "/settings/preferred-countries",
    },
    {
      title: "Support Mails",
      path: "/settings/support-mails",
    },
    {
      title: "About Us",
      path: "/settings/about-us",
    },
    {
      title: "Terms & Condition",
      path: "/settings/terms-conditions",
    },
    {
      title: "Privacy Policy",
      path: "/settings/privacy-policy",
    }
  ];

  const handleSettingClick = (title, index) => {
    setActiveItem(index);
    console.log(`Clicked on: ${title}`);
    // Add navigation logic here
  };

  return (
    <section className="w-full min-h-screen px-5 py-5">
      <div>
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-xl md:text-2xl text-gray-800 font-semibold">
            All Settings
          </h1>
        </div>

        <div className="space-y-5">
          {settingsItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => handleSettingClick(item.title, index)}
              className="w-full block"
            >
              <div
                className={`border border-gray-500 p-4 transition-all duration-200 cursor-pointer ${
                  activeItem === index ? "bg-[#FFFEED]" : "bg-white"
                }`}
                style={{
                  borderRadius: "0px",
                  minHeight: "60px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="w-full">
                  <h3 className={`font-normal text-base text-gray-800`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Settings;
