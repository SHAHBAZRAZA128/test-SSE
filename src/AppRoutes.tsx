import Status from "./pages/Status"
import { Route , Routes } from "react-router-dom"



const AppRoutes: React.FC=()=>{
    return(
        <Routes>
            <Route path="/status" element={<Status/>} />
        </Routes>
    )
}

export default AppRoutes