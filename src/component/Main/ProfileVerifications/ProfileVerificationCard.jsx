/* eslint-disable react/prop-types */
import { Modal } from "antd";
import moment from "moment";
import { useState } from "react";
import { imageBaseUrl } from "../../../config/imageBaseUrl";

// eslint-disable-next-line react/prop-types
const ProfileVerificationCard = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { fullName, email, profileImage, createdAt } = user;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
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
          <h1>Email</h1>
          <h1 className="font-medium">{email}</h1>
        </div>
      </div>
      <div className="flex justify-end items-center gap-5">
        <button className="px-5 py-2 bg-blue-500 text-white rounded-lg">
          Verify
        </button>
        <button
          onClick={handleOpenModal}
          className="px-5 py-2  bg-primary rounded-lg"
        >
          View Media
        </button>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title="Media"
      >
        <img
          src={`${imageBaseUrl}${profileImage?.imageUrl}`}
          alt={fullName}
          className="w-full h-96 object-cover"
        />
        <div className="flex justify-center mt-5 items-center gap-5">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-5 py-2 border border-gray-800 text-gray-800 rounded-lg"
          >
            Go Back
          </button>
          <button className="px-8 py-2 bg-blue-500 text-white rounded-lg">
            Verify
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileVerificationCard;
