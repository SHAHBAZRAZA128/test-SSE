

import { Link } from "react-router-dom";
interface CustomerStoryProps {
    title: string;
    img : string;
    link : string;
    name : string;
    children? :string;
    className? : string;
    headerChildern? : React.ReactNode;

    
}
const CustomerStory:React.FC<CustomerStoryProps> = ({ title,img,link,name , children , className , headerChildern}) =>{
    return(
        <div className={` flex mx-12 space-x-4 mt-32 ${className}`} >
        <div className="w-[50vw] mr-14 mt-32 ">
          <h1 className="text-[40px] font-bold leading-none mb-8"> {title}</h1>
          {headerChildern}
          <p className="mt-8">{children}</p>
        </div>

        <div className="w-[50vw] flex flex-col">
          <img className="" src={img} alt="" />
          <span className="text-center pt-1.5 ">{name} 
          <Link className="text-blue-800 hover:decoration-2 pl-2" to="/customer-stories">{link}</Link>
            </span>

        </div>
      </div>
    )
}
export default CustomerStory