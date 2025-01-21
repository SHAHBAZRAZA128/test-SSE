
import {ExplorePlatformSection , Chat, Footer , Header , HeroSection, PartnersSection , MoreFeaturesSection, FeatureCardsSection, GoalsSection } from "../components/index"

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <PartnersSection />
            <ExplorePlatformSection />
            <FeatureCardsSection />
            <MoreFeaturesSection />
            <GoalsSection />
            <Chat />
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage;