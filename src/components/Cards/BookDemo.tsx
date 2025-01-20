
import { Link } from "react-router-dom";

  

const BookDemo: React. FC = () => {
    return (
        <div className=" py-8">

            <Link to="/" className="text-gray-800 font-bold text-lg ">
                Book a demo <span className="w-10 h-10 text-gray-600 text-2xl ">→</span>
            </Link>
        </div>
    );
}
export default BookDemo;