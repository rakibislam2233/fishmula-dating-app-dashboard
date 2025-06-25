import { BiPencil } from "react-icons/bi";
import { FaMars, FaVenus } from "react-icons/fa6";

const PerkManagement = () => {
  return (
    <section className="w-full flex flex-wrap gap-4">
      {/* Male Card */}
      <div className="w-full h-60 bg-white border-2 border-blue-200 rounded-lg p-6 max-w-56 relative">
        <div className="flex justify-end mb-5">
          <button className="cursor-pointer">
            <BiPencil size={30} className="text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[75px] bg-[#FEF7DB] rounded-full border-2 border-primary flex items-center justify-center mb-3">
            <FaMars className="size-7 text-[#93D6F4]" />
          </div>
          <span className="text-center text-xl  font-semibold mt-2 ">MALE</span>
        </div>
      </div>
      {/* Female Card */}
      <div className="w-full h-60 bg-white border-2 border-blue-200 rounded-lg p-6 max-w-56 relative">
        <div className="flex justify-end mb-5">
          <button className="cursor-pointer">
            <BiPencil size={30} className="text-gray-700" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="size-[75px] bg-[#FEEAEF] rounded-full border-2 border-[#EF687E] flex items-center justify-center mb-3">
            <FaVenus className="size-7 text-[#F28598]" />
          </div>
          <span className="text-center text-xl  font-semibold mt-2 ">FEMALE</span>
        </div>
      </div>
    </section>
  );
};

export default PerkManagement;
