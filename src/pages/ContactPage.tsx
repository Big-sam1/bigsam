import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ContactSection } from '../components/ContactSection';
export function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Have a project, a question or just want to say hi? I read every message." />
      
      <ContactSection />
    </>);

}