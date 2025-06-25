import Status from "../../component/Main/Dashboard/Status";
import Charts from "../../component/Main/Dashboard/Charts";
import RecentUsers from "../../component/Main/Dashboard/RecentTransactions";
const DashboardHome = () => {
  return (
    <section>
      <div className="w-full px-5 min-h-screen  space-y-5 bg-[#DFDFDF]">
        <Status />
        <Charts />
        <RecentUsers/>
      </div>
    </section>
  );
};

export default DashboardHome;
