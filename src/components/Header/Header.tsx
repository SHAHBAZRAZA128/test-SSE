import React, { useRef, useState } from "react";
import { SafetyCulturelogo, BelowArrow, Arrowinbutton } from "../../assets/index";
import { ProductCards, SolutionCards, SupportCards, ButtonField } from "../../components/index"
import { useNavigate } from "react-router-dom";
import "../../Config/i18n";

import { LanguageSelector } from "../../components/index";

const Header: React.FC = () => {



  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showFullScreenCard, setShowFullScreenCard] = useState<boolean>(false);
  const cardsRef = useRef<HTMLDivElement | null>(null);


  const handleNavigation = (path: string) => {
    navigate(path)
  }

  const handleMouseEnter = (card: string) => {
    setHoveredCard(card);
    setShowFullScreenCard(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    if (cardsRef.current && !cardsRef.current.contains(e.relatedTarget as Node)) {
      setHoveredCard(null);
      setShowFullScreenCard(false);
    }

  };
  React.useEffect(() => {
    const handleHoverOutside = (e: MouseEvent) => {
      if (cardsRef.current && !cardsRef.current.contains(e.target as Node)) {
        setHoveredCard(null);
        setShowFullScreenCard(false);

      }
    }
    document.addEventListener("mousedown", handleHoverOutside);
    return()=>{
      document.removeEventListener("mousedown" , handleHoverOutside);
      
    };
  }, []);

  return (
    // Navbar
    <div className=" fixed w-full top-0 left-0 h-16 z-50   ">
      <div className="flex justify-between items-center border-b-[1.5px]  bg-white border-gray-200  p-4">
        <div className="text-xl font-bold flex space-x-12">
          <img className="cursor-pointer" src={SafetyCulturelogo} alt="Logo"
            onClick={() => navigate("/")} />
          <div className="flex space-x-4">
            <div
              onMouseEnter={() => handleMouseEnter("Product")}

            >
              <button className="flex font-bold text-lg space-x-4 hover:text-[#6559ff] text-[#293745]"
              >
                Product
                <img
                  className="ml-1 mt-2 transform transition-transform duration-500 rotate-0 hover:rotate-180"
                  src={BelowArrow}
                  alt="Arrow"
                />
              </button>
              {hoveredCard === "Product" && showFullScreenCard && (
                <div
                  ref={cardsRef}
                  className="fixed top-[100px] left-0 right-0 bottom-[50px] bg-white z-50 "
                  onMouseLeave={handleMouseLeave}
                >
                  <ProductCards />
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("Solution")}
             
            >
              <button 
              className="flex font-bold text-lg hover:text-[#6559ff] text-[#293745]">
                Solutions
                <img
                  className="ml-1 mt-2 transform transition-transform duration-500 rotate-0 hover:rotate-180"
                  src={BelowArrow}
                  alt="Arrow"
                />
              </button>
              {hoveredCard === "Solution" && showFullScreenCard && (
                <div 
                ref={cardsRef}
                className="fixed top-[100px] left-0 right-0 bottom-[10px] bg-white z-50 "
                onMouseLeave={handleMouseLeave}>
                  <SolutionCards />
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("Support")}
              
            >
              <button className="flex font-bold text-lg hover:text-[#6559ff] text-[#293745]">
                Support
                <img
                  className="ml-1 mt-2 transform transition-transform duration-500 rotate-0 hover:rotate-180"
                  src={BelowArrow}
                  alt="Arrow"
                />
              </button>
              {hoveredCard === "Support" && showFullScreenCard && (
                <div 
                ref={cardsRef}
                onMouseLeave={handleMouseLeave}
                className="fixed top-[100px] left-0 right-0 bottom-[50px] bg-white z-50 ">
                  <SupportCards />
                </div>
              )}
            </div>

            <button className="font-bold text-lg hover:text-[#6559ff] text-[#293745] relative group"
              onClick={() => handleNavigation("/customers")}>
              Customers
              <span className="hidden w-[80px] h-[5px] bg-blue-600 absolute left-0 top-[60px] group-hover:block"></span>
            </button>
            <button className="font-bold text-lg hover:text-[#6559ff] text-[#293745] group relative"
              onClick={() => handleNavigation("/pricing")}>
              Pricing
              <span className="hidden w-[80px] h-[5px] bg-blue-600 absolute left-0 top-[60px] group-hover:block"></span>
            </button>
          </div>
        </div>

        <div className="flex space-x-2">

          <LanguageSelector />
          <div>
            <button className="text-[#4740d4] px-4 py-2 text-lg hover:bg-gray-100 font-medium rounded-lg border  flex"
            onClick={()=>handleNavigation("/login")}>
              <img className="pt-2 pr-1 " src={Arrowinbutton} alt="icon" /> Log in
            </button>
          </div>

          <ButtonField text="Sign up for free"
          path="/sign-up"
         />
        </div>
      </div>

      
    </div>
  );
};

export default Header;
