import { bell_icon, Search_icon, Signin_icon } from "../assets";

import {
  InfoCard,
  AreaGraph,
  SuccessBarChart,
  Alerts,
  Navbar,
  DonutChart,
  HeatmapChart,
} from "../Components";
import ReferalBarChart from "../Components/ReferalBarChat";

function Dashboard() {
  return (
    <div className="flex  font-latoo">
      <Navbar />
      <div className=" bg-[#E0E1E2] w-[1600px] gap-[10px] pr-6 flex flex-col">
        <div className="flex justify-between items-center mt-10">
          <h1>Dashboard</h1>

          <div className="flex h-[30px]">
            <button className="w-[100px] bg-[#FF0000] text-white rounded-xl">
              Add Entity
            </button>
            <img
              className="w-[15px] h-[15px] relative left-5 top-2"
              src={Search_icon}
              alt="search_icon"
            />
            <input
              placeholder="Type here.."
              className="w-[334px] rounded-xl px-6"
              type="text"
            ></input>
            <div className="flex pl-3">
              <img
                className="w-[24px] h-[24px]"
                src={bell_icon}
                alt="bell_icon"
              />
              <img
                className="w-[24px] h-[24px]"
                src={Signin_icon}
                alt="signin_icon"
              />
              <span>Sign In</span>
            </div>
          </div>
        </div>
        <Alerts />

        <div className="flex gap-4 mt-6">
          <InfoCard
            title="Total Entities"
            value="12,345"
            percentage="38.6"
            chartData={[40, 20, 30]}
            type="bar"
            color="#EA9010"
            className="bg-[#F9ECE3CC]"
          />
          <InfoCard
            title="Pending Entities"
            value="125"
            percentage="22"
            chartData={[0, 150, 50, 130]}
            type="area"
            color="
#00D9C0"
className="bg-[#F6FFFE]"
          />
          <InfoCard
            title="Active Entities"
            value="30"
            percentage="30"
            chartData={[100, 190, 80, 250, 50]}
            type="area"
            color="
#EA9010"
className="bg-[#FFFFFF66]"
          />
          <InfoCard
            title="In-active Entities"
            value="8.1"
            percentage="8"
            chartData={[6, 4, 10]}
            type="bar"
            color="
#4AB7FF"
className="bg-[#E3F4FF]"
          />
        </div>
        <div className="flex gap-4 my-4">
          <AreaGraph />
          <ReferalBarChart />
        </div>

        <div className="flex gap-4 ">
          <HeatmapChart />
          <DonutChart />
        </div>
        <div className="mt-[-130px]">
          <SuccessBarChart />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
