import { useNavigate } from "react-router-dom";

 

 interface ButtonProps{
    text: string;
    className?: string;
    path : string;
   
 }


const ButtonField:React.FC<ButtonProps> = ({text , className="" , path }) =>{
  const navigation = useNavigate();
  return(
    <button
    onClick={()=> navigation(path)}
   
     className={`bg-[#6559ff] hover:bg-blue-800 text-white py-3 px-4  font-medium rounded-xl ${className}`}>{text}</button>
  )
}
export default ButtonField;