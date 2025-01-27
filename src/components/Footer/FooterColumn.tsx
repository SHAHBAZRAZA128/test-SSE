import React from "react";
import { Link } from "react-router-dom";

interface FooterColumnProps {
    heading : string;
    links : string[];
    path? : any;
    className?: string;
    linkClassName?: string;
    style? :React.CSSProperties;
}

const FooterColumn: React.FC<FooterColumnProps> = ({heading, links,path , className, linkClassName , style}) => {
    return(
        <div className="footer-column" style={style}>
            <h4 className={`font-bold mb-4 text-[#6559ff] } ${className}`}>{heading}</h4>
            <ul className="space-y-4">
                {links.map((link,index)=>(
                    <li key={index}>
                        <Link to={path?.[index] || '#'}
                        className={`text-gray-600 hover:underline hover:text-[#6559ff] ${linkClassName}`}
                        > {link}</Link>
                        
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default FooterColumn