import { Link } from "react-router-dom";


interface GoalsCardProps{
   btnText: string;
   linkText:string;
   paragraphText:string;
   className?: string;
}
const GoalsCard: React.FC<GoalsCardProps> =({btnText, linkText, paragraphText , className})=>{
   
    return(
       <div className="border-2 border-gray-100 w-[300px] h-[350px] pl-4 rounded-2xl pt-4">
        <button className={`rounded-full border-2 border-l-4 px-4   py-1 ${className}`}>{btnText}</button>
        <Link className="block mt-6 text-2xl font-bold leading-none mb-6" to="/">{linkText}</Link>
        <p className="font-xl text-gray-800 mb-6">{paragraphText}</p>
        <Link to="/" className="text-blue-800 font-medium  pl-6 px-4 ">Find out more  <span> → </span></Link>

       </div>
    )
}
export default GoalsCard