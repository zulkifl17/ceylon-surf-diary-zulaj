import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { SurfStory } from '../types';

gsap.registerPlugin(ScrollTrigger);

const stories: SurfStory[] = [
  {
    id: 1,
    image: 'images/lifestyle (7).jpg',
    colorImage: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'DAWN PATROL',
    description: 'The first light breaks over Weligama Bay. A lone surfer paddles out, chasing the perfect wave before the crowds arrive.',
    location: 'Weligama Bay, 5:47 AM',
  },
  {
    id: 1,
    image: 'images/surfing (10).jpg',
    colorImage: 'images/surfing (10).jpg',
    title: 'INSIDE THE BARREL',
    description: 'Time stands still. The roar of the ocean becomes a whisper. This is where fear transforms into pure flow.',
    location: 'Mirissa Point, High Tide',
  },
  {
    id: 1,
    image: 'images/lifestyle (12).jpg',
    colorImage: 'https://images.pexels.com/photos/2166927/pexels-photo-2166927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'THE GROM',
    description: 'Young blood, old soul. At twelve years old, he rides with the confidence of a veteran. The future of Sri Lankan surfing.',
    location: 'Weligama Beach, Training Session',
  },
  {
    id: 1,
    image: 'images/lifestyle (8).jpg',
    colorImage: 'https://images.pexels.com/photos/1654489/pexels-photo-1654489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'AFTER THE STORM',
    description: 'The monsoon passed. The ocean delivered. These are the waves we wait for all season long.',
    location: 'Secret Spot, Post-Monsoon',
  },
];

function StoryCard({ story, index }: { story: SurfStory; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(true);
  const isReverse = index % 2 === 1;

  useEffect(() => {
    if (!cardRef.current) return;

    const element = cardRef.current;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-screen items-center ${ isReverse ? 'lg:direction-rtl' : ''
        }`}
      style={{ opacity: 1 }}
    >
      <div
        className={`relative h-[50vh] lg:h-screen overflow-hidden cursor-pointer ${ isReverse ? 'lg:order-2' : ''
          }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
      >
        <img
          src={story.image}
          alt={story.title}
          className={`w-full h-full object-cover transition-all duration-700 ${ isHovered ? 'scale-110' : 'scale-100'
            }`}
          style={{ filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)' }}
        />
      </div>

      <div
        className={`flex items-center justify-center p-8 lg:p-16 bg-background ${ isReverse ? 'lg:order-1' : ''
          }`}
      >
        <div className="max-w-xl">
          <h3
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-primary-text"
            style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
          >
            {story.title}
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-6 text-primary-text opacity-80">
            {story.description}
          </p>
          <p className="text-sm md:text-base uppercase tracking-widest text-primary-text opacity-60">
            {story.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function SurfStories() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={sectionRef} className="bg-background">
      <div className="py-20 px-8 bg-background text-primary-text">
        <h2
          className="text-6xl md:text-8xl font-bold tracking-tight text-primary-text"
          style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
        >
          SURF STORIES
        </h2>
        <p className="text-xl mt-4 tracking-wider opacity-80 text-primary-text">Moments frozen in time</p>
      </div>

      {stories.map((story, index) => (
        <StoryCard key={story.id} story={story} index={index} />
      ))}
    </section>
  );
}
