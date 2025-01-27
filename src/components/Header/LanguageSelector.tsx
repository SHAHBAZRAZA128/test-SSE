import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const languages = [
    { name: "English", code: "eng" },
    { name: "Deutsch", code: "de" },
    { name: "Español", code: "es" },
    { name: "Français", code: "fr" },
    { name: "Nederlands", code: "nl" },
    { name: "Português", code: "pt" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-4 py-2  text-lg font-medium text-gray-700 bg-white rounded-lg  hover:bg-gray-100  hover:text-blue-800"
      >
        <span className="flex items-center gap-1">
          <img
            src={`https://flagcdn.com/16x12/gb.png`}
            alt="Selected Language"
            className="w-4 h-3"
          />
          {selectedLanguage}
        </span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 z-10 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-36">
          <ul className="py-1">
            {languages.map((language) => (
              <li key={language.code}>
                <button
                  onClick={() => selectLanguage(language.name)}
                  className="flex items-center hover:text-blue-800 hover:underline  px-4 py-2 text-lg text-gray-700 "
                >
                  {language.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
