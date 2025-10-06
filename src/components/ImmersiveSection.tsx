import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImmersiveSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !text1Ref.current || !text2Ref.current || !text3Ref.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          pin: contentRef.current,
          pinSpacing: true,
        },
      });

      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, '+=0.5')
        .fromTo(
          text2Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, '+=0.5')
        .fromTo(
          text3Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-primary-text">
      <div ref={contentRef} className="h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/lifestyle (2).jpg"
            alt="Epic surf moment"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        <div className="relative h-full flex items-center justify-center text-background">
          <div
            ref={text1Ref}
            className="absolute text-center px-4"
            style={{ opacity: 0 }}
          >
            <h3
              className="text-7xl md:text-9xl font-bold tracking-tight"
              style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
            >
              THE WAVES
            </h3>
          </div>

          <div
            ref={text2Ref}
            className="absolute text-center px-4"
            style={{ opacity: 0 }}
          >
            <h3
              className="text-7xl md:text-9xl font-bold tracking-tight"
              style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
            >
              THE RIDERS
            </h3>
          </div>

          <div
            ref={text3Ref}
            className="absolute text-center px-4"
            style={{ opacity: 0 }}
          >
            <h3
              className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight"
              style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
            >
              THE STORY OF<br />WELIGAMA SURF
            </h3>
            <p className="text-xl md:text-2xl tracking-widest opacity-90">
              Where ocean meets passion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
