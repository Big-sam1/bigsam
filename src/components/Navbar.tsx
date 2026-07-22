import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
  ArrowUpRightIcon } from
'lucide-react';
import { Logo } from './Logo';
import { useTheme } from './ThemeProvider';
const navLinks = [
{
  name: 'Home',
  to: '/'
},
{
  name: 'About',
  to: '/about'
},
{
  name: 'Services',
  to: '/services'
},
{
  name: 'Projects',
  to: '/projects'
},
{
  name: 'Contact',
  to: '/contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.4
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/80 dark:bg-ink-950/80 backdrop-blur-lg border-b border-ink-200 dark:border-ink-800' : 'py-5 bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
            `relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? 'text-ink-900 dark:text-white' : 'text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white'}`
            }>
            
              {({ isActive }) =>
            <>
                  {link.name}
                  {isActive &&
              <motion.span
                layoutId="nav-indicator"
                className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gold rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />

              }
                </>
            }
            </NavLink>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors">
            
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{
                  rotate: -90,
                  opacity: 0
                }}
                animate={{
                  rotate: 0,
                  opacity: 1
                }}
                exit={{
                  rotate: 90,
                  opacity: 0
                }}
                transition={{
                  duration: 0.2
                }}>
                
                {theme === 'dark' ?
                <SunIcon className="w-4 h-4" /> :

                <MoonIcon className="w-4 h-4" />
                }
              </motion.div>
            </AnimatePresence>
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors">
            
            Let's Talk
            <ArrowUpRightIcon className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-700 dark:text-ink-300">
            
            {isOpen ?
            <XIcon className="w-4 h-4" /> :

            <MenuIcon className="w-4 h-4" />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800 overflow-hidden">
          
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
              `px-3 py-3 rounded-lg text-base font-medium transition-colors ${isActive ? 'bg-ink-100 dark:bg-ink-900 text-ink-900 dark:text-white' : 'text-ink-600 dark:text-ink-400 hover:bg-ink-50 dark:hover:bg-ink-900'}`
              }>
              
                  {link.name}
                </NavLink>
            )}
              <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium">
              
                Let's Talk <ArrowUpRightIcon className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}