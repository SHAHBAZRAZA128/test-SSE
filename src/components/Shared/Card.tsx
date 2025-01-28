// File: FeaturesSection.tsx
import { arrow } from "../../assets/index";
import React from "react";
import { useState } from "react";


interface ProductCardProps {
  title: string;
  description?: string;
  onClick? : () => any;
  headerchildren?: React.ReactNode;
  footerchildren?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<ProductCardProps> = ({ title, description, headerchildren, footerchildren, className, style , onClick }) => {
   const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={`bg-white font-NotoSans border-2  rounded-xl  p-6 w-64 h-40 
      ${isHovered ? "border-blue-800" : " border-white" } ${className}`} style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      onClick={onClick}>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          {headerchildren && <div> {headerchildren}</div>}
          <h3 className={`text-lg font-bold  flex items-center justify-between
           ${isHovered ? "text-blue-800" : "text-gray-800 " } ${className} `}>{title}
          </h3>
        </div>
         <img style={{
          fill: isHovered ? "#1e40af" : "#4b5563"

         }} 
          src={arrow} alt="arrow" />
        

      </div>
      <p className="text-sm font-normal text-gray-800  mt-2">{description}</p>
      {footerchildren && <div> {footerchildren}</div>}
    </div>
  );
};



export default Card;
