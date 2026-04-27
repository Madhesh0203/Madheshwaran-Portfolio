import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analysis',
    description: 'SQL-based data pipelines, cleaning, validation, and delivering actionable insights from raw datasets.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Built production-ready web apps using HTML, CSS, JavaScript, Node.js, and REST APIs.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Trained and deployed LSTM-based models for real-time speech sentiment classification.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Led cross-functional teams as Event Coordinator, managing timelines and deliverables end-to-end.',
  },
  {
    icon: Zap,
    title: 'Cloud & Networking',
    description: 'Provisioned Azure VMs, configured OSI/TCP-IP networks, and managed Linux servers via PuTTY/WinSCP.',
  },
  {
    icon: Trophy,
    title: 'Certified & Growing',
    description: 'Holds credentials from Microsoft, Cisco, and IBM — actively expanding in cloud and DevOps domains.',
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
            Cloud Engineer · Software Developer · Data Analyst
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
                I am <span className="text-foreground font-medium">Madheshwaran J</span>, a Computer Science Engineering graduate from Sathyabama Institute of Science and Technology, Chennai. I have hands-on internship experience at <span className="text-foreground font-medium">MethodHub Software</span> (Cloud Infrastructure & Networking) and <span className="text-foreground font-medium">Lemonpeak Technologies</span> (Full Stack Web Development) — working in real production environments with industry-standard tools.
              </p>
              <p>
                I work across cloud and software layers: provisioning <span className="text-primary font-medium">Azure VMs</span>, configuring <span className="text-primary font-medium">TCP/IP networks and OSI-stack services</span>, managing Linux servers, and building full-stack web applications and ML pipelines. I hold industry certifications from Microsoft, Cisco, and IBM, and bring a structured, collaborative approach to engineering challenges.
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
