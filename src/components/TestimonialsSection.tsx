import React, { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  QuoteIcon,
  StarIcon,
  ChevronLeftIcon,
  ChevronRightIcon } from
'lucide-react';
import { SectionLabel } from './SectionLabel';
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
  name: 'Sarah Johnson',
  role: 'CEO, TechNova',
  image:
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  rating: 5
},
{
  id: 2,
  content:
  'Working with Bigsam was a fantastic experience. He understood our needs perfectly and built a beautiful, fast and user-friendly website.',
  name: 'Michael Brown',
  role: 'Founder, Artify',
  image:
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  rating: 5
},
{
  id: 3,
  content:
  'Highly professional, communicative and skilled. Bigsam is my go-to developer for any future projects without a doubt.',
  name: 'Emily Davis',
  role: 'Marketing Director',
  image:
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  rating: 5
},
{
  id: 4,
  content:
  'Pixel-perfect execution and clean code. Bigsam helped transform our outdated platform into a modern delight.',
  name: 'James Wilson',
  role: 'Product Manager, Velora',
  image:
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  rating: 5
},
{
  id: 5,
  content:
  'A rare hybrid of designer and engineer. The level of polish and care in every detail elevated our entire brand.',
  name: 'Olivia Martinez',
  role: 'Founder, Studio Lume',
  image:
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
  rating: 5
}];

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCount(1);else
      if (w < 1024) setCount(2);else
      setCount(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return count;
}
export function TestimonialsSection() {
  const visible = useVisibleCount();
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const maxStart = Math.max(0, testimonials.length - visible);
  const next = useCallback(() => {
    setStart((s) => s >= maxStart ? 0 : s + 1);
  }, [maxStart]);
  const prev = () => {
    setStart((s) => s <= 0 ? maxStart : s - 1);
  };
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, paused]);
  useEffect(() => {
    if (start > maxStart) setStart(0);
  }, [maxStart, start]);
  const shown = testimonials.slice(start, start + visible);
  const totalDots = maxStart + 1;
  return (
    <section
      className="py-20 md:py-28 bg-ink-50/50 dark:bg-ink-900/30"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10 gap-6">
          <div>
            <p className="text-sm font-medium text-ink-500 dark:text-ink-400 mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              What Clients Say
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-700 dark:text-ink-300 hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-900 hover:border-transparent transition-all">
              
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-700 dark:text-ink-300 hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-900 hover:border-transparent transition-all">
              
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((t) =>
            <motion.article
              key={t.id}
              initial={{
                opacity: 0,
                y: 24
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -24
              }}
              transition={{
                duration: 0.4
              }}
              className="p-6 sm:p-7 rounded-2xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950">
              
                <QuoteIcon className="w-6 h-6 text-ink-300 dark:text-ink-700" />
                <p className="mt-4 text-sm sm:text-base text-ink-700 dark:text-ink-300 leading-relaxed">
                  {t.content}
                </p>

                <div className="mt-6 flex items-center gap-3 pt-5 border-t border-ink-100 dark:border-ink-900">
                  <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-gold/40" />
                
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink-900 dark:text-white truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400 truncate">
                      {t.role}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex gap-0.5">
                  {Array.from({
                  length: t.rating
                }).map((_, i) =>
                <StarIcon key={i} className="w-4 h-4 fill-gold text-gold" />
                )}
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({
            length: totalDots
          }).map((_, i) =>
          <button
            key={i}
            onClick={() => setStart(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === start ? 'w-8 bg-ink-900 dark:bg-white' : 'w-2 bg-ink-300 dark:bg-ink-700 hover:bg-ink-500'}`} />

          )}
        </div>
      </div>
    </section>);

}