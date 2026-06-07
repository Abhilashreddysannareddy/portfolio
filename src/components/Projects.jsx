import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Trophy, Zap } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      number: '01',
      title: "AI-Powered Smart Agriculture & Irrigation System",
      badge: "Winner — Prototyping Contest",
      desc: "AI decision-support system integrating IoT sensing and ML to analyze 6+ agricultural parameters (NPK, soil moisture, temperature, humidity, pH). Enables data-driven crop recommendations and irrigation optimization.",
      accuracy: "98.4%",
      metric: "Prediction Accuracy",
      tech: ["Python", "Machine Learning", "IoT", "Data Analytics", "Decision Support"],
      color: '#10b981',
    },
    {
      number: '02',
      title: "Precision Bid Management & Tender Analysis System",
      badge: "Pragyan Hackathon · Aurigo Software Technologies",
      desc: "Decision-support platform analyzing 10+ bid evaluation parameters for competitor benchmarking, tender assessment, and strategic bid optimization — replacing manual multi-criteria decision-making.",
      metric: "Parameters Analyzed",
      accuracy: "10+",
      tech: ["React.js", "Node.js", "Python", "Data Analysis", "Decision Support"],
      color: '#3b82f6',
    },
  ];

  return (
    <section id="projects" className="proj-section">
      <div className="proj-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">PORTFOLIO</p>
          <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>

        <div className="proj-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="proj-card glass-panel"
              style={{ '--proj-color': proj.color }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -6 }}
            >
              <div className="proj-number">{proj.number}</div>
              <div className="proj-accent-line" style={{ background: proj.color }} />

              {proj.badge && (
                <div className="proj-badge" style={{ color: '#fbbf24', borderColor: 'rgba(251,191,36,0.4)', background: 'rgba(251,191,36,0.08)' }}>
                  <Trophy size={12} /> {proj.badge}
                </div>
              )}

              <h3 className="proj-title">{proj.title}</h3>
              <p className="proj-desc">{proj.desc}</p>

              <div className="proj-metric glass-panel" style={{ borderColor: `${proj.color}40` }}>
                <Zap size={16} style={{ color: proj.color }} />
                <span className="metric-val" style={{ color: proj.color }}>{proj.accuracy}</span>
                <span className="metric-label">{proj.metric}</span>
              </div>

              <div className="proj-tech">
                {proj.tech.map((t, ti) => (
                  <span key={ti} className="proj-tech-tag" style={{ borderColor: `${proj.color}40`, color: proj.color }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="proj-links">
                <a href="#" className="proj-icon-link" title="Source Code"><Code2 size={18} /></a>
                <a href="#" className="proj-icon-link" title="Live Demo"><ExternalLink size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
