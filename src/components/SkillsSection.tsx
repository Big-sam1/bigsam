import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionLabel } from './SectionLabel';
const categories = ['Frontend', 'Backend', 'UI/UX', 'Tools'] as const;
type Category = (typeof categories)[number];
const data: Record<
  Category,
  {
    name: string;
    level: number;
  }[]> =
{
  Frontend: [
  {
    name: 'React.js',
    level: 95
  },
  {
    name: 'Next.js',
    level: 90
  },
  {
    name: 'JavaScript (ES6+)',
    level: 90
  },
  {
    name: 'TypeScript',
    level: 85
  },
  {
    name: 'HTML & CSS',
    level: 95
  },
  {
    name: 'Tailwind CSS',
    level: 90
  }],

  Backend: [
  {
    name: 'Node.js',
    level: 85
  },
  {
    name: 'Express',
    level: 80
  },
  {
    name: 'MongoDB',
    level: 75
  },
  {
    name: 'PostgreSQL',
    level: 70
  },
  {
    name: 'Firebase',
    level: 85
  },
  {
    name: 'REST APIs',
    level: 90
  }],

  'UI/UX': [
  {
    name: 'Figma',
    level: 95
  },
  {
    name: 'Wireframing',
    level: 90
  },
  {
    name: 'Prototyping',
    level: 88
  },
  {
    name: 'User Research',
    level: 75
  },
  {
    name: 'Design Systems',
    level: 90
  },
  {
    name: 'Accessibility',
    level: 85
  }],

  Tools: [
  {
    name: 'Git & GitHub',
    level: 90
  },
  {
    name: 'Vite / Webpack',
    level: 85
  },
  {
    name: 'Jest / Vitest',
    level: 75
  },
  {
    name: 'Docker',
    level: 65
  },
  {
    name: 'VS Code',
    level: 95
  },
  {
    name: 'Vercel',
    level: 90
  }]

};
const techCards = [
{
  name: 'React',
  sub: 'React'
},
{
  name: 'NX',
  sub: 'Next.js'
},
{
  name: 'TS',
  sub: 'TypeScript'
},
{
  name: 'TW',
  sub: 'Tailwind CSS'
},
{
  name: 'JS',
  sub: 'JavaScript'
},
{
  name: '5',
  sub: 'HTML5'
}];

export function SkillsSection() {
  const [active, setActive] = useState<Category>('Frontend');
  return (
    <section className="py-20 md:py-28 bg-ink-50/50 dark:bg-ink-900/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel eyebrow="My Skills" title="Technologies I work with" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? 'text-white dark:text-ink-900' : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white'}`}>
            
              {active === cat &&
            <motion.span
              layoutId="skill-tab-bg"
              className="absolute inset-0 bg-ink-900 dark:bg-white rounded-full"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} />

            }
              <span className="relative">{cat}</span>
            </button>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Progress bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -16
              }}
              transition={{
                duration: 0.3
              }}
              className="space-y-5">
              
              {data[active].map((skill, i) =>
              <div key={skill.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-ink-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-ink-500 dark:text-ink-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-ink-200 dark:bg-ink-800 rounded-full overflow-hidden">
                    <motion.div
                    initial={{
                      width: 0
                    }}
                    animate={{
                      width: `${skill.level}%`
                    }}
                    transition={{
                      duration: 1,
                      delay: i * 0.08,
                      ease: 'easeOut'
                    }}
                    className="h-full bg-ink-900 dark:bg-white rounded-full" />
                  
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Tech cards grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: '-80px'
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.06
                }
              }
            }}
            className="grid grid-cols-3 gap-4">
            
            {techCards.map((tech) =>
            <motion.div
              key={tech.sub}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4
                  }
                }
              }}
              whileHover={{
                y: -4
              }}
              className="aspect-square flex flex-col items-center justify-center rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-950 hover:border-ink-400 dark:hover:border-ink-600 transition-all">
              
                <div className="text-2xl font-bold text-ink-900 dark:text-white">
                  {tech.name}
                </div>
                <div className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                  {tech.sub}
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}