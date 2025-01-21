
import {ExplorePlatformSection , Chat, Footer , Header , HeroSection, PartnersSection} from "../components/index"

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <PartnersSection />
            <ExplorePlatformSection />
            <Chat />
            <Footer />
        </div>
    )
}

export default HomePage;