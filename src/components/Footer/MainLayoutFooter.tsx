import React from "react";
import { Link } from "react-router-dom";

import {  ColumnLinks, FooterAds } from "../../components/index";
import { LinkedInicon, SafetyCulturelogo, Sheqsylogo, Twittericon } from "../../assets/index"




const Footer: React.FC = () => {
    const footerData = [
        { heading: "Product", links: ["Pricing", "Book Demo", "Product Updates", "SafetyCulture(formaly iAuditor)"] },
        { heading: "Support", links: ["Help Center", "Partner Support", "API developer Documentation", "Digitize your checklist", "Contact Us"] },
        { heading: "Resources", links: ["Checklist library", "App & Software guides", "Checklist guides", "Topic guides", "eBooks", "Blog"] },
        { heading: "Company", links: ["About", "Careers", "News Room", "Brand Partnerships", "Meat the leadership team", "Events"] },
    ]


    return (
        <footer className=" ">
            <div className="max-w-7xl max-auto grid grid-cols-4 pl-16">
                {footerData.map((column, index) => (
                    <ColumnLinks key={index}
                        heading={column.heading}
                        links={column.links}
                        className="text-lg" />
                )
                )}
            </div>
            <div className="flex   gap-6 justify-center items-center my-16 ">

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


            <div className="bg-gray-200 w-full  p-6 pl-12 flex justify-between">
                <div className="">
                    <Link to="/status" className=" pr-1 text-gray-600 hover:underline hover:text-[#6559ff]">Status</Link>  |
                    <Link to="/legal" className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Legal</Link> |
                    <Link to="/terms-and-conditions" className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Terms and Conditions</Link> |
                    <Link to="/privacy-portal" className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Privacy Portal</Link> |
                    <Link to="/security" className="p-1 text-gray-600 hover:underline hover:text-[#6559ff]">Security</Link> |
                    <span className="p-1 text-gray-600 ">&copy; SafetyCulture 2025</span>
                </div>
                <div className="flex gap-2 pr-6">
                    <a href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInicon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Twittericon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://pk.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedInicon} alt="LinkedIn Icon" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <img src={Twittericon} alt="LinkedIn Icon" />
                    </a>
        

                </div>

            </div>



        </footer>




    )

}
export default Footer;