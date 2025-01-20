// File: FeaturesSection.tsx
import React from "react";


interface ProductCardProps {
  title: string;
  description?: string;
  headerchildren?: React.ReactNode;
  footerchildren?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Card: React.FC<ProductCardProps> = ({ title, description, headerchildren, footerchildren, className, style }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 w-64 h-40 hover:shadow-lg transition duration-300 
      ${className}`} style={style}>
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          {headerchildren && <div> {headerchildren}</div>}
          <h3 className="text-lg font-bold text-gray-800 flex items-center justify-between">{title}
          </h3>
        </div>
        <span className=" font-semibold inline-block ">
          →
        </span>

      </div>
      <p className="text-sm font-normal text-gray-800  mt-2">{description}</p>
      {footerchildren && <div> {footerchildren}</div>}
    </div>
  );
};



export default Card;
