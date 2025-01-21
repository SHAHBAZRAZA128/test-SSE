import ButtonField from "./ButtonField"
import { Dashboard1, Dashboard2, Mobile } from "../assets/index"


const ExplorePlatformSection: React.FC = () => {
    return (

        <div className=" flex flex-col justify-between items-center mt-28 ">
            <h1 className="w-[580px] text-[48px] text-center font-bold text-gray-800 mb-8 leading-none">All of your work in <span className="block ">one place</span>  </h1>
            <p className="w-[550px] mb-8 text-gray-800 text-center text-xl">Digitize every element of your operation and find areas <span className="block text-center">of improvement every step of the way</span> </p>
            <ButtonField
                text="Explore the platform"
                className="mb-20 " />
            <div className="mb-40 relative w-[820px]  object-cover">
                <img className="" src={Dashboard1} alt="dashboard1" />
                <img className="absolute left-[-80px] top-[60px] w-48 h-84" src={Dashboard2} alt="dashboard1" />
                <div className="absolute top-[115px]  right-[-90px] overflow-hidden ">
                <img className=" w-64 h-[332px] shadow-inner  " src={Mobile} alt="dashboard1" />
                </div>
                

            </div>

        </div>

    )
}
export default ExplorePlatformSection