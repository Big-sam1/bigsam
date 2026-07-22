import React from 'react';
import { loadImage } from '../utils/imageLoader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ArrowUpRightIcon,
  DownloadIcon
} from
  'lucide-react';
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24
  },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
const socials = [
  {
    Icon: GithubIcon,
    href: 'https://github.com/Big-sam1',
    label: 'GitHub'
  },
  {
    Icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/mugisha-samuel-07288a344/',
    label: 'LinkedIn'
  },
  {
    Icon: TwitterIcon,
    href: 'https://x.com/Bigsam934310',
    label: 'Twitter'
  },
  {
    Icon: MailIcon,
    href: 'mailto:bigsamdmd@gmail.com',
    label: 'Email'
  }];

const cvUrl = new URL('../../images/Bigsam CV.pdf', import.meta.url).href;

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-20 left-4 grid grid-cols-6 gap-2 opacity-30 dark:opacity-20 pointer-events-none">
        {Array.from({
          length: 36
        }).map((_, i) =>
          <div key={i} className="w-1 h-1 rounded-full bg-ink-400" />
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 dark:text-ink-400 mb-4">

              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-900 dark:text-white">

              Bigsam
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-3 text-2xl sm:text-3xl font-medium text-ink-400 dark:text-ink-500 h-10">

              <TypeAnimation
                sequence={[
                  'Full stack Developer',
                  1800,
                  'UI/UX Designer',
                  1800,
                  'Graphic Designer',
                  1800,
                  'Web developer',
                  1800]
                }
                speed={45}
                repeat={Infinity}
                cursor />

            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-6 text-base sm:text-lg text-ink-600 dark:text-ink-400 max-w-lg leading-relaxed">

              I design and build exceptional digital experiences that are fast,
              accessible, visually appealing and built with best practices.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-4">

              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors group">

                View My Work
                <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <a
                href={cvUrl}
                download="Bigsam CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-300 dark:border-ink-700 text-ink-900 dark:text-white text-sm font-medium hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors">

                Download CV
                <DownloadIcon className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-10 flex items-center gap-3">

              {socials.map(({ Icon, href, label }) =>
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{
                    y: -3
                  }}
                  className="w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-600 dark:text-ink-400 hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-900 hover:border-transparent transition-all">

                  <Icon className="w-4 h-4" />
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Image side */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="order-1 lg:order-2 relative flex justify-center">

            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Soft accent glows */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-gold/30 blur-3xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-azure/30 blur-3xl" />

              {/* Circle bg */}
              <div className="absolute inset-0 bg-ink-100 dark:bg-ink-900 rounded-full ring-1 ring-gold/30" />

              {/* Image */}
              <img
                src={loadImage('im1.png')}
                alt="Bigsam portrait"
                className="absolute inset-0 w-full h-full object-cover rounded-full" />


              {/* Experience badge */}
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 200
                }}
                className="absolute -bottom-2 -left-2 sm:left-0 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gold shadow-xl flex flex-col items-center justify-center border-4 border-white dark:border-ink-950">

                <span className="text-2xl sm:text-3xl font-bold text-white">
                  1+
                </span>
                <span className="text-[10px] sm:text-xs text-white/90 font-medium text-center leading-tight px-2">
                  Years
                  <br />
                  Experience
                </span>
              </motion.div>

              {/* Decorative dots */}
              <div className="absolute -bottom-6 right-0 grid grid-cols-5 gap-1.5 opacity-50">
                {Array.from({
                  length: 25
                }).map((_, i) =>
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-ink-300 dark:bg-ink-700" />

                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}