import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const links = [
    { icon: <Mail size={20} />, label: 'Email', value: 'sannareddyabhilashreddy@gmail.com', href: 'mailto:sannareddyabhilashreddy@gmail.com', color: '#00d4ff' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 7032026509', href: 'tel:+917032026509', color: '#10b981' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Andhra Pradesh / Chennai, India', href: '#', color: '#8b5cf6' },
  ];

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">LET'S TALK</p>
          <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
          <p className="contact-sub text-muted">
            Open to new opportunities, collaborations, and conversations. Let's build something that matters.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {links.map((l, i) => (
              <a key={i} href={l.href} className="contact-item glass-panel" style={{ '--lc': l.color }}>
                <div className="c-icon" style={{ color: l.color, background: `${l.color}18`, border: `1px solid ${l.color}40` }}>
                  {l.icon}
                </div>
                <div>
                  <p className="c-label">{l.label}</p>
                  <p className="c-value">{l.value}</p>
                </div>
              </a>
            ))}

            <div className="social-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-message glass-panel"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="msg-title">Send a Message</h3>
            <form className="contact-form" onSubmit={e => { e.preventDefault(); window.location.href='mailto:sannareddyabhilashreddy@gmail.com'; }}>
              <div className="form-group">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Message</label>
                <textarea id="cf-message" rows={5} placeholder="Let's build something amazing..." required />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bar">
          <p className="text-muted">© {new Date().getFullYear()} Abhilash Reddy Sannareddy · Built with React + Vite</p>
          <p className="text-muted" style={{ fontSize: '0.75rem' }}>Chennai, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
