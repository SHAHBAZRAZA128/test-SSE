
import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import BookDemo from "./BookDemo";
import {DigitalAssetsicon ,  OperationPlatformUpdatedImg} from "../../assets/index"




const ProductCards: React.FC = () => {
  const array = ["Inspection", "Assets", "Training", "Sensors & IoT", "Integration"]
  return (
    <section className="bg-gray-100  max-w-[100vw] ">
      <div className="  ">
        <div className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 grid-rows-2  gap-6 w-full h-full">
          <Card
            title=" Workplace Operations Platform"
            description=" Everything teams need to work safely, meet higher standards, and
                improve every day."
            className="col-span-2 row-span-2 "
            style={{ width: '600px', height: '350px' }}
            >
            <div className="flex flex-col gap-4  mt-4">
              <ul className="space-y-4 ">
                {array.map((item, index) => (
                  <li key={index} className="text-sm font-normal text-gray-800">
                    <Link to="/" className="flex items-center space-x-2">
                      <img className="h-4 w-4" src={DigitalAssetsicon} alt="icon" />
                      <span>{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className=" flex justify-center">
                <img className="w-64 h-52" src={OperationPlatformUpdatedImg} alt="operations platform" />
              </div>
            </div>

          </Card>
          <Card
            title="Lone Worker"
            description="Protect remote workers in real-time."

          />
          <Card
            title="Marketplace"
            description="One-stop shop for workplace safety equipment."

          />
          <Card
            title="Insurance"
            description="SafetyCulture Care, combining risk management,tech and insurance"

          />
          <Card
            title="HSEQ Documentation"
            description="SafetyDocs trusted workplace health, safety and quality documents"

          />

        </div>
        <BookDemo />
      </div>
    </section>
  );
};
export default ProductCards;