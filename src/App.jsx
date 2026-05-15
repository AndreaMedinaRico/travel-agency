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
    <HeroSection />
    <div className="h-40" />
    <PackagesSection />
    <DestinationSection />
    <FAQSection />
    <FAQButton />
    <ReviewSection />
    <AboutSection />
    <Footer />
  </>
);
}

export default App;