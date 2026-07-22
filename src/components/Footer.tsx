import React from 'react';
import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon
} from
  'lucide-react';
import { Logo } from './Logo';
const quickLinks = [
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

const services = [
  'Web Development',
  'UI/UX Design',
  'Graphic design',
  'Consulting'];

const socialLinks = [
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

const contactInfo = [
  {
    Icon: MailIcon,
    label: 'bigsamdmd@gmail.com',
    href: 'mailto:bigsamdmd@gmail.com'
  },
  {
    Icon: PhoneIcon,
    label: 'tel:+250 796 395 652',
    href: 'tel:+441234567890'
  },
  {
    Icon: MapPinIcon,
    label: 'KIGALI-Rwanda'
  }];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-950 border-t border-ink-200 dark:border-ink-800">
      {/* Gold accent strip */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-ink-500 dark:text-ink-400 leading-relaxed max-w-xs">
              Building exceptional digital experiences with clean code and
              thoughtful design.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) =>
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-600 dark:text-ink-400 hover:bg-gold hover:text-white hover:border-transparent transition-all">

                  <Icon className="w-4 h-4" />
                </a>

              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-ink-900 dark:text-white uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) =>
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-500 dark:text-ink-400 hover:text-gold transition-colors">

                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-wide text-ink-900 dark:text-white uppercase mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3">
              {contactInfo.map(({ Icon, label, href }) =>
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm text-ink-500 dark:text-ink-400">

                  <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                  {href ?
                    <a
                      href={href}
                      className="hover:text-ink-900 dark:hover:text-white transition-colors break-all">

                      {label}
                    </a> :

                    <span>{label}</span>
                  }
                </li>
              )}
            </ul>
            <div className="mt-5">
              <p className="text-xs text-ink-400 dark:text-ink-500 mb-2 uppercase tracking-wide font-medium">
                Services
              </p>
              <p className="text-sm text-ink-500 dark:text-ink-400">
                {services.join(' · ')}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ink-200 dark:border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink-500 dark:text-ink-400">
            © {new Date().getFullYear()}{' '}
            <span className="text-gold font-medium">Bigsam.dev</span>. All
            rights reserved.
          </p>
          <p className="text-sm text-ink-500 dark:text-ink-400">
            Developed by DMD with love.
          </p>
        </div>
      </div>
    </footer>);

}