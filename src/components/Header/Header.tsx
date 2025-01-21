import React, { useState } from "react";
import {ProductCards , SolutionCards ,SupportCards,ButtonField } from "../../components/index";
import {SafetyCulturelogo} from "../../assets/index"



const Header: React.FC = () => {
    const [ProductCard, setProductCards] = useState(false);
    const [SolutionCard, setSolutionCards] = useState(false);
    const [SupportCard, setSupportCards] = useState(false);


    const showProductCards = () => {
        setProductCards(true);
    };
    const hideProductCards = () => {
        setProductCards(false)
    }
    const showSolutionCards =()=>{
        setSolutionCards(true);
    }
    const hideSolutionCards = () => {
        setSolutionCards(false);
    }
    const showSupportCards =()=>{
        setSupportCards(true);
    }
    const hideSupportCards = () => {
        setSupportCards(false);
    }
   

    return (
        // Navbar
        <div className="p-4">
            <div className="flex justify-between items-center bg-white  px-4 py-2">
                <div className="text-xl font-bold flex space-x-12">
                    <img src={SafetyCulturelogo} alt="" />
                    <div className="flex space-x-4">
                        <div
                        
                        onMouseEnter={showProductCards}
                        onMouseLeave={hideProductCards}
                        >
                            <button className={`flex font-bold text-lg space-x-4  hover:text-[#6559ff] text-[#293745] `}
                            
                            >
                                Product
    
                                <svg className={` ml-1 mt-2 transform transition-transform duration-500 rotate-0 hover:rotate-180  `} clip-rule="evenodd" fill="none" fill-rule="evenodd" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L12 15.5858L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor"></path></svg>
    
                            </button>
                            {ProductCard && (
                                <div className=" absolute left-10 mt-10 ">
                                    <ProductCards />
                                </div>
    
    
                            )}
                        </div>
                       
                        <button className={`flex font-bold text-lg hover:text-[#6559ff] text-[#293745] `}
                            onMouseEnter={showSolutionCards}
                            onMouseLeave={hideSolutionCards}
                        >
                            Solutions

                            <svg className={`ml-1 mt-2  transform transition-transform duration-500 rotate-0 hover:rotate-180    `} clip-rule="evenodd" fill="none" fill-rule="evenodd" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L12 15.5858L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor"></path></svg>

                        </button>
                        {SolutionCard && (
                                <div className=" absolute left-4 mt-20">
                                    <SolutionCards />
                                </div>
    
    
                        )}
                        
                        <button className={`flex font-bold text-lg  hover:text-[#6559ff] text-[#293745] `}
                             onMouseEnter={showSupportCards}
                             onMouseLeave={hideSupportCards}
                        >
                            Support

                            <svg className={` ml-1 mt-2 transform transition-transform duration-500 rotate-0 hover:rotate-180  `} clip-rule="evenodd" fill="none" fill-rule="evenodd" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.29289 8.29289C3.68342 7.90237 4.31658 7.90237 4.70711 8.29289L12 15.5858L19.2929 8.29289C19.6834 7.90237 20.3166 7.90237 20.7071 8.29289C21.0976 8.68342 21.0976 9.31658 20.7071 9.70711L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L3.29289 9.70711C2.90237 9.31658 2.90237 8.68342 3.29289 8.29289Z" fill="currentColor"></path></svg>

                        </button>
                        {SupportCard && (
                                <div className=" absolute left-4 mt-20">
                                    <SupportCards />
                                </div>
    
    
                        )}

                        <button className="font-bold text-lg  hover:text-[#6559ff] text-[#293745] relative group"
                        >
                            Customers
                            <span
                                className="hidden w-[80px] h-[5px]  bg-blue-600
                                absolute left-0 top-[60px] group-hover:block"
                            ></span>
                        </button>
                        <button
                            className="font-bold text-lg  hover:text-[#6559ff] text-[#293745] group relative "
                        >
                            Pricing
                            <span
                                className="hidden w-[80px] h-[5px]  bg-blue-600
                                absolute left-0 top-[60px] group-hover:block"
                            ></span>
                        </button>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <select id="" name="">
                        <option value="apple">English</option>
                    </select>

                    <button className="text-[#4740d4] font-medium rounded-lg border-2 px-6">Log in</button>
                    <ButtonField 
                    text= "Sign up for free "/>
                </div>


            </div>



            <div className="mt-4"><hr /></div>
        </div>
    );
};

export default Header;
