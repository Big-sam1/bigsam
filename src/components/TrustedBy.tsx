import React from 'react';
import { motion } from 'framer-motion';
const companies = [
'DMD',
'Neoscratch',
'RAHURA',
'EXØRA',
'NEXØD',
'XØDAS',
'XMØDIA',
'DØXIA'];

export function TrustedBy() {
  return (
    <section className="py-12 border-y border-ink-200 dark:border-ink-800 bg-ink-50/50 dark:bg-ink-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="text-sm font-medium text-ink-500 dark:text-ink-400 flex-shrink-0 sm:w-40">
            Trusted by
            <br />
            companies like
          </p>

          <div className="flex-1 relative overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...companies, ...companies].map((c, i) =>
              <motion.span
                key={i}
                whileHover={{
                  scale: 1.05
                }}
                className="text-2xl sm:text-3xl font-bold text-ink-400 dark:text-ink-600 hover:text-ink-900 dark:hover:text-white transition-colors cursor-default">
                
                  {c}
                </motion.span>
              )}
            </div>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-50/80 dark:from-ink-900/30 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-50/80 dark:from-ink-900/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>);

}