
import { useNavigate } from "react-router-dom";
import { arrow } from "../../assets/index";

interface CardDetailsProps {
    logo?: string;
    path : string;
    calculation?: any;
    calculationDescription?: string;
    authorname: string;
    authortitle: string;
    authortalk: string;
    authorimg: string;
    cardName: string;
    headerChildren?: React.ReactNode
}

const WorkwaysDetailsCard: React.FC<CardDetailsProps> = ({ logo, calculation, calculationDescription, headerChildren, authorname, authortitle, authortalk, authorimg, cardName , path}) => {
    const navigation = useNavigate();
    return (
        <div className="bg-white  rounded-2xl flex justify-between">
            <div className="pl-14 pt-16">
                {logo && (
                    <img
                        className={`mb-2 ${!calculation ? "h-16 w-36" : "h-6 w-auto"
                            }`} 
                        src={logo}
                        alt="logo"
                    />
                )}
                <div className="flex pb-8 space-x-8">
                    <div>
                        <h1 className="text-[60px] font-bold">{calculation}</h1>
                        {calculation && <hr className="w-30 h-1 bg-[#6559ff] border-none " />}
                        <p className="font-normal mt-3">{calculationDescription}</p>
                    </div>
                   {headerChildren}
                
                </div>
                <div className="w-[40vw] pb-10 p ">
                    <p className="pb-4 font-Poppins italic text-lg">{authortalk}</p>
                    <h2 className="font-bold">{authorname},</h2>
                    <p className="pb-10">{authortitle}</p>
                    <button
                    onClick={()=>navigation(path)} className="text-blue-900 font-medium flex px-4 py-3  rounded-xl border border-gray-200">Explore our {cardName} solution<img className="pt-1 pl-1 " src={arrow} alt="icon" /> </button>
                </div>
            </div>
            <div>
                <img className="rounded-l-full h-full" src={authorimg} alt="image" />
            </div>
        </div>

    )

}
export default WorkwaysDetailsCard