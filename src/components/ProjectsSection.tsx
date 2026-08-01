import React, { useState } from 'react';
import { loadImage } from '../utils/imageLoader';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon, ExternalLinkIcon, BookOpenIcon, XIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { SectionLabel } from './SectionLabel';

interface Project {
  id: number;
  title: string;
  category: 'Web Apps' | 'Website' | 'Branding';
  description: string;
  about?: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Stay fixed',
    category: 'Web Apps',
    description: 'SaaS Dashboard & Resource Management System',
    about: 'Stay Fixed is a garage management system that helps repair shops manage customers, vehicles, repair jobs, mechanics, service history, and payments in one easy-to-use platform. It streamlines daily garage operations, improves efficiency, and keeps repair records organized.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MYSQL Database'],
    image: loadImage('stayfixed app.png'),
    demoUrl: '#'
  },
  {
    id: 2,
    title: 'Movie-Box',
    category: 'Website',
    description: 'Creative Movie Discovery & Streaming Interface',
    about: 'M-Box is an interactive movie discovery platform that lets users explore trending films, browse by genre, search for titles instantly, and view detailed information about each movie in a modern, engaging experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: loadImage('movieweb.jpg'),
    demoUrl: 'https://m-box-five.vercel.app/'
  },
  {
    id: 3,
    title: 'MBS Smart Clock app',
    category: 'Web Apps',
    description: 'Interactive Task & Time Management Application',
    about: 'MBS Smart Clock app combines task scheduling with customizable countdown timers, stopwatches, and digital clock displays designed with pure JavaScript and lightweight responsive styling.',
    tech: ['HTML', 'Vanilla JavaScript', 'CSS'],
    image: loadImage('clockapp.png'),
    demoUrl: 'https://mbs-clock.vercel.app/'
  },
  {
    id: 4,
    title: 'MBS New Updates',
    category: 'Branding',
    description: 'Creative Advertising & Brand Showcase Site',
    about: '**MBS Global News** is a modern news platform designed to deliver timely, accurate, and engaging coverage of global events, technology, business, education, entertainment, and community stories. With a clean design and interactive features, it keeps readers informed through reliable reporting, breaking news, and insightful articles from around the world.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: loadImage('NEWS.png'),
    demoUrl: 'https://m-news-nu.vercel.app/'
  },
  {
    id: 5,
    title: 'Samex AI',
    category: 'Web Apps',
    description: 'Intelligent Desktop AI Agent & Assistant',
    about: 'Samex AI is a next-generation desktop AI agent powered by Groq models and Python backend services, offering lightning-fast workflow automation and intelligent contextual responses.',
    tech: ['Next.js', 'Groq', 'Python'],
    image: loadImage('samex.png'),
    demoUrl: '#'
  },
  {
    id: 6,
    title: 'JESUS IS KING',
    category: 'Website',
    description: 'Creative Church & Community Web Platform',
    about: 'JESUS IS KING is a modern church platform designed to connect congregations through live stream integrations, event calendars, sermon media archives, and interactive community resources.',
    tech: ['TypeScript', 'Tailwind CSS'],
    image: loadImage('churchweb.jpg'),
    demoUrl: 'https://church-web-six.vercel.app/'
  },
  {
    id: 7,
    title: 'MS-Foundation',
    category: 'Website',
    description: 'Interactive Digital Studio & Modern Portfolio Site',
    about: 'MS-Foundation is a nonprofit organization website that showcases its mission to improve lives through three core pillars. Featuring a clean, modern design, inspiring stories, and accessible resources, the site highlights the foundation programs, community impact, and opportunities for people to learn, volunteer, partner, and support meaningful change.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: loadImage('NGO.png'),
    demoUrl: 'https://ms-ngo.vercel.app/'
  },
  {
    id: 8,
    title: 'Personal portifolio',
    category: 'Branding',
    description: 'Corporate Brand Identity & Visual Guidelines Design',
    about: 'Vanguard Identity is a corporate branding system encompassing brand strategy, logo variations, custom typography guidelines, and promotional marketing collateral.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: loadImage('PTFO.png'),
    demoUrl: 'https://eddyson-beta.vercel.app/'
  },
  {
    id: 9,
    title: 'MS E-commerse',
    category: 'Branding',
    description: 'MS E-Commerce helps businesses sell online based on Cloudstore.',
    about: 'MS E-Commerce is a modern online shopping platform offering quality products at affordable prices. We provide a secure, fast, and convenient shopping experience with a wide range of products, easy ordering, and reliable delivery.',
    tech: ['Graphic Design', 'Social Media Branding', 'Figma'],
    image: loadImage('ECOM.png'),
    demoUrl: '#'
  }
];

