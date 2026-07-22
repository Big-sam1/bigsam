import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';
interface PageHeaderProps {
  title: string;
  description?: string;
}
export function PageHeader({ title, description }: PageHeaderProps) {
  const { pathname } = useLocation();
  const current = pathname.replace('/', '') || 'home';
  return (
    <section className="pt-10 pb-12 md:pt-14 md:pb-16 border-b border-ink-200 dark:border-ink-800 bg-ink-50/40 dark:bg-ink-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.nav
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.4
          }}
          className="flex items-center gap-2 text-sm text-ink-500 dark:text-ink-400 mb-4">
          
          <Link
            to="/"
            className="hover:text-ink-900 dark:hover:text-white transition-colors">
            
            Home
          </Link>
          <ChevronRightIcon className="w-3.5 h-3.5" />
          <span className="text-ink-900 dark:text-white capitalize">
            {current}
          </span>
        </motion.nav>
        <motion.h1
          initial={{
            opacity: 0,
            y: 14
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.05
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink-900 dark:text-white">
          
          {title}
        </motion.h1>
        {description &&
        <motion.p
          initial={{
            opacity: 0,
            y: 14
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5,
            delay: 0.1
          }}
          className="mt-4 text-base sm:text-lg text-ink-600 dark:text-ink-400 max-w-2xl">
          
            {description}
          </motion.p>
        }
      </div>
    </section>);

}