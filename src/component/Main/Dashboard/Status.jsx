import { AiOutlineUser } from "react-icons/ai";
import lomi from '../../../assets/logo/logo.png';
import { CiSliderHorizontal } from "react-icons/ci";
import { LuBanknote } from "react-icons/lu";
// import { useGetDashboardDataQuery } from "../../../redux/features/dashboard/dashboardApi";

const Status = () => {
  // Demo data to replace API response
  const demoData = {
    totalUsers: 25,
    activeUsers: 18,
    totalAdminLogin: 10,
    revenue: 50,
    lomiAndFlowerSold: 30,
  };

  // Uncomment this when API integration is ready
  // const { data: responseData } = useGetDashboardDataQuery(undefined, {
  //   refetchOnMountOrArgChange: true,
  //   refetchOnFocus: true,
  //   refetchOnReconnect: true,
  // });

  return (
    <div className="w-full space-y-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl md:text-2xl text-gray-600 notranslate">
          Overview
        </h1>
        <button className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3">
          <CiSliderHorizontal className="size-6" />
          Filter
        </button>
      </div>
      <div className="w-full flex flex-col md:flex-row flex-wrap lg:flex-nowrap gap-8 mb-10">
        {/* Total Users */}
        <div className="w-full md:max-w-96 min-h-36 flex items-center gap-5 p-5 justify-between rounded-xl bg-[#FEFEFE]">
          <div className="space-y-2">
            <h1 className="font-semibold text-[#797D8C]">Total Users</h1>
            <h1 className="text-xl md:text-2xl font-bold text-[#04103B] notranslate">
              {demoData.totalUsers} k
            </h1>
          </div>
          <AiOutlineUser className="size-8 text-gray-500" />
        </div>
        {/* Active Users */}
        <div className="w-full md:max-w-96 min-h-36 flex items-center gap-5 p-5 justify-between rounded-xl bg-[#FEFEFE]">
          <div className="space-y-2">
            <h1 className="font-semibold text-[#797D8C]">Active Users</h1>
            <h1 className="text-xl md:text-2xl font-bold text-[#04103B] notranslate">
              {demoData.activeUsers} k
            </h1>
          </div>
          <AiOutlineUser className="size-8 text-gray-500" />
        </div>
        {/* Total Admin Login */}
        <div className="w-full md:max-w-96 min-h-36 flex items-center gap-5 p-5 justify-between rounded-xl bg-[#FEFEFE]">
          <div className="space-y-2">
            <h1 className="font-semibold text-[#797D8C]">Total Admin Login</h1>
            <h1 className="text-xl md:text-2xl font-bold text-[#04103B] notranslate">
              {demoData.totalAdminLogin}
            </h1>
          </div>
          <AiOutlineUser className="size-8 text-gray-500" />
        </div>
        {/* Revenue */}
        <div className="w-full md:max-w-96 min-h-36 flex items-center gap-5 p-5 justify-between rounded-xl bg-[#FEFEFE]">
          <div className="space-y-2">
            <h1 className="font-semibold text-[#797D8C]">Revenue</h1>
            <h1 className="text-xl md:text-2xl font-bold text-[#04103B] notranslate">
              {demoData.revenue} k
            </h1>
          </div>
          <LuBanknote className="size-8 text-gray-500" />
        </div>
        {/* Lomi and Flower Sold */}
        <div className="w-full md:max-w-96 min-h-36 flex items-center gap-5 p-5 justify-between rounded-xl bg-[#FEFEFE]">
          <div className="space-y-2">
            <h1 className="font-semibold text-[#797D8C]">Lomi and Flower Sold</h1>
            <h1 className="text-xl md:text-2xl font-bold text-[#04103B] notranslate">
              {demoData.lomiAndFlowerSold} k
            </h1>
          </div>
          <img src={lomi} alt="Lomi and Flower Sold" className="w-11 grayscale opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default Status;