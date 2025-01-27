import { BookDemo, ButtonField } from "../components/index";
import { TennisAustralia, UI1, UI2 } from "../assets/index"
import { Link, useNavigate } from "react-router-dom";




const HeroSection: React.FC = () => {
    const navigate = useNavigate();
    const handleClick = (path: string) => {
        navigate(path);
    }
    return (
        <div>
            <div className="bg-white  flex flex-col justify-between items-center mt-4 z-0 border-black ">
                <div className="bg-white  rounded-full relative z-[20]  flex flex-col justify-between items-center  px-32">
                    <div className="text-gray-600 mt-6 text-sm font-normal border border-blue-600 border-l-4 px-4 rounded-full py-1 mb-4 ">Workplace operations platform</div>
                    <h1 className="text-[60px] font-extrabold text-gray-800 mb-4 font-Poppins ">A better way of working</h1>
                    <p className="w-[550px] mb-2 text-gray-800 text-xl">Give your teams the knowledge,tools and confidence to work <span className="block text-center">safely, meet higher standards, and improve everyday.</span> </p>
                    <div className="space-x-4 flex py-8">
                        <ButtonField
                            onclick={() => handleClick("/sign-up")}
                            text="Sign Up for free"
                            className="rounded-xl" />
                        <BookDemo
                            className="border-2 px-4 py-2 rounded-xl font-normal !text-blue-800 hover:bg-gray-200" />

                    </div>

                </div>
            </div>
            <div className="mb-8 rounded-lg">
                <img className=" px-6 absolute   top-[350px] z-10 h-full object-cover " src={TennisAustralia} alt="" />
                <img className="absolute w-60 z-30 bottom-[-150px] left-40" src={UI1} alt="" />
                <img className="absolute w-60 z-30 right-52 bottom-[-120px] " src={UI2} alt="" />
                <p className="bg-gray-800 text-sm z-30 bg-opacity-50 absolute text-white bottom-[-320px] left-[530px] p-4 rounded-lg">Clearwell Dynamics | <Link className="hover:underline hover:decoration-2" to="/australian-open" >Read about our partnership <span className=" font-semibold inline-block ">
                    →
                </span> </Link></p>
            </div>


        </div>
    )
}

export default HeroSection;