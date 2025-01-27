import { BelowArrow } from "../assets/index"
import { GoalsCard } from "../components/index"
import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"


const GoalsSection: React.FC = () => {

    const location = useLocation();
    useEffect(() => {
        // Check if there's a hash in the URL
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <div>
            <div className="mt-20 mb-6 flex flex-col justify-center items-center">
                <h1 className="text-[50px] font-bold">Get up and running fast</h1>
                <p className=" mt-4 text-xl mb-6">Customizable solutions ready to meet your unique needs and business goals.</p>
            </div>
            <div className="ml-16">
                <div className="flex space-x-8">
                    <GoalsCard
                        btnText="EHS"
                        linkText="Health & Safety Management"
                        paragraphText="Keep teams safe on the job while promoting a safety 
                        culture across your organization."
                        className="border-blue-600 "
                        path="/health-and-safety"

                    />
                    <GoalsCard
                        btnText="GRC"
                        linkText="
                Risk Management & Compliance"
                        paragraphText="Identify,evaluate and mitigate risks to your teams and assets through greater visibility and a data-driven approach."
                        className="border-blue-400"
                        path="/risk-management-and-compliance"
                    />
                    <GoalsCard
                        btnText="Quality"
                        linkText="Operational Excellence"
                        paragraphText="Optimize processes and drive productivity, greater efficiencies and quality products or services at scale."
                        className="border-yellow-500"
                        path="/operational-excellence"
                    />
                    <GoalsCard
                        btnText="ESG"
                        linkText="Environment & Sustainability"
                        paragraphText="Digitize SOP’s, reduce waste and adapt sustainability best practices the moment conditions change."
                        className="border-purple-600"
                        path="/esg-and-sustainability"
                    />


                </div>

            </div>

            <div className="mt-14 mb-28 flex flex-col justify-between items-center">
                <Link to="#testimonials" className="text-blue-800 flex  font-medium hover:underline hover:decoration-2">Explore how industries are benefiting
                    <img className="ml-1 " src={BelowArrow} alt="" />
                </Link>

            </div>

        </div>


    )
}
export default GoalsSection