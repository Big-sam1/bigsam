import React from 'react';
import { motion } from 'framer-motion';
interface SectionLabelProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}
export function SectionLabel({
  eyebrow,
  title,
  description,
  align = 'left'
}: SectionLabelProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.5
      }}
      className={`mb-12 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}`}>
      
      {eyebrow &&
      <p className="inline-flex items-center gap-2 text-sm font-medium text-gold mb-3">
          <span className="w-6 h-px bg-gold" />
          {eyebrow}
        </p>
      }
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
        {title}
      </h2>
      {description &&
      <p className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
          {description}
        </p>
      }
    </motion.div>);

}