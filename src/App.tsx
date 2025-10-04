import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingImages from './components/FloatingImages';
import About from './components/About';
import HorizontalGallery from './components/HorizontalGallery';
import SurfStories from './components/SurfStories';
import ImmersiveSection from './components/ImmersiveSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#F7F7F5]">
      <Navbar />
      <Hero />
      <FloatingImages />
      <About />
      <HorizontalGallery />
      <SurfStories />
      <ImmersiveSection />
      <Contact />
    </div>
  );
}

export default App;
