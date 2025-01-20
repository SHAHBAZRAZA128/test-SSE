import React from "react";
import Card from "./Card";
import FooterColumn from "../Footer/FooterColumn";
import BookDemo from "./BookDemo";
import {DigitalAssetsicon} from "../../assets/index"


const SupportCards: React.FC = () => {



  return (
    <div className="bg-gray-100  max-w-[100vw]">
      <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4   gap-6 w-full h-full">

        <Card
          headerchildren={
            <img className="h-6 w-6" src={DigitalAssetsicon} alt="" />
          }
          title="Help Center"
          description="Browse quick guide for the SafetyCulture platform"
          style={{ width: '300px', height: '400px' }}
        />


        <Card
          headerchildren={
            <img className="h-6 w-6" src={DigitalAssetsicon} alt="" />
          }
          title="Contact Us"
          description="Call,chat or email with our friendly support team"
          style={{ width: '300px', height: '400px' }}
        />
        <Card
          headerchildren={
            <img className="h-6 w-6" src={DigitalAssetsicon} alt="" />
          }
          title="Community"
          description="Learn from peers, share expertise and keep connected to product news"
          style={{ width: '300px', height: '400px' }}
        />
        <div className="bg-white shadow-md rounded-lg p-6 w-[330px] h-[400px] hover:shadow-lg transition duration-300 ">
          <div className="flex items-center space-x-2">
            <FooterColumn
              heading="Resources"
              links={['Blog', 'Certification', 'Digitize your forms', 'Developer Portal', 'Partner Program', 'Events and Webinars']}
              className="text-lg font-bold text-gray-800 ml-4 "
              linkClassName="text-sm font-normal text-gray-800 hover:no-underline"
              
            />
          </div>
        </div>
        <BookDemo />
      </div>
    </div>
  )
}
export default SupportCards;