import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiArrowRight } from 'react-icons/fi';
import TypingEffect from './TypingEffect';
import CodeBlock from './CodeBlock';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/zairaz', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/zairaz', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/zairaz', label: 'Twitter' },
];

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Terminal Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-mono text-muted-foreground">~/portfolio <span className="text-primary">$</span> ready_to_hire</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono leading-tight mb-4"
            >
              <span className="text-muted-foreground">{">"}</span> Hi, I'm{' '}
              <span className="text-gradient">Zairaz</span>
            </motion.h1>

            {/* Typing Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl font-mono mb-6 h-8"
            >
              <span className="text-muted-foreground">I build </span>
              <TypingEffect
                words={['clean interfaces', 'scalable backends', 'great experiences', 'cool projects']}
                className="text-primary"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground mb-8 max-w-md mx-auto lg:mx-0"
            >
              MERN Stack Developer crafting modern web experiences.
              Specializing in React, Node.js, and cloud technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.a
                href="#projects"
                className="btn-primary flex items-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="/Zai_CV.pdf"
                download="Zai_CV.pdf"
                className="btn-outline flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FiDownload className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Code Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <CodeBlock />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-muted-foreground">scroll</span>
            <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
