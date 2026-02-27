import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Index = () => {

  useEffect(() => {
    document.title = 'Madheshwaran J | Data Practitioner & Web Developer Portfolio';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content',
        'Portfolio of Madheshwaran J - Data Practitioner and Web Developer. Expertise in Data Analysis, Machine Learning, and Web Development.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />

        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
