import { useEffect, useRef } from 'react';
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
    <section ref={heroRef} className="relative h-screen w-full bg-black overflow-hidden">
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

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div ref={textRef} className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="font-bold text-6xl md:text-8xl lg:text-9xl text-center mb-8 tracking-tight" style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}>
          SURF THROUGH<br />MY LENS
        </h1>
        <p className="text-xl md:text-2xl mb-12 tracking-widest">WELIGAMA</p>
        <button className="border-2 border-white px-12 py-4 text-lg font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300">
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
