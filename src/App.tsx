
import Chat from "./components/Chat"
import ExplorePlatform from "./components/ExplorePlatform"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"

const App:React.FC = () =>{
  
  return (
    <>
    <Header />  
    <HeroSection/> 
    <Partners />
    <ExplorePlatform />
    <Chat /> 
    {/* <Footer /> */}
    
    </>
  )
}

export default App
