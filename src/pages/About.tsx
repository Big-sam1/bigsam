import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
export function About() {
  return (
    <>
      <PageHeader
        title="About Me"
        description="Get to know the person behind the code — my background, journey and what drives me." />
      
      <AboutSection />
      <ExperienceSection />
      <TestimonialsSection />
      <CallToActionBanner />
    </>);

}