const filters = ['All', 'Web Apps', 'Website', 'Branding'] as const;

interface ProjectsSectionProps {
  showAllLink?: boolean;
}

export function ProjectsSection({ showAllLink = false }: ProjectsSectionProps) {
  const [active, setActive] = useState<(typeof filters)[number]>('All');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleFilterChange = (filter: (typeof filters)[number]) => {
    setActive(filter);
    setShowAll(false);
  };

  const getDisplayedProjects = () => {
    if (active === 'All') {
      if (showAll) {
        return projects;
      }
      const topWebApps = projects.find((p) => p.category === 'Web Apps');
      const topWebsite = projects.find((p) => p.category === 'Website');
      const topBranding = projects.find((p) => p.category === 'Branding');
      return [topWebApps, topWebsite, topBranding].filter(Boolean) as Project[];
    }

    return projects.filter((p) => p.category === active);
  };

  const displayedProjects = getDisplayedProjects();

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel eyebrow="My Work" title="Featured Projects" />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => handleFilterChange(f)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === f
                  ? 'text-white dark:text-ink-900'
                  : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white'
              }`}
            >
              {active === f && (
                <motion.span
                  layoutId="project-filter-bg"
                  className="absolute inset-0 bg-ink-900 dark:bg-white rounded-full"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
              <span className="relative">{f}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
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
                className="group rounded-2xl border border-ink-200 dark:border-ink-800 overflow-hidden bg-white dark:bg-ink-950 hover:border-ink-400 dark:hover:border-ink-600 transition-colors flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute inset-0 bg-ink-900/0 group-hover:bg-ink-900/50 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => setSelectedProject(project)}
                      aria-label="Read about project"
                      title="Read about project"
                      className="w-10 h-10 rounded-full bg-white text-ink-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <BookOpenIcon className="w-4 h-4" />
                    </button>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live demo"
                      className="w-10 h-10 rounded-full bg-white text-ink-900 flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(project)}
                        aria-label="Read project details"
                        title="Read project details"
                        className="p-1.5 text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white transition-colors rounded-lg hover:bg-ink-100 dark:hover:bg-ink-800/50 flex-shrink-0"
                      >
                        <BookOpenIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-ink-500 dark:text-ink-400 mt-1">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-xs text-ink-400 dark:text-ink-500 mt-4 font-medium">
                    {project.tech.join(', ')}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Projects Pagination Control (for 'All' view) */}
        {active === 'All' && projects.length > 3 && (
          <div className="mt-12 text-center flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold hover:bg-ink-800 dark:hover:bg-ink-100 transition-all shadow-lg hover:shadow-xl group"
            >
              <span>{showAll ? 'Show Featured Only' : 'View More Projects'}</span>
              {showAll ? (
                <ChevronUpIcon className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

        {showAllLink && (
          <div className="mt-8 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-white transition-colors group"
            >
              View All Projects Page
              <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        )}
      </div>

      {/* Glassmorphic Project Detail Modal with Swipe Up / Down Animation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-ink-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-6 overflow-hidden"
          >
            <motion.div
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto bg-white/95 dark:bg-ink-950/95 border border-ink-200 dark:border-ink-800 rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl relative flex flex-col"
            >
              {/* Swipe Handle Indicator for Mobile */}
              <div className="w-12 h-1.5 bg-ink-300 dark:bg-ink-700 rounded-full mx-auto mb-4 sm:hidden flex-shrink-0" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-ink-100 dark:bg-ink-900 text-ink-600 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white flex items-center justify-center transition-colors shadow-sm"
              >
                <XIcon className="w-5 h-5" />
              </button>

              {/* Header Info */}
              <div className="mb-4 pr-8">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-ink-100 dark:bg-ink-900 text-ink-700 dark:text-ink-300 mb-2">
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-900 dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-sm text-ink-600 dark:text-ink-400 mt-1">
                  {selectedProject.description}
                </p>
              </div>

              {/* Image Preview */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-ink-100 dark:bg-ink-900 mb-6 border border-ink-200 dark:border-ink-800 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* About Project Section */}
              <div className="mb-6 space-y-2">
                <h3 className="text-lg font-bold text-ink-900 dark:text-white">
                  About Project
                </h3>
                <p className="text-sm sm:text-base text-ink-600 dark:text-ink-300 leading-relaxed">
                  {selectedProject.about || selectedProject.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-400 dark:text-ink-500 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-ink-100 dark:bg-ink-900 text-ink-800 dark:text-ink-200 border border-ink-200/50 dark:border-ink-800/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-ink-100 dark:border-ink-900">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-semibold flex items-center justify-center gap-2 hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors shadow-md"
                >
                  <span>Live Demo</span>
                  <ExternalLinkIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}