import { Dip_icon, Inventory_icon, Social_icon, SeeAll_icon } from "../assets";
import { AlertCards } from "../Components";

function Alerts() {
  const alertCardsData = [
    {
      img: Dip_icon,
      title: "Conversion Dip",
      description:
        "Conversion rates have dropped significantly. Investigate and act now.",
    },
    {
      img: Inventory_icon,
      title: "Low Inventory",
      description: "Popular product running low. Restock ASAP.",
    },
    {
      img: Social_icon,
      title: "Social Buzz",
      description:
        "Brand mentions surging on social media. Engage with customers.",
    },
  ];

  const recentActivityData = [
    {
      title: "Abdullah and Co. LLC",
      description: "Annual report for wind has been completed.",
      date: "6/5/2023",
    },
    {
      title: "Criss Co. LLC",
      description: "Annual report for wind has been completed.",
      date: "6/5/2023",
    },
    {
      title: "Abdullah and Co. LLC",
      description: "Annual report for wind has been completed.",
      date: "6/5/2023",
    },
  ];

  return (
    <aside className="absolute right-6 top-20 bg-[#F8F9FA] w-64 px-6 mt-4 hidden desktop:block">
      <h1 className="py-6 text-[24px] font-semibold">Alert</h1>
      {alertCardsData.map((data, index) => (
        <AlertCards
          key={index}
          img={data.img}
          title={data.title}
          description={data.description}
        />
      ))}
      <img className="cursor-pointer pl-40 pb-4" src={SeeAll_icon} alt="seeAll" />

      <div className="space-x-2">
        <button className="bg-redOrange-gradient px-4 py-2 text-[12px] rounded-xl">
          Reminder
        </button>
        <button className="bg-brownYellow-gradient px-4 py-2 text-[12px] rounded-xl">
          Pending Events
        </button>
      </div>

      <h1 className="py-6 text-[24px] font-semibold">Recent Activity</h1>
      {recentActivityData.map((activity, index) => (
        <AlertCards
          key={index}
          title={activity.title}
          description={activity.description}
          date={activity.date}
          className="text-[14px]"
        />
      ))}
      <img className="cursor-pointer pl-40 pb-4" src={SeeAll_icon} alt="seeAll" />
    </aside>
  );
}

export default Alerts;
