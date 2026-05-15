import Navbar from './components/layout/Navbar';
import HeroSection from './sections/HeroSection';
import PackagesSection from './sections/PackageSection';  
import DestinationSection from './sections/DestinationSection';

function App() {
  return (<>
    <Navbar />
    <HeroSection />
    <PackagesSection />
    <DestinationSection />
  </>
);
}

export default App;