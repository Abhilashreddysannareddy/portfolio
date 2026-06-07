import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const techIcons = {
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'Spring Framework': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  AWS: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
  GCP: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
  Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  GitHub: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  Jira: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  Notion: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg',
  Canva: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  'Adobe Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg',
};

const skillCategories = [
  {
    label: 'Technical Skills',
    color: '#00d4ff',
    skills: ['Python', 'Java', 'JavaScript', 'React.js', 'Node.js', 'Spring Framework', 'HTML', 'Tailwind CSS'],
  },
  {
    label: 'Cloud & Version Control',
    color: '#3b82f6',
    skills: ['Firebase', 'AWS', 'GCP', 'Git', 'GitHub'],
  },
  {
    label: 'Product & Collaboration Tools',
    color: '#8b5cf6',
    skills: ['Jira', 'Notion', 'Microsoft PowerPoint', 'Figma', 'Canva', 'Adobe Photoshop'],
  },
  {
    label: 'Product Management',
    color: '#10b981',
    tags: ['Product Discovery', 'User Research', 'Market Research', 'Competitive Analysis', 'Requirements Gathering', 'Product Roadmapping', 'Feature Prioritization', 'User Stories', 'Backlog Management', 'Agile', 'Scrum', 'Stakeholder Management'],
  },
  {
    label: 'Data & Analytics',
    color: '#f59e0b',
    tags: ['SQL', 'Microsoft Excel', 'Power BI', 'Google Analytics', 'A/B Testing', 'KPI Definition & Tracking', 'Dashboard Development', 'Data-Driven Decision Making'],
  },
  {
    label: 'AI & Emerging Tech',
    color: '#ec4899',
    tags: ['Agentic AI', 'LLM Applications', 'Prompt Engineering', 'LangChain', 'n8n', 'AI Workflow Automation', 'Machine Learning', 'Internet of Things (IoT)'],
  },
  {
    label: 'Business & Strategy',
    color: '#14b8a6',
    tags: ['Business Analysis', 'Innovation Management', 'Startup Operations', 'Process Optimization', 'Cross-Functional Collaboration', 'Go-to-Market Strategy', 'SEO'],
  },
];

const Skills = () => {
  const techCategories = skillCategories.filter(c => c.skills);
  const tagCategories = skillCategories.filter(c => c.tags);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">COMPETENCIES</p>
          <h2 className="section-title">Tech <span className="text-gradient">Arsenal</span></h2>
        </motion.div>

        {/* Tech Logo Grid */}
        <motion.div
          className="tech-categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {techCategories.map((cat, ci) => (
            <div key={ci} className="tech-cat glass-panel" style={{ '--cat-color': cat.color }}>
              <h3 className="tech-cat-title" style={{ color: cat.color }}>{cat.label}</h3>
              <div className="tech-icons-grid">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    className="tech-icon-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                  >
                    {techIcons[skill] ? (
                      <img src={techIcons[skill]} alt={skill} className="tech-img" />
                    ) : (
                      <div className="tech-placeholder" style={{ color: cat.color }}>
                        {skill.slice(0, 2)}
                      </div>
                    )}
                    <span className="tech-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tag-based skills */}
        <div className="tag-categories">
          {tagCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              className="tag-cat glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              style={{ '--cat-color': cat.color }}
            >
              <div className="tag-cat-header">
                <div className="cat-dot" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <h3 className="tag-cat-title" style={{ color: cat.color }}>{cat.label}</h3>
              </div>
              <div className="skill-tags">
                {cat.tags.map((tag, ti) => (
                  <span key={ti} className="skill-tag" style={{ '--tag-color': cat.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
