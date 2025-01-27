import { useNavigate } from "react-router-dom";

 

 interface ButtonProps{
    text: string;
    className?: string;
    onclick: () => any;
 }


const ButtonField:React.FC<ButtonProps> = ({text , className="" , onclick}) =>{
  return(
    <button
    onClick={onclick}
   
     className={`bg-[#6559ff] hover:bg-blue-800 text-white py-3 px-4  font-medium rounded-xl ${className}`}>{text}</button>
  )
}
export default ButtonField;