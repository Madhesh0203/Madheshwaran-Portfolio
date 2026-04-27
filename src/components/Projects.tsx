import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
  'All Projects',
  'AI & ML',
  'Web Development',
  'Software & Tools',
  'Cloud & Networking',
  'Social Impact',
];

interface Project {
  title: string;
  description: string;
  tags: string[];
  categories: string[];
  github: string;
  image: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'Family Medical Record System',
    description: 'Secure web application for digitising family health records. Features OTP-based authentication, appointment tracking, and medical history management — reducing reliance on paper records and improving data accessibility for families.',
    tags: ['Web Development', 'HTML/CSS', 'JavaScript', 'Healthcare', 'Node.js'],
    categories: ['Web Development', 'Social Impact'],
    github: 'https://github.com/Madhesh0203/Family-medical-record-system',
    live: 'https://madhesh0203.github.io/Family-medical-record-system/',
    image: '/images/family-medical.png',
  },
  {
    title: 'Speech Sentiment Classifier (ML)',
    description: 'End-to-end ML pipeline for real-time emotion detection from audio input. Extracted MFCC and STFT features, trained an LSTM model achieving accurate happy/sad/neutral classification, and served predictions via a Flask API.',
    tags: ['Machine Learning', 'LSTM', 'MFCC/STFT', 'Python', 'Flask', 'HTML/CSS', 'Groq API'],
    categories: ['AI & ML', 'Web Development'],
    github: 'https://github.com/Madhesh0203',
    image: '/images/sentiment-analysis.svg',
  },
  {
    title: 'ASD Support & Awareness Platform',
    description: 'Accessible web platform providing early identification tools and therapeutic activity guides for Autism Spectrum Disorder. Designed with WCAG accessibility principles, targeting caregivers and families with clear, structured content.',
    tags: ['Web Development', 'jQuery', 'Social Impact', 'Accessibility'],
    categories: ['Web Development', 'Social Impact'],
    github: 'https://github.com/Madhesh0203/ASD-child-support',
    image: '/images/asd-support.png',
  },
  {
    title: 'Mini Nmap — Network Scanner',
    description: 'Custom Python network scanner for Linux environments. Uses raw TCP socket programming to detect open ports, identify running services, and generate structured scan reports — mirroring core Nmap functionality.',
    tags: ['Python', 'Networking', 'Socket Programming', 'Linux', 'Security'],
    categories: ['Software & Tools', 'Cloud & Networking'],
    github: 'https://github.com/Madhesh0203/Mini-nmap',
    image: '/images/network-tool.svg',
  },
  {
    title: 'E-Commerce Gift Shop',
    description: 'Full-featured e-commerce web application with product browsing, gift customisation, and order management. Built with a responsive UI and integrated backend for inventory and cart state management.',
    tags: ['Web Development', 'E-commerce', 'UI/UX', 'Frontend'],
    categories: ['Web Development'],
    github: 'https://github.com/Madhesh0203/Ecommerce-website',
    image: '/images/ecommerce-gift.png',
  },
  {
    title: 'Slooze Inventory Analytics',
    description: 'Business intelligence dashboard for inventory management. Delivers data visualisation, stock-level tracking, and trend analysis to support supply chain decision-making — built with a focus on clarity and performance.',
    tags: ['Data Analysis', 'Analytics', 'Visualization', 'Business Intelligence'],
    categories: ['AI & ML', 'Software & Tools'],
    github: 'https://github.com/Madhesh0203/slooze-inventory-analytics',
    image: '/images/slooze-inventory.png',
  },
  {
    title: 'Hand Gesture Mouse Control',
    description: 'Touchless HCI system using real-time hand landmark detection via MediaPipe. Maps finger gestures to mouse events (move, click, scroll) using PyAutoGUI — demonstrating applied computer vision with no external hardware.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Computer Vision'],
    categories: ['AI & ML', 'Software & Tools'],
    github: 'https://github.com/Madhesh0203/Hand_Gesture_Mouse',
    image: '/images/hand-gesture-mouse.png',
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects spanning cloud infrastructure, machine learning, full-stack development, and network security
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image.startsWith('/') ? project.image.slice(1) : project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
