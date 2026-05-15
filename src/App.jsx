import Navbar from './components/layout/Navbar';
import HeroSection from './sections/HeroSection';
import PackagesSection from './sections/PackageSection';  
import DestinationSection from './sections/DestinationSection';
import FAQSection from './sections/FAQSection';
import FAQButton from './components/common/FAQButton';
import ReviewSection from './sections/reviewSection';

function App() {
  return (<>
    <Navbar />
    <HeroSection />
    <PackagesSection />
    <DestinationSection />
    <FAQSection />
    <FAQButton />
    <ReviewSection />
  </>
);
}

export default App;