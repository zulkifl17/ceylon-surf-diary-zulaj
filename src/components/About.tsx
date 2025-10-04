import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    gsap.to(textRef.current, {
      y: -100,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-background flex items-center">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div
            ref={imageRef}
            className="relative h-[60vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src="https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Surf Photographer"
              className={`w-full h-full object-cover transition-all duration-700 ${
                isHovered ? 'scale-110' : 'scale-100'
              }`}
              style={{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)' }}
            />
          </div>

          <div ref={textRef} className="flex items-center justify-center p-8 lg:p-16 bg-primary-text text-background">
            <div className="max-w-xl">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-background" style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}>
                CAPTURING<br />THE SOUL<br />OF WELIGAMA
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 text-background">
                I capture the raw power of the ocean and the soul of Weligama's surf culture.
              </p>
              <p className="text-base md:text-lg leading-relaxed opacity-80 text-background">
                Every wave tells a story. Every surfer carries a dream. Through my lens,
                I freeze moments where courage meets nature, where passion rides the tide,
                and where Weligama's spirit comes alive in black and white.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
