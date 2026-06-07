import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Mic, Award } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
  const roles = [
    {
      icon: <Users size={24} />,
      title: "Founder, Chairman & President",
      org: "Yantriksha X Hub",
      duration: "Feb 2025 – Present",
      color: '#8b5cf6',
      points: [
        "Founded a multidisciplinary innovation hub bridging engineering, management, and law students.",
        "Developed the -1 → 0 → 1 framework — from problem ambiguity to validated product.",
        "Scaled to 700+ active members, 100+ internships, 10+ patentable projects, 20+ industry experts.",
      ],
    },
    {
      icon: <Mic size={24} />,
      title: "Show Director",
      org: "Just Between Us (JBU)",
      duration: "Feb 2026 – Present",
      color: '#ec4899',
      points: [
        "Co-created a student-led town hall connecting students with accomplished leaders and entrepreneurs.",
        "Led end-to-end planning: speaker outreach, content, partnerships, operations — 4 episodes delivered.",
      ],
    },
  ];

  const achievements = [
    { icon: '🏆', text: 'Organizer — VISAI 2026 International Competition (720+ students, 44 institutions)' },
    { icon: '🥇', text: 'Winner — Prototyping Contest, AI-Powered Smart Agriculture System' },
    { icon: '🛡️', text: 'Winner — Cybersecurity Bootcamp, IIITDM Kancheepuram' },
    { icon: '🥈', text: 'Runner-Up — Project Idea Contest' },
    { icon: '⚡', text: 'Organizer — L&T Techgium Hackathon Preliminary Rounds' },
    { icon: '🎯', text: 'Evaluator — Innovation Marathon, KRM Public School (300+ submissions)' },
  ];

  return (
    <section id="leadership" className="lead-section">
      <div className="lead-inner">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-label">IMPACT</p>
          <h2 className="section-title">Leadership & <span className="text-gradient">Community</span></h2>
        </motion.div>

        <div className="lead-grid">
          {roles.map((r, i) => (
            <motion.div
              key={i}
              className="lead-card glass-panel"
              style={{ '--lead-color': r.color }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="lead-accent" style={{ background: `linear-gradient(135deg, ${r.color}30, transparent)` }} />
              <div className="lead-icon-wrap" style={{ color: r.color, background: `${r.color}18`, border: `1px solid ${r.color}40` }}>
                {r.icon}
              </div>
              <h3 className="lead-title">{r.title}</h3>
              <p className="lead-org" style={{ color: r.color }}>{r.org}</p>
              <p className="lead-duration text-muted">{r.duration}</p>
              <ul className="lead-points">
                {r.points.map((p, j) => (
                  <li key={j} style={{ '--lc': r.color }}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          className="achievements glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="achieve-title"><Trophy size={20} style={{ color: '#fbbf24' }} /> Key Achievements</h3>
          <div className="achieve-grid">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                className="achieve-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="achieve-icon">{a.icon}</span>
                <span>{a.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
