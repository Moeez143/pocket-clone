import Navbar from "./components/Navbar.jsx"
import HeroSection from "./components/HeroSection.jsx"
import PortfolioSection from "./components/PortfolioSection.jsx"
import FeatureSection from "./components/FeatureSection.jsx"
import TipsSection from "./components/TipsSection.jsx"
import LifeChangingSection from "./components/LifeChangingSection.jsx"
import FaqSection from "./components/FaqSection.jsx"
import Footer from "./components/Footer.jsx"
function App() {

    return (
        <>
            <Navbar />
            <HeroSection/>
            <FeatureSection />
            <PortfolioSection />
            <TipsSection />
            <LifeChangingSection />
            <FaqSection />
            <Footer />
        </>
    )
}

export default App
