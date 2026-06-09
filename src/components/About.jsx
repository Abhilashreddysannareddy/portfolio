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
                I am a <span className="t-val">Problem-Driven Builder</span> focused on Product Innovation, Agentic AI Systems, Entrepreneurship, and Digital Transformation. My passion lies in discovering meaningful problems, uncovering their root causes, understanding user and business needs, and transforming insights into scalable products, intelligent systems, and impactful ventures.
              </p>
              <br />
              <p className="t-body">
                My experience spans Agentic AI, workflow automation, product development, startup ecosystems, business analysis, and process optimization. I thrive in ambiguity—connecting technology, product thinking, and business strategy to turn complex challenges into practical, user-centric solutions.
              </p>
              <br />
              <p className="t-body">
                Currently, I design and build AI-powered automation systems and intelligent workflows, leveraging Agentic AI, workflow orchestration, and full-stack technologies to improve operational efficiency, decision-making, and business outcomes.
              </p>
              <br />
              <p className="t-comment">// Areas of Interest</p>
              <ul className="t-list">
                <li>Product Discovery & Innovation</li>
                <li>Agentic AI & Intelligent Systems</li>
                <li>Business Analysis & Process Optimization</li>
                <li>Entrepreneurship & Venture Building</li>
                <li>Digital Transformation</li>
                <li>Emerging Technologies</li>
              </ul>
              <br />
              <p className="t-comment">// Leadership & Ecosystem Building</p>
              <p className="t-body">
                Beyond technology, I am the Founder, Chairman & President of <span className="t-val">Yantriksha X Hub</span>, a multidisciplinary innovation ecosystem helping students transform real-world problems into validated ideas, products, patents, startups, and ventures. We've built a community of 700+ active students and 300+ alumni, facilitating 100+ internships and supporting 10+ patentable projects.
              </p>
              <br />
              <p className="t-body">
                At Yantriksha X Hub, we created the <span className="text-gradient" style={{fontWeight: 'bold'}}>-1 → 0 → 1 Framework</span>:
                <br /><span className="t-key">-1:</span> Identify and deeply understand problems.
                <br /><span className="t-key">0:</span> Validate opportunities and assumptions.
                <br /><span className="t-key">1:</span> Build products, innovations, ventures, and impact.
              </p>
              <br />
              <p className="t-body">
                I also serve as Show Director of <span className="t-val">Just Between Us (JBU)</span>, a student-led town hall platform connecting students with leaders and changemakers.
              </p>
              <br />
              <p className="t-body" style={{ fontWeight: 'bold', color: 'var(--text-bright)' }}>
                I believe the future belongs not only to those who build great solutions—but to those who discover the right problems first.
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
