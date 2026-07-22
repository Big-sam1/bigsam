import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
export function CallToActionBanner() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
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
            duration: 0.6
          }}
          className="relative overflow-hidden rounded-2xl bg-ink-900 dark:bg-white p-8 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gold/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-azure/20 blur-3xl" />

          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white dark:text-ink-900">
              Have a project in mind?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-ink-300 dark:text-ink-600">
              Let's work together and create something amazing.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-white text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-gold/30 transition-all self-start md:self-auto group">
            
            Let's Talk
            <ArrowUpRightIcon className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>);

}