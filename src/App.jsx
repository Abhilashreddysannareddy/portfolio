import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Download, Menu, X, Mail, Phone, 
  ChevronDown, ChevronUp, Brain, Rocket, Crosshair, Users, 
  Code, Globe, Database, PenTool, Lightbulb, Workflow, Languages, BarChart
} from 'lucide-react';
import './App.css';

/* ── Animation helpers ─────────────────────────── */
const inView = (delay = 0, y = 28) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

const inViewX = (delay = 0, x = -24) => ({
  initial: { opacity: 0, x },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── Nav ───────────────────────────────────────── */
const NAV_ITEMS = [
  { label: 'How I Think', href: '#how-i-think' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Built', href: '#built-systems' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Contact', href: '#contact' },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <a href="#" className="nav__logo" aria-label="Abhilash Reddy — Home">Abhilash Reddy</a>
        <ul className="nav__links" role="list">
          {NAV_ITEMS.map(n => <li key={n.label}><a href={n.href}>{n.label}</a></li>)}
        </ul>
        <a href={`${import.meta.env.BASE_URL}Abhilash_reddy_CV.pdf`} download className="btn-resume" aria-label="Download resume">
          <Download size={11} /> Resume
        </a>
        <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="nav__mobile" role="menu"
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {NAV_ITEMS.map(n => (
              <a key={n.label} href={n.href} role="menuitem" onClick={() => setMenuOpen(false)}>{n.label}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


function JackpotCounter({ text }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    if (typeof text !== 'string') {
      setDisplay(text);
      return;
    }
    const match = text.match(/([^\d]*)([\d.,]+)([^\d]*)/);
    if (!match) {
      setDisplay(text);
      return;
    }
    const prefix = match[1];
    const numStr = match[2].replace(/,/g, '');
    const suffix = match[3];
    const targetNum = parseFloat(numStr);
    const isFloat = numStr.includes('.');
    
    if (isNaN(targetNum)) {
      setDisplay(text);
      return;
    }
    
    let startTimestamp = null;
    const duration = 2000;
    let animationFrameId;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetNum;
      
      setDisplay(prefix + (isFloat ? current.toFixed(2) : Math.floor(current)) + suffix);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [text, isInView]);
  return <span ref={ref}>{display}</span>;
}

/* ── Hero ──────────────────────────────────────── */
const FLOW_STEPS = ['Problem', 'Insight', 'Product', 'System', 'Outcome'];

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section id="hero" className="hero" ref={heroRef} aria-label="Introduction">
      <div className="hero__bg-line" aria-hidden="true" />
      <motion.div className="hero__inner" style={{ opacity }}>
        <div className="hero__content">
          <motion.div 
            style={{ fontFamily: 'var(--font-body)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '8px', letterSpacing: '-0.02em' }}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            Hi, I am
          </motion.div>
          <motion.h1 className="hero__name"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16,1,0.3,1] }}>
            Abhilash Reddy Sannareddy
          </motion.h1>
          <motion.p className="hero__positioning"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
            Problem-First Builder &middot; Product Strategy &times; AI Systems &times; Entrepreneurship
          </motion.p>
          <motion.p className="hero__thesis"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            A problem-driven engineer who believes meaningful products begin with understanding the problem deeply not jumping straight to a solution. Working at the intersection of AI, Product, and Entrepreneurship, I uncover root causes, challenge assumptions, understand user and business needs, and identify opportunities worth solving. I build Agentic AI systems, intelligent automation workflows, and full-stack products that turn ambiguous problems into practical, scalable solutions. Beyond technology, I founded a 700+ member innovation ecosystem, creating opportunities for students to move from problems to ideas, products, patentable innovations, and ventures.
          </motion.p>
          <motion.div className="hero__flow"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.6 }}>
            {FLOW_STEPS.map((step, i) => (
              <div key={step} className="hero__flow-step">
                <div className="flow-node">
                  <div className="flow-node-dot" />
                  <span className="flow-node-label">{step}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && <div className="flow-arrow" aria-hidden="true" />}
              </div>
            ))}
          </motion.div>
          <motion.div className="hero__cta"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
            <a href="#work" className="btn-primary" id="explore-work-btn">Explore Work <ArrowRight size={14} /></a>
            <a href="#contact" className="btn-secondary" id="contact-btn">Get in Touch</a>
            <a href={`${import.meta.env.BASE_URL}Abhilash_reddy_CV.pdf`} download className="btn-secondary" id="download-resume-btn">
              <Download size={13} /> Resume
            </a>
          </motion.div>
        </div>
        <motion.div className="hero__portrait"
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16,1,0.3,1] }}>
          <div className="hero__portrait-frame">
            <img src={`${import.meta.env.BASE_URL}photo.png`} alt="Abhilash Reddy" loading="eager" />
            <div className="hero__portrait-overlay" aria-hidden="true" />
          </div>
          <div className="hero__portrait-tag" aria-hidden="true">Product &middot; AI &middot; Entrepreneurship</div>
        </motion.div>
      </motion.div>
      <motion.div className="hero__metrics"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>
        {[
          { val: '700+', lbl: 'Students in Ecosystem' },
          { val: 'Over 75%', lbl: 'Manual Work Eliminated' },
          { val: '98.4%', lbl: 'AI Prediction Accuracy' },
          { val: '9.19', lbl: 'CGPA' },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="hero__metric">
            <span className="hero__metric-val"><JackpotCounter text={val} /></span>
            <span className="hero__metric-lbl">{lbl}</span>
          </div>
        ))}
      </motion.div>
      <a href="#how-i-think" className="scroll-cue" aria-label="Scroll down">
        <div className="scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

