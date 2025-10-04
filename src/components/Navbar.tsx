import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', active: true },
    { name: 'Gallery', active: false },
    { name: 'Services', active: false },
    { name: 'Our Story', active: false },
    { name: 'Testimonials', active: false },
    { name: 'Contact Us', active: false },
  ];

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 bg-background p-4 hover:bg-primary-text hover:text-background transition-colors duration-300"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Fullscreen Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 bg-transparent p-4 hover:bg-primary-text hover:text-background transition-colors duration-300"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Menu Items */}
            <nav className="flex flex-col items-center space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                  custom={index}
                  variants={itemVariants}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text hover:opacity-60 transition-opacity duration-300 ${
                    item.active ? 'underline underline-offset-8' : ''
                  }`}
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.05em' }}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
