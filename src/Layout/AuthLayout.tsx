import { Outlet } from "react-router-dom"
import {AuthLayoutFooter} from "../components/index"


const AuthLayout =() => {
    return (
        <div>
            
            
           <Outlet />
            <AuthLayoutFooter />
        </div>

    )

}
export default AuthLayout