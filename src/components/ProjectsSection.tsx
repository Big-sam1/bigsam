import React, { useState } from 'react';
import { loadImage } from '../utils/imageLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';
interface Project {
  id: number;
  title: string;
  category: 'Web Apps' | 'UI Design' | 'Branding';
  description: string;
  tech: string[];
  image: string;
}
const projects: Project[] = [
  {
    id: 1,
    title: 'Nexora',
    category: 'Web Apps',
    description: 'SaaS Dashboard',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: loadImage('im1.png')
  },
  {
    id: 2,
    title: 'Artify',
    category: 'UI Design',
    description: 'Creative Portfolio',
    tech: ['React.js', 'Framer Motion'],
    image: loadImage('im2.png')
  },
  {
    id: 3,
    title: 'Taskly',
    category: 'Web Apps',
    description: 'Task Management App',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    image: loadImage('im3.png')
  },
  {
    id: 4,
    title: 'Finova',
    category: 'Branding',
    description: 'Finance Landing Page',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: loadImage('im4.png')
  },
  {
    id: 5,
    title: 'Velora',
    category: 'Web Apps',
    description: 'E-commerce Store',
    tech: ['Next.js', 'Stripe', 'Tailwind CSS'],
    image: loadImage('im5.png')
  },
  {
    id: 6,
    title: 'Zentry',
    category: 'UI Design',
    description: 'UI/UX Design',
    tech: ['Figma', 'Adobe XD'],
    image: loadImage('im1.png')
  }
];

const filters = ['All', 'Web Apps', 'UI Design', 'Branding'] as const;
interface ProjectsSectionProps {
  showAllLink?: boolean;
}
export function ProjectsSection({ showAllLink = false }: ProjectsSectionProps) {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const filtered =
  active === 'All' ? projects : projects.filter((p) => p.category === active);
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel eyebrow="My Work" title="Featured Projects" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) =>
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${active === f ? 'text-white dark:text-ink-900' : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white'}`}>
            
              {active === f &&
            <motion.span
              layoutId="project-filter-bg"
              className="absolute inset-0 bg-ink-900 dark:bg-white rounded-full"
              transition={{
                type: 'spring',
                stiffness: 380,
                damping: 30
              }} />

            }
              <span className="relative">{f}</span>
            </button>
          )}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <AnimatePresence mode="popLayout">
            {filtered.map((project) =>
            <motion.article
              key={project.id}
              layout
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.95
              }}
              transition={{
                duration: 0.4
              }}
              className="group rounded-2xl border border-ink-200 dark:border-ink-800 overflow-hidden bg-white dark:bg-ink-950 hover:border-ink-400 dark:hover:border-ink-600 transition-colors">
              
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                
                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/40 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <a
                    href="#"
                    aria-label="Live demo"
                    className="w-10 h-10 rounded-full bg-white text-ink-900 flex items-center justify-center hover:scale-110 transition-transform">
                    
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                    <a
                    href="#"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-full bg-white text-ink-900 flex items-center justify-center hover:scale-110 transition-transform">
                    
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-500 dark:text-ink-400 mt-0.5">
                    {project.description}
                  </p>
                  <p className="text-xs text-ink-400 dark:text-ink-500 mt-3">
                    {project.tech.join(', ')}
                  </p>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </motion.div>

        {showAllLink &&
        <div className="mt-12 text-center">
            <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors group">
            
              View All Projects
              <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        }
      </div>
    </section>);

}