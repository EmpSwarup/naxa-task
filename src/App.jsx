
import './App.css'
import NoticeBar from './components/NoticeBar/NoticeBar';
import LandingSection from './components/Landing/LandingSection';
import ServicesSection from './components/Services/ServicesSection';

const App = () => {
  return (
    <div>
      <NoticeBar />
      <LandingSection />
      <ServicesSection />
    </div>
  );
};

export default App;

