
import {CustomerStory} from "../index"
import { StreamlineOperations , ShiftRealationship , MakeDecision } from "../../assets/index"
import { Link } from "react-router-dom"

const CustomerStories = () => {
 
  return (
    <div className="">
      <div className="mt-10 flex flex-col justify-between items-center mb-10 ">
        <h1 className="text-[48px] font-bold leading-none mb-10">A connected workplace
          <span className="block text-center ">uncovers opportunity</span></h1>
        <p className="w-[650px] text-xl pl-10">​Increase workforce productivity, improve quality, drive employee <span className="block text-center ">engagement, and promote a safety culture.</span></p>
      </div>
      <div>
        <div>
          <CustomerStory 
          title="Streamline operations the paperless way"
          headerChildern = {
              <p className="text-[16px]">Your operation isn’t static and stale. It’s time to <Link className="text-blue-800 hover:underline" to="/platform">adopt adigital solution </Link>  that makes change easy. Digitize any process, automate workflows, capture consistent data, and start identifying areas of improvement from the ground up.</p> 
          }
          img= {StreamlineOperations}
          link="(Read the story)"
          name= "M-Spot"
          children="It’s the power of knowing what’s working, what’s not, and giving everyone the tools to do something about it."
          
          />
          <CustomerStory 
          title="Make better decisions with complete visibility"
          headerChildern = {
              <p className="text-[16px]">Get to the root cause of workplace trends with <Link className="text-blue-800 hover:underline" to="/platform">total visibility across your organization. </Link>   Use data from completed inspections, reported incidents, sensors, and asset history to keep workers safe, and prevent things from happening in the first place.</p> 
          }
          img= {MakeDecision}
          link="(Explore customer stories)"
          name= "WestJet"
          className="flex-row-reverse gap-12"
          
          />
          <CustomerStory 
          title="Shift the relationship with your frontline"
          headerChildern = {
             <p className="text-[16px]">With SafetyCulture in the hands of your teams, every person, at every level, can play an active role in improving quality, safety and compliance. Give them the <Link className="text-blue-800 hover:underline" to="/platform"> tools they need to be successful </Link> in their role, however unique it may be, and empower every individual to have a voice.</p>
          }
          img= {ShiftRealationship}
          link="(Read Customer Story)"
          name= "Brentford Football Club"
          
          
          />
        </div>
      </div>
     
      </div>
      
      
    


  )
}
export default CustomerStories