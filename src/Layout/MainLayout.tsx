import { Outlet } from "react-router-dom"
import {  Header, MainLayoutFooter } from "../components/index"


const MainLayout =() => {
    return (
        <div>
            <Header />
            <main className="pt-28 ">
           <Outlet />
           
            </main>
            <MainLayoutFooter />
        </div>

    )

}
export default MainLayout