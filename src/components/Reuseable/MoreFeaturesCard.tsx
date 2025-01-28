
import { useNavigate } from "react-router-dom";
import { arrow } from "../../assets/index";

interface MoreFeaturesCardProps {
    icon?: string;
    heading: string;
    path : string;
}


const MoreFeaturesCard: React.FC<MoreFeaturesCardProps> = ({ icon, heading , path }) => {
    const navigate = useNavigate();
    return (

        <div className="border-2 border-gray-200 px-4 py-4 w-[26vw] flex justify-between rounded-lg hover:border-blue-800"
        onClick={()=>navigate(path)}>
            <div className="flex space-x-2">
               {icon && <img src={icon} alt="icon" />} 
                <h1 className="font-bold text-lg">{heading}</h1>
            </div>

            <img src={arrow} alt="" />

        </div>




    )


}
export default MoreFeaturesCard