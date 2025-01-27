
import {CustomerReview, CustomerStoriesSection, ImprovementSection, WorkWaySection} from "../components/index"
import {ExplorePlatformSection , Chat, Footer , Header , HeroSection, PartnersSection , MoreFeaturesSection, FeatureCardsSection, GoalsSection } from "../components/index"

const HomePage: React.FC = () => {
    return (
        <div>
            
            <HeroSection />
            <PartnersSection />
            <ExplorePlatformSection />
            <FeatureCardsSection />
            <MoreFeaturesSection />
            <GoalsSection />
            <CustomerReview />
            <CustomerStoriesSection />
            <WorkWaySection />
            <ImprovementSection />
            <Chat />
           
        </div>
    )
}

export default HomePage;