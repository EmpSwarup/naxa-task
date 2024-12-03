
import './App.css'
import NoticeBar from './components/NoticeBar/NoticeBar';
import LandingSection from './components/Landing/LandingSection';
import ServicesSection from './components/Services/ServicesSection';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTopButton';

const App = () => {
  return (
    <div>
      <NoticeBar />
      <LandingSection />
      <ServicesSection />
      <ScrollToTopButton />
    </div>
  );
};

export default App;

