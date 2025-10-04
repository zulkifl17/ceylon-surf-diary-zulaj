import Hero from './components/Hero';
import About from './components/About';
import HorizontalGallery from './components/HorizontalGallery';
import SurfStories from './components/SurfStories';
import ImmersiveSection from './components/ImmersiveSection';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Hero />
      <About />
      <HorizontalGallery />
      <SurfStories />
      <ImmersiveSection />
      <Contact />
    </div>
  );
}

export default App;
