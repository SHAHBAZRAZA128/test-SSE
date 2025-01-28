
import {Toyota , Marriot, KrispyKreme , JetBlue , JohnDeere , Aecom} from "../../assets/index"
const PartnersSection:React.FC = ()=>{
 return(
    <div className="mt-[580px] w-28 space-x-24 flex justify-between items-center mx-36">
        <img src={Toyota} alt="" />
        <img src={Marriot} alt="" />
        <img src={KrispyKreme} alt="" />
        <img src={Aecom} alt="" />
        <img src={JetBlue} alt="" />
        <img src={JohnDeere} alt="" />
    </div>
 )
}
export default PartnersSection