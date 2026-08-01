import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  CheckIcon
} from
  'lucide-react';
import { SectionLabel } from './SectionLabel';
const contactItems = [
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'bigsamdmd@gmail.com',
    href: 'mailto:bigsamdmd@gmail.com'
  },
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: 'tel:+250 796 395 652',
    href: 'tel:+441234567890'
  },
  {
    Icon: MapPinIcon,
    label: 'Location',
    value: 'KIGALI-Rwanda'
  }];

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

export function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [resultMsg, setResultMsg] = useState('');

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setResultMsg('Sending....');

    try {
      const formData = new FormData(e.currentTarget);
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '4c0a1ce2-3c22-42b0-8e1a-b5de51cb45be';
      formData.append('access_key', accessKey);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus('sent');
        setResultMsg('Form Submitted Successfully');
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setTimeout(() => {
          setStatus('idle');
          setResultMsg('');
        }, 3500);
      } else {
        setStatus('error');
        setResultMsg(data.message || 'Error submitting form');
        setTimeout(() => {
          setStatus('idle');
          setResultMsg('');
        }, 3500);
      }
    } catch (err) {
      setStatus('error');
      setResultMsg('Error submitting form');
      setTimeout(() => {
        setStatus('idle');
        setResultMsg('');
      }, 3500);
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel
          eyebrow="Contact"
          title="Get In Touch"
          description="Let's discuss your project or just say hello. I'd love to hear from you." />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{
              opacity: 0,
              x: -20
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
              duration: 0.5
            }}
            className="space-y-6">

            {contactItems.map(({ Icon, label, value, href }) =>
              <div key={label} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-ink-100 dark:bg-ink-900 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-ink-900 dark:text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-ink-500 dark:text-ink-400 uppercase tracking-wide">
                    {label}
                  </p>
                  {href ?
                    <a
                      href={href}
                      className="text-base text-ink-900 dark:text-white hover:underline break-all">

                      {value}
                    </a> :

                    <p className="text-base text-ink-900 dark:text-white">
                      {value}
                    </p>
                  }
                </div>
              </div>
            )}

            <div className="pt-4">
              <p className="text-xs font-medium text-ink-500 dark:text-ink-400 uppercase tracking-wide mb-3">
                Follow Me
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, href, label }) =>
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-ink-200 dark:border-ink-800 flex items-center justify-center text-ink-600 dark:text-ink-400 hover:bg-ink-900 hover:text-white dark:hover:bg-white dark:hover:text-ink-900 hover:border-transparent transition-all">

                    <Icon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{
              opacity: 0,
              x: 20
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
              duration: 0.5
            }}
            onSubmit={submit}
            className="space-y-4">

            <div className="grid sm:grid-cols-2 gap-4">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handle}
                required />

              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handle}
                required />

            </div>
            <Input
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handle}
              required />

            <Textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handle}
              required />

            <div className="flex flex-col items-start gap-2">
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{
                  scale: status === 'idle' ? 1.02 : 1
                }}
                whileTap={{
                  scale: status === 'idle' ? 0.98 : 1
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 text-sm font-medium hover:bg-ink-800 dark:hover:bg-ink-100 transition-colors disabled:opacity-70">

                {status === 'idle' &&
                  <>
                    Send Message
                    <SendIcon className="w-4 h-4" />
                  </>
                }
                {status === 'sending' &&
                  <>
                    Sending...
                    <motion.span
                      animate={{
                        rotate: 360
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />

                  </>
                }
                {status === 'sent' &&
                  <>
                    Message Sent
                    <CheckIcon className="w-4 h-4" />
                  </>
                }
                {status === 'error' &&
                  <>
                    Failed
                  </>
                }
              </motion.button>
              {resultMsg && (
                <span className={`text-sm font-medium mt-1 ${status === 'error' ? 'text-red-500' : 'text-emerald-500 dark:text-emerald-400'}`}>
                  {resultMsg}
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>);

}
function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-ink-900 dark:focus:border-white focus:ring-2 focus:ring-ink-900/10 dark:focus:ring-white/10 transition-all text-sm" />);


}
function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={6}
      className="w-full px-4 py-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 text-ink-900 dark:text-white placeholder:text-ink-400 dark:placeholder:text-ink-500 focus:outline-none focus:border-ink-900 dark:focus:border-white focus:ring-2 focus:ring-ink-900/10 dark:focus:ring-white/10 transition-all text-sm resize-none" />);


}