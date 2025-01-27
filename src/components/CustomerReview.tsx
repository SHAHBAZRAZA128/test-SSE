import { useNavigate } from "react-router-dom"
import { HomePageAO, Comas } from "../assets/index"
import { ButtonField } from "../components/index"

const CustomerReview = () => {
    const navigator = useNavigate();
    return (
        <div className=" text-white mb-[800px]">
            <div className="relative z-30">
            <img className="absolute z-10 w-full h-auto"  src={HomePageAO} alt="" />
            <div className="absolute z-20 w-[35vw]  pl-24 pt-16">
                <img className=" pb-6" src={Comas} alt="" />
                <p className=" text-2xl font-medium  font-NotoSans italic pb-4">Whether it be the ballkids or court services, customer experiences, retail or sustainability teams, they’re all using SafetyCulture to deliver the Australian Open that not only the fans love, but that our workforce feels great about.</p>
                <div className="">
                    <p className="text-[16px] font-bold">Craig Tiley,</p>
                    <p className="text-[16px] font-medium text-gray-200 pb-6">CEO and Director of Tennis Australia</p>
                </div>
                <ButtonField
                onclick={()=>navigator("/australian-open")}
                    text="Find out how Australian Open uses SafetyCulture"
                    className="text-left " />
            </div>

            </div>
          

        </div>
    )
}
export default CustomerReview