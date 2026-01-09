import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiDocker, 
  SiPython,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiExpress
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Azure', icon: VscAzure, color: '#0078D4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
];

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1,
      scale: 1, 
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100 }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-[150px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-primary">#</span> tech-stack
            </div>
            <h2 className="section-heading">
              <span className="text-gradient">My Toolkit</span>
            </h2>
            <p className="section-subheading">Technologies I use to bring ideas to life</p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: `0 20px 40px -20px ${skill.color}40`
                }}
                className="glass-card p-6 flex flex-col items-center gap-3 cursor-default group relative overflow-hidden"
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`
                  }}
                />
                <skill.icon 
                  className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors relative z-10">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2">
              <span className="text-primary font-mono text-sm">+</span>
              <span className="text-muted-foreground font-mono text-sm">
                Redux, GraphQL, REST APIs, SQL, CI/CD, Agile
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
