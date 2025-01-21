import { GoalsCard } from "../components/index"


const GoalsSection: React.FC = () => {

    return (
        <div>
            <div className="mt-20 mb-6 flex flex-col justify-center items-center">
                <h1 className="text-[50px] font-bold">Get up and running fast</h1>
                <p className=" mt-4 text-xl mb-6">Customizable solutions ready to meet your unique needs and business goals.</p>
            </div>
            <div className="ml-10">
                <div className="flex space-x-6">
                    <GoalsCard
                        btnText="EHS"
                        linkText="Health & Safety Management"
                        paragraphText="Keep teams safe on the job while promoting a safety culture across your organization."
                        className="border-blue-600"

                    />
                    <GoalsCard 
                        btnText="GRC"
                        linkText="
Risk Management & Compliance"
                        paragraphText="Keep teams safe on the job while promoting a safety culture across your organization."
                        className="border-blue-400"
                    />
                    <GoalsCard
                        btnText="Quality"
                        linkText="Operational Excellence"
                        paragraphText="Optimize processes and drive productivity, greater efficiencies and quality products or services at scale."
                        className="border-yellow-500"
                    />
                    <GoalsCard
                        btnText="ESG"
                        linkText="Health & Safety Management"
                        paragraphText="Digitize SOP’s, reduce waste and adapt sustainability best practices the moment conditions change."
                        className="border-purple-600"
                    />
                </div>

            </div>


        </div>


    )
}
export default GoalsSection