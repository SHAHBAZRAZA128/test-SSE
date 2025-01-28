import React, { useRef } from "react";
import ScrollToTop from "./ScrollToTop";

const ScrollBox: React.FC = () => {
  // Scrollable container ka reference
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll up/down functions
  const scrollUp = () => {
    scrollContainerRef.current?.scrollBy({ top: -50, behavior: "smooth" });
  };

  const scrollDown = () => {
    scrollContainerRef.current?.scrollBy({ top: 50, behavior: "smooth" });
  };

  return (
    <div className="relative h-screen">
      {/* Scroll Up Button */}
      <button
        onClick={scrollUp}
        className="fixed top-4 left-4 bg-gray-300 p-2 rounded shadow-md z-10"
      >
        ▲
      </button>

      

      <ScrollToTop />

      {/* Scroll Down Button */}
      <button
        onClick={scrollDown}
        className="fixed bottom-4 left-4 bg-gray-300 p-2 rounded shadow-md z-10"
      >
        ▼
      </button>
    </div>
  );
};

export default ScrollBox;
