import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Download, ArrowRight, ArrowUpRight, Menu, X, Mail, Phone, MapPin, ChevronDown, Sparkles } from 'lucide-react';
import './App.css';

/* ── Data ─────────────────────────────────── */
const NAV = ['Story','Impact','Projects','Arsenal','Connect'];

const TYPED_WORDS = ['problems.', 'patterns.', 'root causes.', 'opportunities.', 'the invisible.'];

const TECH = [
  {n:'Python',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
  {n:'JavaScript',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  {n:'React',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  {n:'Node.js',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  {n:'Java',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'},
  {n:'Spring',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'},
  {n:'MySQL',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'},
  {n:'Firebase',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'},
  {n:'AWS',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
  {n:'GCP',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'},
  {n:'Git',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  {n:'Figma',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'},
  {n:'Jira',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'},
  {n:'Notion',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg'},
  {n:'Canva',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'},
  {n:'Photoshop',i:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg'},
];

const SKILLS = [
  {label:'Product & Strategy',c:'#22d3a6',tags:['Problem Discovery','Product Thinking','User Research','Market Research','Competitive Analysis','Product Validation','Stakeholder Management']},
  {label:'AI & Emerging Tech',c:'#a855f7',tags:['Agentic AI','LLM Applications','Prompt Engineering','Machine Learning','Intelligent Automation']},
  {label:'Data & Analytics',c:'#f59e0b',tags:['SQL','Power BI','Google Analytics','Data Analysis','KPI Tracking','Dashboarding','Decision Support']},
  {label:'Dev Stack',c:'#00e5ff',tags:['Python','Java','JavaScript','React.js','Node.js','Spring','HTML/CSS']},
  {label:'Cloud & DevOps',c:'#ec4899',tags:['MySQL','Firebase','AWS','GCP','GitHub Actions','Git']},
  {label:'Business & Ops',c:'#4f8ef7',tags:['Business Analysis','Innovation Management','Startup Ops','Process Optimization','SEO','Agile/Scrum','Jira','Confluence']},
];

/* ── Typing animation hook ────────────────── */
function useTyping(words, typeSpeed=100, pauseMs=2200) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(word.slice(0, charIdx + 1));
        if (charIdx + 1 === word.length) {
          setTimeout(() => setDeleting(true), pauseMs);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setText(word.slice(0, charIdx));
        if (charIdx === 0) {
          setDeleting(false);
          setWordIdx((wordIdx + 1) % words.length);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? 50 : typeSpeed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, typeSpeed, pauseMs]);

  return text;
}

/* ── Particle Canvas ──────────────────────── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({length:50}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      vx: (Math.random()-.5)*.3, vy: (Math.random()-.5)*.3,
      s: Math.random()*1.5+.5, o: Math.random()*.4+.1
    }));
    let id;
    const draw = () => {
      ctx.clearRect(0,0,c.width,c.height);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0)p.x=c.width; if(p.x>c.width)p.x=0;
        if(p.y<0)p.y=c.height; if(p.y>c.height)p.y=0;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.s,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,229,255,${p.o})`; ctx.fill();
      });
      pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
        const d = Math.hypot(a.x-b.x, a.y-b.y);
        if(d<120){ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(0,229,255,${.08*(1-d/120)})`;ctx.lineWidth=.5;ctx.stroke();}
      }));
      id=requestAnimationFrame(draw);
    };
    draw();
    return ()=>{cancelAnimationFrame(id);window.removeEventListener('resize',resize);};
  },[]);
  return <canvas ref={ref} className="particles"/>;
}

/* ── Helpers ───────────────────────────────── */
const fade = (d=0) => ({initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:true},transition:{duration:1,delay:d,ease:[0.16,1,0.3,1]}});

/* ══════════════════════════════════════════════
   APP
   ══════════════════════════════════════════════ */
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const typed = useTyping(TYPED_WORDS);
  const heroRef = useRef(null);
  const {scrollYProgress} = useScroll({target:heroRef,offset:['start start','end start']});
  const heroOpacity = useTransform(scrollYProgress,[0,.8],[1,0]);
  const imgY = useTransform(scrollYProgress,[0,1],[0,60]);

  useEffect(()=>{const h=()=>setScrolled(window.scrollY>60);window.addEventListener('scroll',h);return()=>window.removeEventListener('scroll',h);},[]);

  return (
    <>
      {/* ═══ NAV ═══ */}
      <nav className={`nav${scrolled?' nav--solid':''}`}>
        <div className="nav__inner">
          <a href="#" className="nav__logo">AR<span className="blink">_</span></a>
          <ul className="nav__links">
            {NAV.map(n=><li key={n}><a href={`#${n.toLowerCase()}`}>{n}</a></li>)}
          </ul>
          <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-outline nav__cta">Resume ↓</a>
          <button className="nav__burger" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={20}/>:<Menu size={20}/>}</button>
        </div>
        <AnimatePresence>
          {menuOpen&&<motion.div className="nav__mobile" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
            {NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenuOpen(false)}>{n}</a>)}
          </motion.div>}
        </AnimatePresence>
      </nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="hero" ref={heroRef}>
        <Particles/>
        <div className="orb orb1"/><div className="orb orb2"/><div className="orb orb3"/>

        <motion.div className="hero__inner" style={{opacity:heroOpacity}}>
          <div className="hero__left">
            <motion.div className="badge" initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:.2}}>
              <span className="badge__dot"/>Open to Opportunities
            </motion.div>

            <motion.h1 className="hero__name" initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{delay:.4,duration:.9}} style={{fontSize: 'clamp(2.2rem, 5vw, 4rem)', lineHeight: '1.2'}}>
              <span style={{fontSize: 'clamp(1.2rem, 3vw, 2rem)', display: 'block', color: 'var(--text-muted)', marginBottom: '4px'}}>Hi, I am</span>
              <span className="grad">Abhilash Reddy<br/>Sannareddy</span>
            </motion.h1>

            <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.55}} style={{fontSize: '1.35rem', fontWeight: 600, color: '#e5e7eb', marginBottom: '16px'}}>
              I <span className="grad">hunt problems, validate opportunities,</span> and build products that create <span className="grad">measurable impact.</span>
            </motion.p>

            <motion.div className="hero__sub" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.7}} style={{display: 'flex', flexDirection: 'column', gap: '18px', lineHeight: '1.6', marginTop: '16px', color: '#fff'}}>
              <p style={{fontSize: '1.5rem', fontWeight: 700, lineHeight: '1.3'}}>
                While others ask, <span style={{color: '#9ca3af', fontStyle: 'italic'}}>"How do we solve this?"</span> I ask:<br/>
                <span className="grad" style={{display: 'inline-block', marginTop: '8px', fontSize: '1.8rem'}}>"What problem is everyone else blind to?"</span>
              </p>

              <p style={{fontSize: '1.25rem', fontWeight: 800}}>
                I don't wait for problems. <span className="grad">I hunt them.</span>
              </p>

              <p>While others race to build solutions, I search for hidden friction, unmet needs, and opportunities no one has recognized yet.</p>
              
              <p style={{fontSize: '1.15rem'}}><strong className="grad">Most people want to be problem solvers. I want to be a problem finder.</strong></p>
              
              <p>Because once a problem becomes obvious, everyone is already chasing the solution.</p>
              
              <p>The biggest opportunities come from seeing what others don't—questioning assumptions, challenging the status quo, and looking where nobody else is looking.</p>
              
              <p style={{fontSize: '1.15rem'}}><strong className="grad">Breakthroughs don't come from better answers. They come from asking better questions.</strong></p>
              
              <p>Anyone can solve a known problem. The real edge is finding the problem before everyone else does.</p>
              
              <span className="grad" style={{fontFamily:'var(--syne)', fontWeight:800, letterSpacing:'1px', display:'block', marginTop:'4px', fontSize:'1.1rem'}}>PROBLEM → OPPORTUNITY → PRODUCT → IMPACT</span>
            </motion.div>

            <motion.div className="hero__cta" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1}}>
              <a href="#story" className="btn btn-fill">My Story <ArrowRight size={15}/></a>
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download className="btn btn-outline"><Download size={14}/> Resume</a>
            </motion.div>

            <motion.div className="hero__stats" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}>
              {[['700+','Community Built'],['70%','Manual Work Eliminated'],['98.4%','AI Accuracy Achieved'],['9.2','CGPA']].map(([v,l])=>(
                <div key={l} className="hstat"><span className="hstat__v grad">{v}</span><span className="hstat__l">{l}</span></div>
              ))}
            </motion.div>
          </div>

          <motion.div className="hero__right" style={{y:imgY}} initial={{opacity:0,scale:.85}} animate={{opacity:1,scale:1}} transition={{delay:.5,duration:1}}>
            <div className="hero__frame">
              <span className="fc fc-tl"/><span className="fc fc-tr"/><span className="fc fc-bl"/><span className="fc fc-br"/>
              <div className="frame-scan"/>
              <img src={`${import.meta.env.BASE_URL}hero_futuristic.png`} alt="Abhilash Reddy"/>
              <div className="frame-grad"/>
            </div>
            <div className="hero__glow"/>
          </motion.div>
        </motion.div>
        <a href="#story" className="scroll-cue"><div className="scroll-line"/><ChevronDown size={14}/></a>
      </section>

      {/* ═══ STORY ═══ */}
      <section id="story" className="section">
        <motion.div {...fade()}>
          <p className="sec-label">01 / THE ORIGIN</p>
          <h2 className="sec-title">Most people solve problems<br/>they're given.<br/><span className="grad">I find the ones nobody saw.</span></h2>
        </motion.div>

        <div className="story-grid">
          {/* Left — narrative text blocks */}
          <div className="story-narrative">
            <motion.div className="nblock" {...fade(.1)}>
              <span className="nblock-tag">PROBLEM-DRIVEN BUILDER</span>
              <p>I am a <strong>Problem-Driven Builder</strong> and Computer Science Engineering student specializing in Artificial Intelligence, Machine Learning, Agentic AI Systems, and Full-Stack Development.</p>
              <p>Passionate about problem discovery, uncovering root causes, understanding user and business needs, and building scalable solutions at the intersection of technology, product innovation, and entrepreneurship.</p>
              <p>Experienced in developing AI-powered automation systems, intelligent workflows, and product-driven solutions, with hands-on experience in Agentic AI, workflow orchestration, startup operations, and business process automation.</p>
              <p>Skilled at translating ambiguous challenges into practical, user-centric solutions through a combination of technical expertise, product thinking, stakeholder collaboration, and entrepreneurial problem-solving.</p>
            </motion.div>

            <motion.div className="nblock" {...fade(.2)}>
              <span className="nblock-tag">ECOSYSTEM BUILDER</span>
              <p>I identified critical gaps in interdisciplinary collaboration and structured problem discovery within the student ecosystem. To solve this, I founded <strong>Yantriksha X Hub</strong> to help students transform real-world problems into validated ideas, products, and ventures through collaboration among engineering, management, and law students.</p>
              <p>As Founder, Chairman & President, I scaled this into a multidisciplinary ecosystem of <strong>1000+ students (700+ active, 300+ alumni)</strong>. We facilitated <strong>100+ internships</strong>, supported <strong>10+ patentable projects</strong>, enabled student-led startups, and built a network of <strong>20+ industry experts</strong>.</p>
              <p>I also developed the <span className="highlight">-1 → 0 → 1 Framework</span> to guide this process:</p>
              <div className="framework-visual">
                <div className="fw-step"><span className="fw-num grad">-1</span><span className="fw-label" style={{fontWeight: 600}}>Confusion & Ambiguity</span><p className="dim" style={{fontSize: '0.8rem', marginTop: '4px'}}>Identifying the raw problem.</p></div>
                <div className="fw-arrow">→</div>
                <div className="fw-step"><span className="fw-num grad">0</span><span className="fw-label" style={{fontWeight: 600}}>Validated Idea</span><p className="dim" style={{fontSize: '0.8rem', marginTop: '4px'}}>Integrating tech, business & legal.</p></div>
                <div className="fw-arrow">→</div>
                <div className="fw-step"><span className="fw-num grad">1</span><span className="fw-label" style={{fontWeight: 600}}>Working Product</span><p className="dim" style={{fontSize: '0.8rem', marginTop: '4px'}}>Development & execution.</p></div>
              </div>
            </motion.div>

            <motion.div className="nblock" {...fade(.3)}>
              <span className="nblock-tag">LEADERSHIP & VISION</span>
              <p>I identified another gap: students lacked unfiltered access to accomplished leaders, entrepreneurs, and public personalities. To bridge this, I co-created and serve as Show Director for <strong>Just Between Us (JBU)</strong>.</p>
              <p>JBU is a student-led town hall platform facilitating meaningful conversations on leadership, innovation, and personal growth. I led end-to-end execution, delivering 4 episodes that engaged hundreds of students.</p>
              <p style={{marginTop: '16px', fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-bright)'}}>I believe the future belongs to those who discover the right problems before everyone else does.</p>
            </motion.div>
          </div>

          {/* Right — image + quick facts */}
          <div className="story-aside">
            <motion.div className="story-img-wrap" {...fade(.15)}>
              <img src={`${import.meta.env.BASE_URL}hero_action.png`} alt="Abhilash thinking" className="story-img"/>
              <div className="story-img-label card">
                <Sparkles size={14} style={{color:'#f59e0b'}}/>
                <span>Problem Discovery Mode</span>
              </div>
            </motion.div>

            <motion.div className="story-edu card" {...fade(.25)}>
              <div className="edu-row">
                <div>
                  <span className="mono dim" style={{fontSize:'.65rem',letterSpacing:'.15em'}}>EDUCATION</span>
                  <h4 style={{marginTop:4,fontSize:'1rem'}}>Vel Tech R&D Institute</h4>
                  <p className="dim" style={{fontSize:'.85rem'}}>B.Tech CSE (AI & ML) · Expected 2027</p>
                </div>
                <div className="edu-cgpa">
                  <span className="grad" style={{fontFamily:'var(--syne)',fontSize:'2.4rem',fontWeight:800,lineHeight:1}}>9.2</span>
                  <span className="mono dim" style={{fontSize:'.6rem',letterSpacing:'.15em'}}>CGPA</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="story-lang card" {...fade(.3)}>
              <span className="mono dim" style={{fontSize:'.65rem',letterSpacing:'.15em',marginBottom:10,display:'block'}}>LANGUAGES I SPEAK</span>
              <div className="lang-tags">
                {[['English','Pro'],['Telugu','Native'],['Hindi','Pro'],['Tamil','Working'],['German','Basic'],['Kannada','Basic']].map(([l,lv])=>(
                  <span key={l} className="lang-tag"><strong>{l}</strong> <span className="dim">· {lv}</span></span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ IMPACT ═══ */}
      <section id="impact" className="section">
        <motion.div {...fade()}>
          <p className="sec-label">02 / REAL IMPACT</p>
          <h2 className="sec-title">I don't just build things.<br/><span className="grad">I eliminate inefficiency.</span></h2>
        </motion.div>

        {/* Internship card */}
        <motion.div className="exp-card card" {...fade(.1)}>
          <div className="exp-stripe"/>
          <div className="exp-top">
            <div>
              <span className="exp-type">INTERNSHIP · FULL-TIME · HYBRID</span>
              <h3 className="exp-role">Agentic AI Developer</h3>
              <p className="grad" style={{fontSize:'1rem',fontWeight:600}}>MATIC — MADeIT Incubated Startup · IIITDM Kancheepuram</p>
              <p className="dim" style={{fontSize:'.85rem',marginTop:4}}>Chennai, Tamil Nadu · Jun 2025 – Oct 2025</p>
            </div>
            <div className="exp-metric-box card">
              <span className="grad" style={{fontFamily:'var(--syne)',fontSize:'2.8rem',fontWeight:800,lineHeight:1}}>70%</span>
              <span className="mono dim" style={{fontSize:'.6rem',letterSpacing:'.15em'}}>MANUAL EFFORT<br/>ELIMINATED</span>
            </div>
          </div>
          <div className="exp-story">
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Analyzed operational bottlenecks across 5+ business functions to identify automation opportunities, define solution requirements, and improve operational efficiency.</li>
              <li>Developed and enhanced Assist Pro, an AI-powered automation platform that reduced manual effort by over 70% across startup operations.</li>
              <li>Designed and implemented intelligent workflow solutions across 20+ business processes using AI agents, workflow orchestration, and full-stack technologies.</li>
              <li>Collaborated directly with founders and cross-functional stakeholders to translate business challenges into scalable technology-driven solutions aligned with operational and strategic objectives.</li>
            </ul>
          </div>
        </motion.div>

        {/* Leadership cards */}
        <div className="lead-row">
          <motion.div className="lead-card card" {...fade(.15)} style={{'--lc':'#a855f7'}}>
            <div className="lead-bar" style={{background:'#a855f7'}}/>
            <span className="mono dim" style={{fontSize:'.65rem',letterSpacing:'.12em'}}>FEB 2025 – PRESENT</span>
            <h3 style={{fontSize:'1.25rem',marginTop:8}}>Founder, Chairman & President</h3>
            <p style={{color:'#a855f7',fontSize:'.9rem',fontWeight:600,marginBottom:16}}>Yantriksha X Hub</p>
            <p className="dim" style={{fontSize:'.88rem',lineHeight:1.7}}>Built a 700+ member innovation ecosystem from scratch — bridging engineering, management, and law students to transform real problems into validated ventures.</p>
          </motion.div>
          <motion.div className="lead-card card" {...fade(.2)} style={{'--lc':'#ec4899'}}>
            <div className="lead-bar" style={{background:'#ec4899'}}/>
            <span className="mono dim" style={{fontSize:'.65rem',letterSpacing:'.12em'}}>FEB 2026 – PRESENT</span>
            <h3 style={{fontSize:'1.25rem',marginTop:8}}>Show Director</h3>
            <a href="https://justbetweenus.veltech.edu.in/" target="_blank" rel="noopener noreferrer" style={{color:'#ec4899',fontSize:'.9rem',fontWeight:600,marginBottom:16,display:'inline-block'}}>Just Between Us (JBU) ↗</a>
            <p className="dim" style={{fontSize:'.88rem',lineHeight:1.7}}>Created a student-led town hall platform connecting students with accomplished leaders — 4 episodes, end-to-end production, real conversations on innovation and growth.</p>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div className="achieve card" {...fade(.3)}>
          <h3 style={{marginBottom:20,fontFamily:'var(--syne)'}}>⚡ Achievements & Recognition</h3>
          <div className="achieve-grid">
            {[['🏆','Winner','Prototyping Contest — AI Smart Agriculture System'],
              ['🛡️','Winner','Cybersecurity Bootcamp — IIITDM Kancheepuram'],
              ['🥈','Runner-Up','Project Idea Contest'],
              ['🎯','Organizer','VISAI 2026 — 720+ students, 44 institutions, 14 industry partners'],
              ['⚡','Organizer','L&T Techgium Hackathon Preliminary Rounds'],
              ['📋','Evaluator','Innovation Marathon — 300+ student submissions reviewed'],
              ['🤝','Volunteer','SDIP 4.0 by EDII Tamil Nadu Govt']].map(([icon,badge,text],i)=>(
              <motion.div key={i} className="achieve-item" initial={{opacity:0,x:-10}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:.05*i}}>
                <span className="achieve-icon">{icon}</span>
                <div><span className="achieve-badge">{badge}</span><p className="dim" style={{fontSize:'.82rem',marginTop:3}}>{text}</p></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" className="section">
        <motion.div {...fade()}>
          <p className="sec-label">03 / WHAT I'VE BUILT</p>
          <h2 className="sec-title">Impact-Driven<br/><span className="grad">Projects.</span></h2>
        </motion.div>
        <div className="proj-grid">
          {[{num:'01',title:'AI-Powered Smart Agriculture & Irrigation System',badge:'🥇 Winner — Prototyping Contest',c:'#22d3a6',
            story:['Identified challenges in irrigation planning, crop selection, and resource utilization that contribute to inefficient agricultural decision-making and water consumption.', 'Developed an AI-powered decision-support system integrating IoT sensing and machine learning to analyze 6+ agricultural parameters, including NPK levels, soil moisture, temperature, humidity, and pH, enabling data-driven crop recommendations and irrigation optimization with 98.4% prediction accuracy.'],
            metric:['98.4%','Prediction Accuracy'],tech:['Python','Machine Learning','IoT','Data Analytics','Decision Support']},
            {num:'02',title:'Precision Bid Management & Tender Analysis System',badge:'Pragyan Hackathon · Aurigo Software Technologies',c:'#4f8ef7',
            story:['Identified inefficiencies in competitor analysis and tender evaluation during the Pragyan Hackathon in collaboration with Aurigo Software Technologies, where decision-making relied on manual assessment across multiple technical, financial, and strategic criteria.', 'Developed a decision-support platform that analyzed 10+ bid evaluation parameters for competitor benchmarking, tender assessment, and strategic bid optimization, enabling faster and more structured decision-making.'],
            metric:['10+','Parameters Analyzed'],tech:['React.js','Node.js','Python','Data Analysis','Decision Support']}
          ].map((p,i)=>(
            <motion.div key={i} className="proj-card card" {...fade(.1+i*.15)} style={{'--pc':p.c}} whileHover={{y:-6}}>
              <div className="proj-bar" style={{background:p.c}}/><div className="proj-num">{p.num}</div>
              <span className="proj-badge">{p.badge}</span>
              <h3 className="proj-title">{p.title}</h3>
              <div className="proj-story dim">
                {Array.isArray(p.story) ? (
                  <ul style={{ listStyleType: 'disc', paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {p.story.map((st, idx) => <li key={idx}>{st}</li>)}
                  </ul>
                ) : (
                  <p>{p.story}</p>
                )}
              </div>
              <div className="proj-metric card" style={{borderColor:`${p.c}40`}}>
                <span style={{color:p.c,fontFamily:'var(--syne)',fontSize:'1.8rem',fontWeight:800}}>{p.metric[0]}</span>
                <span className="dim" style={{fontSize:'.8rem'}}>{p.metric[1]}</span>
              </div>
              <div className="proj-tech">{p.tech.map(t=><span key={t} className="ptag" style={{borderColor:`${p.c}40`,color:p.c}}>{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ ARSENAL ═══ */}
      <section id="arsenal" className="section">
        <motion.div {...fade()}>
          <p className="sec-label">04 / THE TOOLKIT</p>
          <h2 className="sec-title">Tools are just tools.<br/><span className="grad">Here's what I wield.</span></h2>
        </motion.div>
        <motion.div className="tech-row" {...fade(.1)}>
          {TECH.map((t,i)=>(
            <motion.div key={t.n} className="tech-item card" whileHover={{y:-6,scale:1.08}}
              initial={{opacity:0,scale:.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:.04*i}}>
              <img src={t.i} alt={t.n} width={38} height={38} style={{objectFit:'contain',filter:'drop-shadow(0 0 8px rgba(0,229,255,.25))'}}/>
              <span className="tech-lbl">{t.n}</span>
            </motion.div>
          ))}
        </motion.div>
        <div className="skill-cats">
          {SKILLS.map((cat,i)=>(
            <motion.div key={cat.label} className="skill-cat card" {...fade(.08+i*.06)} style={{'--cc':cat.c}}>
              <div className="scat-hd"><div className="scat-dot" style={{background:cat.c,boxShadow:`0 0 8px ${cat.c}`}}/><h4 style={{color:cat.c}}>{cat.label}</h4></div>
              <div className="stags">{cat.tags.map(t=><span key={t} className="stag">{t}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CONNECT ═══ */}
      <section id="connect" className="section contact">
        <motion.div className="contact-inner" {...fade()}>
          <p className="sec-label">05 / LET'S TALK</p>
          <h2 className="sec-title">Got a messy problem?<br/><span className="grad">That's my favorite kind.</span></h2>
          <p className="contact-sub dim">I'm actively looking for internships, collaborations, and conversations with people who think building things is the best way to learn.</p>
          <div className="contact-links">
            {[[<Mail size={18}/>,'Email','sannareddyabhilashreddy@gmail.com','mailto:sannareddyabhilashreddy@gmail.com'],
              [<Phone size={18}/>,'Phone','+91 7032026509','tel:+917032026509'],
              ['🔗','LinkedIn','Connect with me','https://www.linkedin.com/in/abhilash-reddy-sannareddy-546005320'],
              ['💻','GitHub','See my code','https://github.com']].map(([icon,label,val,href],i)=>(
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" className="clink card" {...fade(.08+i*.06)} whileHover={{x:6}}>
                <span className="clink-icon">{icon}</span>
                <div><p className="mono dim" style={{fontSize:'.68rem',letterSpacing:'.12em',textTransform:'uppercase'}}>{label}</p><p style={{fontSize:'.95rem'}}>{val}</p></div>
                <ArrowUpRight size={16} className="clink-arrow"/>
              </motion.a>
            ))}
          </div>
          <div className="footer">
            <p className="mono dim" style={{fontSize:'.7rem',letterSpacing:'.12em'}}>© 2025 ABHILASH REDDY SANNAREDDY · BUILT WITH REACT + FRAMER MOTION</p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
