import {ButtonField} from "../components/index";
import { Slide1,Inspection , ManageAssets } from "../assets/index"
import { Link } from "react-router-dom";


const HeroSection: React.FC = () => {
    return (
        <div>
            <div className="bg-white  flex flex-col justify-between items-center mt-4  border-black ">
                <div className="bg-white  rounded-full relative z-[20]  flex flex-col justify-between items-center  px-32">
                    <div className="text-gray-600 mt-6 text-sm font-normal border border-blue-600 border-l-4 px-4 rounded-full py-1 mb-4 ">Workplace operations platform</div>
                    <h1 className="text-[60px] font-extrabold text-gray-800 mb-4 ">A better way of working</h1>
                    <p className="w-[550px] mb-2 text-gray-800 text-xl">Give your teams the knowledge,tools and confidence to work <span className="block text-center">safely, meet higher standards, and improve everyday.</span> </p>
                    <div className="space-x-4 py-12">
                        <ButtonField
                            text="Sign Up for free"
                            className="rounded-2xl" />
                        <ButtonField
                            text="Book a demo"
                            className="bg-white rounded-2xl hover:bg-gray-100 text-blue-800 border border-gray-200" />

                    </div>
                    
                </div>                
            </div>
            <div className="mb-8 ">
           <img className=" px-6 absolute rounded-xl  top-[350px] z-10 h-full object-cover " src={Slide1} alt="" />
            <img className="absolute w-60 z-30 bottom-[-40px] left-40" src={Inspection} alt="" />
            <img className="absolute w-60 z-30 right-52 bottom-[-150px] " src={ManageAssets} alt="" />
            <p className= "bg-gray-800 text-sm z-30 bg-opacity-50 absolute text-white bottom-[-320px] left-[530px] p-4 rounded-lg">Clearwell Dynamics | <Link to="/" >Read customer story <span className=" font-semibold inline-block ">
          →
        </span> </Link></p>
            </div>
         

        </div>
    )
}

export default HeroSection;