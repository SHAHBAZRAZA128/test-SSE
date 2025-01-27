import { FeaturesCard, MoreFeaturesCard } from "../components/index"
import { Signalicon, Puzzleicon, Sparkleicon } from "../assets/index"


const MoreFeaturesSection: React.FC = () => {
    return (

        <div className="flex justify-center items-center">

            <div className="flex flex-col  space-x-2">
                <h1 className="text-gray-800 text-3xl font-bold mb-16 mx-auto mt-16 ">More features</h1>
                <div className="w-full px-20 gap-8  flex ">
                    <MoreFeaturesCard
                    
                        icon={Signalicon}
                        heading="Sensors & IoT" 
                        path="/monitoring"/>
                    <MoreFeaturesCard
                        icon={Puzzleicon}
                        heading="Integrations"
                        path="/integration" />
                    <MoreFeaturesCard
                        icon={Sparkleicon}
                        heading="AI" 
                        path="/ai-tools"/>


                </div>
                <div className=" w-full px-20 gap-8 py-8 flex  ">
                <MoreFeaturesCard
                        
                        heading="Marketplace" 
                        path="/safetyculture-marketplace"/>
                    <MoreFeaturesCard
                        heading="Lone worker"
                        path="/lone-worker" />
                    <MoreFeaturesCard
                        heading="Insurance" 
                        path="/safetyculture-care"/>
                </div>



            </div>
        </div>




    )


}
export default MoreFeaturesSection