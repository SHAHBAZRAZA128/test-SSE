import { useState } from "react";
import {
  Add_Entity_icon,
  Client_icon,
  CompanyName,
  Dashboard_icon,
  Entities_icon,
  hamburger_icon,
  Home_icon,
  Notification_icon,
  Reports_icon,
} from "../assets";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const showNavbar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home", icon: Home_icon },
    { label: "Dashboard", icon: Dashboard_icon },
    { label: "Client", icon: Client_icon },
    { label: "Entities", icon: Entities_icon },
    { label: "Add Entities", icon: Add_Entity_icon },
    { label: "Calendar", icon: Notification_icon },
    { label: "Notification", icon: Notification_icon },
    { label: "Reports", icon: Reports_icon },
  ];

  return (
    <div>
      {!isOpen && (
        <div className="desktop:hidden laptop:hidden tablet:left-10 tablet:top-11 absolute top-4 left-4 z-50">
          <img
            className="cursor-pointer w-[20px] h-[20px]"
            src={hamburger_icon}
            alt="hamburger_icon"
            onClick={showNavbar}
          />
        </div>
      )}
      <div
        className={`fixed top-0 left-0 h-full pl-[24.5px] laptop:w-[190px] w-[233.5px] bg-[#E0E1E2] pt-10 transform
      ${isOpen ? "translate-x-0" : "-translate-x-full"}    
     desktop:translate-x-0 desktop:transform-none desktop:transition-none 
     laptop:translate-x-0 laptop:transform-none laptop:transition-none 
      transition-transform duration-300 ease-in-out z-40 mobile:overflow-y-scroll`}
      >
        <button
          onClick={showNavbar}
          className="absolute top-3 left-[210px] desktop:hidden laptop:hidden"
        >
          ✖
        </button>
        <img className="mb-8" src={CompanyName} alt="company" />
        <div>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-[10px] p-[10px] w-[219px] h-[50px] text-[16px] leading-[20px]"
            >
              <img className="w-[30px] h-[30px]" src={item.icon} alt={item.label.toLowerCase() + "_icon"} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
