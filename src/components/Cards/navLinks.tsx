import { Link } from "react-router-dom";


interface NavLink {
    label: string;
    href: string;
  }
  
  interface LinksListProps {
    links: NavLink[];
  }
  
  const LinksList: React.FC<LinksListProps> = ({ links }) => {
    return (
      <ul className="space-y-4 mt-4">
        {links.map((link, index) => (
          <li key={index} className="text-sm font-normal text-gray-800">
            <Link to={link.href} className="flex items-center space-x-2">
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
  export default LinksList;
  