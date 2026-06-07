import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const stats = [
    { value: '700+', label: 'Ecosystem Members' },
    { value: '100+', label: 'Internships Facilitated' },
    { value: '10+', label: 'Patentable Projects' },
    { value: '9.2', label: 'CGPA' },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">WHO I AM</p>
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-header">
              <div className="terminal-dots">
                <span style={{background:'#ff5f57'}}/>
                <span style={{background:'#febc2e'}}/>
                <span style={{background:'#28c840'}}/>
              </div>
              <span className="terminal-title">about.txt</span>
            </div>
            <div className="terminal-body">
              <p><span className="t-key">name</span> <span className="t-eq">=</span> <span className="t-val">"Abhilash Reddy Sannareddy"</span></p>
              <p><span className="t-key">role</span> <span className="t-eq">=</span> <span className="t-val">"Problem-Driven Builder"</span></p>
              <p><span className="t-key">university</span> <span className="t-eq">=</span> <span className="t-val">"Vel Tech R&D Institute (AI & ML)"</span></p>
              <p><span className="t-key">graduation</span> <span className="t-eq">=</span> <span className="t-val">2027</span></p>
              <br />
              <p className="t-comment">// Professional Summary</p>
              <p className="t-body">
                Problem-driven CS Engineering student specializing in AI, Machine Learning, Agentic AI Systems, and Full-Stack Development. Passionate about problem discovery, understanding user needs, and building scalable solutions at the intersection of technology, product innovation, and entrepreneurship.
              </p>
              <br />
              <p className="t-body">
                Experienced in AI-powered automation systems, intelligent workflows, and product-driven solutions — with direct experience in Agentic AI, workflow orchestration, startup operations, and business process automation.
              </p>
            </div>
          </motion.div>

          <div className="about-stats">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="stat-block glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, borderColor: 'var(--accent-cyan)' }}
              >
                <span className="stat-val text-gradient">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
