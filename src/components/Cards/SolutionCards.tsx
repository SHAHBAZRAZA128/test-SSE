
import React from "react";
import Card from "./Card";
import BookDemo from "./BookDemo";

import FooterColumn from "../Footer/FooterColumn";
import {DigitalAssetsicon} from "../../assets/index"



const SolutionCard: React.FC = () => {
  const data = [
    { heading: "By Industry", links: ["Construction", "Manufacturing", "Facilities Management", "Hospatality", "Retail", "Transport & Logistics", "Mining"] },
    { heading: "By Buisness Need", links: ["Health & Safety Management (EHS)", "Risk Management and Compliance (GRC)", "Operational Excellence", "Environment & Sustainability (ESG)"] },

  ]
  return (
    <section className="bg-gray-100  max-w-[100vw] ">
      <div className="  ">
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-3   gap-6 w-full h-full">


          {data.map((column, index) => (
            <div className="bg-white shadow-md rounded-lg p-6 w-[330px] h-[400px] hover:shadow-lg transition duration-300 ">
              <div className="flex items-center space-x-2">
                <FooterColumn key={index}
                 heading={column.heading}
                  links={column.links}
                  className="text-lg font-bold text-gray-800" 
                  linkClassName = "text-sm font-normal text-gray-800 hover:no-underline" />
                  

              </div>
            </div>

          )
          )}
          
            <Card title="Enterprise"
              description="Scale with confidence and dedicated support"
              headerchildren={
                <img className="h-6 w-6" src={DigitalAssetsicon} alt="icon" />

              } 
              style={{ width: '330px', height: '400px' }}/>
          


          <BookDemo />
        </div>
      </div >
    </section>

  );
}

export default SolutionCard