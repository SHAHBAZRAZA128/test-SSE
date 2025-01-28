
import { SmallLogo } from "../../assets/index"
import { Link } from "react-router-dom"

const AuthLayoutFooter = () => {
  
    return (
        <div style={{backgroundColor : "rgb(233, 238, 246)" }} className=" w-full   pl-14 h-16 pt-4 flex justify-between text-gray-800 font-medium">
            <div className="space-x-8">
                <Link to="/privacy-policy">Privacy</Link>
                <Link to="/terms-and-conditions">Terms</Link>
                <Link to="/status">Status</Link>
                <Link to="/safetyculture-help-center">Support</Link>

            </div>
            <a className="flex pr-10 cursor-pointer"
            href="https://safetyculture.com/?_gl=1*1k6b0lp*_gcl_au*MTI2Njg4MDM2NC4xNzM3MDMxNzkz"
            target="_blank">
                <img className="w-4 pb-[20px]" src={SmallLogo} alt="small-logo" />
                <span className="p-1 text-gray-600 text-sm font-medium">&copy; SafetyCulture 2025</span>
            </a>


        </div>

    )

}
export default AuthLayoutFooter