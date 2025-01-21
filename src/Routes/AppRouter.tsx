import Status from "../pages/Status"
import HomePage from "../pages/HomePage"
import { Route , Routes } from "react-router-dom"



const AppRouter: React.FC=()=>{
    return(
        <Routes>
            <Route path="/status" element={<Status/>} />
            <Route path="/HomePage" element={<HomePage/>} />
        </Routes>
    )
}

export default AppRouter