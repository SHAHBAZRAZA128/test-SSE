import { Outlet } from "react-router-dom"
import { Footer, Header } from "../components/index"


const MainLayout =() => {
    return (
        <div>
            <Header />
            <main className="pt-28 ">
           <Outlet />
            </main>
            <Footer />
        </div>

    )

}
export default MainLayout