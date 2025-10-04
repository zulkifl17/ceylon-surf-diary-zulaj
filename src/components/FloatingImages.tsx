import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImageData {
  category: string;
  description: string;
  src: string;
}

const imageData: ImageData[] = [
  {
    category: 'Surf Action',
    description: 'Category: Surf Action',
    src: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    category: 'Lifestyle',
    description: 'Category: Lifestyle',
    src: 'https://images.pexels.com/photos/1654499/pexels-photo-1654499.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    category: 'Golden Hour',
    description: 'Category: Golden Hour',
    src: 'https://images.pexels.com/photos/1573008/pexels-photo-1573008.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

export default function FloatingImages() {
  const containerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const image3Ref = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current || !image1Ref.current || !image2Ref.current || !image3Ref.current) return;

    const images = [image1Ref.current, image2Ref.current, image3Ref.current];
    const heroHeight = window.innerHeight;
    const finalRowY = heroHeight - 250;

    // ScrollTrigger to move images down and lock them into a row
    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        if (progress < 0.5) {
          setIsLocked(false);

          // Move images toward final row position
          const spacing = 280;
          images.forEach((img, index) => {
            const finalX = (index - 1) * spacing;
            gsap.to(img, {
              x: finalX * (progress / 0.5),
              y: finalRowY * (progress / 0.5),
              scale: 1 + (0.5 * (progress / 0.5)),
              duration: 0,
            });
          });
        } else {
          setIsLocked(true);

          // Lock into final row position - below SCROLL text
          const spacing = 280;
          images.forEach((img, index) => {
            const finalX = (index - 1) * spacing;
            gsap.to(img, {
              x: finalX,
              y: finalRowY,
              scale: 1.5,
              duration: 0,
            });
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Determine overlay content based on hovered image
  const getOverlayContent = (imageIndex: number, hoveredIdx: number) => {
    if (imageIndex === hoveredIdx) return null;

    if (hoveredIdx === 0) {
      if (imageIndex === 1) return imageData[0].category;
      if (imageIndex === 2) return imageData[0].description;
    } else if (hoveredIdx === 1) {
      if (imageIndex === 0) return imageData[1].category;
      if (imageIndex === 2) return imageData[1].description;
    } else if (hoveredIdx === 2) {
      if (imageIndex === 0) return imageData[2].category;
      if (imageIndex === 1) return imageData[2].description;
    }

    return null;
  };

  return (
    <section ref={containerRef} className="relative h-[50vh] w-full pointer-events-none">
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-30">
        {[0, 1, 2].map((index) => {
          const initialPositions = [
            { top: '15%', left: '10%' },
            { top: '20%', right: '15%' },
            { top: '55%', left: '50%', transform: 'translateX(-50%)' },
          ];

          const overlayContent = hoveredIndex !== null ? getOverlayContent(index, hoveredIndex) : null;

          return (
            <motion.div
              key={index}
              ref={index === 0 ? image1Ref : index === 1 ? image2Ref : image3Ref}
              className="absolute w-36 h-36 md:w-44 md:h-44 overflow-hidden shadow-2xl cursor-pointer pointer-events-auto"
              style={{
                top: initialPositions[index].top,
                left: initialPositions[index].left,
                right: initialPositions[index].right,
                transform: initialPositions[index].transform,
              }}
              initial={{ y: 0, x: 0, scale: 1 }}
              animate={
                !isLocked
                  ? {
                      y: index === 0 ? [0, -15, 0] : index === 1 ? [0, 12, 0] : [0, -18, 0],
                      x: index === 0 ? [0, 8, 0] : index === 1 ? [0, -10, 0] : [0, 6, 0],
                      scale: index === 0 ? [1, 1.05, 1] : index === 1 ? [1, 1.08, 1] : [1, 1.06, 1],
                    }
                  : {}
              }
              transition={{
                duration: index === 0 ? 6 : index === 1 ? 7 : 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.img
                src={imageData[index].src}
                alt={imageData[index].category}
                className="w-full h-full object-cover"
                animate={{
                  filter:
                    !isLocked && hoveredIndex === index
                      ? 'grayscale(0%)'
                      : isLocked && hoveredIndex === index
                      ? 'grayscale(0%)'
                      : 'grayscale(100%)',
                }}
                transition={{ duration: 0.5 }}
              />

              <AnimatePresence>
                {isLocked && overlayContent && (
                  <motion.div
                    className="absolute inset-0 bg-black flex items-center justify-center"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '100%' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                  >
                    <p className="text-white text-center text-sm md:text-base font-medium px-4">
                      {overlayContent}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
