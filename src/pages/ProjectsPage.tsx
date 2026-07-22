import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectsSection } from '../components/ProjectsSection';
import { CallToActionBanner } from '../components/CallToActionBanner';
export function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        description="A selection of recent work spanning web apps, UI design and brand-focused builds." />
      
      <ProjectsSection />
      <CallToActionBanner />
    </>);

}