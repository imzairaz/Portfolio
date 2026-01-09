import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const projects = [
  {
    title: 'BookHaven',
    description: 'A comprehensive bookstore management system with secure authentication, inventory tracking, and sales analytics dashboard.',
    tags: ['.NET', 'C#', 'SQL Server', 'Secure Auth', 'REST API'],
    github: 'https://github.com/imzairaz/bookhaven',
    live: 'https://bookhaven.demo',
    number: '01',
  },
  {
    title: 'Turf MS',
    description: 'Real-time sports facility booking platform with live availability updates, payment integration, and automated scheduling.',
    tags: ['MERN', 'Socket.io', 'Real-time', 'Stripe', 'JWT'],
    github: 'https://github.com/imzairaz/turf-ms',
    live: 'https://turfms.demo',
    number: '02',
  },
  {
    title: 'Nurse Hiring System',
    description: 'A caregiver hiring platform connecting patients with healthcare professionals. Features include profile management and booking system.',
    tags: ['Node.js', 'Express', 'MongoDB', 'React', 'Twilio'],
    github: 'https://github.com/imzairaz/nurse-hiring',
    live: 'https://nursehiring.demo',
    number: '03',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-primary">#</span> projects
            </div>
            <h2 className="section-heading">
              <span className="text-gradient">Featured Work</span>
            </h2>
            <p className="section-subheading">Some things I've built</p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group"
              >
                <div className="glass-card p-6 md:p-8 relative overflow-hidden transition-all duration-500 hover:border-primary/40 group-hover:shadow-[0_0_40px_-15px] group-hover:shadow-primary/20">
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6">
                    <span className="text-6xl md:text-7xl font-mono font-bold text-muted/20 group-hover:text-primary/10 transition-colors">
                      {project.number}
                    </span>
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-mono font-bold text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2">
                          {project.title}
                          <FiArrowUpRight className="w-5 h-5 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                        </h3>
                      </div>
                      <div className="flex items-center gap-3">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/30 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiGithub className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-muted/30 text-muted-foreground rounded-md border border-border/50 group-hover:border-primary/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/imzairaz"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiGithub className="w-4 h-4" />
              View All Projects
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
