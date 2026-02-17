import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Brain, Code2, Trophy, Zap, Users } from 'lucide-react';

const highlights = [
  {
    icon: TrendingUp,
    title: 'Data Analysis',
    description: 'Data Cleaning, Validation, SQL Queries, and building insights from raw data.',
  },
  {
    icon: Code2,
    title: 'Web Technologies',
    description: 'Expertise in HTML, CSS, JavaScript for responsive web design.',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Developing ML models for sentiment analysis and emotion classification.',
  },
  {
    icon: Users,
    title: 'Leadership',
    description: 'Experience in coordinating events and managing teams for ecological restoration projects.',
  },
  {
    icon: Zap,
    title: 'Cloud Computing',
    description: 'Hands-on experience with Microsoft Azure, Virtual Machines, and Networking protocols.',
  },
  {
    icon: Trophy,
    title: 'Continuous Learner',
    description: 'Actively pursuing certifications in Cloud, Full Stack, and Data technologies.',
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
            Aspiring Data Practitioner and Web Developer
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
                I am <span className="text-foreground font-medium">Madheshwaran J</span>, a final-year Computer Science Engineering student at Sathyabama Institute of Science and Technology, Chennai. My journey is defined by a passion for <span className="text-primary font-medium">Data Analysis</span> and <span className="text-primary font-medium">Software Development</span>. I have actively applied my skills in internships, notably as a Data Practitioner Intern at <span className="text-foreground font-medium">MethodHub Software</span> and a Web Development Intern at <span className="text-foreground font-medium">Lemonpeak Technologies</span>.
              </p>
              <p>
                I have hands-on experience in core concepts of SQL, Linux, and Microsoft Azure cloud fundamentals. My projects, such as <span className="text-primary font-medium">Sentiment Analysis using Machine Learning</span>, showcase my ability to integrate advanced techniques like LSTM models and audio feature extraction to solve real-world problems. Beyond technical skills, I have demonstrated strong leadership and organizational abilities as an Event Coordinator for the <span className="text-primary font-medium">Mega Foundation Project</span>, where I led a team in ecological restoration initiatives. I am driven by a curiosity to learn and apply technology to create meaningful impact.
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
