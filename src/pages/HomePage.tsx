
import {CustomerReviewSection, CustomerStoriesSection, ImprovementSection, WorkWaySection} from "../components/index"
import {ExplorePlatformSection , Chat , HeroSection, PartnersSection , MoreFeaturesSection, FeatureCardsSection, GoalsSection } from "../components/index"

const HomePage: React.FC = () => {
    return (
        <div>
            
            <HeroSection />
            <PartnersSection />
            <ExplorePlatformSection />
            <FeatureCardsSection />
            <MoreFeaturesSection />
            <GoalsSection />
            <CustomerReviewSection />
            <CustomerStoriesSection />
            <WorkWaySection />
            <ImprovementSection />
            <Chat />
           
        </div>
    )
}

export default HomePage;