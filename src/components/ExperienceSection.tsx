import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
interface Entry {
  period: string;
  initial: string;
  role: string;
  company: string;
  description: string;
}
const entries: Entry[] = [
  {
  period: '2026 - Present',
  initial: 'B',
  role: 'Graphic Designer',
  company: 'RAHURA & NeoScratch Brands',
  description:
  'Worked on multiple client projects using HTML, CSS, JavaScript and WordPress. Gained strong foundation in web development.'
},
{
  period: '2025 - 2026',
  initial: 'M',
  role: 'Full Stack Developer',
  company: 'Dream Maker Developers Company',
  description:
  'Developed responsive websites and web apps, collaborated with designers and backend developers to deliver high-quality products.'
},
{
  period: '2023 - 2025',
  initial: 'C',
  role: 'Frontend Developer',
  company: 'NEXOD Team',
  description:
  '  Leading frontend development for SaaS products with React, Next.js and TypeScript. Building scalable and performant web applications.'
}];

const cvUrl = new URL('../../images/Bigsam CV.pdf', import.meta.url).href;

export function ExperienceSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel eyebrow="Experience" title="My Professional Journey" />

        <div className="relative max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-200 dark:bg-ink-800">
            <motion.div
              initial={{
                scaleY: 0
              }}
              whileInView={{
                scaleY: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut'
              }}
              style={{
                transformOrigin: 'top'
              }}
              className="w-full h-full bg-ink-900 dark:bg-white" />
            
          </div>

          <div className="space-y-10">
            {entries.map((e, i) =>
            <motion.div
              key={e.role}
              initial={{
                opacity: 0,
                x: -20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true,
                margin: '-60px'
              }}
              transition={{
                duration: 0.5,
                delay: i * 0.15
              }}
              className="relative grid grid-cols-[40px_1fr] sm:grid-cols-[120px_40px_1fr] gap-4 sm:gap-6 items-start">
              
                <p className="sm:order-1 col-span-2 sm:col-span-1 text-xs sm:text-sm font-medium text-ink-500 dark:text-ink-400 sm:text-right pl-10 sm:pl-0">
                  {e.period}
                </p>
                <div className="sm:order-2 relative">
                  <div className="w-4 h-4 rounded-full bg-ink-900 dark:bg-white ring-4 ring-white dark:ring-ink-950 relative z-10" />
                </div>
                <div className="sm:order-3 -mt-1">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-ink-100 dark:bg-ink-900 flex items-center justify-center font-bold text-ink-900 dark:text-white flex-shrink-0">
                      {e.initial}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-ink-900 dark:text-white">
                        {e.role}
                      </h3>
                      <p className="text-sm text-ink-500 dark:text-ink-400">
                        {e.company}
                      </p>
                      <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12">
          <a
            href={cvUrl}
            download="Bigsam CV.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors">
            
            Download CV
            <DownloadIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>);

}