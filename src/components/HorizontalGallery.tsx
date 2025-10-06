import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PortfolioImage } from '../types';

gsap.registerPlugin(ScrollTrigger);

const images: PortfolioImage[] = [
  {
    id: 1,
    src: 'images/sunset (5).jpg',
    colorSrc: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Surfer at sunset',
  },
  {
    id: 2,
    src: 'images/surfing (6).jpg',
    colorSrc: 'https://images.pexels.com/photos/1654487/pexels-photo-1654487.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Wave barrel',
  },
  {
    id: 3,
    src: 'images/lifestyle (5).jpg',
    colorSrc: 'https://images.pexels.com/photos/1298684/pexels-photo-1298684.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Surfer riding wave',
  },
  {
    id: 4,
    src: 'images/surfing (3).jpg',
    colorSrc: 'https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Ocean wave',
  },
  {
    id: 5,
    src: 'images/beach (1).jpg',
    colorSrc: 'https://images.pexels.com/photos/2889440/pexels-photo-2889440.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Surfer in action',
  },
  {
    id: 6,
    src: 'images/beach (8).jpg',
    colorSrc: 'https://images.pexels.com/photos/1654490/pexels-photo-1654490.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Perfect wave',
  },
  {
    id: 7,
    src: 'images/sunset (1).jpg',
    colorSrc: 'https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Surfboard on beach',
  },
  {
    id: 8,
    src: 'images/surfing (5).jpg',
    colorSrc: 'https://images.pexels.com/photos/3571026/pexels-photo-3571026.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Aerial surf view',
  },
  {
    id: 9,
    src: 'images/surfing (7).jpg',
    colorSrc: 'https://images.pexels.com/photos/3571026/pexels-photo-3571026.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000',
    alt: 'Aerial surf view',
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;

    const track = trackRef.current;
    const trackWidth = track.scrollWidth;
    const windowWidth = window.innerWidth;

    const scrollTween = gsap.to(track, {
      x: -(trackWidth - windowWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${ trackWidth - windowWidth }`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="py-20 px-8">
        <h2 className="text-primary-text text-6xl md:text-8xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}>
          PORTFOLIO
        </h2>
        <p className="text-primary-text text-xl mb-12 tracking-wider opacity-80">Scroll to explore →</p>
      </div>

      <div ref={trackRef} className="flex gap-8 px-8 pb-20" style={{ width: 'max-content' }}>
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden cursor-pointer"
            style={{ width: 'auto', height: '450px' }}
            onMouseEnter={() => setHoveredId(image.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-all duration-700 ${ hoveredId === image.id ? 'scale-110' : 'scale-100'
                }`}
              style={{
                filter: hoveredId === image.id ? 'grayscale(0%)' : 'grayscale(100%)',
              }}
            />
            {hoveredId === image.id && (
              <div className="absolute inset-0 bg-background bg-opacity-20 transition-opacity duration-300" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
