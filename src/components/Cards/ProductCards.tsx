
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "../../components/index";
import { BookDemo } from "../../components/index";
import { arrow, DigitalAssetsicon, Inspectionicon, OperationPlatformUpdatedImg, Puzzleicon, Signalicon, Trainingicon, } from "../../assets/index"




const ProductCards: React.FC = () => {
  const array = [
    {
      icon: Inspectionicon,
      title: "Inspection" ,
      path: "/inspection"
      
    },
    {
      icon: DigitalAssetsicon,
      title: "Assets" ,
      path: "/assets"
    },
    {
      icon: Trainingicon,
      title: "Training" ,
      path: "/training"
    },
    {
      icon: Signalicon,
      title: "Sensors & IoT",
      path: "/monitoring"
    },
    {
      icon: Puzzleicon,
      title: "Integration",
      path: "/integrations"
    },

  ]
  const navigate = useNavigate();

  const handleCardClick = (path:string) => {
    navigate(path)
  }
  return (
    <section className="bg-gray-100 pl-20 pt-14 max-w-[100vw] ">
      <div className="  ">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 grid-rows-2  gap-4 w-full h-full">

          <Card
          onClick = {()=>handleCardClick("/platform")}
            title=" Workplace Operations Platform"
            description=" Everything teams need to work safely, meet higher standards, and
          improve every day."
            className="col-span-2 row-span-2 cursor-pointer"
            style={{ width: '600px', height: '350px' }}
            footerchildren={
              <div className="flex justify-between gap-4  mt-8 pl-4">
                <ul className=" space-y-2">
                  {array.map((item, index) => (
                    <li key={index} className="text-sm font-normal text-gray-800 hover:text-blue-800 hover:bg-gray-200 w-[300px] px-2 py-1 rounded-lg">
                      <Link to={item.path} className="flex items-center space-x-2 ">
                        <img className="h-4 w-4" src={item.icon} alt="icon" />
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="">
                  <img className="w-62 h-48" src={OperationPlatformUpdatedImg} alt="operations platform" />
                </div>
              </div>
            }
          >
          </Card>




          <Card
            title="Lone Worker"
            description="Protect remote workers in real-time."
            onClick={()=> handleCardClick("/lone-worker")}

          />
          <Card
            title="Marketplace"
            description="One-stop shop for workplace safety equipment."
            onClick={()=> handleCardClick("/safetyculture-marketplace")}
          />
          <Card
            title="Insurance"
            description="SafetyCulture Care, combining risk management,tech and insurance"
            onClick={()=> handleCardClick("/safetyculture-care")}
          />
          <Card
            title="HSEQ Documentation"
            description="SafetyDocs trusted workplace health, safety and quality documents"
            onClick={()=> handleCardClick("/safety-docs")}
          />

        </div>
        <div className="py-8">
        <BookDemo 
        image={arrow}/>
        </div>
       
      </div>
    </section>
  );
};
export default ProductCards;