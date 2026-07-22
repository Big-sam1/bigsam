import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  CodeIcon,
  PaletteIcon,
  SmartphoneIcon,
  LightbulbIcon } from
'lucide-react';
import { SectionLabel } from './SectionLabel';
const services = [
{
  Icon: CodeIcon,
  title: 'Web Development',
  description:
  'Building fast, responsive and scalable websites and web applications.'
},
{
  Icon: PaletteIcon,
  title: 'UI/UX Design',
  description:
  'Designing intuitive and beautiful user interfaces that enhance user experience.'
},
{
  Icon: SmartphoneIcon,
  title: 'Responsive Design',
  description:
  'Creating mobile-friendly designs that look great on all devices and screen sizes.'
},
{
  Icon: LightbulbIcon,
  title: 'Consulting',
  description:
  'Providing technical guidance and consulting to help your project succeed.'
}];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel eyebrow="Services" title="What I Can Do For You" />

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {services.map(({ Icon, title, description }) =>
          <motion.div
            key={title}
            variants={{
              hidden: {
                opacity: 0,
                y: 24
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5
                }
              }
            }}
            whileHover={{
              y: -6
            }}
            className="group p-6 rounded-2xl border border-ink-200 dark:border-ink-800 hover:border-ink-900 dark:hover:border-white hover:shadow-lg dark:hover:shadow-none transition-all bg-white dark:bg-ink-950">
            
              <div className="w-12 h-12 rounded-lg bg-ink-100 dark:bg-ink-900 flex items-center justify-center mb-5 group-hover:bg-ink-900 dark:group-hover:bg-white transition-colors">
                <Icon className="w-5 h-5 text-ink-900 dark:text-white group-hover:text-white dark:group-hover:text-ink-900 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-ink-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-sm text-ink-600 dark:text-ink-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}