import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { arrow } from "../../assets/index";

interface FeaturesCardProps {
    icon?: string;
    title: string;
    description?: string;
    path: string;
    className?: React.ReactNode;

}

const FeaturesCard: React.FC<FeaturesCardProps> = ({ icon, title, description, path , className  }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigation = useNavigate();
    return (
        <div className={`border-2  h-64 w-[350px] px-6 rounded-2xl   ${isHovered ? "border-blue-800" : " border-gray-200 "} ${className} `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigation(path)}
        >
            <div className="flex space-x-4 py-8 ">
               {icon && <img className="h-8 w-8" src={icon} alt="" />} 
                <h1 className={`text-xl font-bold     ${isHovered ? "text-blue-600" : " text-gray-800 "}`} >{title}</h1>
            </div> 
            <p className="mb-4 text-gray-800 ">{description}</p>
            <Link className={` flex font-medium ${isHovered ? "text-blue-600" : " text-gray-800 "}`} to="">Learn More  <img className="pl-1  w-4" src={arrow} alt="arrow" /> </Link>
        </div>
    )
}
export default FeaturesCard;