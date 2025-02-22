import { bell_icon, Search_icon, Signin_icon } from "../assets";
import { userAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
function Header(){
  const navigate = useNavigate();
  const user = userAuth();
  const handleLogout = () =>{
    user?.logout();
    navigate("/login");

  }

    return(
        <div className="flex justify-between items-center laptop:pr-40 mt-10  mobile:flex-col mobile:absolute mobile:top-[-25px] mobile:left-[-15px] ">
          <h1 className="pl-2 tablet:relative tablet:left-[4rem] ">Dashboard</h1>
          <div className="flex h-[30px] tablet:pr-28">
            <button className="w-[100px]  laptop:w-[80px] tablet:relative tablet:top-10 tablet:right-10 mobile:text-[10px] tablet:w-[70px] tablet:text-[12px]     mobile:ml-8 mobile:w-[60px] mobile:h-[20px] mobile:mt-2 mobile:mr-[-4px] bg-[#FF0000] text-[14px] text-white rounded-xl">
              Add Entity
            </button>
            <img
              className="w-[15px] h-[15px] relative tablet:relative tablet:top-10  left-5 top-2 mobile:top-3 mobile:left-4 mobile:w-[10px] mobile:h-[10px]"
              src={Search_icon}
              alt="search_icon"
            />
            <input
              placeholder="Type here.."
              className="w-[334px] laptop:w-[300px] tablet:right-12 tablet:w-[200px] tablet:relative tablet:top-10   mobile:w-[200px] border border-[rgba(255, 255, 255, 1)] mobile:h-[20px] mobile:mt-2 mobile:text-[12px] rounded-xl mobile:px-4 px-6"
              type="text"
            ></input>
            <div className="flex pl-3 tablet:w-8 tablet:relative tablet:right-[7srem] mobile:absolute mobile:top-0 mobile:right-0 ">
              <img
                className="w-[24px] h-[24px] mobile:w-[12px] "
                src={bell_icon}
                alt="bell_icon"
              />
              <img
                className="w-[24px] h-[24px] mobile:w-[12px] "
                src={Signin_icon}
                alt="signin_icon"
                
              />
              <span onClick={handleLogout}
              className="cursor-pointer tablet:text-left mobile:text-[12px] mobile:relative text-[18px] mobile:top-1 mobile:left-1">SignIn</span>
            </div>
          </div>
        </div>
    )

}
export default Header