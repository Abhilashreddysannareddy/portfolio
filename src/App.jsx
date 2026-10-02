import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowUpRight, Download, Menu, X, Mail, Phone, 
  ChevronDown, ChevronUp, Brain, Rocket, Crosshair, Users, 
  Code, Globe, Database, PenTool, Lightbulb, Workflow, Languages
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
  { label: 'Work', href: '#work' },
  { label: 'How I Think', href: '#how-i-think' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Story', href: '#story' },
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
          <motion.div className="hero__availability"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
            <span className="avail-dot" aria-hidden="true" />
            Open to opportunities
          </motion.div>
          <motion.h1 className="hero__name"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16,1,0.3,1] }}>
            Abhilash Reddy
          </motion.h1>
          <motion.p className="hero__positioning"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
            Problem-First Builder &middot; Product Strategy &times; AI Systems &times; Entrepreneurship
          </motion.p>
          <motion.p className="hero__thesis"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            I identify meaningful problems, understand the systems behind them, and turn them into{' '}
            <strong>products, AI systems, and ventures.</strong>
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
          { val: '70%+', lbl: 'Manual Work Eliminated' },
          { val: '98.4%', lbl: 'AI Prediction Accuracy' },
          { val: '9.19', lbl: 'CGPA' },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="hero__metric">
            <span className="hero__metric-val">{val}</span>
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
function HowIThink() {
  return (
    <section id="how-i-think" className="section section--tight" aria-labelledby="how-i-think-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">How I Think</div>
          <h2 id="how-i-think-heading" className="section__title">The Problem-First<br />Advantage.</h2>
          <p className="section__subtitle">
            Most builders start with a solution and search for a problem. I start with the root cause.
          </p>
        </motion.div>
        
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
    title: "Product & Strategy",
    icon: <Crosshair size={22} strokeWidth={1.5} />,
    skills: ["Problem Discovery", "Opportunity Sizing", "Roadmap Planning", "GTM Strategy", "User Research", "Agile & Scrum"]
  },
  {
    title: "AI & Systems Engineering",
    icon: <Brain size={22} strokeWidth={1.5} />,
    skills: ["Agentic AI (LangGraph/LangChain)", "LLM Integration", "RAG Systems", "Prompt Engineering", "Python", "Multi-Agent Architecture"]
  },
  {
    title: "Prototyping & Design",
    icon: <PenTool size={22} strokeWidth={1.5} />,
    skills: ["React & Frontend UI", "Node.js", "IoT (ESP/MQTT)", "Figma / UI/UX Design", "API Design", "Rapid Prototyping"]
  },
  {
    title: "Leadership & Execution",
    icon: <Rocket size={22} strokeWidth={1.5} />,
    skills: ["Cross-functional Leadership", "0 to 1 Execution", "Event Production", "Ecosystem Building", "Public Speaking", "Stakeholder Management"]
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
                {cat.skills.map(skill => (
                  <li key={skill} className="skill-item">
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
    type: 'CONCEPTUAL FRAMEWORK',
    title: 'OpportunityOS',
    subtitle: 'Agentic AI for Problem Discovery',
    hook: 'Most teams ask: "How do we build this?" The better question is: "Should we build this at all — and what should we build instead?"',
    problemBrief: 'Product teams drown in qualitative noise (reviews, tickets) and struggle to find validated, underserved problems before competitors do.',
    sections: [
      {
        label: 'The Problem',
        icon: '⚑',
        content: 'Every product team is drowning in noise — app store reviews, Reddit threads, support tickets, Twitter complaints. Inside that noise are real, unmet problems. But nobody has a systematic way to find them before the market validates them.',
      },
      {
        label: 'The Insight',
        icon: '◈',
        content: 'The best product opportunities are visible before they\'re obvious. Weak signals across multiple unrelated products point to the same hidden problem. The challenge is extracting signal from noise at scale.',
      },
      {
        label: 'The Approach',
        icon: '◎',
        content: 'OpportunityOS is an agentic AI framework: Signal Ingestion (forums, social, support) → Agentic Extraction (specialized agents) → Problem Clustering → Opportunity Scoring (Severity × Prevalence × Growth) → Opportunity Intelligence (a ranked map of problems).',
      },
      {
        label: 'Why It Matters',
        icon: '◇',
        content: 'Every product decision downstream of opportunity selection is constrained by that selection. OpportunityOS makes the most important product decision — "what to build" — rigorous and data-driven.',
      },
    ],
    flow: [
      { stage: 'Signal Ingestion', desc: 'App reviews · Forums · Social · Support tickets' },
      { stage: 'Agentic Extraction', desc: 'Extraction → Validation → Deduplication' },
      { stage: 'Opportunity Scoring', desc: 'Severity · Prevalence · Growth · Feasibility' },
      { stage: 'Opportunity Intelligence', desc: 'Ranked, validated problem map for strategy' },
    ],
    tags: ['Agentic AI', 'LangGraph', 'Signal Mining', 'Product Strategy', 'LLMs', 'Multi-Agent Systems'],
  },
  {
    index: '02',
    type: 'PRODUCT CASE STUDY',
    title: 'AI Salesperson for E-Commerce',
    subtitle: 'Customer Decision Engine for Commerce',
    hook: 'E-commerce solved logistics and payments. It never solved decision-making. The customer still does all the cognitive work.',
    problemBrief: 'Customers are overwhelmed by 240+ search results and specs. They abandon purchases because they cannot confidently decide what fits their needs.',
    sections: [
      {
        label: 'The Problem',
        icon: '⚑',
        content: 'A customer wants to buy a laptop. They get 240 results. They filter, compare specs, open 8 tabs, and read reviews. An hour later, they abandon the purchase out of confusion. This is a decision problem.',
      },
      {
        label: 'The Insight',
        icon: '◈',
        content: 'A great physical salesperson does something different: they ask "What will you use it for?" and surface 2-3 tailored options, explaining the trade-offs. They translate vague intent into structured requirements.',
      },
      {
        label: 'The Approach',
        icon: '◎',
        content: 'The AI Salesperson recreates this: Intent Understanding → Decision-Relevant Questions → Requirement Structuring → Personalized Shortlisting (2-3 confident options) → Rejection Learning (refining based on feedback).',
      },
      {
        label: 'The Impact',
        icon: '◇',
        content: 'A customer who receives a confident, contextually matched recommendation converts at significantly higher rates and returns less often. The real win is trust and retention.',
      },
    ],
    flow: [
      { stage: 'From', desc: 'Search → 240 results → spec comparison → abandonment' },
      { stage: 'Conversation', desc: 'Intent questions → structured requirements' },
      { stage: 'Shortlist', desc: '2–3 contextually matched options with trade-offs' },
      { stage: 'Refinement', desc: 'Rejection feedback → better recommendations' },
    ],
    tags: ['Product Thinking', 'Conversational AI', 'Recommendation Systems', 'E-Commerce', 'Intent Understanding'],
  },
  {
    index: '03',
    type: 'PM CASE STUDY',
    title: 'Delivery ETA Intelligence Platform',
    subtitle: 'Translating Internal Logistics Data into Customer Intelligence',
    hook: '"Your order will be delivered today." That sentence is almost useless. Logistics companies have the data to do far better.',
    problemBrief: 'Customers lack precise delivery visibility, generating expensive WISMO (Where Is My Order) tickets, despite logistics companies possessing the underlying data.',
    sections: [
      {
        label: 'The Problem',
        icon: '⚑',
        content: 'Logistics companies know rider locations, package sequences, and traffic. Yet customers see "Delivery by 11 PM." This opacity generates WISMO tickets that cost money and damage trust.',
      },
      {
        label: 'The Insight',
        icon: '◈',
        content: 'This is a translation problem. Internal logistics data is precise, but customer communication is vague. We need a prediction layer that converts operational data into dynamic, confidence-scored delivery windows.',
      },
      {
        label: 'The Approach',
        icon: '◎',
        content: 'The platform aggregates Route assignment + GPS + Traffic + Historical completion rates to produce a confidence-scored window that narrows in real-time (e.g., "Expected 2:30–3:15 PM, 92% confidence").',
      },
      {
        label: 'The Impact [Projected]',
        icon: '◇',
        content: 'Projected outcomes: 30-40% reduction in WISMO support tickets and 15-25% reduction in failed deliveries through proactive re-scheduling. Direct operational cost savings.',
      },
    ],
    flow: [
      { stage: 'Data Inputs', desc: 'Route · GPS · Traffic · Historical patterns' },
      { stage: 'Prediction Engine', desc: 'Dynamic confidence-scored windows' },
      { stage: 'Customer Layer', desc: '"Expected 2:30–3:15 PM (92% confidence)"' },
      { stage: 'Proactive Actions', desc: 'Push notifications · Pre-failure re-scheduling' },
    ],
    tags: ['Product Strategy', 'Last-Mile Logistics', 'ML', 'ETA Prediction', 'Customer Experience'],
  },
  {
    index: '04',
    type: 'STRATEGIC ANALYSIS',
    title: 'Intics — Enterprise AI Product Strategy',
    subtitle: 'From Document Intelligence to Outcome Intelligence',
    hook: 'Most enterprise AI tools produce recommendations. Very few measure whether those recommendations led to better outcomes.',
    problemBrief: 'Enterprise AI extracts knowledge but lacks an outcome loop. Without measuring if an AI recommendation led to a good business result, intelligence cannot compound.',
    sections: [
      {
        label: 'The Problem',
        icon: '⚑',
        content: 'Enterprise AI extracts insights from documents. But the workflow stops there. The system never learns whether a recommended action led to a good outcome. It is intelligence without accountability.',
      },
      {
        label: 'The Insight',
        icon: '◈',
        content: 'The real value is in the feedback loop. Connecting documents to decisions, to outcomes, to learning. This is Outcome Intelligence.',
      },
      {
        label: 'The Approach',
        icon: '◎',
        content: 'Five strategic pillars: Intelligence Compounding, Outcome Intelligence, System of Action (execution capability), Trust & Explainability, and Enterprise Operating Intelligence.',
      },
      {
        label: 'The Strategic Bet',
        icon: '◇',
        content: 'The market will bifurcate: commodity document intelligence vs outcome-aware decision intelligence. The latter builds defensible moats through organizational context and historical outcome data.',
      },
    ],
    flow: [
      { stage: 'Document', desc: 'Knowledge extracted from enterprise data' },
      { stage: 'Decision', desc: 'AI-surfaced insights translated to recommendations' },
      { stage: 'Outcome', desc: 'Decisions measured against actual business results' },
      { stage: 'Learning', desc: 'Outcomes feed back to improve future intelligence' },
    ],
    tags: ['Enterprise AI', 'Product Strategy', 'Outcome Intelligence', 'AI Governance', 'Trust & Explainability'],
  },
  {
    index: '05',
    type: 'STARTUP STRATEGY · RESEARCH',
    title: 'India Battery Lifecycle & Recovery Platform',
    subtitle: 'The Missing Middle in EV Battery Circular Economy',
    hook: 'India is generating thousands of end-of-life EV batteries. The opportunity is not recycling — it is the platform layer nobody has built yet.',
    problemBrief: 'End-of-life EV batteries are fragmented across dealers and scrapyards, while downstream recyclers cannot access them reliably due to a lack of supply chain infrastructure.',
    sections: [
      {
        label: 'The Problem',
        icon: '⚑',
        content: 'End-of-life EV batteries are scattered across dealers, service centers, and scrapyards. Downstream processors (recyclers, refurbishers) want feedstock but cannot access it reliably. The connection infrastructure is missing.',
      },
      {
        label: 'The Insight',
        icon: '◈',
        content: 'The opportunity is an asset-light aggregation and routing layer. The value is in information, coordination, and grading — not in the capital-intensive recycling processing itself.',
      },
      {
        label: 'The Approach',
        icon: '◎',
        content: 'Find (source batteries) → Collect (chain-of-custody tracking) → Identify & Grade (capacity, chemistry, safety) → Aggregate → Route (Refurbisher, Second-life integrator, or Recycler).',
      },
      {
        label: 'The Strategic Thesis',
        icon: '◇',
        content: 'As EV market grows and Extended Producer Responsibility (EPR) norms tighten, an orchestrator platform builds structural moats by connecting fragmented supply with high-demand sinks.',
      },
    ],
    flow: [
      { stage: 'Source', desc: 'OEMs · Dealers · Fleet operators — all fragmented' },
      { stage: 'Grade', desc: 'Assessment: capacity · chemistry · safety profile' },
      { stage: 'Aggregate', desc: 'Asset-light batching with chain-of-custody tracking' },
      { stage: 'Route', desc: 'Refurbishable → Refurbisher · EOL → Recycler' },
    ],
    tags: ['Startup Strategy', 'Circular Economy', 'EV Batteries', 'Platform Thinking', 'Asset-Light Model'],
  },
];

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
      
      <p className="cs-problem-brief">
        <span className="cs-problem-brief-icon"><Crosshair size={14}/> Core Problem Identified:</span> {cs.problemBrief}
      </p>

      <p className="cs-hook">{cs.hook}</p>

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
    title: 'Cloud Billing & Order Management',
    brief: 'Local restaurants struggled with expensive, hardware-heavy POS systems tied to dedicated computers.',
    desc: 'I built a cloud-based billing platform using MQTT over ESP microcontrollers. This enabled standard thermal printers to receive orders directly from the cloud without requiring a dedicated PC, fundamentally changing the cost structure for small restaurants.',
    metric: { val: '6x', lbl: 'Order volume scaled', context: '~25 to 100–150+ orders/day in documented pilot' },
    tech: ['React', 'Node.js', 'MQTT', 'ESP8266/ESP32', 'Thermal Printers'],
    recognition: null,
  },
  {
    label: 'BUILT · AI + IoT · Winner',
    title: 'AI Smart Agriculture Platform',
    brief: 'The agricultural value chain was heavily fragmented: seed procurement, crop planning, and monitoring were disconnected.',
    desc: 'I developed an ML and IoT platform that analyzes 6+ soil and environmental parameters (NPK, moisture, temperature, humidity, pH). It provides data-driven crop recommendations and automates irrigation, bridging the gap from farm to market.',
    metric: { val: '98.4%', lbl: 'ML prediction accuracy', context: 'Based on cross-validation of 5 key soil parameters' },
    tech: ['Python', 'Machine Learning', 'IoT Sensors', 'React', 'Cloud Firestore'],
    recognition: 'Winner — Prototyping Contest',
  },
  {
    label: 'BUILT · AI/ML Decision Support',
    title: 'Precision Bid Management System',
    brief: 'Contractors were losing bids or taking unprofitable projects due to manual, suboptimal bid evaluation strategies.',
    desc: 'I built an AI/ML decision-support platform that analyzes historical bids, competitor pricing, material costs, and technical criteria. It surfaces highly competitive, profitable bidding strategies by replacing gut-feeling with predictive intelligence.',
    metric: { val: 'Data-Driven', lbl: 'Bidding Strategy', context: 'Replaced manual guesswork with predictive ML modeling' },
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Data Visualization', 'Decision Trees'],
    recognition: 'Pragyan Hackathon · Aurigo Software Technologies',
  },
];


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
        <div className="built-grid">
          {BUILT_SYSTEMS.map((s, i) => (
            <motion.div key={s.title} className="built-card" {...inView(0.08 * i)}>
              <span className="built-card__label">{s.label}</span>
              <h3 className="built-card__title">{s.title}</h3>
              
              <div className="built-card__brief">
                <strong>Problem:</strong> {s.brief}
              </div>
              <p className="built-card__desc">{s.desc}</p>
              
              <div className="built-card__tech">
                {s.tech.map(t => <span key={t} className="built-tech-tag">{t}</span>)}
              </div>

              <div className="built-card__metric">
                <span className="built-metric-val">{s.metric.val}</span>
                <div>
                  <span className="built-metric-lbl">{s.metric.lbl}</span><br />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--text-tertiary)' }}>{s.metric.context}</span>
                </div>
              </div>
              {s.recognition && (
                <div style={{ marginTop: 12, padding: '6px 12px', background: 'var(--link-soft)', border: '1px solid var(--link-line)', borderRadius: 'var(--r-xs)', fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-link)' }}>
                  {s.recognition}
                </div>
              )}
            </motion.div>
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
  { n: '04', title: 'Assist Pro Platform', desc: 'Developed and enhanced Assist Pro — an AI-powered automation platform for startup operations — achieving 70%+ manual effort reduction.' },
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
            <p className="exp-company-meta">Agentic AI Developer Intern · MADeIT Incubated · IIITDM Kancheepuram<br />Chennai, Tamil Nadu · Jun 2025 – Oct 2025</p>
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
              <span className="exp-big-metric">70%+</span>
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
              <span className="vc-date">Feb 2025 – Present · Founder, Chairman & President</span>
              <a href="https://yantrikshaxhub.veltech.edu.in" target="_blank" rel="noopener noreferrer" className="vc-title-link">
                <h3 className="vc-title">Yantriksha X Hub</h3>
                <ArrowUpRight size={24} className="vc-arrow"/>
              </a>
              <span className="vc-subtitle">Student Innovation & Entrepreneurship Ecosystem</span>
            </div>
            
            <p className="vc-desc">
              I identified a critical gap: engineering, management and law students had complementary capabilities but lacked structured interdisciplinary pathways for <strong>problem discovery and product-building</strong>. Yantriksha X Hub bridges this — transforming real problems into validated products and ventures.
            </p>
            
            <p className="vc-desc">I developed the <strong>&#8722;1 &rarr; 0 &rarr; 1 Framework</strong> as the operating model:</p>
            
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
              <span className="vc-date">Feb 2026 – Present · Show Director</span>
              <a href="https://justbetweenus.veltech.edu.in" target="_blank" rel="noopener noreferrer" className="vc-title-link">
                <h3 className="vc-title">Just Between Us (JBU)</h3>
                <ArrowUpRight size={24} className="vc-arrow"/>
              </a>
              <span className="vc-subtitle">Student-Led Town Hall Platform</span>
            </div>
            
            <p className="vc-desc" style={{marginBottom: '24px'}}>
              Co-created a platform connecting students with accomplished leaders, entrepreneurs and innovators. Led episodes end-to-end: speaker outreach, content curation, event production, and staging.
            </p>

            <div className="jbu-stats">
              <div className="jbu-stat-item">
                <span className="jbu-stat-val">4</span>
                <span className="jbu-stat-lbl">Live Episodes</span>
              </div>
              <div className="jbu-stat-item">
                <span className="jbu-stat-val">4</span>
                <span className="jbu-stat-lbl">Industry Speakers</span>
              </div>
              <div className="jbu-stat-item">
                <span className="jbu-stat-val">300+</span>
                <span className="jbu-stat-lbl">Students Engaged</span>
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
  { badge: 'Winner', text: 'Prototyping Contest — AI Smart Agriculture & Farm-to-Market Platform' },
  { badge: 'Winner', text: 'Cybersecurity Bootcamp — IIITDM Kancheepuram' },
  { badge: 'Runner-Up', text: 'Project Idea Contest — Smart Agriculture Platform' },
  { badge: 'Organizer', text: 'Smart India Hackathon — Scaled from 70 to 200+ participating teams' },
  { badge: 'Organizer', text: 'L&T Techgium Hackathon — Preliminary Rounds' },
  { badge: 'Evaluator', text: 'Innovation Marathon — 300+ student project submissions reviewed' },
  { badge: 'Volunteer', text: 'SDIP 4.0 — EDII Tamil Nadu, Government of Tamil Nadu' },
];

function Achievements() {
  return (
    <section id="achievements" className="section section--tight" aria-labelledby="achievements-heading">
      <div className="container">
        <motion.div className="section__header" {...inView()}>
          <div className="sec-label">Achievements</div>
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
              <h3 className="visai-title">VISAI 2026 — National AI Competition</h3>
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
                {[['English', 'Professional'], ['Telugu', 'Native'], ['Hindi', 'Professional'], ['Tamil', 'Working'], ['German', 'Basic'], ['Kannada', 'Basic']].map(([l, lv]) => (
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
            <h2 id="contact-heading" className="contact-question">Got a meaningful<br />problem to solve?</h2>
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
