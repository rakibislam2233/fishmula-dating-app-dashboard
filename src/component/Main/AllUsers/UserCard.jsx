/* eslint-disable react/prop-types */
import moment from "moment";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { useState } from "react";
import { Modal } from "antd";

// eslint-disable-next-line react/prop-types
const UserCard = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openModalType, setOpenModalType] = useState("block");
  // eslint-disable-next-line react/prop-types
  const { fullName, email, profileImage, createdAt, phoneNumber } = user;

  const handleOpenModal = (type) => {
    setOpenModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full p-4 border border-[#777777] bg-white rounded-lg space-y-5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            // eslint-disable-next-line react/prop-types
            src={`${imageBaseUrl}${profileImage?.imageUrl}`}
            alt={fullName}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h1>User Name</h1>
            <h1 className="font-medium">{fullName}</h1>
          </div>
        </div>
        <div>
          <h1>Joining Date</h1>
          <h1 className="font-medium">
            {moment(createdAt).format("DD-MM-YYYY")}
          </h1>
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div>
          <h1>Telephone Number</h1>
          <h1 className="font-medium">{phoneNumber}</h1>
        </div>
        <div>
          <h1>Email</h1>
          <h1 className="font-medium">{email}</h1>
        </div>
      </div>
      <div className="flex justify-end items-center gap-5">
        <button
          onClick={() => handleOpenModal("suspend")}
          className="px-5 py-2 border border-rose-500 text-rose-500 rounded-lg"
        >
          Suspend
        </button>
        <button
          onClick={() => handleOpenModal("block")}
          className="px-5 py-2 border border-rose-500 text-rose-500 rounded-lg"
        >
          Block
        </button>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        title={openModalType === "block" ? "Block User" : "Suspend User"}
      >
        <div className="w-full border p-2">
          <img
            src={`${imageBaseUrl}${profileImage?.imageUrl}`}
            className="w-full h-56"
            alt="user"
          />
          <div className="space-y-2 py-5 font-semibold text-gray-800">
            <h1>User Name : {fullName}</h1>
            {/* user email */}
            <h1>Email : {email}</h1>
            {/* user phone number */}
            <h1>Joining Date : {moment(createdAt).format("DD-MM-YYYY")}</h1>
          </div>
        </div>
        <div className="flex justify-center mt-8 items-center gap-5">
          <button onClick={() => setIsModalOpen(false)} className="px-5 py-2 border border-gray-500 text-gray-500 rounded-md">Go Back</button>
          <button className="px-8 py-2 border border-rose-500 text-rose-500 rounded-md">{openModalType === "block" ? "Block" : "Suspend"}</button>
        </div>
      </Modal>
    </div>
  );
};

export default UserCard;
