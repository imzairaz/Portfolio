import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiTerminal, FiCpu, FiZap } from 'react-icons/fi';

const highlights = [
  { icon: FiTerminal, label: 'Frontend', description: 'React & Modern UI', command: 'npm run dev' },
  { icon: FiCpu, label: 'Backend', description: 'Node.js & APIs', command: 'node server.js' },
  { icon: FiZap, label: 'Cloud', description: 'Azure & DevOps', command: 'az deploy' },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-primary">#</span> about-me
            </div>
            <h2 className="section-heading">
              <span className="text-gradient">Who I Am</span>
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio - Terminal Style */}
            <motion.div variants={itemVariants}>
              <div className="glass-card overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">about.md</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-foreground/90 leading-relaxed"
                  >
                    <span className="text-primary">→</span> Final year{' '}
                    <span className="text-secondary">Software Engineering</span> student
                    with a passion for building scalable web applications.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    className="text-foreground/90 leading-relaxed"
                  >
                    <span className="text-primary">→</span> Specializing in the{' '}
                    <span className="text-primary font-semibold">MERN Stack</span> and
                    cloud services like <span className="text-secondary">Azure</span>.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.9 }}
                    className="pt-4 border-t border-border"
                  >
                    <p className="text-muted-foreground flex items-center gap-2">
                      <span className="text-yellow-400">🌙</span>
                      <span className="italic text-foreground/70">"I write my cleanest code after midnight"</span>
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div variants={itemVariants} className="grid gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="glass-card p-4 cursor-default group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-mono font-semibold text-foreground">{item.label}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <code className="hidden sm:block text-xs text-muted-foreground/60 font-mono bg-muted/30 px-2 py-1 rounded">
                      {item.command}
                    </code>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
