import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Mail, Phone } from 'lucide-react';
import type { ContactForm } from '../types';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    if (!formRef.current) return;

    const inputs = formRef.current.querySelectorAll('.form-input');

    const ctx = gsap.context(() => {
      inputs.forEach((input, index) => {
        gsap.from(input, {
          opacity: 0,
          x: index % 2 === 0 ? -50 : 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: input,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitMessage('Message sent! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  return (
    <section ref={sectionRef} className="bg-white py-20">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-6xl md:text-8xl font-bold mb-8 text-black tracking-tight"
            style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
          >
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            Book a surf photography session or collaborate on your next project.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div ref={formRef}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-input">
                  <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all"
                  />
                </div>

                <div className="form-input">
                  <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-black text-white py-4 px-8 font-bold uppercase tracking-wider hover:bg-gray-800 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>

                {submitMessage && (
                  <p className="text-center text-black font-medium">{submitMessage}</p>
                )}
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3
                  className="text-4xl font-bold mb-6 tracking-tight"
                  style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
                >
                  CONNECT
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-lg hover:opacity-70 transition-opacity group"
                  >
                    <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">@weligama_surf_lens</span>
                  </a>

                  <a
                    href="mailto:hello@weligamasurf.com"
                    className="flex items-center gap-4 text-lg hover:opacity-70 transition-opacity group"
                  >
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">hello@weligamasurf.com</span>
                  </a>

                  <a
                    href="tel:+94123456789"
                    className="flex items-center gap-4 text-lg hover:opacity-70 transition-opacity group"
                  >
                    <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">+94 123 456 789</span>
                  </a>
                </div>
              </div>

              <div>
                <h3
                  className="text-4xl font-bold mb-6 tracking-tight"
                  style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
                >
                  LOCATION
                </h3>
                <p className="text-lg leading-relaxed">
                  Based in Weligama Bay<br />
                  Sri Lanka's surf capital<br />
                  Available for worldwide bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white py-12 mt-20">
        <div className="container mx-auto px-8 text-center">
          <h4
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            style={{ fontFamily: 'Bebas Neue, Oswald, sans-serif', letterSpacing: '0.05em' }}
          >
            WELIGAMA SURF LENS
          </h4>
          <p className="text-sm tracking-widest opacity-70">
            © 2025 ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </section>
  );
}
