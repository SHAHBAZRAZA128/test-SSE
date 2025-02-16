import {
  InfoCard,
  AreaGraph,
  SuccessBarChart,
  Alerts,
  Navbar,
  DonutChart,
  HeatmapChart,
  TotalEntityBarChart,
  PendingEntityBarChart,
  ActiveEntityBarChart,
  InActiveEntityBarChart,
  Header,
} from "../Components";
import ReferalBarChart from "../Components/Charts/ReferalBarChat";

function Dashboard() {
  const infoCards = [
    {
      title: "Total Entities",
      value: "12,345",
      percentage: "38.6",
      className: "bg-[#F9ECE3]/80",
      ChartComponent: TotalEntityBarChart,
    },
    {
      title: "Pending Entities",
      value: "125",
      percentage: "22",
      className: "bg-[#F6FFFE]",
      ChartComponent: PendingEntityBarChart,
    },
    {
      title: "Active Entities",
      value: "30",
      percentage: "30",
      className: "bg-[#FFFFFF66]",
      ChartComponent: ActiveEntityBarChart,
    },
    {
      title: "In-active Entities",
      value: "8.1",
      percentage: "8",
      className: "bg-[#E3F4FF]",
      ChartComponent: InActiveEntityBarChart,
    },
  ];

  return (
    <div className="flex font-latoo">
      <Navbar />
      <div className="bg-[#E0E1E2] desktop:ml-[230px] laptop:ml-[190px] w-full max-w-[1600px] mobile:w-full gap-[10px] pr-6 flex flex-col">
        <Header />
        <Alerts />
        <h1 className="relative pl-2 tablet:top-12 text-[24px] tablet:text-[20px] mobile:top-[4%] mobile:left-[2%] mobile:text-[18px] tablet:left-11">
          Renewal Status
        </h1>

        <div className="flex mobile:flex-col tablet:flex tablet:ml-10 gap-4 mt-6 mobile:mt-20 mobile:ml-5">
          {/* Info Cards - Dynamically Rendered */}
          <div className="flex gap-4">
            {infoCards.slice(0, 2).map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                value={card.value}
                percentage={card.percentage}
                className={card.className}
              >
                <card.ChartComponent />
              </InfoCard>
            ))}
          </div>
          <div className="flex gap-4">
            {infoCards.slice(2, 4).map((card, index) => (
              <InfoCard
                key={index}
                title={card.title}
                value={card.value}
                percentage={card.percentage}
                className={card.className}
              >
                <card.ChartComponent />
              </InfoCard>
            ))}
          </div>
        </div>

        <div className="flex gap-4 my-4 laptop:pl-20 laptop:flex-col mobile:flex-col tablet:ml-10">
          <AreaGraph />
          <ReferalBarChart />
        </div>

        <div className="laptop:flex-col laptop:pl-20 flex gap-4 mobile:flex-col tablet:ml-10">
          <HeatmapChart />
          <DonutChart />
        </div>

        <div className="laptop:w-[600px] laptop:mt-10 laptop:pl-20 mt-[-130px] mobile:mt-[10px] tablet:ml-10 tablet:mt-[-10px]">
          <SuccessBarChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
