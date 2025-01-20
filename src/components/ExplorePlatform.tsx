import ButtonField from "./ButtonField"
import {Dashboard1 , Dashboard2 , Mobile} from "../assets/index"


const ExplorePlatform:React.FC = ()=>{
    return(
        
       <div className=" flex flex-col justify-between items-center mt-28 ">
           <h1 className="w-[580px] text-[48px] text-center font-bold text-gray-800 mb-8 leading-none">All of your work in <span className="block ">one place</span>  </h1>
           <p className="w-[550px] mb-8 text-gray-800 text-center text-xl">Digitize every element of your operation and find areas <span className="block text-center">of improvement every step of the way</span> </p>
           <ButtonField 
           text="Explore the platform"
           className="mb-20 "/>
           <div className="mb-40 ">
           <img className="relative w-[800px] overflow-hidden" src={Dashboard1} alt="dashboard1" />
           <img className="absolute left-48 top-[1680px] w-48 h-84" src={Dashboard2} alt="dashboard1" />
           <img className="absolute right-48 top-[1740px] w-64 h-96" src={Mobile} alt="dashboard1" />

           </div>
           
       </div>
      
    )
   }
   export default ExplorePlatform