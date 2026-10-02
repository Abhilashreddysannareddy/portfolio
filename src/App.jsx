import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  { label: 'Work', href: '#work' },
  { label: 'How I Think', href: '#how-i-think' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Ventures', href: '#ventures' },
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
            Abhilash Reddy Sannareddy
          </motion.h1>
          <motion.p className="hero__positioning"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}>
            Problem-First Builder &middot; Product Strategy &times; AI Systems &times; Entrepreneurship
          </motion.p>
          <motion.p className="hero__thesis"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            I’m a problem-driven engineer who believes meaningful products begin with understanding the problem deeply not jumping straight to a solution. Working at the intersection of AI, Product, and Entrepreneurship, I uncover root causes, challenge assumptions, understand user and business needs, and identify opportunities worth solving. I build Agentic AI systems, intelligent automation workflows, and full-stack products that turn ambiguous problems into practical, scalable solutions. Beyond technology, I founded a 700+ member innovation ecosystem, creating opportunities for students to move from problems to ideas, products, patentable innovations, and ventures.
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
    type: 'CONCEPTUAL FRAMEWORK',
    title: 'OpportunityOS',
    subtitle: 'Agentic AI for Problem Discovery',
    summary: 'Companies collect massive user signals across reviews, forums & tickets but struggle to discover which problems are worth solving; designed a multi-agent AI system that converts signals into emerging problems and scores them across severity, prevalence, growth momentum, underservedness, feasibility & novelty, bringing AI from problem solving to problem discovery intelligence.',
    sections: [
      {
        label: 'The Problem Deep Dive',
        icon: '⚑',
        content: 'Product teams are inundated with qualitative noise from disparate channels—support tickets, social media, app store reviews, and sales transcripts. Hidden within this noise are high-value, unmet user needs, but parsing millions of unstructured data points manually is impossible. The result is that teams often solve the wrong problems, building features that nobody actually wants or recognizing a market need only after a competitor has validated it.',
      },
      {
        label: 'The Strategic Insight',
        icon: '◈',
        content: 'The most lucrative product opportunities manifest as weak, scattered signals long before they become obvious trends. A single complaint about a missing feature isn’t a problem; 50 similar complaints across three different competitor products is an opportunity. The key is to shift AI from being merely a tool for downstream problem-solving (like code generation) to upstream problem-discovery (signal extraction and clustering).',
      },
      {
        label: 'The Multi-Agent Approach',
        icon: '◎',
        content: 'OpportunityOS utilizes an orchestrated multi-agent framework to solve this. Specialized agents ingest unstructured data streams, identify pain points, and validate them against false positives. The extraction layer passes data to a clustering algorithm that groups similar pain points into discrete "Problems." Finally, an Opportunity Scoring engine evaluates each problem against critical business dimensions: severity of pain, prevalence in the market, growth momentum, feasibility, and novelty.',
      },
      {
        label: 'The Business Impact',
        icon: '◇',
        content: 'By systematizing problem discovery, OpportunityOS removes the guesswork from product strategy. It provides leadership with a dynamic, prioritized map of validated market gaps, ensuring that engineering resources are only deployed against problems that are mathematically proven to be worth solving. It transforms product management from a reactive guessing game into a proactive science.',
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
    summary: 'E-commerce platforms make customers search, filter, compare, and decide what fits their needs; designed a conversational Customer Decision Engine that understands customer intent through voice/chat, asks decision-relevant questions, learns preferences and rejections, and shifts e-commerce from product search → customer understanding → curated recommendations, narrowing large catalogs to 2–3 confident options.',
    sections: [
      {
        label: 'The Decision Problem',
        icon: '⚑',
        content: 'Modern e-commerce has perfected logistics and payments, but it has completely failed at decision-making. When a user searches for a laptop, they are met with 240+ results and a wall of technical specifications. The cognitive burden is entirely on the user to filter, compare, and understand the trade-offs, leading to high abandonment rates and choice paralysis.',
      },
      {
        label: 'The Human Insight',
        icon: '◈',
        content: 'A great physical salesperson doesn’t hand you a catalog and walk away. They ask intent-driven questions ("Are you editing video or just browsing?", "Do you travel often?"). They do the heavy cognitive lifting, translating a customer’s vague needs into technical requirements, and then they confidently present just 2 or 3 perfect options. E-commerce needs to move from a "search engine" model to a "decision engine" model.',
      },
      {
        label: 'The Conversational Approach',
        icon: '◎',
        content: 'I designed a conversational AI layer that intercepts the customer journey before the search bar. Using LLMs, it engages the user via voice or chat to understand their core intent. It actively asks clarifying questions to map out their needs, translates those soft needs into hard technical filters (e.g., "travels often" → "under 3 lbs, 10+ hr battery"), and curates a hyper-personalized shortlist of 2-3 items, clearly explaining why each fits.',
      },
      {
        label: 'The Impact on Conversion',
        icon: '◇',
        content: 'By removing the cognitive overload and guiding the customer to a confident decision, this engine fundamentally alters e-commerce metrics. It shifts the paradigm from "product discovery" to "customer understanding," drastically reducing cart abandonment, minimizing return rates caused by buyer confusion, and building long-term platform trust.',
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
    summary: 'Customers are forced to keep their day open for broad 9 AM–11 PM delivery windows; proposed a dynamic ETA layer using route, GPS, traffic, OpenBox & customer availability to convert these broad windows into focused, customer aware delivery windows that continuously adapt to changing conditions, reducing waiting uncertainty, WISMO tickets & failed deliveries.',
    sections: [
      {
        label: 'The Opacity Problem',
        icon: '⚑',
        content: 'Logistics companies provide customers with notoriously vague delivery windows like "Arriving by 11 PM." This forces the customer to keep their entire day open, creating massive uncertainty. This opacity leads to skyrocketing WISMO (Where Is My Order) support tickets, which are incredibly expensive for the company to handle, and results in a poor end-user experience.',
      },
      {
        label: 'The Data Insight',
        icon: '◈',
        content: 'The irony is that logistics providers already possess all the necessary data to be precise. They have rider GPS locations, sequence routing, historical traffic patterns, and real-time delay metrics. The problem is not a lack of data; it is a failure to translate internal operational data into a dynamic, customer-facing intelligence layer.',
      },
      {
        label: 'The Dynamic Approach',
        icon: '◎',
        content: 'The solution is a predictive ETA platform that continuously digests live operational variables—route assignment, GPS, traffic conditions, and historical completion rates. It processes this data to generate a dynamic, narrowing delivery window for the customer (e.g., shifting from "9 AM - 5 PM" in the morning to a confident "2:15 PM - 2:45 PM" by midday). Furthermore, it factors in customer availability data and OpenBox verification requirements to preemptively flag high-risk deliveries.',
      },
      {
        label: 'The Operational Impact',
        icon: '◇',
        content: 'This transparency layer provides a dual benefit: it vastly improves customer satisfaction by respecting their time, while driving direct operational savings. By proactively updating the customer and enabling pre-failure rescheduling, companies can see a 30-40% reduction in WISMO tickets and a 15-25% drop in costly failed delivery attempts.',
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
    summary: 'Recognized that Intics’ AI generates strong recommendations with no way to verify whether they worked or to act on them end-to-end; proposed Outcome, Action & Trust layers that let the platform learn from real business results while all customer data stays on-premise, preserving Intics’ sovereign-AI promise.',
    sections: [
      {
        label: 'The Execution Gap',
        icon: '⚑',
        content: 'Enterprise AI currently excels at extracting insights and summarizing vast amounts of unstructured document data. However, the workflow abruptly ends there. A system might recommend a strategic action based on data, but it has absolutely no mechanism to verify if the user took that action, or more importantly, if that action actually yielded a positive business outcome.',
      },
      {
        label: 'The Intelligence Loop',
        icon: '◈',
        content: 'An AI that only reads documents is a commodity. An AI that reads documents, recommends actions, and then learns from the real-world outcomes of those actions becomes an indispensable, compounding organizational asset. To build a true strategic moat, enterprise platforms must evolve from simple "Document Intelligence" to holistic "Outcome Intelligence."',
      },
      {
        label: 'The Strategic Architecture',
        icon: '◎',
        content: 'I proposed a three-layered strategic expansion for Intics. First, an Action Layer allowing users to execute decisions directly from the AI interface. Second, an Outcome Layer that tracks the downstream metrics of those decisions over time to feed a continuous learning loop. Third, a Trust Layer ensuring full explainability and data provenance—crucial for enterprise adoption—all while strictly adhering to on-premise, sovereign-AI privacy requirements.',
      },
      {
        label: 'The Enterprise Moat',
        icon: '◇',
        content: 'By closing the loop between insight, action, and outcome, Intics ceases to be a generic summarization tool and transforms into a dynamic Enterprise Operating System. As the system continuously ingests historical outcome data, it builds a highly defensible competitive moat perfectly tailored to the specific operational nuances of each client organization.',
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
    summary: 'Found that India’s announced Li-ion recycling capacity (80,000+ tonnes/yr) is already 2.2× its entire 2025 end-of-life battery supply (∼36,000 tonnes/yr), yet only ∼5,000 tonnes (∼14%) get collected formally each year– so the real bottleneck isn’t recycling capacity, it’s collection; designed an asset-light Find → Collect → Grade → Route platform partnering with existing recyclers to close that feedstock gap ahead of India’s projected 233,000 tonnes/yr EOL volume by 2035',
    sections: [
      {
        label: 'The Supply Chain Disconnect',
        icon: '⚑',
        content: 'The narrative in the Indian EV circular economy is heavily skewed toward building massive recycling infrastructure. However, the data reveals a stark disconnect: India’s announced recycling capacity is over 80,000 tonnes/year, while the available end-of-life supply is only ~36,000 tonnes/year. Even worse, only about 14% of that supply is formally collected. The industry is building sinks without building the pipes.',
      },
      {
        label: 'The Ecosystem Insight',
        icon: '◈',
        content: 'Capital-intensive recycling plants are starving for feedstock because end-of-life batteries are highly fragmented across thousands of local dealers, scrapyards, and independent mechanics. The true bottleneck, and therefore the highest-leverage opportunity, is not in chemical processing—it is in aggregation, logistics, and data transparency. The market desperately needs a "Missing Middle."',
      },
      {
        label: 'The Platform Approach',
        icon: '◎',
        content: 'Instead of building another recycling plant, I designed an asset-light, B2B orchestrator platform. The model follows four steps: Find (sourcing from fragmented nodes), Collect (secure reverse logistics with chain-of-custody tracking), Grade (initial health assessment for second-life vs. recycling), and Route (directing the graded asset to the highest-bidding processor).',
      },
      {
        label: 'The Strategic Outlook',
        icon: '◇',
        content: 'By positioning the platform as an indispensable aggregator, it capitalizes on the tightening Extended Producer Responsibility (EPR) regulations without taking on heavy CapEx risks. As India scales toward a projected 233,000 tonnes/year of EOL volume by 2035, this platform becomes the definitive toll booth and data ledger for the entire EV battery circular economy.',
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
    title: 'Cloud Billing & Order Management',
    brief: 'Local restaurants paid for dedicated computers, hardware & upkeep at every billing/printing counter; built a low-cost ESP+MQTT thermal-printing system letting printers receive orders directly, cutting hardware dependency and scaling pilot volume 6× (25 → 150+ orders/day; 9K → 55K orders/year).',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Restaurants faced high upfront costs because standard billing required dedicated PCs to route orders to thermal printers. This hardware dependency restricted scale and increased maintenance overhead.' },
      { label: 'The Idea', icon: '◈', content: 'If thermal printers could connect directly to the cloud, the expensive PC layer could be entirely eliminated, decentralizing the printing process at zero marginal hardware cost.' },
      { label: 'The Approach', icon: '◎', content: 'I built a cloud billing platform using MQTT over ESP microcontrollers, enabling standard thermal printers to fetch real-time orders directly from the cloud without a host PC.' },
      { label: 'The Impact', icon: '◇', content: 'Cost structure fundamentally changed for small restaurants. Hardware dependency was cut entirely, scaling the pilot order volume from ~25 to 150+ per day.' }
    ],
    metric: { val: '6x', lbl: 'Order volume scaled', context: '~25 to 100–150+ orders/day in documented pilot' },
    tech: ['React', 'Node.js', 'MQTT', 'ESP8266/ESP32', 'Thermal Printers'],
    recognition: null,
  },
  {
    label: 'BUILT · AI/ML Decision Support',
    title: 'Precision Bid Management System',
    brief: '(Pragyan Hackathon × Aurigo Software) – Contractors manually evaluated technical, financial & competitor data for bids; built an ML-powered decision-support platform analyzing historical bids, pricing & competitor trends to balance competitiveness with target profitability.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Bidding on infrastructure projects relies heavily on gut feeling and manual evaluation of massive datasets, leading to lost contracts or unprofitable wins.' },
      { label: 'The Idea', icon: '◈', content: 'Historical bidding data contains hidden patterns that can predict the optimal bid price based on competitor behavior, material costs, and success probability.' },
      { label: 'The Approach', icon: '◎', content: 'Built an AI/ML decision-support system analyzing historical bids, competitor pricing, and technical criteria using predictive modeling to generate optimal bid thresholds.' },
      { label: 'The Impact', icon: '◇', content: 'Replaced manual guesswork with a data-driven engine to surface highly competitive, profitable bidding strategies for contractors.' }
    ],
    metric: { val: 'Data-Driven', lbl: 'Bidding Strategy', context: 'Replaced manual guesswork with predictive ML modeling' },
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Data Visualization', 'Decision Trees'],
    recognition: 'Pragyan Hackathon · Aurigo Software Technologies',
  },
  {
    label: 'BUILT · AI + IoT · Winner',
    title: 'AI Smart Agriculture Platform',
    brief: '(Winner – Prototyping Contest) – Farmers managed seed procurement, irrigation, monitoring & selling as disconnected processes; integrated IoT sensors (NPK, soil moisture, temperature, pH) with ML across the farm-to-market chain, achieving 98.4% prediction accuracy for crop & irrigation decisions.',
    sections: [
      { label: 'The Problem', icon: '⚑', content: 'Farmers make critical decisions (seeds, irrigation) in silos without real-time data, leading to low yield, resource waste, and disconnected farm-to-market processes.' },
      { label: 'The Idea', icon: '◈', content: 'A unified platform that continuously monitors soil health and connects that data directly to crop selection, automated irrigation, and eventually market supply chains.' },
      { label: 'The Approach', icon: '◎', content: 'Developed an ML + IoT platform analyzing 6+ soil parameters (NPK, moisture, pH, temp) to provide data-driven crop recommendations and autonomously trigger smart irrigation systems.' },
      { label: 'The Impact', icon: '◇', content: 'Bridged the gap from farm to market with integrated analytics, achieving 98.4% prediction accuracy for precision agriculture.' }
    ],
    metric: { val: '98.4%', lbl: 'ML prediction accuracy', context: 'Based on cross-validation of 5 key soil parameters' },
    tech: ['Python', 'Machine Learning', 'IoT Sensors', 'React', 'Cloud Firestore'],
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
        <div className="built-grid">
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
            </ul>

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
  { badge: 'Winner', text: 'Prototyping Contest; Winner– Cybersecurity Bootcamp, IIITDM Kancheepuram; Runner-Up– Project Idea Contest' },
  { badge: 'Organizer', text: 'VISAI 2026 (720+ students, 240+ teams, 44 institutions, 14 industry partners); SIH 2026 Internal Hackathon (70 → 200+ teams); L&T Techgium 2025 & 2026' },
  { badge: 'Evaluator', text: 'Innovation Marathon, KRM Public School (300+ submissions); Volunteer– SDIP 4.0, EDII-Tamil Nadu' },
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