/* ── How I Think ───────────────────────────────── */
const THINK_STEPS = [
  { num: '01', title: 'Find the Problem', desc: "Not the symptom. The root cause others overlook." },
  { num: '02', title: 'Understand the System', desc: "Who is affected? What creates this? What does the current system get wrong?" },
  { num: '03', title: 'Identify the Opportunity', desc: "Where is the value gap? What is underserved, misunderstood, or unseen?" },
  { num: '04', title: 'Design the Product', desc: "What specifically should be built? For whom? With what trade-offs?" },
  { num: '05', title: 'Build the System', desc: "Turn the design into functioning technology. Execute with precision." },
  { num: '06', title: 'Measure the Outcome', desc: "Did it solve the right problem? What does the evidence say? What changes next?" },
];

function HowIThink() {
  return (
    <section id="how-i-think" className="section section--tight" aria-labelledby="how-i-think-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">How I Think</div>
          <h2 id="how-i-think-heading" className="section__title">The Problem-First<br />Advantage.</h2>
          <div className="problem-statement-quote">
            "Anybody can build a solution to a given problem. I focus on identifying the right problem and understanding it deeply. While every engineer asks 'how do we solve this?', I ask 'is this really a problem worth solving?'"
          </div>
        </motion.div>
        
        {/* The 6 Steps Grid */}
        <motion.div className="thinking-grid" {...inView(0.1)} style={{ marginBottom: '64px' }}>
          {THINK_STEPS.map((step, i) => (
            <motion.div key={step.num} className="thinking-step" {...inView(0.06 * i)}>
              <span className="thinking-step__num">{step.num}</span>
              <div className="thinking-step__title">{step.title}</div>
              <div className="thinking-step__desc">{step.desc}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* The Comparison Section */}
        <div className="think-comparison">
          <motion.div className="think-others" {...inViewX(0.1)}>
            <div className="think-header">
              <span className="think-icon think-icon--bad">✕</span>
              <h4>The Solution-First Trap</h4>
            </div>
            <ul className="think-list">
              <li>Start with a trendy technology or feature idea.</li>
              <li>Build the product as quickly as possible.</li>
              <li>Launch and try to find users for it.</li>
              <li>Discover if the problem actually existed.</li>
            </ul>
            <div className="think-result think-result--bad">Result: Building things nobody wants.</div>
          </motion.div>

          <motion.div className="think-me" {...inViewX(0.2, 24)}>
            <div className="think-header">
              <span className="think-icon think-icon--good">✓</span>
              <h4>The Problem-First Approach</h4>
            </div>
            <ul className="think-list">
              <li>Start with an underserved, painful problem.</li>
              <li>Understand the root cause and system incentives.</li>
              <li>Identify the precise opportunity gap.</li>
              <li>Design and build the exact solution needed.</li>
            </ul>
            <div className="think-result think-result--good">Result: Building things that create actual value.</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Skills ────────────────────────────────────── */
const SKILL_CATEGORIES = [
  {
    title: "Product Management",
    icon: <Crosshair size={22} strokeWidth={1.5} />,
    skills: ["Product Discovery", "User Research", "Problem Framing", "Roadmapping", "Prioritization", "Stakeholder Management", "A/B Testing"]
  },
  {
    title: "AI & Agentic Systems",
    icon: <Brain size={22} strokeWidth={1.5} />,
    skills: ["LLMs", "Agentic AI (LangGraph, LangChain, LangSmith)", "AI Workflow Automation (n8n)", "Prompt Engineering"]
  },
  {
    title: "Business & Analytics",
    icon: <BarChart size={22} strokeWidth={1.5} />,
    skills: ["SQL", "Power BI", "MS Excel", "Go-to-Market Strategy", "KPI Tracking", "Competitive Analysis"]
  },
  {
    title: "Development & Cloud",
    icon: <Code size={22} strokeWidth={1.5} />,
    skills: ["Python", "Java", "JavaScript (React, Node.js)", "AWS", "GCP", "Firebase", "Git"]
  }
];

function Skills() {
  return (
    <section id="skills" className="section section--tight" aria-labelledby="skills-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Skills & Capabilities</div>
          <h2 id="skills-heading" className="section__title">The toolkit to build<br />from 0 to 1.</h2>
          <p className="section__subtitle">
            A cross-disciplinary stack bridging product strategy, AI engineering, and execution.
          </p>
        </motion.div>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div key={cat.title} className="skill-card" {...inView(0.06 * i)}>
              <div className="skill-card-header">
                <span className="skill-icon-svg" aria-hidden="true">{cat.icon}</span>
                <h3 className="skill-title">{cat.title}</h3>
              </div>
              <ul className="skill-list" role="list">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-dot" aria-hidden="true"/>{skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Case Studies ──────────────────────────────── */
const CASE_STUDIES = [
  {
    index: '01',
    type: 'PRODUCT STRATEGY',
    title: 'AI Salesperson for E-Commerce',
    subtitle: 'Customer Decision Engine for Commerce',
    summary: 'E-commerce platforms make customers search, filter, compare, and decide what fits their needs; designed a conversational Customer Decision Engine that understands customer intent through voice/chat, asks decision-relevant questions, learns preferences and rejections, and shifts e-commerce from product search → customer understanding → curated recommendations, narrowing large catalogs to 2–3 confident options.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Online shopping follows a predictable journey: Search → Filters → Product List → Reviews → Comparison → Decision. The customer is expected to know what product they need, which specifications matter, and how to interpret technical trade-offs. The real problem is not product discovery—it\'s that platforms do not understand the customer\'s underlying intent deeply enough.' },
      { label: 'Product Thesis', icon: '◈', content: 'Build the digital equivalent of a great physical salesperson. A conversational Decision Layer for E-Commerce that asks decision-relevant questions, learns from preferences, and guides the customer toward a confident purchase rather than interrogating them or acting as a passive search bar.' },
      { label: 'Proposed Product', icon: '◎', content: 'An AI Salesperson that conducts a natural, proactive conversation. It identifies actual needs (e.g., "Will you be running Docker? Then prioritize RAM over GPU"), dynamically refines recommendations based on rejection ("I don\'t like the weight"), and connects product intelligence across authorized marketplaces.' },
      { label: 'Strategic Positioning', icon: '◇', content: 'Positioned between the consumer and existing commerce platforms. Marketplaces own inventory, payments, and fulfillment; the AI decision layer owns customer intent, requirement discovery, comparison, and recommendation.' },
      { label: 'The Impact', icon: '✦', content: 'Transforms e-commerce from a reactive "Search → Filters → Lists" model into a proactive "Conversation → Understanding → Recommendation" engine. Reduces decision fatigue, comparison overload, and fear of making the wrong purchase.' }
    ],
    flow: [
      { stage: 'From', desc: 'Search → Filters → Lists → Research → Decision' },
      { stage: 'Conversation', desc: 'Understanding → Recommendation' },
      { stage: 'Confidence', desc: 'Guided product selection' },
      { stage: 'Purchase', desc: 'High-conviction transaction' }
    ],
    tags: ['Product Strategy', 'Conversational AI', 'E-Commerce', 'Decision Engine']
  },
  {
    index: '02',
    type: 'PRODUCT STRATEGY',
    title: 'Delivery ETA Intelligence Platform',
    subtitle: 'Translating Internal Logistics Data into Customer Intelligence',
    summary: 'Customers are forced to keep their day open for broad 9 AM–11 PM delivery windows; proposed a dynamic ETA layer using route, GPS, traffic, OpenBox & customer availability to convert these broad windows into focused, customer aware delivery windows that continuously adapt to changing conditions, reducing waiting uncertainty, WISMO tickets & failed deliveries.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Customers are forced to keep their day open for broad 9 AM–11 PM delivery windows. This creates customer uncertainty and contributes heavily to WISMO (Where Is My Order?) support requests, failed delivery attempts, re-delivery costs, and lower customer satisfaction.' },
      { label: 'Root Cause', icon: '◈', content: 'Operational visibility remained primarily internal. Logistics providers already possess route, rider, GPS, traffic, package-sequence, and delivery-completion information, but this intelligence is not translated into useful, dynamic customer-facing delivery predictions.' },
      { label: 'Proposed Product', icon: '◎', content: 'An ETA intelligence layer that predicts focused delivery windows based on route assignment, rider allocation, package sequence, real-time GPS location, traffic conditions, historical route data, and failed delivery patterns.' },
      { label: 'Product Strategy', icon: '◇', content: 'A phased rollout: 1. Smart delivery slots. 2. Dynamic ETA updates. 3. Proactive customer notifications. 4. Delivery intelligence dashboard for logistics partners to monitor fleet efficiency.' },
      { label: 'The Impact', icon: '✦', content: 'Dramatically reduces WISMO tickets and failed-delivery rates. Improves customer satisfaction by converting broad windows into focused, customer-aware delivery windows that continuously adapt to changing conditions.' }
    ],
    flow: [
      { stage: 'Internal Data', desc: 'Route · GPS · Traffic · Package Sequence' },
      { stage: 'Prediction Engine', desc: 'Smart delivery slots & dynamic updates' },
      { stage: 'Customer Window', desc: 'Proactive customer notifications' },
      { stage: 'Outcomes', desc: 'WISMO & failed delivery reduction' }
    ],
    tags: ['Product Strategy', 'Logistics', 'ETA Intelligence', 'Customer Experience']
  },
  {
    index: '03',
    type: 'RESEARCH / CONCEPTUAL FRAMEWORK',
    title: 'OpportunityOS',
    subtitle: 'Agentic AI Product Opportunity Discovery Framework',
    summary: 'Companies collect massive user signals across reviews, forums & tickets but struggle to discover which problems are worth solving; designed a multi-agent AI system that converts signals into emerging problems and scores them across severity, prevalence, growth momentum, underservedness, feasibility & novelty, bringing AI from problem solving to problem discovery intelligence.',
    sections: [
      { label: 'Research Question', icon: '⚑', content: 'How can heterogeneous user signals (app reviews, social media, developer forums, support tickets) be continuously transformed into validated product opportunities?' },
      { label: 'Core Concept', icon: '◈', content: 'OpportunityOS is a conceptual agentic AI framework that moves from Raw Signals → Problems → Opportunities rather than beginning with an already-defined problem.' },
      { label: 'Conceptual Architecture', icon: '◎', content: 'Contains five layers: Signal Ingestion, Signal Processing & Normalisation, Agentic Problem Extraction, Opportunity Synthesis & Scoring, and an Opportunity Intelligence Layer.' },
      { label: 'Agentic Workflow', icon: '◇', content: 'Designed specialized agents for signal extraction, problem clustering, and opportunity synthesis. Evaluates opportunities based on Severity, Prevalence, Growth Momentum, Underservedness, Feasibility, and Novelty.' },
      { label: 'The Impact', icon: '✦', content: 'Brings AI from problem-solving intelligence to problem-discovery intelligence. Enables organizations to identify high-value opportunities and underserved user needs before they become obvious market trends.' }
    ],
    flow: [
      { stage: 'The Shift', desc: 'From Problem Solving → Problem Discovery' },
      { stage: 'Signal Ingestion', desc: 'App reviews · Social · Tickets · Forums' },
      { stage: 'Opportunity Synthesis', desc: 'Clustering heterogeneous signals' },
      { stage: 'Scoring', desc: 'Severity · Prevalence · Growth · Feasibility' }
    ],
    tags: ['Agentic AI', 'Product Discovery', 'Conceptual Framework', 'Signal Mining']
  },
  {
    index: '04',
    type: 'STRATEGIC PRODUCT ANALYSIS',
    title: 'Intics — Enterprise AI Strategy',
    subtitle: 'From Document Intelligence to Outcome Intelligence',
    summary: 'Recognized that Intics’ AI generates strong recommendations with no way to verify whether they worked or to act on them end-to-end; proposed Outcome, Action & Trust layers that let the platform learn from real business results while all customer data stays on-premise, preserving Intics’ sovereign-AI promise.',
    sections: [
      { label: 'Strategic Question', icon: '⚑', content: 'How can enterprise AI move beyond generating recommendations toward measurable business outcomes, workflow execution, trusted decisions, and broader operating intelligence?' },
      { label: 'Strategic Gap', icon: '◈', content: 'Enterprise AI often acts as a recommendation endpoint. Without connecting these recommendations to real-world outcomes, the system cannot learn what actually works or verify if the decisions were effective.' },
      { label: 'Outcome Intelligence', icon: '◎', content: 'Connecting: Document → Decision → Outcome → Learning → Improved Future Decisions. Evaluates outcome signals like loan performance, appeal outcomes, bid win rates, compliance outcomes, and operational results.' },
      { label: 'Trust & Sovereignty', icon: '◇', content: 'Proposed Outcome, Action & Trust layers that let the platform learn from real business results while ensuring all customer data stays on-premise, strictly preserving the sovereign-AI promise.' },
      { label: 'The Impact', icon: '✦', content: 'Evolves enterprise intelligence from Document Intelligence to a System of Action. Creates a continuous feedback loop that builds trusted, predictive operational intelligence based on real-world execution.' }
    ],
    flow: [
      { stage: 'Document', desc: 'Extracting insights from enterprise data' },
      { stage: 'Decision', desc: 'Generating AI recommendations' },
      { stage: 'Outcome', desc: 'Measuring business execution results' },
      { stage: 'Learning', desc: 'Feedback loop for predictive intelligence' }
    ],
    tags: ['Enterprise AI', 'Product Strategy', 'Outcome Intelligence', 'System of Action']
  },
  {
    index: '05',
    type: 'STARTUP STRATEGY · CIRCULAR ECONOMY',
    title: 'India Battery Lifecycle & Recovery Platform',
    subtitle: 'The Missing Middle in EV Battery Circular Economy',
    summary: 'Found that India’s announced Li-ion recycling capacity (80,000+ tonnes/yr) is already 2.2× its entire 2025 end-of-life battery supply (∼36,000 tonnes/yr), yet only ∼5,000 tonnes (∼14%) get collected formally each year– so the real bottleneck isn’t recycling capacity, it’s collection; designed an asset-light Find → Collect → Grade → Route platform partnering with existing recyclers to close that feedstock gap ahead of India’s projected 233,000 tonnes/yr EOL volume by 2035.',
    sections: [
      { label: 'Market Gap', icon: '⚑', content: 'India\'s announced Li-ion recycling capacity (80,000+ tonnes/yr) is already 2.2× its entire 2025 end-of-life battery supply (~36,000 tonnes/yr). The real bottleneck isn\'t recycling capacity—it\'s the fragmented collection system across service centres, dealers, and fleets.' },
      { label: 'Proposed Product Model', icon: '◈', content: 'An independent EV-battery reverse network that specializes in fragmented collection, battery identification and grading, aggregation, and routing. Flow: Find → Collect → Identify → Test/Assess → Grade → Aggregate → Track → Route.' },
      { label: 'Routing Logic', icon: '◎', content: 'Maximizes value recovered per battery, not just tonnes recycled. Grade A → Reuse/Refurbishment; Grade B → Second-life energy storage; Grade C → Authorized Recycling. Operates as an asset-light, neutral aggregation layer.' },
      { label: 'Scalability', icon: '◇', content: 'Designed for India\'s future battery ecosystem, scaling from consumer electronics to EV service centres, fleet batteries, OEM take-backs, energy storage, and manufacturing scrap.' },
      { label: 'The Impact', icon: '✦', content: 'Closes the feedstock gap ahead of India\'s projected 233,000 tonnes/yr EOL volume by 2035. Provides OEMs/fleets with visibility while giving recyclers/refurbishers predictable, high-quality, graded feedstock.' }
    ],
    flow: [
      { stage: 'Source', desc: 'OEMs · Fleets · Dealers · Workshops' },
      { stage: 'Grade', desc: 'Identify · Test/Assess · Categorize' },
      { stage: 'Aggregate', desc: 'Neutral, asset-light collection network' },
      { stage: 'Route', desc: 'Refurbishers · Second-life · Recyclers' }
    ],
    tags: ['Startup Strategy', 'Circular Economy', 'EV Batteries', 'Asset-Light']
  }];

function CaseStudyCard({ cs, i }) {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <motion.article className="case-study-card" {...inView(0.04 * i)} aria-labelledby={`cs-title-${cs.index}`}>
      <div className="cs-meta">
        <span className="cs-index">{cs.index} / {CASE_STUDIES.length}</span>
        <span className="cs-type-badge">{cs.type}</span>
      </div>
      <h3 id={`cs-title-${cs.index}`} className="cs-title">{cs.title}</h3>
      <p className="cs-subtitle">{cs.subtitle}</p>
      
      <div className="cs-origin" style={{ margin: '24px 0' }}>
        <strong>Problem & Approach</strong>
        {cs.summary}
      </div>

      <div className="cs-flow-section">
        <span className="cs-problem-label">How It Works</span>
        <div className="cs-flow">
          {cs.flow.map((f, j) => (
            <div key={j} className="cs-flow-item">
              <div className="cs-flow-dot" aria-hidden="true">{String(j + 1).padStart(2, '0')}</div>
              <div className="cs-flow-text">
                <span className="cs-flow-stage">{f.stage}</span>
                <span className="cs-flow-desc">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-secondary" style={{ marginBottom: expanded ? '24px' : '0' }} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Close Deep Dive' : 'Read Deep Dive'} {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="cs-sections">
              {cs.sections.map((sec, j) => (
                <div key={j} className="cs-section-block">
                  <div className="cs-section-header">
                    <span className="cs-section-icon">{sec.icon}</span>
                    <span className="cs-section-label">{sec.label}</span>
                  </div>
                  <p className="cs-section-text">{sec.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="cs-tags">
        {cs.tags.map(t => <span key={t} className="cs-tag">{t}</span>)}
      </div>
    </motion.article>
  );
}

function CaseStudies() {
  return (
    <section id="work" className="section" aria-labelledby="case-studies-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Case Studies</div>
          <h2 id="case-studies-heading" className="section__title">Problem first.<br />Always.</h2>
          <p className="section__subtitle">
            Each case study begins with a real problem. Not a feature request. Not a technology looking for an application. A problem worth understanding.
          </p>
        </motion.div>
        <div className="case-studies-list">
          {CASE_STUDIES.map((cs, i) => (
            <CaseStudyCard key={cs.index} cs={cs} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Built Systems ─────────────────────────────── */
const BUILT_SYSTEMS = [
  {
    label: 'BUILT · Full-Stack + IoT',
    title: 'Cloud-Based Restaurant Billing & Order Management Platform',
    brief: 'Local restaurants paid for dedicated computers, hardware & upkeep at every billing/printing counter; built a low-cost ESP+MQTT thermal-printing system letting printers receive orders directly, cutting hardware dependency and scaling pilot volume 6× (25 → 150+ orders/day; 9K → 55K orders/year).',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Local restaurants often rely on conventional billing and POS infrastructure requiring dedicated computers, hardware, maintenance, and recurring technology costs.' },
      { label: 'Technical Solution', icon: '◎', content: 'Built an ESP-based thermal printing system using MQTT, enabling thermal printers to receive and process orders without requiring a dedicated computer at each printer. Designed a cloud-connected architecture allowing order information to move from the software platform to the printer through a lightweight communication layer.' },
      { label: 'Business Outcome', icon: '◇', content: 'Reduced hardware and maintenance requirements for restaurants. Simplified restaurant order processing and reduced missed-order situations. Enabled pilot operations to scale from approximately 25 orders/day to 100–150+ orders/day.' }
    ],
    metric: { val: '6x', lbl: 'Order volume scaled', context: '~25 to 100–150+ orders/day in documented pilot' },
    tech: ['Cloud Architecture', 'MQTT', 'ESP', 'Thermal Printing', 'Full-Stack Development'],
    recognition: null,
  },
  {
    label: 'BUILT · AI/ML Decision Support',
    title: 'Precision Bid Management & Tender Analysis System',
    brief: '(Pragyan Hackathon × Aurigo Software) – Contractors manually evaluated technical, financial & competitor data for bids; built an ML-powered decision-support platform analyzing historical bids, pricing & competitor trends to balance competitiveness with target profitability.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Contractors often rely on manual evaluation of technical requirements, financial information, competitor pricing, historical bids, material costs, and bidding trends when preparing tender submissions.' },
      { label: 'Product Approach', icon: '◎', content: 'Analyzed historical bids, contracts, bidding trends, competitor pricing, material costs, and technical and commercial parameters. Used historical bidding information to identify patterns in winning bid prices, competitor pricing trends, material costs, and bidding behavior.' },
      { label: 'Context', icon: '◇', content: 'Developed as a solution concept during the Pragyan Hackathon in collaboration with Aurigo Software Technologies.' }
    ],
    metric: { val: 'Data-Driven', lbl: 'Bidding Strategy', context: 'Replaced manual evaluation with predictive ML modeling' },
    tech: ['Machine Learning', 'Historical Data Analysis', 'Decision Support', 'Competitive Analysis'],
    recognition: 'Pragyan Hackathon · Aurigo Software Technologies',
  },
  {
    label: 'BUILT · AI + IoT · Winner',
    title: 'AI-Powered Smart Agriculture & Farm-to-Market Platform',
    brief: '(Winner – Prototyping Contest) – Farmers managed seed procurement, irrigation, monitoring & selling as disconnected processes; integrated IoT sensors (NPK, soil moisture, temperature, pH) with ML across the farm-to-market chain, achieving 98.4% prediction accuracy for crop & irrigation decisions.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Farmers often manage seed procurement, crop planning, irrigation, farm monitoring, and produce selling through fragmented processes.' },
      { label: 'Technical Approach', icon: '◎', content: 'Integrated IoT sensors to monitor agricultural parameters including NPK levels, soil moisture, temperature, humidity, and pH. Applied machine learning to agricultural data for crop recommendations and irrigation decisions. Designed an integrated product ecosystem rather than treating these as separate workflows.' },
      { label: 'The Impact', icon: '◇', content: 'Achieved 98.4% prediction accuracy in the developed prediction system.' }
    ],
    metric: { val: '98.4%', lbl: 'ML prediction accuracy', context: 'Based on cross-validation of key soil parameters' },
    tech: ['Machine Learning', 'IoT Sensors', 'React', 'Cloud Architecture'],
    recognition: 'Winner — Prototyping Contest',
  }
];

function BuiltSystemCard({ s, i }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div className="built-card" {...inView(0.08 * i)}>
      <span className="built-card__label">{s.label}</span>
      <h3 className="built-card__title">{s.title}</h3>
      
      <div className="built-card__brief" style={{ lineHeight: 1.6 }}>
        <strong>Overview:</strong> {s.brief}
      </div>
      
      <div className="built-card__metric" style={{marginTop: '16px'}}>
        <span className="built-metric-val">{s.metric.val}</span>
        <div>
          <span className="built-metric-lbl">{s.metric.lbl}</span><br />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-tertiary)' }}>{s.metric.context}</span>
        </div>
      </div>
      
      <button className="btn-secondary" style={{ marginTop: '20px', marginBottom: expanded ? '16px' : '0' }} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Close Details' : 'Read More'} {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="built-sections">
              {s.sections.map((sec, j) => (
                <div key={j} className="built-section-block">
                  <div className="built-section-header">
                    <span className="built-section-icon">{sec.icon}</span>
                    <span className="built-section-label">{sec.label}</span>
                  </div>
                  <p className="built-section-text">{sec.content}</p>
                </div>
              ))}
            </div>

            <div className="built-card__tech" style={{ marginTop: '16px', marginBottom: '16px' }}>
              {s.tech.map(t => <span key={t} className="built-tech-tag">{t}</span>)}
            </div>
            
            {s.recognition && (
              <div style={{ padding: '6px 12px', background: 'var(--link-soft)', border: '1px solid var(--link-line)', borderRadius: 'var(--r-xs)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-link)' }}>
                {s.recognition}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function BuiltSystems() {
  return (
    <section id="build" className="section section--tight" aria-labelledby="built-systems-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Built Systems</div>
          <h2 id="built-systems-heading" className="section__title">Not just strategy.<br />Actual execution.</h2>
          <p className="section__subtitle">
            These are systems I actually built and tested — translating strategy into functional, deployed technology.
          </p>
        </motion.div>
        <div className="case-studies-list">
          {BUILT_SYSTEMS.map((s, i) => (
            <BuiltSystemCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Experience ────────────────────────────────── */
const EXP_STEPS = [
  { n: '01', title: 'Process Discovery', desc: 'Worked directly with founders to map fragmented, manual workflows across 5+ startup operations. Identified root causes and prioritized high-impact automation targets.' },
  { n: '02', title: 'Product Requirements', desc: 'Translated operational pain points into structured product requirements — defining scope, success metrics, and integration constraints for each AI workflow.' },
  { n: '03', title: 'Agentic AI Build', desc: 'Designed and implemented 20+ intelligent workflows using LangGraph, LangChain, n8n and LLMs — converting fragmented manual processes into scalable AI-enabled systems.' },
  { n: '04', title: 'Assist Pro Platform', desc: 'Developed and enhanced Assist Pro — an AI-powered automation platform for startup operations — achieving over 75% manual effort reduction.' },
];

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Experience</div>
          <h2 id="experience-heading" className="section__title">Where theory met<br />real operations.</h2>
        </motion.div>
        <div className="exp-layout">
          <motion.div className="exp-left" {...inViewX(0.1)}>
            <span className="exp-story-label">Modern Agriculture Technology Innovation Center</span>
            <h3 className="exp-company-name">MATIC</h3>
            <p className="exp-company-meta"><span className="highlight-role">Agentic AI Developer Intern</span> · MADeIT Incubated · IIITDM Kancheepuram<br />Chennai, Tamil Nadu · Jun 2025 – Oct 2025</p>
            <div className="exp-journey">
              {EXP_STEPS.map((step) => (
                <div key={step.n} className="exp-journey-step">
                  <div className="exp-step-dot" aria-hidden="true">{step.n}</div>
                  <div className="exp-step-body">
                    <div className="exp-step-title">{step.title}</div>
                    <div className="exp-step-desc">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div className="exp-right" {...inViewX(0.2, 24)}>
            <div className="exp-metric-block">
              <span className="exp-big-metric">Over 75%</span>
              <p className="exp-metric-context">Manual effort reduction across startup operations through AI workflow automation</p>
            </div>
            <div className="exp-detail-row">
              {[
                <><strong>Founder collaboration:</strong> Direct stakeholder engagement to map business processes and define product requirements</>,
                <><strong>LangGraph · LangChain · n8n · LLMs</strong> — complete agentic AI stack</>,
                <><strong>20+ intelligent workflows</strong> designed and implemented</>,
                <><strong>Internship type:</strong> Full-time · Hybrid · 4 months</>,
              ].map((text, i) => (
                <div key={i} className="exp-detail-item">
                  <div className="exp-detail-dot" aria-hidden="true" />
                  <div className="exp-detail-text">{text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Ventures ────────────────────────────────── */
function Ventures() {
  return (
    <section id="ventures" className="section" aria-labelledby="ventures-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Ventures & Leadership</div>
          <h2 id="ventures-heading" className="section__title">Building the ecosystem<br />before the product.</h2>
          <p className="section__subtitle">Leading interdisciplinary communities to bridge the gap between engineering, management, and real-world execution.</p>
        </motion.div>
        
        <div className="ventures-split">
          <motion.div className="venture-card-large" {...inViewX(0.1)}>
            <div className="vc-header">
              <div className="vc-logo-wrapper">
                <img src={`${import.meta.env.BASE_URL}yxh.jpeg`} alt="Yantriksha X Hub Logo" className="vc-logo" />
              </div>
              <span className="vc-date">Feb 2025 – Present · <span className="highlight-role">Founder, Chairman & President</span></span>
              <a href="https://yantrikshaxhub.veltech.edu.in" target="_blank" rel="noopener noreferrer" className="vc-title-link">
                <h3 className="vc-title">Yantriksha X Hub</h3>
                <ArrowUpRight size={24} className="vc-arrow"/>
              </a>
              <span className="vc-subtitle">Student Innovation & Entrepreneurship Ecosystem</span>
            </div>
            
            <ul className="think-list" style={{ marginTop: '24px', marginBottom: '24px' }}>
              <li>
                Identified a gap in interdisciplinary problem discovery among students; built a 700+ student, 300+ alumni ecosystem across engineering, management & law using a <strong>Confusion (−1) → Idea (0) → Product (1)</strong> framework to guide teams from ambiguity to a validated idea to a working product.
              </li>
              <li>
                Facilitated 100+ internships, supported 100+ patentable projects, and built a network of 20+ industry experts via IICs, TBIs & startup partners.
              </li>
            </ul>
            
            <div className="yantriksha-framework">
              {[
                { num: '−1', label: 'Confusion', desc: 'Raw problem, ambiguity, unclear direction' },
                { num: '0', label: 'Idea', desc: 'Tech + Business + Legal disciplines converging' },
                { num: '1', label: 'Product', desc: 'Development, execution, validated venture' },
              ].map((s) => (
                <div key={s.num} className="yf-step">
                  <span className="yf-num">{s.num}</span>
                  <span className="yf-label">{s.label}</span>
                  <span className="yf-desc">{s.desc}</span>
                </div>
              ))}
            </div>
            
            <div className="yantriksha-stats" style={{marginTop: '32px'}}>
              {[
                { val: '700+', lbl: 'Active students' },
                { val: '300+', lbl: 'Alumni' },
                { val: '100+', lbl: 'Internships' },
                { val: '100+', lbl: 'Patents' },
              ].map(s => (
                <div key={s.lbl} className="ys-stat">
                  <span className="ys-val">{s.val}</span>
                  <span className="ys-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="venture-card-large" {...inViewX(0.2, 24)}>
             <div className="vc-header">
              <div className="vc-logo-wrapper">
                <img src={`${import.meta.env.BASE_URL}jbu.jpeg`} alt="JBU Logo" className="vc-logo" />
              </div>
              <span className="vc-date">Feb 2026 – Present · <span className="highlight-role">Show Director</span></span>
              <a href="https://justbetweenus.veltech.edu.in" target="_blank" rel="noopener noreferrer" className="vc-title-link">
                <h3 className="vc-title">Just Between Us (JBU)</h3>
                <ArrowUpRight size={24} className="vc-arrow"/>
              </a>
              <span className="vc-subtitle">Student-Led Town Hall Platform</span>
            </div>
            
            <ul className="think-list" style={{ marginTop: '24px', marginBottom: '32px' }}>
              <li>
                Co-created a platform bridging students and accomplished leaders; led speaker outreach, content curation & event ops across 4 episodes, engaging hundreds of students.
              </li>
              <li style={{ marginTop: 16 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Key Episodes Hosted:</strong>
                <ul style={{ paddingLeft: '1.2rem', marginTop: 8, listStyleType: 'disc', color: 'var(--text-secondary)' }}>
                  <li><strong>Episode 1:</strong> Voleti Karthik – Founder & CEO, Flashoot</li>
                  <li><strong>Episode 2:</strong> Dr. Mrs. Rangarajan Mahalakshmi Kishore – Chairperson & Managing Trustee, Vel Tech</li>
                  <li><strong>Episode 3:</strong> Karen Vincent – Stand-up Comedian, Actor & Digital Content Creator</li>
                  <li><strong>Episode 4:</strong> Justice Markandey Katju – Former Judge, Supreme Court of India</li>
                </ul>
              </li>
            </ul>

            <div className="yantriksha-stats" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="ys-stat">
                <span className="ys-val">4</span>
                <span className="ys-lbl">Live Episodes</span>
              </div>
              <div className="ys-stat">
                <span className="ys-val">4</span>
                <span className="ys-lbl">Industry Speakers</span>
              </div>
              <div className="ys-stat">
                <span className="ys-val">300+</span>
                <span className="ys-lbl">Students Engaged</span>
              </div>
            </div>

            <div style={{ marginTop: 24, padding: '16px', background: 'var(--bg-2)', borderRadius: 'var(--r-sm)', border: '1px solid var(--surface-border)'}}>
               <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6}}>
                 JBU serves as the cultural heart of the ecosystem, creating a direct feedback loop between aspiring student builders and proven industry operators.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Achievements ──────────────────────────────── */
const ACHIEVEMENTS = [
  { badge: 'Winner', text: 'Prototyping Contest' },
  { badge: 'Winner', text: 'Cybersecurity Bootcamp, IIITDM Kancheepuram' },
  { badge: 'Runner-Up', text: 'Project Idea Contest' },
  { badge: 'Organizer', text: 'VISAI 2026 (720+ students, 240+ teams, 44 institutions, 14 industry partners)' },
  { badge: 'Organizer', text: 'SIH 2026 Internal Hackathon (70 → 200+ teams)' },
  { badge: 'Organizer', text: 'L&T Techgium 2025 & 2026' },
  { badge: 'Evaluator', text: 'Innovation Marathon, KRM Public School (300+ submissions)' },
  { badge: 'Volunteer', text: 'SDIP 4.0, EDII-Tamil Nadu' },
];

function Achievements() {
  return (
    <section id="achievements" className="section section--tight" aria-labelledby="achievements-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Achievements & Competitions</div>
          <h2 id="achievements-heading" className="section__title">Evidence of execution,<br />not a trophy wall.</h2>
        </motion.div>
        <div className="achievements-layout">
          <motion.div {...inViewX(0.1)}>
            <div className="achievements-list">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div key={i} className="achieve-item" {...inView(0.04 * i)}>
                  <span className="achieve-badge-text">{a.badge}</span>
                  <span className="achieve-text">{a.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div {...inViewX(0.2, 24)}>
            <div className="visai-highlight">
              <h3 className="visai-title">VISAI 2026 — 16th International Project Expo and Hackathon</h3>
              <div className="visai-stats">
                {[
                  { val: '720+', lbl: 'Students' },
                  { val: '240+', lbl: 'Teams' },
                  { val: '44', lbl: 'Institutions' },
                  { val: '14', lbl: 'Industry Partners' },
                ].map(s => (
                  <div key={s.lbl}>
                    <span className="visai-stat-val">{s.val}</span>
                    <span className="visai-stat-lbl">{s.lbl}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginTop: 12 }}>Role: Organizer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── My Story ──────────────────────────────────── */
const STORY_STEPS = [
  { n: '01', stage: 'Curiosity', title: 'How does it work?', text: 'It started with being curious about how things work under the hood. That pointed me toward Computer Science and AI.' },
  { n: '02', stage: 'Engineering', title: 'Learning to build', text: 'Engineering taught me systems, algorithms, and architecture. It taught me exactly how to build technology that works.' },
  { n: '03', stage: 'The Realization', title: 'The most expensive mistake', text: "Through hackathons and early projects, I realized something critical: The most expensive mistake isn't writing bad code. It's writing perfect code for the wrong problem." },
  { n: '04', stage: 'Problem Discovery', title: 'Asking a different question', text: 'While everyone else was asking "how do we solve this?", I started asking "are we solving the right problem? Is this even worth solving?"' },
  { n: '05', stage: 'Product Thinking', title: 'Connecting tech to value', text: 'Product Management expands engineering capability. It is the connective tissue between a technical solution, a user\'s pain point, and a business outcome.' },
  { n: '06', stage: 'Entrepreneurship', title: 'Building the ecosystem', text: 'Engineering is the how. Product is the what. Business is the why. Entrepreneurship is bringing them all together to create actual impact.' },
];

function MyStory() {
  return (
    <section id="story" className="section" aria-labelledby="story-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">My Story</div>
          <h2 id="story-heading" className="section__title">How I got here.<br />Where I am going.</h2>
          <p className="section__subtitle">This is not a resume. It is the logic behind all the choices.</p>
        </motion.div>
        <div className="story-layout">
          <motion.div {...inViewX(0.1)}>
            <div className="story-progression">
              {STORY_STEPS.map((step) => (
                <div key={step.n} className="story-step">
                  <div className="story-dot" aria-hidden="true">{step.n}</div>
                  <div className="story-body">
                    <span className="story-stage">{step.stage}</span>
                    <div className="story-title">{step.title}</div>
                    <p className="story-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <motion.div {...inView(0.2)} style={{ marginTop: 32 }}>
              <div className="story-direction">
                I did not change the destination.<br /><em>I changed the timeline.</em>
              </div>
            </motion.div>
          </motion.div>
          <motion.div className="story-aside" {...inViewX(0.2, 24)}>
            <div className="story-portrait">
              <img src={`${import.meta.env.BASE_URL}photo.png`} alt="Abhilash Reddy" loading="lazy" />
            </div>
            <div className="story-edu">
              <div className="edu-row">
                <div>
                  <div className="story-edu-title">Vel Tech R&D Institute</div>
                  <div className="story-edu-meta">B.Tech CSE (AI &amp; ML) · Expected 2027</div>
                </div>
                <div className="story-edu-cgpa">9.19</div>
              </div>
            </div>
            <div style={{ marginTop: 24, padding: '20px', background: 'var(--bg-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--surface-border)' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 12 }}>
                <Languages size={14} /> Languages
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {[['English', 'Professional'], ['Telugu', 'Native'], ['Hindi', 'Professional'], ['Tamil', 'Working'], ['German', 'Basic']].map(([l, lv]) => (
                  <span key={l} className="cs-tag" style={{ background: 'var(--bg-0)' }}>{l} · <span style={{ color: 'var(--text-tertiary)' }}>{lv}</span></span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── Contact ───────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-inner">
          <motion.div className="contact-left" {...inViewX(0)}>
            <h2 id="contact-heading" className="contact-question">Ready to identify<br />something real?</h2>
            <p className="contact-sub">I am actively looking for PM roles, AI systems collaborations and opportunities at the intersection of product, technology and entrepreneurship.</p>
          </motion.div>
          <motion.div {...inViewX(0.1, 20)}>
            <div className="contact-links">
              {[
                { icon: <Mail size={16} />, label: 'Email', val: 'sannareddyabhilashreddy@gmail.com', href: 'mailto:sannareddyabhilashreddy@gmail.com' },
                { icon: <Phone size={16} />, label: 'Phone', val: '+91 7032026509', href: 'tel:+917032026509' },
                { icon: '🔗', label: 'LinkedIn', val: 'abhilash-reddy-sannareddy', href: 'https://www.linkedin.com/in/abhilash-reddy-sannareddy/' },
                { icon: '⌥', label: 'GitHub', val: 'Abhilashreddysannareddy', href: 'https://github.com/Abhilashreddysannareddy' },
              ].map(({ icon, label, val, href }, i) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" className="clink"
                  {...inView(0.06 * i)} whileHover={{ x: 4 }} aria-label={`${label}: ${val}`}>
                  <span className="clink-icon" aria-hidden="true">{icon}</span>
                  <div>
                    <span className="clink-label">{label}</span>
                    <span className="clink-val">{val}</span>
                  </div>
                  <ArrowUpRight size={14} className="clink-arrow" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="footer">
          <span>© 2025–2026 Abhilash Reddy Sannareddy</span>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <div className="divider" />
        <HowIThink />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <CaseStudies />
        <div className="divider" />
        <BuiltSystems />
        <div className="divider" />
        <Experience />
        <div className="divider" />
        <Ventures />
        <div className="divider" />
        <Achievements />
        <div className="divider" />
        <MyStory />
        <Contact />
      </main>
    </>
  );
}
