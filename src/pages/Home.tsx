import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustedBy } from '../components/TrustedBy';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
export function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection showAllLink />
      <TestimonialsSection />
      <CallToActionBanner />
    </>);

}