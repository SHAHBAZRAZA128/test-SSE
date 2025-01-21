import React from "react";
import { Link } from "react-router-dom";

import {FooterColumn , FooterAds} from "../../components/index";
import {SafetyCulturelogo ,Sheqsylogo} from "../../assets/index"




const Footer: React.FC = () => {
    const footerData = [
        { heading: "Product", links: ["Pricing", "Book Demo", "Product Updates", "SafetyCulture(formaly iAuditor)"] },
        { heading: "Support", links: ["Help Center", "Partner Support", "API developer Documentation", "Digitize your checklist", "Contact Us"] },
        { heading: "Resources", links: ["Checklist library", "App & Software guides", "Checklist guides", "Topic guides", "eBooks", "Blog"] },
        { heading: "Company", links: ["About", "Careers", "News Room", "Brand Partnerships", "Meat the leadership team", "Events"] },
    ]

    return (
        <footer className=" pl-8 z-0">
            <div className="max-w-7xl max-auto grid grid-cols-4">
                {footerData.map((column, index) => (
                    <FooterColumn key={index}
                        heading={column.heading}
                        links={column.links} />
                )
                )}
            </div>
            <div className="flex   gap-6 justify-center items-center  min-h-screen">

            <FooterAds
                logo={SafetyCulturelogo}
                appStoreLink="https://apps.apple.com"
                googlePlayLink="https://play.google.com"
            />

            <FooterAds
                logo={Sheqsylogo}               
                appStoreLink="https://apps.apple.com"
                googlePlayLink="https://play.google.com"
            />
        </div>
    
      
            <div className="mt-0">
                <Link to="/status" className="ml-6 pr-1 text-gray-600 hover:underline hover:text-[#6559ff]">Status</Link>  |
                <Link to="/" className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Legal</Link> |
                <Link to="/"  className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Terms and Conditions</Link> |
                <Link to="/"  className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Privacy Portal</Link> |
                <Link to="/"  className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Security</Link> |
                <span  className="p-1 text-gray-600 ">&copy; SafetyCulture 2025</span> 
            </div>



        </footer>  




    )

}
export default Footer;