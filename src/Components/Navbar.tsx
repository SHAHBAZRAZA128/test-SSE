import {
  Add_Entity_icon,
  Client_icon,
  CompanyName,
  Dashboard_icon,
  Entities_icon,
  Home_icon,
  Notification_icon,
  Reports_icon,
} from "../assets";

function Navbar() {
  return (
    <div className="pl-[24.5px] w-[233.5px]  bg-[#E0E1E2] pt-10">
      <img className="mb-8" src={CompanyName} alt="company" />
      <div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img className="w-[30px] h-[30px]" src={Home_icon} alt="home_icon" />
          <span>Home</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Dashboard_icon}
            alt="dashboard_icon"
          />
          <span>Dashboard</span>
        </div>
        <div className="flex gap-[10px] p-[10px]  w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Client_icon}
            alt="client_icon"
          />
          <span>Client</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Entities_icon}
            alt="entities_icon"
          />
          <span>Entities</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Add_Entity_icon}
            alt="add_entities_icon"
          />
          <span>Add Entities</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Notification_icon}
            alt="calendar_icon"
          />
          <span>Calendar</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Notification_icon}
            alt="notification_icon"
          />
          <span>Notification</span>
        </div>
        <div className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]">
          <img
            className="w-[30px] h-[30px]"
            src={Reports_icon}
            alt="reports_icon"
          />
          <span>Reports</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
