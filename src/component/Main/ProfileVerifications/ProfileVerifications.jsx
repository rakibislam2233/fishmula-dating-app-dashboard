import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { Spin } from "antd";
import ProfileVerificationCard from "./ProfileVerificationCard";
// import { useGetAllUsersQuery } from "../../../redux/features/user/userApi";
import { CiSliderHorizontal } from "react-icons/ci";

const ProfileVerifications = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allUsers, setAllUsers] = useState([]);
  const [totalResult, setTotalResult] = useState(0);

  // Demo data to replace API response, excluding status field
  const demoData = {
    attributes: {
      results: [
        { id: 1, fullName: "John Doe", email: "john@example.com" },
        { id: 2, fullName: "Jane Smith", email: "jane@example.com" },
        { id: 3, fullName: "Alex Johnson", email: "alex@example.com" },
        { id: 4, fullName: "Emily Davis", email: "emily@example.com" },
        { id: 5, fullName: "Michael Brown", email: "michael@example.com" },
        { id: 6, fullName: "Sarah Wilson", email: "sarah@example.com" },
        { id: 7, fullName: "David Lee", email: "david@example.com" },
        { id: 8, fullName: "Laura Adams", email: "laura@example.com" },
        { id: 9, fullName: "Chris Taylor", email: "chris@example.com" },
        { id: 10, fullName: "Anna White", email: "anna@example.com" },
        { id: 11, fullName: "Tom Harris", email: "tom@example.com" },
        { id: 12, fullName: "Lisa Clark", email: "lisa@example.com" },
      ],
      totalResults: 20, // Simulating 20 total users for pagination
    },
  };

  // Uncomment this when API integration is ready
  // const { data: responseData, isLoading } = useGetAllUsersQuery({
  //   page: currentPage,
  //   limit: 12,
  // });

  const isLoading = false; // Simulate no loading state for demo data

  useEffect(() => {
    if (demoData?.attributes?.results) {
      const { results, totalResults } = demoData.attributes;
      setAllUsers(results);
      setTotalResult(totalResults);
    }
  }, [currentPage]);

  const handlePageChange = (page) => setCurrentPage(page);

  // Function to get the first word of a section title


  let content = null;
  if (isLoading) {
    content = (
      <div className="w-full flex justify-center py-10">
        <Spin />
      </div>
    );
  } else if (allUsers?.length === 0) {
    content = <h1>No Users Found</h1>;
  } else if (allUsers?.length > 0) {
    content = (
      <>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 pb-10">
          {allUsers?.map((user) => (
            <ProfileVerificationCard key={user.id} user={user} />
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
            disabled={currentPage === Math.ceil(totalResult / 12)}
            className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3"
          >
            Next
          </button>
        </div>
      </>
    );
  }

  return (
    <section className="w-full min-h-screen px-5 py-5">
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-xl md:text-2xl text-gray-800 notranslate font-semibold">
          Profile Verifications List
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

export default ProfileVerifications;