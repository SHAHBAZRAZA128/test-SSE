

import { Card, BookDemoButton,  ColumnLinks } from "../index";
import { arrow,  Enterprise } from "../../assets/index"
import { useNavigate } from "react-router-dom";



const SolutionCard: React.FC = () => {
  const data = [
    { heading: "By Industry", links: ["Construction", "Manufacturing", "Facilities Management", "Hospatality", "Retail", "Transport & Logistics", "Mining"], path: ["/construction", "/manufacturing", "/facilities-management", "/hospatality", "/retail", "/transport-and-logistics", "/mining"] },
    {
      heading: "By Buisness Need", links: ["Health & Safety Management (EHS)", "Risk Management and Compliance (GRC)", "Operational Excellence", "Environment & Sustainability (ESG)"],
      path: ["/health-and-safety", "/risk-management-and-compliance", "/operational-excellence", "/esg-and-sustainability",

      ]
    },

  ]

  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path)
  }


  return (
    <section className="bg-gray-100  max-w-[100vw] ">
      <div className="  ">
        <div className={`max-w-7xl md:grid-cols-3 pt-10 pl-10 pr-10   gap-4 w-full h-full mx-auto grid grid-cols-3`}
        >


          {data.map((column, index) => (
            <div key={index} className={`bg-white  rounded-xl p-6 w-[360px] h-[400px] border-2
             hover:border-blue-800
            `}
            >
              <div className="flex items-center space-x-2 ">
                <ColumnLinks
                  heading={column.heading}
                  links={column.links}
                  path={column.path}
                  className={`text-lg font-bold text-gray-800 } `}
                  linkClassName="text-lg font-normal px-2  rounded-lg text-gray-800 hover:no-underline block w-[300px] " />


              </div>
            </div>

          )
          )}

          <Card title="Enterprise"
            onClick={() => handleNavigation("/enterprise")}
            description="Scale with confidence and dedicated support"
            headerchildren={
              <img className="h-6 w-6" src={Enterprise} alt="icon" />

            }
            style={{ width: '330px', height: '400px' }} />

          <div className="py-8">
            <BookDemoButton
              image={arrow} />
          </div>



        </div>
      </div >
    </section>

  );
}

export default SolutionCard