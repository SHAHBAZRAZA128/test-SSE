import { arrow } from "../../assets/index";
import { useState } from "react";
import { Link } from "react-router-dom";


interface GoalsCardProps{
   btnText: string;
   linkText:string;
   paragraphText:string;
   className?: string;
   path: string;
}
const GoalsCard: React.FC<GoalsCardProps> =({btnText, linkText, paragraphText , className , path})=>{
   const [isHovered , setisHovered] = useState(false);
    return(
       <div className={`border-2  w-[280px] h-[380px] px-4 rounded-2xl pt-6 ${isHovered? "shadow-lg" : "shadow-none"}`}
       onMouseEnter={() =>setisHovered(true)}
       onMouseLeave={() =>setisHovered(false)}>
        <button className={`rounded-full border border-l-4 px-4   py-0.5   ${className}`}>{btnText}</button>
        <Link className={`${isHovered? "text-blue-800 underline decoration-2" : " "} block mt-6 text-2xl font-bold leading-none mb-6`} to={path}>{linkText}</Link>
        <p className="text-lg text-gray-800 mb-12 w-[250px]">{paragraphText}</p>
        <div>
        <Link to={path} className={`text-blue-800 text-[16px] font-medium  pl-6 px-4 flex  ${isHovered? "underline" : " "}`}>Find out more  <span> <img className="pl-2 pt-1.5 " src={arrow} alt="" /> </span></Link>
        </div>
        

       </div>
    )
}
export default GoalsCard