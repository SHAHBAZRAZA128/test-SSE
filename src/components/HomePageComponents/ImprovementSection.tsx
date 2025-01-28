import { useNavigate } from "react-router-dom"
import { AppStoreicon, BarChat, ChartSquare, GooglePlayicon, Mobile1, SpeedoMeter, ZapFast } from "../../assets/index"


import {BookDemoButton , ButtonField} from "../index"


const ImprovementSection = () => {
    
    const navigation = useNavigate();
    return (
        <div className="bg-[#6559ff] w-full h-[70vh] mb-20 text-white ">

            <div className="py-16 flex flex-col justify-between items-center">

                <h1 className="text-[38px] font-bold mb-8 font-Poppins">Start your improvement movement</h1>
                <ul className="flex flex-wrap justify-center items-center space-x-10">
                    <li className="flex gap-2 font-medium"><img src={Mobile1} alt="icons" /> Go paperless</li>
                    <li className="flex gap-2 font-medium"><img src={ChartSquare} alt="icons" />Boost productivity</li>
                    <li className="flex gap-2 font-medium"><img src={BarChat} alt="icons" />Reduce incidents</li>
                    <li className="flex gap-2 font-medium"><img src={ZapFast} alt="icons" />Accelerate onboarding</li>
                    <div className="basis-full flex justify-center items-center ">
                        <li className="flex gap-2 mt-4 font-medium "><img src={SpeedoMeter} alt="icons" />Mitigate risks</li>
                    </div>
                </ul>
                <div className="pt-8 space-x-4 flex">
                    <ButtonField
                    path="/sign-up"
                   
                        text="Get Started for free"
                        className="bg-yellow-400 !text-blue-900 hover:bg-yellow-200" />
                    <BookDemoButton
                   className=" border bg-white px-4 py-2 rounded-xl text-[15px]  !text-blue-600 hover:bg-gray-200" />
                </div>
                <div className="flex space-x-4 pt-6 ">
                    <img onClick={() =>navigation("/safetyculture-Apple-store")} className="w-32" src={AppStoreicon} alt="icons" />
                    <img onClick={() =>navigation("/safetyculture-Apple-store")} className="w-32" src={GooglePlayicon} alt="icons" />
                </div>
            </div>



        </div>
    )
}
export default ImprovementSection