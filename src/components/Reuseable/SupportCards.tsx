import React from "react";
import {Card,  BookDemoButton, ColumnLinks} from "../index";
import {arrow, Community, Contactus, Helpcenter} from "../../assets/index"
import { useNavigate } from "react-router-dom";

const SupportCards: React.FC = () => {

const navigate = useNavigate();

const handleNavigation =(path:string) => {
  navigate(path)

}

  return (
    <div className="bg-gray-100  max-w-[100vw]">
      <div className="max-w-7xl mx-auto grid grid-cols-4 pl-10 pt-10 md:grid-cols-4  h-full">

        <Card
          headerchildren={
            <img className="h-6 w-6" src={Helpcenter} alt="" />
          }
          onClick={()=>handleNavigation("/safetyculture-help-center")}
          title="Help Center"
          description="Browse quick guide for the SafetyCulture platform"
          style={{ width: '300px', height: '350px' }}
        />


        <Card
          headerchildren={
            <img className="h-6 w-6" src={Contactus} alt="" />
          }
          onClick={()=>handleNavigation("/safetyculture-contact-us")}
          title="Contact Us"
          description="Call,chat or email with our friendly support team"
          style={{ width: '300px', height: '350px' }}
        />
        <Card
          headerchildren={
            <img className="h-6 w-6" src={Community} alt="" />
          }
          onClick={()=>handleNavigation("/safetyculture-community")}
          title="Community"
          description="Learn from peers, share expertise and keep connected to product news"
          style={{ width: '300px', height: '350px' }}
        />
        <div className={`bg-white p-6 w-[300px] h-[350px] rounded-xl border-2  border-white hover:border-blue-800  `}
        >
          <div className="flex items-center space-x-2">
          
            <ColumnLinks
            
              heading="Resources"
              links={['Blog', 'Certification', 'Digitize your forms', 'Developer Portal', 'Partner Program', 'Events and Webinars']}
              className="text-lg font-bold text-gray-800  "
              linkClassName="text-[16px] font-normal text-gray-800  rounded-lg hover:no-underline pl-2 block w-[250px] hover:bg-gray-100"
             
            />
          </div>
        </div>
        <div className="py-8">
                <BookDemoButton
                image={arrow}/>
                </div>
               
        
      </div>
    </div>
  )
}
export default SupportCards;