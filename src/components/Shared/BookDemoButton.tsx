
import { Link } from "react-router-dom";

  
   interface BookDemoButtonProps {
    image? :  string;
    className?: string


   }

const BookDemoButton: React. FC<BookDemoButtonProps> = ({image , className}) => {
    return (
        <div >

            <Link to="/book-demo" className={`text-gray-800 font-bold text-lg flex  hover:text-blue-800 ${className}`}>
                Book a demo 
                {image &&  <img className="pt-1 pl-2" src={image} alt="arrow" />}
               
        
            </Link>
        </div>
    );
}
export default BookDemoButton;