import Navbar from './components/layout/Navbar';
import HeroSection from './sections/HeroSection';
import PackagesSection from './sections/PackageSection';  
import DestinationSection from './sections/DestinationSection';
import FAQSection from './sections/FAQSection';
import FAQButton from './components/common/FAQButton';
import ReviewSection from './sections/ReviewSection';
import AboutSection from './sections/AboutSection';
import Footer from './components/layout/Footer';

function App() {
  return (<>
    <Navbar />
    <FAQButton />

    <HeroSection />
    <div className="h-40" />
    <PackagesSection />
    <div className="h-40" />
    <DestinationSection />
    <div className="h-40" />
    <ReviewSection />
    <div className="h-40" />
    <AboutSection />
    <div className="h-40" />
    <FAQSection />
    <Footer />
  </>
);
}

export default App;