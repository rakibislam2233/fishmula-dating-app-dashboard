import { useState, useEffect } from "react";
import { ConfigProvider, Spin, Table, Tooltip } from "antd";
import { FaBan, FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  useGetAllUsersQuery,
  useUpdateUserStatusMutation,
} from "../../../redux/features/user/userApi";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { CiSliderHorizontal } from "react-icons/ci";
import { BiSearch } from "react-icons/bi";
import UserCard from "./UserCard";

const AllUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  const { data: responseData, isLoading } = useGetAllUsersQuery({
    page: currentPage,
    limit: 10,
  });
  const [userStatusChange] = useUpdateUserStatusMutation();

  useEffect(() => {
    if (responseData?.attributes?.results) {
      const { results, totalResults } = responseData.attributes;
      setAllUsers(results);
      setTotalResult(totalResults);
    }
  }, [responseData]);

  const handlePageChange = (page) => setCurrentPage(page)
  let content = null;
  if(isLoading) {
    content = (
      <div className="w-full flex justify-center py-10">
        <Spin />
      </div>
    );
  }else if(allUsers?.length === 0){
    content = <h1>No Users Found</h1>
  }else if(allUsers?.length > 0){
    content = (
      <>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 pb-10">
          {allUsers?.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
        <div className="w-full flex items-center justify-center gap-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(totalResult / 10)}
            className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3"
          >
            Next
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="w-full min-h-screen px-5 space-y-5">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-xl md:text-2xl text-gray-800 notranslate font-semibold">
          User Management
        </h1>
        <div className="flex items-center gap-3">
          <div className="bg-white flex items-center gap-3 border border-primary px-5 py-3 rounded-full">
            <BiSearch className="size-5 text-primary" />
            <input
            type="text"
            placeholder="Search"
            className="w-full outline-none"
          />
          </div>
          <button className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3">
            <CiSliderHorizontal className="size-6" />
            Filter
          </button>
        </div>
      </div>
      {content}
    </section>
  );
};

export default AllUsers;
