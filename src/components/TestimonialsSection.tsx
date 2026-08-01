import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { QuoteIcon, StarIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      'Bigsam is an outstanding developer. He delivered our project on time and exceeded our expectations with his attention to detail and creativity.',
    name: 'IZABAYO Olivier',
    role: 'Cybersecurity Specialist',
    image:
      'src/images/cl2.png',
    rating: 5
  },
  {
    id: 2,
    content:
      'Working with Bigsam was a fantastic experience. He understood our needs perfectly and built a beautiful, fast and user-friendly website.',
    name: 'Theo dev',
    role: 'Founder, Rwanda Scratch',
    image:
      'src/images/cl1.jpg',
    rating: 5
  },
  {
    id: 3,
    content:
      'Highly professional, communicative and skilled. Bigsam turned ideas into reality and delivered a product that we are proud of.',
    name: 'Anicet Chiza',
    role: 'Web développer',
    image:
      'src/images/cl3.jpg',
    rating: 5
  },
  {
    id: 4,
    content:
      'Pixel-perfect execution and clean code. Bigsam helped transform our outdated platform into a modern delight.',
    name: 'Teta Keza',
    role: 'Product Manager, Genz Inspire Hub',
    image:
      'src/images/cl4.jpg',
    rating: 5
  },
  {
    id: 5,
    content:
      'A rare hybrid of designer and engineer. The level of polish and care in every detail elevated our entire brand.',
    name: 'Olivia Martinez',
    role: 'Client',
    image:
      'src/images/cl5.jpg',
    rating: 5
  }
];

export function TestimonialsSection() {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-65%']);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-ink-50/50 dark:bg-ink-900/30">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400 mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-white">
              What Clients Say
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-400 dark:text-ink-500 font-medium">
            Scroll down to explore client feedback →
          </p>
        </div>

        {/* Horizontal Sliding Track */}
        <div className="w-full overflow-hidden px-6 lg:px-12">
          <motion.div style={{ x }} className="flex gap-6 w-max">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="w-[300px] sm:w-[380px] md:w-[420px] p-6 sm:p-8 rounded-3xl border border-ink-200 dark:border-ink-800 bg-white/95 dark:bg-ink-950/95 backdrop-blur-xl shadow-xl flex-shrink-0 flex flex-col justify-between"
              >
                <div>
                  <QuoteIcon className="w-8 h-8 text-ink-300 dark:text-ink-700 mb-4" />
                  <p className="text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed font-normal">
                    "{t.content}"
                  </p>
                </div>

                <div>
                  <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-900">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/40"
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-base font-bold text-ink-900 dark:text-white truncate">
                        {t.name}
                      </p>
                      <p className="text-xs text-ink-500 dark:text-ink-400 truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Scroll Progress Bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-10">
          <div className="w-full h-1 bg-ink-200 dark:bg-ink-800 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-ink-900 dark:bg-white rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}