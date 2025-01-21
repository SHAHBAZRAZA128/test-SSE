import { FeaturesCard } from "../components/index"
import { Signalicon, Puzzleicon, Sparkleicon } from "../assets/index"


const MoreFeaturesSection: React.FC = () => {
    return (

        <div className="flex justify-center items-center">

            <div className="flex flex-col  space-x-2">
                <h1 className="text-gray-800 text-3xl font-bold mb-16 mx-auto mt-16 ">More features</h1>
                <div className="flex  gap-8">
                    <FeaturesCard
                        title="Sensors & IoT" 
                        icon={Signalicon}
                        className="w-[350px] h-[50px] flex justify-between"
                         />
                    <FeaturesCard
                        title="Integrations"
                        icon={Puzzleicon}

                        className="w-[350px] h-[50px] flex justify-between"
                         />
                    <FeaturesCard
                        title="AI" 
                        icon={Sparkleicon}
                        className="w-[350px] h-[50px] flex justify-between"
                         />
                </div>
                <div className="flex  gap-8 my-8">
                    <FeaturesCard
                        title="Marketplace" 
                        className="w-[350px] h-[50px] flex justify-between"
                         />
                    <FeaturesCard
                        title="Lone worker" 
                        className="w-[350px] h-[50px] flex justify-between"
                         />
                    <FeaturesCard
                        title="Insurance" 
                        className="w-[350px] h-[50px] flex justify-between"
                         />
                </div>



            </div>
        </div>




    )

    
}
export default MoreFeaturesSection