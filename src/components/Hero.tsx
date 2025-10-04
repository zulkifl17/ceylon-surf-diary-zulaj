import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!heroRef.current || !textRef.current || !videoRef.current) return;

    gsap.to(textRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.to(videoRef.current, {
      filter: 'blur(8px)',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full bg-background overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ filter: 'grayscale(100%)' }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-background bg-opacity-30" />

      <div ref={textRef} className="relative h-full flex flex-col items-center justify-center text-primary-text px-4">
        <h1 className="font-tangerine text-8xl md:text-9xl lg:text-[6rem] text-center mb-8">
          Surf Through<br />My Lens
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl text-center mb-12 px-6"
        >
          <p className="text-base md:text-lg leading-relaxed font-josefin" style={{ color: '#121212' }}>
            Through the lens, I chase the energy of the ocean — capturing surfers dancing with waves, sunlight glistening on water, and the raw spirit of adventure. Every photograph tells a story of freedom, motion, and the endless horizon.
          </p>
        </motion.div>

        <button className="border-2 border-primary-text px-12 py-4 text-lg font-bold tracking-wider hover:bg-primary-text hover:text-background transition-all duration-300">
          VIEW PORTFOLIO
        </button>

        <div className="absolute bottom-12 flex flex-col items-center animate-bounce">
          <span className="text-sm tracking-widest mb-2">SCROLL</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
