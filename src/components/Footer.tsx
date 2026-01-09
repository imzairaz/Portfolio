import { motion } from 'framer-motion';
import { FiHeart, FiCode } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border relative overflow-hidden">
      {/* Subtle gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <motion.a 
            href="#home" 
            className="font-mono text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">&lt;Zairaz/&gt;</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
            <FiCode className="w-4 h-4 text-primary" />
            <span>Crafted with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="w-4 h-4 text-red-500" />
            </motion.span>
            <span>© {currentYear}</span>
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {['About', 'Projects', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary text-xs font-mono transition-colors"
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
