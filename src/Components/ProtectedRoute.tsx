
import { Navigate } from "react-router-dom";
import { userAuth } from "../Context/AuthContext"


const ProtectedRoute = ({ children }:any) => {
    const auth = userAuth();
    if(!auth || !auth.user){
    return <Navigate  to="/login" replace/>
    }
   return children
}
export default ProtectedRoute