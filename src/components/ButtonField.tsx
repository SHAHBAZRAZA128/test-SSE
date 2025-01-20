 

 interface ButtonProps{
    text: string;
    className?: string;
 }


const ButtonField:React.FC<ButtonProps> = ({text , className=""}) =>{
  return(
    <button className={`bg-[#6559ff] hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-medium ${className}`}>{text}</button>
  )
}
export default ButtonField;