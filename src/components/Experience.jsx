import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: "Agentic AI Developer Intern",
      company: "Modern Agriculture Technology Innovation Center (MATIC)",
      sub: "MADeIT Incubated Startup · IIITDM Kancheepuram",
      location: "Chennai, Tamil Nadu",
      duration: "Jun 2025 – Oct 2025",
      type: "Full-Time · Hybrid",
      color: '#00d4ff',
      points: [
        "Analyzed operational bottlenecks across 5+ business functions to identify automation opportunities and improve efficiency.",
        "Developed Assist Pro — an AI-powered automation platform reducing manual effort by 70%+ across startup operations.",
        "Designed intelligent workflow solutions across 20+ business processes using AI agents & full-stack technologies.",
        "Collaborated directly with founders to translate business challenges into scalable, technology-driven solutions.",
      ],
    },
  ];

  return (
    <section id="experience" className="exp-section">
      <div className="exp-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">CAREER</p>
          <h2 className="section-title">Professional <span className="text-gradient">Experience</span></h2>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-card glass-panel"
              style={{ '--exp-color': exp.color }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="exp-top-line" style={{ background: exp.color }} />
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company" style={{ color: exp.color }}>
                    <Briefcase size={14} /> {exp.company}
                  </p>
                  <p className="exp-sub">{exp.sub}</p>
                </div>
                <div className="exp-meta">
                  <span><Calendar size={12} /> {exp.duration}</span>
                  <span><MapPin size={12} /> {exp.location}</span>
                  <span className="exp-badge" style={{ borderColor: exp.color, color: exp.color }}>{exp.type}</span>
                </div>
              </div>
              <ul className="exp-points">
                {exp.points.map((p, j) => (
                  <li key={j} style={{ '--bullet-color': exp.color }}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="edu-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="edu-icon">🎓</div>
          <div>
            <h3>Vel Tech Rangarajan Dr. Sagunthala R&D Institute</h3>
            <p className="text-muted">B.Tech in Computer Science Engineering (AI & Machine Learning) · Expected 2027</p>
          </div>
          <div className="edu-cgpa">
            <span className="text-gradient">9.2</span>
            <small>CGPA</small>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
