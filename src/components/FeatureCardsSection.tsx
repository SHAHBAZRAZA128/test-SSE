
import { FeaturesCard } from "../components/index"
import { Inspectionicon , Trainingicon , Cubeicon ,Notificationicon , CircleCheckicon , Ruporicon} from "../assets/index"


const FeatureCardsSection: React.FC = () => {

    const data = [
        {
            title: "Inspections,audits, and checklists",
            description: "Save time and paper by digitizing any process, process, procedure or policy. Capture data and share reports instantly.",
            icons : Inspectionicon ,

        },
        {
            title: "Training",
            description: "Onboard faster and upskill team members on the job. Create courses in minutes and keep a record of completion" ,
            icons : Trainingicon ,

        },
        {
            title: "Assets",
            description: "Gain total assets visibility with a digital register of your asset's history and upcoming activity in one place.",
            icons : Cubeicon ,
        },
        {
            title: "Issue Reporting",
            description: "Reduce time to resolution by capturing observations, near misses,hazards, or incidents in real-time.",
            icons : Notificationicon ,
        },
        {
            title: "Tasks",
            description: "Streamline workflows and get the job done with seamsless task assignments with Actions.",
            icons : CircleCheckicon ,
        },
        {
            title: "Communications",
            description: "Keep teams in the know with engaging video messages and know how got the message with Heads up.",
            icons : Ruporicon ,
        },
    ]

    return (
        <div className="flex justify-around" >
            <div className=" grid grid-cols-3 gap-8" >
                {data.map((item, index) => (
                    <FeaturesCard key={index}
                        icon={item.icons}
                        title={item.title}
                        description={item.description}
                        link="Learn more" 
                        />
                ))}
            </div>
        </div>
    );



                

        
}
export default FeatureCardsSection;