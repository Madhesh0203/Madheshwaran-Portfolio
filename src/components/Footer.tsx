import { Github, Linkedin, Mail, BookOpen, BarChart3, Database, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/madheshwaran-j/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Madhesh0203', label: 'GitHub' },
  { icon: Mail, href: 'mailto:waranmadhesh24@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold mb-6">
            <span className="gradient-text">Madheshwaran</span>
            <span className="text-foreground"> J</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a href="https://linkedin.com/in/madheshwaran-j/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Madhesh0203" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:waranmadhesh24@gmail.com" className="social-icon" title="Email">
              <Mail size={18} />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
            <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Madheshwaran J. All rights reserved.</p>
            <p className="mt-1">Data Practitioner | Web Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
