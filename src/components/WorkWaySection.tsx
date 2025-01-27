import { useState } from "react"
import { BrentfordFootball, Circles, Construction, DbSchenker, Hospatality, HPBrentford, HPlevel, HPSchenker, HPWaldorf, Level10, Lowes, Management, MarleyPhoto, MarleySpoon, Retail, Transport, WaldorfAstoria } from "../assets/index"
import { WorkwayCard, WorkwaysDetailsCard } from "../components/index"



const WorkWaySection = () => {
    const [selectedCard, setSelectedCard] = useState("Manufacturing");

    const cardDetails = [
        { img: Circles, title: "Manufacturing" },
        { img: Construction, title: "Construction" },
        { img: Transport, title: "Transport & Logistics" },
        { img: Hospatality, title: "Hospatality" },
        { img: Management, title: "Facilities Management" },
        { img: Retail, title: "Retail" }
    ]

    const clickedCardItemsDetails = [
        {
            logo: MarleySpoon,
            calculation: "3x",
            calculationDescription: "Audit efficiency",
            authorname: " Sofia Dias",
            authortitle: "Food Safety & Quality Assurance Manager, Marley Spoon",
            authortalk: "“Using SafetyCulture platform, we have become a paperless HACCP company. There is absolutely no way that we could have grown as fast as we have whilst maintaining quality without these processes and data in place.”",
            authorimg: MarleyPhoto,
            cardName: "Manufacturing",
            path: "/manufacturing"
        },

        {
            logo: HPlevel,
            calculation: "2.5M",
            calculationDescription: "man hours without a LTI",
            authorname: "Steve DeWees",
            authortitle: "Project Executive, Level 10 Construction",
            authortalk: "“Today, we’re at 2.5 million hours without a lost time injury. SafetyCulture allows us to achieve that. You don’t work 2.5 million hours and just be lucky.”",
            authorimg: Level10,
            cardName: "Construction",
            path: "/construction"
        },
        {
            logo: HPSchenker,
            authorname: "Tiffany Argent",
            authortitle: "QSHE Cluster Lead Manager, DB Schenker",
            authortalk: "“It’s nice to see that a tool as simple as this has made a difference to the frontline.”",
            authorimg: DbSchenker,
            cardName: "Transport & Logistics",
            path: "transport-and-logistics"
        },
        {
            logo: HPWaldorf,
            calculation: "15",
            calculationDescription: "point gain in guest satisfaction",
            authorname: "Kelly Vohs",
            authortitle: "General Manager at Waldorf Astoria Boca Raton",
            authortalk: "“Food and beverage is up 15 points in terms of a guest satisfaction standpoint. To see that level of change speaks a lot about a system like SafetyCulture.”",
            authorimg: WaldorfAstoria,
            cardName: "Hospatality",
            path: "/hospatality"
        },
        {
            logo: HPBrentford,
            authorname: "Jess Morris",
            authortitle: "Operations Manager, Brentford Football Club",
            authortalk: "“It takes a mental load off me and my team knowing that every important step is digitized and we all have visibility.”",
            authorimg: BrentfordFootball,
            cardName: "Facilities Management",
            path: "facilities-management"
        },
        {

            calculation: "$1M",
            calculationDescription: "savings in loss prevention",
            authorname: "Enrique Espinoza",
            authortitle: "Process Improvement Manager for Lowe’s",
            authortalk: "“Using paper checklists, no one could see results of audits or the risks associated with poor processes. SafetyCulture allows us to see the results immediately and identify where we need to focus.”",
            authorimg: Lowes,
            cardName: "Retail",
            path:"/retail"
        },


    ];



    const handleCardClick = (title: any) => {
        setSelectedCard(title);
    };
    return (
        <div id="testimonials" className="bg-gray-200 mt-20 pt-24 pb-24">
            <h1 className="text-[48px] text-center font-bold font-Poppins leading-[60px]">Teams of all sizes, all industries have changed <span className="block text-center">the way they work </span></h1>
            <div className="ml-16 flex gap-4 mt-14 pb-8">
                {cardDetails.map((card, index) => (
                    <WorkwayCard
                        key={index}
                        img={card.img}
                        title={card.title}
                        onClick={() => handleCardClick(card.title)}
                        isSelected={selectedCard === card.title}
                    />
                ))}


            </div>
            <div className="ml-16 mr-14 bg-gray-200 shadow ">

                {selectedCard && (() => {
                    const filteredItems = clickedCardItemsDetails.filter((item) => item.cardName === selectedCard);
                    console.log("Filtered Items:", filteredItems);
                    return filteredItems.map((item, index) => {
                        console.log("Rendering Item:", item, "Index:", index); // Debugging index and item
                        return (
                            <WorkwaysDetailsCard
                                key={index}
                                logo={item.logo}
                                calculation={item.calculation}
                                calculationDescription={item.calculationDescription}
                                authorname={item.authorname}
                                authortitle={item.authortitle}
                                authortalk={item.authortalk}
                                authorimg={item.authorimg}
                                cardName={item.cardName}
                                path={item.path}
                                headerChildren={
                                    item.cardName === "Manufacturing" ? (
                                        <div>
                                            <h1 className="text-[60px] font-bold">$20,000</h1>
                                            <hr className="w-60 h-1 bg-[#6559ff] border-none" />
                                            <p className="font-normal mt-3">Paper waste saved annually</p>
                                        </div>
                                    ) : null
                                }
                            />
                        );
                    });
                })()}


            </div>

        </div>

    )
}


export default WorkWaySection