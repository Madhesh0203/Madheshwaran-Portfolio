import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const experiences = [
  {
    title: 'Cloud Engineer',
    company: 'MethodHub Software Pvt. Ltd.',
    image: '/logos/methodhub.svg',
    period: 'May 2026 – Present',
    location: 'Chennai, Tamil Nadu',
    description:
      'Designing, deploying, and managing cloud-native applications on Microsoft Azure using Docker-based infrastructure, Nginx, and PostgreSQL — working directly in production environments.',
    achievements: [
      'Deploy and maintain cloud-native applications on Microsoft Azure using Docker-based deployments.',
      'Build and manage Docker images using Docker Buildx and publish images to Azure Container Registry (ACR).',
      'Configure and maintain Nginx reverse proxy for frontend, backend, and Apache Superset services.',
      'Deploy and manage Apache Superset dashboards using Docker Compose and PostgreSQL metadata databases.',
      'Configure custom domains, DNS records, SSL certificates, and reverse proxy routing for production environments.',
      'Troubleshoot production issues related to Docker containers, networking, authentication, environment variables, and application deployment.',
      'Manage Linux servers through SSH for application deployment, maintenance, and debugging.',
      'Collaborate with development teams to deploy new releases and validate production environments.',
      'Work with Git and GitHub to manage source code, feature branches, releases, and deployment workflows.',
    ],
    technologies: [
      'Microsoft Azure',
      'Docker',
      'Docker Compose',
      'Docker Buildx',
      'Azure Container Registry (ACR)',
      'Nginx',
      'PostgreSQL',
      'Linux (Ubuntu)',
      'SSL/TLS',
      'DNS',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Cloud & Data Practitioner Intern',
    company: 'MethodHub Software Pvt. Ltd.',
    image: '/logos/methodhub.svg',
    period: 'November 2025 – May 2026',
    location: 'Chennai, Tamil Nadu',
    description:
      'Worked within the cloud and infrastructure team — provisioning Azure resources, containerizing applications, developing REST APIs, and managing Linux server environments.',
    achievements: [
      'Provisioned and managed Azure Virtual Machines including instance creation, OS disk configuration, network interface setup, and resource group organisation.',
      'Configured NSG rule sets with multiple inbound/outbound firewall rules across VNet and subnets, ensuring secure VM access.',
      'Developed REST APIs using Python and Flask for cloud-based applications.',
      'Integrated PostgreSQL databases with backend applications and performed database configuration and troubleshooting.',
      'Performed Linux server administration using SSH and managed application deployments on Ubuntu servers.',
      'Containerized applications using Docker and Docker Compose for development and deployment environments.',
      'Worked with Git and GitHub for version control, branching strategies, and collaborative development.',
      'Resolved deployment issues related to networking, authentication, environment variables, and cloud infrastructure.',
    ],
    technologies: [
      'Microsoft Azure',
      'Azure VMs',
      'Docker',
      'Docker Compose',
      'PostgreSQL',
      'Python',
      'Flask',
      'REST APIs',
      'Linux (Ubuntu)',
      'SSH',
      'Git',
      'GitHub',
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setExpandedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 relative bg-transparent" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Internship experience in cloud infrastructure and full-stack development, delivering results in production environments.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isExpanded = expandedCards.includes(index);

              return (
                <motion.div
                  key={exp.company + exp.period}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20 md:pl-28"
                >
                  <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />

                  {/* Horizontal Connector Line */}
                  <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />

                  <motion.div
                    className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
                      }`}
                    whileHover={{ scale: 1.005 }}
                    layout
                  >
                    <div className="p-6 md:p-8">
                      <div className="mb-6">
                        {/* Title & Company */}
                        <div className="min-w-0">
                          <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <h4 className="text-base font-semibold text-primary mb-3">
                            {exp.company}
                          </h4>

                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-muted-foreground">
                            <span className="flex items-center gap-2 bg-secondary/30 px-3 py-1 rounded-full border border-border/50">
                              📅 {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-2 bg-secondary/30 px-3 py-1 rounded-full border border-border/50">
                                🌍 {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                      >
                        {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                            }`}
                        />
                      </button>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
                            {/* Achievements */}
                            <div className="pt-6">
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">⚡</span> Key Achievements
                              </h5>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                <span className="text-primary">💻</span> Technologies Used
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
