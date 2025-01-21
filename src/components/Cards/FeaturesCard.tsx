import { Link } from "react-router-dom";
import { useState } from "react";

interface FeaturesCardProps {
    icon?: string;
    title: string;
    description?: string;
    link?: string;
    // showArrow?: boolean;
    className?: React.ReactNode;

}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, description, link , className  }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`border-2  h-64 w-[350px] px-6 rounded-2xl   ${isHovered ? "border-blue-800" : " border-gray-200 "} ${className} `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex space-x-4 py-8 truncate whitespace-nowrap overflow-hidden">
               {icon && <img className="h-8 w-8" src={icon} alt="" />} 
                <h1 className={`text-xl font-bold leading-none    ${isHovered ? "text-blue-600" : " text-gray-800 "}`} >{title}</h1>
            </div> 
            <p className="mb-4 text-gray-800">{description}</p>
            <Link className={`text-gray-800 font-medium ${isHovered ? "text-blue-600" : " text-gray-800 "}`} to="">{link} <span> → </span></Link>
        </div>
    )
}
export default FeaturesCard;