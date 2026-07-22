import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { SkillsSection } from '../components/SkillsSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
export function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        description="A toolkit of design and engineering services tailored to bring your ideas to life." />
      
      <ServicesSection />
      <SkillsSection />
      <CallToActionBanner />
    </>);

}