import moment from "moment";
import { imageBaseUrl } from "../../../config/imageBaseUrl";

const UserCard = ({ user }) => {
  const { fullName, email, profileImage, createdAt, phoneNumber } = user;

  return (
    <div className="w-full p-4 border border-[#777777] bg-white rounded-2xl space-y-5">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <img
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
        <button className="px-5 py-2 border border-rose-500 text-rose-500 rounded-2xl">
          Suspend
        </button>
        <button className="px-5 py-2 border border-rose-500 text-rose-500 rounded-2xl">
          Block
        </button>
      </div>
    </div>
  );
};

export default UserCard;
