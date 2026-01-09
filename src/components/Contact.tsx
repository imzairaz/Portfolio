import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

// ⚠️ SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an email service (Gmail, Outlook, etc.) and note the SERVICE_ID
// 3. Create an email template with variables: {{from_name}}, {{from_email}}, {{message}}
// 4. Note your TEMPLATE_ID and PUBLIC_KEY from Account > API Keys
// 5. Replace the values below:

const EMAILJS_SERVICE_ID = 'service_4p7ac7e';  // e.g., 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_04mc74o'; // e.g., 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'JmLdZ3FTtCQ0dDKqT';   // e.g., 'AbCdEfGhIjKlMnOp'

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'im.zairaz@gmail.com', href: 'mailto:im.zairaz@gmail.com' },
  { icon: FiMapPin, label: 'Location', value: 'Sri Lanka', href: null },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/imzairaz', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/zairaz', label: 'LinkedIn' },
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'service_4p7ac7e') {
      toast.error('EmailJS not configured. Check Contact.tsx for setup instructions.');
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Zairaz', // Your name
        },
        EMAILJS_PUBLIC_KEY
      );

      toast.success('Message sent! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div ref={ref} className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm mb-4">
              <span className="text-primary">#</span> contact
            </div>
            <h2 className="section-heading">
              <span className="text-gradient">Let's Connect</span>
            </h2>
            <p className="section-subheading">Have a project in mind? Let's talk</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-6"
            >
              <div className="glass-card overflow-hidden">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">contact.json</span>
                </div>

                <div className="p-6 space-y-4 font-mono text-sm">
                  <div className="text-muted-foreground">{"{"}</div>

                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="pl-4"
                    >
                      <span className="text-primary">"{item.label.toLowerCase()}"</span>
                      <span className="text-muted-foreground">: </span>
                      {item.href ? (
                        <a href={item.href} className="text-secondary hover:underline">
                          "{item.value}"
                        </a>
                      ) : (
                        <span className="text-foreground">"{item.value}"</span>
                      )}
                      <span className="text-muted-foreground">,</span>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 }}
                    className="pl-4"
                  >
                    <span className="text-primary">"status"</span>
                    <span className="text-muted-foreground">: </span>
                    <span className="text-green-400">"available"</span>
                  </motion.div>

                  <div className="text-muted-foreground">{"}"}</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex-1 glass-card p-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all group"
                    whileHover={{ y: -4 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="text-sm font-mono">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-mono text-muted-foreground mb-2">
                    {focusedField === 'name' ? '> ' : ''}name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-mono text-muted-foreground mb-2">
                    {focusedField === 'email' ? '> ' : ''}email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-mono text-muted-foreground mb-2">
                    {focusedField === 'message' ? '> ' : ''}message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className="input-field resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Sending...
                    </motion.span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
