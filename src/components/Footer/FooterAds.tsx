
import {AppStoreicon , GooglePlayicon} from "../../assets/index"


interface FooterAdsProps {
    logo: string; 
    appStoreLink: string; 
    googlePlayLink: string; 
}

const FooterAds: React.FC<FooterAdsProps> = ({ 
    logo, 
    appStoreLink, 
    googlePlayLink 
}) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:justify-between border rounded-2xl p-2 pr-8 w-full max-w-md space-x-1">
            
            <div className="flex items-center  md:mb-0">
                <img src={logo} alt="" className="p-4 w-18 h-18 mr-4" />
                
            </div>

            
            <div className="flex space-x-2">
                <a 
                    href={appStoreLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <img 
                        src={AppStoreicon} 
                        alt="App Store" 
                        className="w-28"
                    />
                </a>
                <a 
                    href={googlePlayLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <img 
                        src={GooglePlayicon} 
                        alt="Google Play" 
                        className="w-32 "
                    />
                </a>
            </div>
        </div>
    );
};

export default FooterAds;