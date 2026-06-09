import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MapPin, GraduationCap } from 'lucide-react';
import './Hero.css';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });
      // Draw connections
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animId);
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
};

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <ParticleCanvas />

      {/* Neon orbs */}
      <div className="neon-orb orb-1" />
      <div className="neon-orb orb-2" />
      <div className="neon-orb orb-3" />

      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="status-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot" />
            <span>Available for Opportunities</span>
          </motion.div>

          <motion.p
            className="greeting-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            // PROBLEM DISCOVERY ENABLED
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Abhilash
            <br />
            <span className="text-gradient">Reddy</span>
          </motion.h1>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Problem-Driven Builder | Agentic AI & Product Innovation | Ecosystem Builder
          </motion.p>

          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span><MapPin size={14} /> Andhra Pradesh / Chennai, India</span>
            <span><GraduationCap size={14} /> B.Tech CSE (AI & ML) · CGPA 9.2</span>
          </motion.div>

          <motion.div
            className="hero-quote-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <p className="hero-quote-main">
              Everyone asks, "How do we solve this?"<br/>
              I ask, <span className="text-gradient">"What problem is everyone else blind to?"</span>
            </p>
            <p className="hero-quote-sub">
              I don't wait for problems. I hunt them.<br/>
              While others race to build solutions, I search for hidden friction, unmet needs, and opportunities no one has named yet.<br/>
              Because breakthroughs don't come from better answers. They come from asking better questions.
            </p>
            <p className="hero-quote-highlight">
              Anyone can solve a known problem. The real edge is finding the problem before everyone else does.<br/>
              <span className="text-gradient font-accent">PROBLEM → OPPORTUNITY → PRODUCT → IMPACT</span>
            </p>
          </motion.div>

          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" download className="btn-secondary">
              <Download size={16} /> Resume
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="hero-image-frame">
            <div className="frame-corner c-tl" />
            <div className="frame-corner c-tr" />
            <div className="frame-corner c-bl" />
            <div className="frame-corner c-br" />
            <div className="frame-scan" />
            <img src="/hero_futuristic.png" alt="Abhilash Reddy — AI Builder & Entrepreneur" />
            <div className="image-overlay" />
          </div>
          <div className="image-glow" />

          {/* Floating stat cards */}
          <motion.div
            className="stat-card stat-1 glass-panel"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            <span className="stat-number text-gradient">700+</span>
            <span className="stat-label">Ecosystem Members</span>
          </motion.div>

          <motion.div
            className="stat-card stat-2 glass-panel"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
          >
            <span className="stat-number text-gradient">9.2</span>
            <span className="stat-label">CGPA</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
