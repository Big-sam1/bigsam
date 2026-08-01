import React, { Children } from 'react';
import { loadImage } from '../utils/imageLoader';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  MapPinIcon,
  GraduationCapIcon,
  CheckCircleIcon,
  ArrowUpRightIcon,
  DownloadIcon } from
'lucide-react';

const cvUrl = new URL('../../images/Bigsam CV.pdf', import.meta.url).href;
const facts = [
{
  Icon: BriefcaseIcon,
  label: '1+ Years Experience',
  sub: 'in Web Development'
},
{
  Icon: MapPinIcon,
  label: 'Based in Kigali, Rwanda',
  sub: 'Available Worldwide'
},
{
  Icon: GraduationCapIcon,
  label: 'Graduated from CAG',
  sub: 'Computer Science'
},
{
  Icon: CheckCircleIcon,
  label: 'Freelance Available',
  sub: 'Open for new projects'
}];

const stats = [
{
  value: '15+',
  label: 'Projects Completed'
},
{
  value: '30+',
  label: 'Happy Clients'
},
{
  value: '1+',
  label: 'Years Experience'
},
{
  value: '10+',
  label: 'Technologies'
}];

export function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 0.6
            }}>
            
            <p className="inline-flex items-center gap-2 text-sm font-medium text-gold mb-3">
              <span className="w-6 h-px bg-gold" />
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink-900 dark:text-white">
              Passionate about creating digital experiences
            </h2>
            <p className="mt-5 text-base sm:text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
              I'm a creative developer and UI/UX designer with a passion for
              building beautiful, functional and user-centered websites that
              make a real impact.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {facts.map(({ Icon, label, sub }, i) =>
              <motion.div
                key={label}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08
                }}
                className="group flex items-start gap-3 p-4 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-gold/60 hover:bg-ink-50 dark:hover:bg-ink-900 transition-all">
                
                  <div className="w-10 h-10 rounded-lg bg-ink-100 dark:bg-ink-900 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                    <Icon className="w-4 h-4 text-ink-900 dark:text-white group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">
                      {label}
                    </p>
                    <p className="text-xs text-ink-500 dark:text-ink-400 mt-0.5">
                      {sub}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors group">
                
                More About Me
                <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </Link>
              <a
                href={cvUrl}
                download="Bigsam CV.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-300 dark:border-ink-700 text-ink-900 dark:text-white text-sm font-medium hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors">
                
                Download CV
                <DownloadIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-80px'
            }}
            transition={{
              duration: 0.6
            }}
            className="relative">
            
            <div className="group relative aspect-square rounded-2xl overflow-hidden ring-1 ring-ink-200 dark:ring-ink-800">
              {/* Decorative gold/blue corner accents */}
              <div className="pointer-events-none absolute -top-3 -left-3 w-20 h-20 rounded-full bg-gold/30 blur-2xl z-0" />
              <div className="pointer-events-none absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-azure/30 blur-2xl z-0" />

              <img
                src={loadImage('im2.png')}
                alt="Working at desk"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
              
              <img
                src={loadImage('im3.png')}
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              

              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl ring-2 ring-gold/0 group-hover:ring-gold/70 transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
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
                staggerChildren: 0.1
              }
            }
          }}
          className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12 pt-12 border-t border-ink-200 dark:border-ink-800">
          
          {stats.map((stat) =>
          <motion.div
            key={stat.label}
            variants={{
              hidden: {
                opacity: 0,
                y: 20
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5
                }
              }
            }}
            className="text-center sm:text-left">
            
              <p className="text-4xl md:text-5xl font-bold text-gold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
                {stat.label}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}