import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: Zap,
    title: 'Cloud Infrastructure',
    description: 'Deploy and maintain cloud-native apps on Azure using Docker, Azure VMs, ACR, and Nginx reverse proxies in production.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Built production-ready apps with React, Vite, Flask, and REST APIs — containerized and deployed to Azure.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Trained and deployed LSTM-based models for real-time Tamil speech sentiment classification.',
  },
  {
    icon: TrendingUp,
    title: 'DevOps & CI/CD',
    description: 'Git, GitHub Actions, Docker Buildx, multi-platform image builds, and automated deployment workflows.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Collaborates with dev teams on production releases, infrastructure debugging, and deployment validation.',
  },
  {
    icon: Trophy,
    title: 'Certified & Growing',
    description: 'Microsoft AZ-900 (In Progress), Cisco Networking, IBM SQL, Udemy Azure — continuously expanding cloud expertise.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cloud Engineer · Docker & Azure · DevOps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">Background</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am <span className="text-foreground font-medium">Madheshwaran J</span>, a Cloud Engineer at <span className="text-foreground font-medium">MethodHub Software Pvt. Ltd.</span>, Chennai. I graduated in Computer Science Engineering from Sathyabama Institute of Science and Technology and moved into a full-time cloud role, building and managing production-grade infrastructure on Microsoft Azure.
              </p>
              <p>
                I work hands-on with <span className="text-primary font-medium">Docker, Docker Compose, Azure VMs, and Azure Container Registry (ACR)</span> to containerize and deploy applications. I configure <span className="text-primary font-medium">Nginx reverse proxies</span>, manage PostgreSQL databases, handle SSL certificates and DNS, and troubleshoot production issues across networking, authentication, and container communication — all while collaborating closely with development teams.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
