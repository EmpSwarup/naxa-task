
import './App.css'
import NoticeBar from './components/NoticeBar/NoticeBar';
import Navbar from './components/Navbar/Navbar';
import LandingSection from './components/Landing/LandingSection';
import ServicesSection from './components/Services/ServicesSection';

const App = () => {
  return (
    <div>
      <NoticeBar />
      <Navbar />
      <LandingSection />
      <ServicesSection />
    </div>
  );
};

export default App;

