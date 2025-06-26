import Status from "../../component/Main/Dashboard/Status";
import Charts from "../../component/Main/Dashboard/Charts";
import RecentUsers from "../../component/Main/Dashboard/TopUsers";
const DashboardHome = () => {
  return (
    <section>
      <div className="w-full px-5 py-5 min-h-screen bg-[#DFDFDF]">
        <Status />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-10 ">
          <Charts />
          <RecentUsers />
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
