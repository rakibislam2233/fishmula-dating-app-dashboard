import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import PerkManagement from "./PerkManagement";
import SaleManagement from "./SaleManagement";

const LomiFlowerManagement = () => {
  const [activeTab, setActiveTab] = useState("perk_management");
  const handleOpenModal = (type) => {
    console.log(type);
  };
  return (
    <section className="w-full px-5">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center py-[19px] mb-4">
        <h1 className="text-2xl font-semibold">LOMI Flower Management</h1>
        <button
          onClick={() => handleOpenModal("mail")}
          className="px-8 py-3 bg-primary text-white flex justify-center items-center gap-1 rounded-md text-sm"
        >
          <FaPlus />
          Send Mail to All Users
        </button>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setActiveTab("perk_management")}
          className={`text-xl text-gray-900 font-semibold ${
            activeTab === "perk_management" ? "border-b-2 border-gray-900" : ""
          }`}
        >
          Perk Management
        </button>
        <button
          onClick={() => setActiveTab("sale_management")}
          className={`text-xl text-gray-900 font-semibold ${
            activeTab === "sale_management" ? "border-b-2 border-gray-900" : ""
          }`}
        >
          Sale Management
        </button>
      </div>
      <div className="mt-5">
      {activeTab === "perk_management" && <PerkManagement />}
      {activeTab === "sale_management" && <SaleManagement />}
      </div>
    </section>
  );
};

export default LomiFlowerManagement;
