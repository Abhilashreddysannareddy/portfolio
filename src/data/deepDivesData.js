export const DEEP_DIVES = {
  // ── CASE STUDIES ──────────────────────────────────────────────────────────
  'ecom-buddy-salesperson': {
    slug: 'ecom-buddy-salesperson',
    type: 'case-study',
    category: 'PRODUCT STRATEGY & DECISION ENGINES',
    badge: 'MBA CASE STUDY · PRODUCT THESIS',
    title: 'The Missing Salesperson in E-Commerce',
    subtitle: 'Closing the Cognitive Chasm Between Product Search and Confident Purchasing Decisions',
    heroStats: [
      { label: 'Role Identified', value: 'Customer Decision Engine' },
      { label: 'Core Mechanism', value: 'Conversational Intent Discovery' },
      { label: 'Market Position', value: 'Layer Above Marketplaces' },
      { label: 'Strategic Moat', value: 'Intent Ownership vs Logistics' }
    ],
    problemIdeaImpact: {
      problemTitle: 'The Cognitive Burden of Product Search & Decision Paralysis',
      problemDesc: 'E-commerce perfected product retrieval (search bars, 50 filters, endless SKU grids) but completely lost the physical salesperson. Shoppers face research fatigue, 15 open browser tabs, confusing technical specs, and fear of making the wrong purchase.',
      problemPoints: [
        'Customers are forced to do the cognitive work of a salesperson: interpreting specs, comparing trade-offs, and guessing compatibility.',
        'Existing chatbots (Amazon Rufus, Meesho Vaani) are reactive—they wait for user queries rather than conducting purposeful discovery.',
        'Product information and dynamic pricing are heavily fragmented across Amazon, Flipkart, Croma, and D2C brand stores.'
      ],
      ideaTitle: 'The Digital Salesperson — A Proactive Conversational Decision Layer',
      ideaDesc: 'Build an AI salesperson that conducts natural diagnostic consultations, proactively discovers true customer requirements, explains real-world compromises in human language, and connects cross-marketplace product intelligence.',
      ideaPoints: [
        'Proactive Intent Discovery: Asks the single next question that eliminates 80% of irrelevant inventory rather than interrogating.',
        'Learning from Rejection: When a customer says "I don\'t like this phone", unpacks whether it\'s weight, brand, or price, updating the preference model.',
        'Strategic Positioning: Sits above existing marketplaces as the high-trust decision layer, aggregating best authorized price and delivery.'
      ],
      impactTitle: 'High-Conviction Conversion & New Commerce Strategic Moat',
      impactDesc: 'Transforms the shopping journey from "Search → Filters → Lists → Fatigue" to "Conversation → Understanding → Recommendation → Conviction".',
      impactPoints: [
        'Significantly higher conversion rate and lower return rates driven by confident, well-matched purchases.',
        'Eliminates tab overload and comparison paralysis across high-consideration categories (electronics, appliances).',
        'Captures customer intent at the earliest point of need, creating a high-margin decision layer ahead of fulfillment platforms.'
      ]
    },
    overview: 'E-commerce has spent twenty-five years optimizing product retrieval: search bars, cascading filters, endless catalog grids, and price scraping. Yet online shopping has completely lost the single most valuable element of traditional physical retail: the knowledgeable salesperson who understands what the customer actually needs. This case study designs a Conversational Decision Layer for E-Commerce that replaces tedious manual product research with intelligent intent discovery, dynamic trade-off explanations, and high-conviction purchasing decisions.',
    sections: [
      {
        id: 'the-missing-salesperson',
        title: '01. The Problem: The Cognitive Burden on the Shopper',
        summary: 'Why having 10,000 products and 50 filters makes customers less confident, not more.',
        paragraphs: [
          'Consider what happens when a customer walks into a brick-and-mortar electronics store and says: "I need a phone around ₹30,000." A skilled salesperson does not silently hand them a catalog with 40 phones and walk away. Instead, they start a conversation:',
          '• Salesperson: "What will you mainly use it for?"\n• Customer: "I take lots of photos of my kids at dinner and indoors, and I travel on weekends."\n• Salesperson: "Then you care most about low-light sensor performance and optical image stabilization, but you probably don’t need an expensive gaming chipset. Let me show you these two phones."',
          'Now examine what happens when that same shopper visits Amazon or Flipkart. They search: "Best camera phone under 30000". The platform dumps 65 results. The customer is forced to open 14 browser tabs, read biased reviews, compare sensor megapixels with processor benchmarks, watch YouTube reviews, and debate whether 67W charging matters more than battery capacity.',
          'The customer has been forced to do the cognitive work of the salesperson. Traditional e-commerce helps with product retrieval; it does not understand the human behind the search.'
        ]
      },
      {
        id: 'reactive-vs-proactive',
        title: '02. Reactive Chatbots vs The Proactive AI Salesperson',
        summary: 'The fundamental product distinction between answering questions and conducting a sales consultation.',
        paragraphs: [
          'Recent conversational AI experiments by major platforms (Amazon Rufus, Meesho Vaani) represent steps forward, but they suffer from a major limitation: they remain largely reactive. They wait for the customer to ask another query.',
          'A true digital salesperson is proactive: it knows what information is MISSING to make a confident recommendation and asks the single next question that eliminates 80% of irrelevant inventory.'
        ],
        table: {
          headers: ['Dimension', 'Traditional E-Commerce', 'Generic AI Chatbot', 'Proposed AI Salesperson'],
          rows: [
            ['Interaction Mode', 'Reactive search & static filters', 'Reactive Q&A assistant', 'Proactive diagnostic conversation'],
            ['Catalog Presentation', 'Hundreds of paginated cards', 'Summarizes search results', 'Narrows to 2–3 high-conviction picks'],
            ['Trade-off Handling', 'Leaves user to decipher specs', 'Lists pros and cons of single item', 'Directly explains comparative compromises'],
            ['Handling Rejection', 'User clicks Back button', 'Repeats search query', 'Unpacks objection ("Too heavy") & learns preference'],
            ['Customer Outcome', 'Decision fatigue & tab overload', 'Mild time savings', 'Confidence and immediate conviction']
          ]
        }
      },
      {
        id: 'strategic-positioning',
        title: '03. Strategic Position: The Decision Layer for Commerce',
        summary: 'Sitting above existing marketplaces rather than competing with their fulfillment and logistics.',
        paragraphs: [
          'Building another e-commerce marketplace is extraordinarily capital-intensive due to warehousing, seller acquisition, payments, and last-mile delivery fleets. Amazon, Flipkart, Croma, and Reliance Digital already excel at inventory and logistics.',
          'The proposed company positions itself as an independent Decision Layer sitting between the consumer and all commercial platforms. Once the AI salesperson helps the customer choose the perfect product with 100% conviction, it queries authorized merchant APIs to present the best real-time price, bank discounts, and fastest delivery options.',
          'Marketplaces own inventory, transactions, and fulfillment. The AI decision layer owns customer intent, high-trust recommendations, and purchase conversion.'
        ]
      }
    ]
  },

  'delivery-eta-intelligence': {
    slug: 'delivery-eta-intelligence',
    type: 'case-study',
    category: 'PRODUCT STRATEGY & LOGISTICS',
    badge: 'PM PRD · 11-PAGE SPECIFICATION',
    title: 'Delivery ETA Intelligence Platform for E-Commerce Logistics',
    subtitle: 'Translating Internal Logistics Telemetry into Customer-Facing Predictive Delivery Windows',
    heroStats: [
      { label: 'Primary Target', value: 'D2C Brands & 3PLs' },
      { label: 'Target WISMO Reduction', value: '-35% Tickets' },
      { label: 'Window Accuracy', value: '92% (Final Hour)' },
      { label: 'Business Model', value: '₹20K/mo + ₹0.20/pkg' }
    ],
    problemIdeaImpact: {
      problemTitle: 'Opaque Delivery Windows & The Last-Mile Uncertainty Spiral',
      problemDesc: 'Broad "Arriving Today by 11 PM" delivery windows force customers to stay home all day, causing severe customer anxiety, a 35–42% surge in WISMO ("Where Is My Order?") support tickets, and repeated failed first-attempt deliveries costing ₹45–₹80 each.',
      problemPoints: [
        'Open-box and high-value OTP deliveries require physical presence; missing the delivery rider wastes time and burns carrier fuel.',
        'Logistics operators already have GPS telemetry, route sequences, and rider allocations, but treat them exclusively as internal dispatch tools.',
        'Zero translation exists between operational data and customer-facing predictability.'
      ],
      ideaTitle: 'Progressive ETA Intelligence Layer Atop Existing Logistics Rails',
      ideaDesc: 'A pure software intelligence layer that ingests real-time logistics telemetry (WMS/TMS webhooks, GPS pings, parcel sequence, traffic maps) and calculates progressively narrowing customer delivery windows with dynamic confidence scores.',
      ideaPoints: [
        'Progressive Windows: Narrowing from 2–6 PM (78% confidence at 8 AM) → 2–4 PM (85% at noon) → 2:30–3:15 PM (92% at 2 PM).',
        'Zero Fleet Hardware Changes: Operates completely on existing carrier API hooks without installing proprietary hardware on bikes.',
        'Proactive Notification Engine: Triggers contextual WhatsApp/SMS alerts when rider is 3 stops away (~45 mins).'
      ],
      impactTitle: 'Measurable Support Deflection & Enterprise SaaS Unit Economics',
      impactDesc: 'Converts last-mile delivery anxiety into customer satisfaction while providing carriers and D2C brands with defensible operational savings.',
      impactPoints: [
        '≥35% deflection in customer WISMO support tickets within 60 days of platform deployment.',
        'First-attempt delivery success rate increases from 84% baseline to ≥93%, saving substantial re-delivery costs.',
        'Compelling hybrid SaaS model (₹20,000/mo base + ₹0.20/shipment) scaling from ₹12L ARR (Year 1) to ₹2.40 Cr ARR (Year 3).'
      ]
    },
    overview: 'Customers purchasing products online often experience intense uncertainty once an order reaches the "Out for Delivery" stage. Traditional platforms provide broad, unhelpful windows like "Arriving Today by 11 PM," forcing shoppers to stay home all day. This case study designs an ETA Intelligence Platform that sits on top of existing logistics infrastructure to convert operational data (GPS, sequence, traffic, rider capacity) into progressive, dynamic customer delivery predictions without changing underlying fleet operations.',
    sections: [
      {
        id: 'problem-diagnosis',
        title: '01. Problem Diagnosis & The Operational Paradox',
        summary: 'Operational visibility existed in abundance inside logistics control rooms, but virtually none of it reached the customer waiting at home.',
        paragraphs: [
          'In modern e-commerce, the last mile accounts for over 53% of overall shipping costs and more than 70% of customer delivery complaints. When an order arrives at the local delivery hub and is marked "Out for Delivery," customers are handed broad, opaque windows such as "Arriving Today" or "Delivery by 11:00 PM." This forces customers into an anxious waiting state, unable to step out, run errands, or schedule meetings.',
          'The friction is especially acute for high-value electronics and open-box deliveries where physical presence and OTP verification are mandatory. If a customer steps out for 20 minutes and misses the delivery agent, the delivery attempt fails. A failed delivery attempt costs logistics carriers between ₹45 and ₹80 in re-delivery overhead, customer support escalations, and vehicle fuel burn.',
          'Meanwhile, e-commerce support desks are swamped with WISMO ("Where Is My Order?") inquiries. WISMO queries consistently account for 35% to 42% of all customer support tickets received by direct-to-consumer (D2C) brands, tying up support agents and draining operating margins.'
        ],
        callout: {
          title: 'The Core Paradox',
          text: 'The problem is not a lack of logistics data. Carriers already possess route optimization algorithms, rider assignments, real-time GPS beacons, parcel scan timestamps, and delivery completion queues. The issue is that this intelligence remains locked in internal operational dispatch dashboards and is never translated into customer-facing predictive intelligence.'
        }
      },
      {
        id: 'product-solution',
        title: '02. The Proposed Solution: Progressive ETA Engine',
        summary: 'A modular intelligence layer that ingests real-time logistics telemetry and outputs progressively narrowing delivery windows.',
        paragraphs: [
          'Rather than attempting to rebuild the physical logistics network or mandate custom hardware for riders, the proposed ETA Intelligence Platform operates as a pure software intelligence layer integrated via webhooks and REST APIs with existing warehouse management systems (WMS) and transport management systems (TMS).',
          'Instead of giving a false sense of precision with an exact minute estimate (which backfires when a rider gets delayed in traffic), the system provides progressive, dynamic time windows paired with calculated confidence scores:'
        ],
        table: {
          headers: ['Time of Day', 'Logistics Event', 'Customer Delivery Window', 'Confidence Score', 'Customer Experience'],
          rows: [
            ['08:00 AM', 'Route assigned & rider dispatched', 'Expected 2:00 PM – 6:00 PM', '78%', 'Customer plans day with broad visibility'],
            ['12:00 PM', '60% of preceding stops completed', 'Expected 2:00 PM – 4:00 PM', '85%', 'Customer stays within vicinity'],
            ['02:00 PM', 'Rider is 3 stops away (~2.5 km)', 'Expected 2:30 PM – 3:15 PM', '92%', 'Customer is ready with OTP / door open'],
            ['02:25 PM', 'Rider on current street', 'Rider arriving in ~5 minutes', '98%', 'Zero friction, zero missed deliveries']
          ]
        }
      },
      {
        id: 'product-strategy',
        title: '03. Four-Phase Product Strategy & Roadmap',
        summary: 'Structured execution roadmap designed for iterative enterprise adoption and minimal integration friction.',
        paragraphs: [
          'To minimize implementation resistance among 3PL partners and D2C brands, the rollout is structured into four distinct phases:'
        ],
        steps: [
          {
            step: 'Phase 1: Smart Delivery Slots',
            desc: 'Immediately upon route manifest generation at the hub, cluster orders into four standard daylight windows: Morning (9 AM–12 PM), Afternoon (12 PM–3 PM), Evening (3 PM–6 PM), and Late Evening (6 PM–9 PM). Drastically reduces Day-1 customer anxiety with zero real-time computation required.'
          },
          {
            step: 'Phase 2: Dynamic ETA Updates',
            desc: 'Continuous real-time recalculation engine incorporating live traffic conditions (Google Maps/MapmyIndia API), rider transit velocity, remaining stops, cash-on-delivery (COD) transaction delays, and failed delivery drop-offs.'
          },
          {
            step: 'Phase 3: Proactive Notification Orchestration',
            desc: 'Multi-channel notification triggers via WhatsApp Business API, SMS, and native mobile push alerts. Sends targeted triggers: "Your order is scheduled for ~2:45 PM" and "Your delivery agent is 3 stops away".'
          },
          {
            step: 'Phase 4: Delivery Intelligence Dashboard',
            desc: 'Enterprise analytics portal for logistics heads and brand operations managers. Tracks delivery window adherence, rider stop-time anomalies, high-failure postal codes, and WISMO ticket correlation.'
          }
        ]
      },
      {
        id: 'business-economics',
        title: '04. Business Model & Unit Economics',
        summary: 'Hybrid SaaS subscription plus usage pricing aligning platform revenue with customer shipment volume.',
        paragraphs: [
          'The platform monetizes through a predictable hybrid model that encourages long-term retention while capturing upside as the merchant or logistics operator scales:'
        ],
        points: [
          'Base SaaS Platform Subscription: ₹20,000 / month per brand or regional hub. Covers dashboard access, carrier integrations, webhook infrastructure, and real-time analytics.',
          'Usage-Based Predictive Fee: ₹0.20 per tracked shipment. For a mid-tier D2C brand processing 1,000,000 shipments monthly, usage revenue is ₹2,00,000/month.',
          'Total Monthly Contract Value: ~₹2,20,000/month (₹26.4 Lakh/year) per enterprise customer.'
        ],
        financials: [
          {
            label: 'Year 1 (Validation Horizon)',
            detail: '10 D2C Customers · 500,000 monthly shipments total · ARR: ₹12 Lakh. Focus on proving 30%+ WISMO reduction and integration stability.'
          },
          {
            label: 'Year 3 (Scale Horizon)',
            detail: '100 Enterprise & 3PL Customers · 10,000,000 monthly shipments total · ARR: ₹2.40 Crore. High gross margins (>78%) driven by software-only infrastructure.'
          }
        ]
      },
      {
        id: 'metrics-risks',
        title: '05. Key Success Metrics & Risk Mitigations',
        summary: 'Framework for measuring real-world business impact and hedging operational vulnerabilities.',
        metricsList: [
          { name: 'WISMO Ticket Deflection', target: '≥ 35% reduction within 60 days of launch' },
          { name: 'First-Attempt Delivery Rate', target: 'Increase from 84% baseline to ≥ 93%' },
          { name: 'Customer Satisfaction (CSAT)', target: 'Net +18 points improvement on post-delivery surveys' },
          { name: 'Prediction Window Adherence', target: '≥ 91% of deliveries completed within announced window' }
        ],
        risksList: [
          {
            risk: 'Urban Traffic & Monsoon Volatility',
            mitigation: 'System automatically widens prediction confidence intervals when traffic congestion spikes or rainfall is detected in the pin code, avoiding broken customer promises.'
          },
          {
            risk: 'Cash-on-Delivery (COD) Dwell Time',
            mitigation: 'Historical machine learning model factors in COD payment delays (typically 4–8 minutes longer per stop) when sequencing delivery slot ETAs.'
          },
          {
            risk: '3PL Integration Inertia',
            mitigation: 'Zero hardware installation required on delivery vehicles; platform plugs into standard webhook payloads already generated by Ekart, Delhivery, Shadowfax, and Shiprocket.'
          }
        ]
      }
    ]
  },

  'opportunity-os': {
    slug: 'opportunity-os',
    type: 'case-study',
    category: 'RESEARCH FRAMEWORK & AGENTIC AI',
    badge: 'RESEARCH PAPER · CONCEPTUAL ARCHITECTURE',
    title: 'OpportunityOS: Agentic AI Framework for Automated Problem Discovery',
    subtitle: 'From Problem-Solving Intelligence to Problem-Discovery Intelligence: Inverting the Scarcity of Product Development',
    heroStats: [
      { label: 'Evaluation Dimensions', value: '6-Axis Scoring' },
      { label: 'Literature Base', value: '50+ Academic Papers' },
      { label: 'Core Mechanism', value: 'Signal Mining → Opportunity' },
      { label: 'Architecture', value: '5-Layer Agentic Pipeline' }
    ],
    problemIdeaImpact: {
      problemTitle: 'The Inversion of Scarcity — Building is Cheap, Discernment is Scarce',
      problemDesc: 'Foundation models, elastic clouds, and open-source tooling have commoditized software construction. The bottleneck has flipped from "how to build" to "what to build". 90% of startups fail and organizations waste engineering quarters on features nobody uses because they solve invalid problems.',
      problemPoints: [
        'Millions of users express real friction every day in app reviews, developer forums, support tickets, and search queries.',
        'These signals are noisy, fragmented, and invisible to traditional product teams, resulting in lagging corporate roadmaps.',
        'Almost all modern AI is focused on problem-solving intelligence (optimizing a given problem) rather than problem-discovery intelligence.'
      ],
      ideaTitle: 'OpportunityOS — Multi-Agent Signal Mining & 6-Axis Opportunity Scorer',
      ideaDesc: 'An agentic AI framework that continuously ingests society-scale user signals, clusters implicit workarounds and complaints into structured problem spaces, and scores them quantitatively across six rigorous dimensions.',
      ideaPoints: [
        '5-Layer Pipeline: Signal Ingestion → ABSA Normalization → Agentic Problem Extraction → Synthesis & Scoring → Opportunity Intelligence.',
        'Detecting Workarounds: Specialized agents hunt for user-invented hacks (the highest conviction indicator of commercial unmet demand).',
        '6-Axis Mathematical Scoring: Evaluates Severity, Prevalence, Growth Momentum, Underservedness, Technical Feasibility, and Novelty.'
      ],
      impactTitle: 'Lead-Time Competitive Advantage & AI-Driven Product Strategy',
      impactDesc: 'Empowers venture studios, founders, and enterprise product organizations to identify high-value market voids before they become obvious trends.',
      impactPoints: [
        '3–6 months lead-time advantage over competitors relying on manual focus groups or retrospective quarterly analytics.',
        'Automated synthesis of validated problem dossiers and first-draft PRDs grounded in empirical user evidence.',
        'Pioneers a foundational shift in AI research from reactive answering agents to proactive discovery intelligence.'
      ]
    },
    overview: 'Throughout history, innovation has been constrained by the difficulty of construction. Foundation models, elastic cloud computing, and automated tooling have inverted this scarcity: building software has become cheap and fast, making discernment—deciding WHAT is worth building—the true scarce bottleneck. OpportunityOS is a conceptual agentic AI framework that continuously transforms noisy digital user signals (app reviews, support tickets, developer forums, search queries) into a prioritized backlog of validated, high-conviction product opportunities.',
    sections: [
      {
        id: 'inversion-of-scarcity',
        title: '01. The Inversion of Scarcity & The Discovery Bottleneck',
        summary: 'When execution becomes commoditized, discernment becomes the primary source of competitive advantage.',
        paragraphs: [
          'For decades, technology companies failed primarily because engineering was hard, expensive, and slow. Today, an agile team leveraging modern foundation models and open-source infrastructure can build and deploy complex applications in weeks. Yet startup failure rates remain near 90%, and enterprise feature abandonment remains above 60%.',
          'Why? Because building the wrong thing faster does not produce enterprise value. The scarce capability in modern product development is no longer execution capacity; it is discernment—identifying genuine, unaddressed user pain before competitors realize it exists.',
          'Traditional artificial intelligence has almost exclusively focused on problem-solving intelligence (taking a pre-formulated problem and optimizing the solution). OpportunityOS introduces problem-discovery intelligence (navigating unstructured social and behavioral data to extract emerging problems that deserve solving).'
        ],
        callout: {
          title: 'The Shift in Machine Intelligence',
          text: 'Problem-Solving Intelligence: "Given this database of customer queries, draft automated email replies."\n\nProblem-Discovery Intelligence: "Across 50,000 developer forum threads and 12,000 app reviews, users are quietly cobbling together fragile workarounds for cross-cloud telemetry synchronization. Synthesize this underserved friction into a new product opportunity."'
        }
      },
      {
        id: 'five-layer-architecture',
        title: '02. Five-Layer Reference Architecture',
        summary: 'A continuous pipeline converting fragmented multi-source signals into structured opportunity PRDs.',
        steps: [
          {
            step: 'Layer 1: Signal Ingestion Layer',
            desc: 'Continuous real-time ingestion across heterogeneous sources: App Store & Play Store reviews, Reddit discussions, Hacker News threads, StackOverflow questions, GitHub issues, Zendesk/Intercom support logs, and search volume anomalies.'
          },
          {
            step: 'Layer 2: Signal Processing & Normalization',
            desc: 'Applies Aspect-Based Sentiment Analysis (ABSA) and semantic chunking to separate bug reports, superficial complaints, and feature wishlists from underlying structural friction. Eliminates promotional noise and deduplicates cross-channel signals.'
          },
          {
            step: 'Layer 3: Agentic Problem Extraction',
            desc: 'Multi-agent LLM teams act as virtual user researchers. Specialized agents extract user workarounds (the strongest signal of unmet demand), unexpressed needs, and recurring workflow breakdowns, formulating crisp, solution-agnostic problem statements.'
          },
          {
            step: 'Layer 4: Opportunity Synthesis & 6-Axis Scoring',
            desc: 'Clusters candidate problems into market opportunities and scores each along six rigorous quantitative dimensions: Severity, Prevalence, Growth Momentum, Underservedness, Feasibility, and Novelty.'
          },
          {
            step: 'Layer 5: Opportunity Intelligence Dashboard',
            desc: 'Outputs an interactive product backlog for PMs and venture builders, complete with automated problem validation dossiers, competitive vacuum mapping, and auto-generated PRD drafts.'
          }
        ]
      },
      {
        id: 'scoring-model',
        title: '03. The 6-Axis Opportunity Scoring Engine',
        summary: 'Mathematical formulation to distinguish passing fads from generational product opportunities.',
        paragraphs: [
          'To prevent hallucination and subjective bias, OpportunityOS evaluates every synthesized problem through a formalized scoring rubric with normalized weights:'
        ],
        table: {
          headers: ['Dimension', 'Evaluation Question', 'Signal Indicators', 'Weight'],
          rows: [
            ['Severity (S)', 'How painful and costly is this problem for the user?', 'Financial loss, hours wasted, mission-critical failure', '25%'],
            ['Prevalence (P)', 'How widespread is this problem across the market?', 'Frequency of occurrence across diverse customer segments', '20%'],
            ['Growth Momentum (M)', 'Is the volume of friction signals accelerating?', 'Rate of change in topic frequency over 30/90/180 days', '20%'],
            ['Underservedness (U)', 'Are existing commercial tools failing to solve it?', 'High negative sentiment toward established market incumbents', '15%'],
            ['Technical Feasibility (F)', 'Can this be built reliably with current tech?', 'Available APIs, model latency, compute requirements', '10%'],
            ['Novelty & Moat (N)', 'Is this an overlooked angle or crowded space?', 'Absence of direct VC-funded competitors addressing root cause', '10%']
          ]
        }
      }
    ]
  },

  'intics-enterprise-ai': {
    slug: 'intics-enterprise-ai',
    type: 'case-study',
    category: 'ENTERPRISE AI STRATEGY & SOVEREIGN ARCHITECTURE',
    badge: '58-PAGE STRATEGIC PRODUCT ANALYSIS',
    title: 'Intics — Enterprise AI Strategy: From Document Intelligence to Outcome Intelligence',
    subtitle: 'Bridging the 5 Strategic Gaps: Intelligence Compounding Under Sovereignty, Systems of Action & Defensible Trust',
    heroStats: [
      { label: 'Strategic Gaps Analyzed', value: '5 Core Vectors' },
      { label: 'Architecture Model', value: 'Sovereign On-Prem / Air-Gapped' },
      { label: 'Core Transformation', value: 'Document → Action → Outcome' },
      { label: 'Document Scope', value: '58-Page Thesis' }
    ],
    problemIdeaImpact: {
      problemTitle: 'The Recommendation Endpoint Deadlock & Sovereign Intelligence Plateaus',
      problemDesc: 'Enterprise AI platforms currently optimize for OCR extraction accuracy rather than business outcomes. When deployed on-premise inside customer firewalls to satisfy strict data sovereignty requirements, the platform fails to learn from human overrides, expert judgment, or downstream business results.',
      problemPoints: [
        'AI recommendations hit a wall: an expert overrides the AI in Bank A, but because data is air-gapped, that learning is lost, and Bank B must make the exact same mistake.',
        'Enterprises do not care about 95% OCR accuracy; they care if loan default rates drop or if health insurance appeals are approved.',
        'Recommending an action without executing it leaves 90% of the manual ERP write-back burden on human staff.'
      ],
      ideaTitle: 'Closed-Loop Outcome Intelligence, Action Agents & Sovereign Compounding',
      ideaDesc: 'Evolve Intics into a self-improving System of Action that connects Document → Decision → Real-World Business Outcome, while sharing abstracted mathematical threat signatures across deployments without exposing raw customer data.',
      ideaPoints: [
        'Outcome Intelligence: Connects asynchronous ERP signals (loan performance, FDA inspection observations, appeal results) back into model weights.',
        'Tri-Tier Sovereign Learning: Local parameter adaptation + Generalized Knowledge Abstraction + Federated Signature Registries.',
        'Governed Action Agents: Autonomous execution for low-risk workflows and single-click decision dossiers for high-value human approval gates.'
      ],
      impactTitle: 'Enterprise Operating Intelligence & Generational Defensibility',
      impactDesc: 'Transforms Intics from a static document parser into a continuously improving autonomous operating intelligence engine.',
      impactPoints: [
        'Avoids the "Intelligence Plateau" where automation rates stagnate at 85% year after year.',
        'Compresses complex multi-day enterprise processes (commercial credit underwriting, pharma batch auditing) into minutes.',
        'Creates an insurmountable network effect moat around compounding domain intelligence without violating zero-data-leakage enterprise SLAs.'
      ]
    },
    overview: 'Intics built a world-class platform transforming unstructured enterprise documents into structured business decisions via Agentic Document Intelligence (ADI), Document Twins, and Business Twins. However, traditional enterprise AI acts as a passive recommendation endpoint. This 58-page strategic product thesis identifies five fundamental architecture gaps and outlines how Intics can evolve into a self-improving System of Action that compounds intelligence without ever leaking customer data beyond on-premise firewalls.',
    sections: [
      {
        id: 'the-5-gaps',
        title: '01. The Five Strategic Platform Gaps',
        summary: 'A systematic diagnosis of where current enterprise AI platforms stall and how Intics can capture generational defensibility.',
        steps: [
          {
            step: 'Gap 1: Intelligence Compounding Under Sovereignty',
            desc: 'How does an AI platform get smarter over time when enterprise customers require air-gapped, on-premise deployments where customer data can never leave the firewall? Traditional AI relies on centralized training. Intics must pioneer localized parameter adaptation and privacy-preserving abstracted signatures.'
          },
          {
            step: 'Gap 2: From Decision Support to Outcome Intelligence',
            desc: 'AI systems traditionally optimize for extraction accuracy (e.g. 95% OCR accuracy). But enterprises optimize for business outcomes (e.g. loan default rates, denied health insurance appeals, pharma audit flags). Intics must track what happens after the recommendation is delivered.'
          },
          {
            step: 'Gap 3: Evolution from Recommendation to System of Action',
            desc: 'Recommending "Approve this vendor" or "Flag this invoice" still leaves 90% of the manual enterprise work intact. Intics must evolve into an execution agent that writes back to ERPs, triggers payments, drafts claims responses, and coordinates cross-system workflows with human approvals.'
          },
          {
            step: 'Gap 4: Trust, Defensibility & Verifiable Explainability',
            desc: 'In regulated industries (banking, pharma, insurance), an unexplainable AI recommendation is unusable. Every AI determination must have citation-backed evidence trails, mathematical confidence bounds, and full compliance reproducibility.'
          },
          {
            step: 'Gap 5: Enterprise Operating Intelligence',
            desc: 'Breaking out of siloed document workflows into predictive operational signals across the entire enterprise value chain, identifying bottlenecks before they materialize on quarterly P&L statements.'
          }
        ]
      },
      {
        id: 'intelligence-compounding',
        title: '02. Compounding Intelligence Under Sovereignty',
        summary: 'Solving the Bank A vs Bank B dilemma without violating data sovereignty guarantees.',
        paragraphs: [
          'Enterprise customers in BFSI, defense, and healthcare choose Intics specifically because of its sovereign architecture: models run on customer-owned infrastructure, within customer VPCs, and customer data never leaves their perimeter.',
          'However, this creates a major risk: The Intelligence Plateau. If Bank A encounters a novel fraudulent invoice template and an expert overrides the AI recommendation, how does that learning persist? In a naive on-premise setup, Bank B must independently experience the same fraud and make the same mistake before learning.'
        ],
        callout: {
          title: 'The Three-Tier Sovereign Learning Model',
          text: '1. Local Learning: Reviewer overrides, feedback loops, and policy adjustments compound inside the client’s private environment via LoRA adapters and retrieval updates.\n2. Knowledge Abstraction: Instead of sharing raw documents or PII, the system abstracts structural signatures (e.g., "invalid font kerning on header + missing GST checksum = fraud pattern").\n3. Federated Signature Sharing: Only generalized threat/workflow signatures are contributed to a shared registry, compounding ecosystem resilience with zero data leakage.'
        }
      },
      {
        id: 'outcome-intelligence',
        title: '03. The Closed-Loop Architecture: Outcome Intelligence',
        summary: 'Connecting Document → Decision → Real-World Outcome → Continuous Machine Learning.',
        paragraphs: [
          'Consider two AI models deployed for corporate credit underwriting:',
          '• Model A achieves 96% document extraction accuracy. However, its recommended loan approvals produce a 4.8% default rate over 18 months.',
          '• Model B achieves 91% document extraction accuracy, but its contextual risk assessment flags subtle working-capital anomalies, reducing default rates to 1.9%.',
          'No enterprise CFO cares about Model A’s benchmark score. Enterprises optimize strictly for business impact. By establishing asynchronous webhook connectors with downstream ERP and core-banking systems, Intics captures outcome signals (loan performance, audit findings, appeal outcomes, project cost variances) and feeds them back into prompt weights and decision heuristics.'
        ],
        table: {
          headers: ['Industry Domain', 'Initial Recommendation', 'Downstream Outcome Signal', 'Compounded Platform Learning'],
          rows: [
            ['Commercial Banking', 'Approve working capital loan', '12-month loan delinquency / default', 'Adjusts covenants for seasonal cash-flow spikes'],
            ['Health Insurance', 'Approve prior authorization', 'Treatment appeal rejected / overbilling', 'Refines medical necessity validation logic'],
            ['Pharma Manufacturing', 'Batch record audit passed', 'FDA 483 inspection observation raised', 'Updates compliance checklist weights for sterilization logs'],
            ['Construction / EPC', 'Qualify subcontractor bid', 'Project completed with 28% cost overrun', 'Penalizes tender scoring for under-resourced bidders']
          ]
        }
      },
      {
        id: 'system-of-action',
        title: '04. System of Action: Autonomous Agentic Execution',
        summary: 'Moving from a read-only advisory platform to an execution engine with governed guardrails.',
        paragraphs: [
          'Document intelligence without automated execution creates an administrative bottleneck. Intics introduces autonomous Action Agents that execute multi-step enterprise workflows subject to role-based approval thresholds:',
          '1. Low-Risk Autonomic Execution: Routine tasks (e.g. standard invoice data matching, vendor onboarding verification) execute end-to-end automatically with automated write-back to SAP / Salesforce.',
          '2. High-Risk Human-in-the-Loop Gate: For credit approvals over $250k or complex clinical appeals, the agent prepares the complete synthesized decision packet, highlights anomalies, drafts the correspondence, and awaits a single-click human sign-off.',
          '3. Immutable Audit Trails: Every action taken by both human and AI is logged to a cryptographically verifiable ledger, ensuring regulatory compliance under HIPAA, SOC2, and Basel III.'
        ]
      }
    ]
  },

  'battery-circular-economy': {
    slug: 'battery-circular-economy',
    type: 'case-study',
    category: 'CLEANTECH & CIRCULAR ECONOMY STARTUP STRATEGY',
    badge: 'STARTUP THESIS & INFRASTRUCTURE DESIGN',
    title: 'India Battery Lifecycle & Recovery Platform',
    subtitle: 'Solving the "Missing Middle" Reverse Logistics Bottleneck in India\'s EV Battery Ecosystem',
    heroStats: [
      { label: 'Recycling Capacity', value: '>80,000 T/yr Announced' },
      { label: 'Current Formal Collection', value: 'Only ~5,000 T/yr (~14%)' },
      { label: '2035 EOL Battery Supply', value: '233,000 T/yr Projected' },
      { label: 'Business Focus', value: 'Asset-Light Routing Layer' }
    ],
    problemIdeaImpact: {
      problemTitle: 'The Feedstock Paradox: 2.2× Excess Recycling Capacity vs 14% Collection',
      problemDesc: 'India has built announced Li-ion recycling capacity (>80,000 T/yr) that exceeds its total 2025 battery retirement supply (~36,000 T/yr) by 2.2×. Yet recyclers operate starved of feedstock because only ~5,000 tonnes (~14%) enters formal collection channels.',
      problemPoints: [
        'Spent EV batteries are scattered across thousands of small workshops, dealerships, fleet depots, and accident yards with zero organized pickup routes.',
        'No standardized diagnostics exist: functional batteries with 75% health get dumped into acid leaching instead of being repurposed for second-life energy storage.',
        'Informal scrap collectors dominate pickups unsafely, depriving OEMs of traceable EPR (Extended Producer Responsibility) compliance credits.'
      ],
      ideaTitle: 'The Missing Middle: Find → Collect → Grade → Track → Route',
      ideaDesc: 'An asset-light, neutral battery aggregation and lifecycle routing platform that connects fragmented supply points with high-value downstream recyclers and energy-storage operators.',
      ideaPoints: [
        'Network Aggregation: Route-optimized batch collection across workshops and fleets rather than sending random single-battery trucks.',
        'Mobile Diagnostics & Grading: Standardized State-of-Health (SoH) testing classifying batteries into Grade A (Reuse), Grade B (Second-Life Solar/UPS), or Grade C (Recycling).',
        'Digital Battery Passport: End-to-end ledger tracking chemistry (LFP vs NMC), cycle life, and CPCB-compliant EPR credit certificates.'
      ],
      impactTitle: 'Feedstock Dominance Ahead of 233,000 T/yr EOL Boom by 2035',
      impactDesc: 'Captures the critical aggregation bottleneck before India\'s EV retirement supply grows 6.5× over the next decade.',
      impactPoints: [
        'Maximizes economic value recovered per battery (second-life packs yield 2–3× higher value than raw scrap smelting).',
        'Asset-light entry model (Phases 1–2) establishing feedstock control and operational data before investing in heavy recycling capex.',
        'Diversified revenue model: collection fees, grading margins, feedstock premiums, and high-margin EPR compliance software fees.'
      ]
    },
    overview: 'India is experiencing an explosive transition toward electric mobility and domestic battery manufacturing. However, while industry and government have announced over 80,000 tonnes/year of Li-ion recycling capacity, only ~5,000 tonnes of end-of-life batteries currently enter formal collection out of ~36,000 tonnes available. The primary bottleneck is NOT recycling plants; it is fragmented collection, lack of diagnostics, and inefficient value routing. This startup strategy designs an asset-light aggregation and lifecycle routing platform that captures the missing middle before India’s EOL volume expands to 233,000 tonnes/year by 2035.',
    sections: [
      {
        id: 'the-collection-paradox',
        title: '01. The Paradox: Excess Recycling Capacity vs Zero Feedstock',
        summary: 'Data reveals that India has built nominal recycling capacity 2.2x greater than its entire annual battery waste, yet recyclers operate starved of supply.',
        paragraphs: [
          'According to NITI Aayog and Central Pollution Control Board (CPCB) data, India has registered over 563 battery recyclers (including 43 dedicated Li-ion recyclers) with announced processing capacity exceeding 80,000 tonnes/year. However, in 2025, total end-of-life Li-ion battery availability is estimated at approximately 36,000 tonnes/year, and formal collection captures a mere ~5,000 tonnes (~14%).',
          'The rest of the spent battery inventory disappears into informal scrap channels, unorganized dismantlers, or sits indefinitely in local mechanic workshops and fleet depots because nobody has built an organized, legally compliant collection and testing infrastructure.',
          'Therefore, launching another capital-intensive hydrometallurgical recycling factory is a strategic mistake. The real venture opportunity lies in building the aggregation, testing, and intelligence layer that controls the battery BEFORE it reaches the recycler.'
        ],
        table: {
          headers: ['Ecosystem Metric', 'Current Position (2025)', 'Projected Position (2035)', 'Strategic Implication'],
          rows: [
            ['Total EOL Li-ion Availability', '~36,000 Tonnes/year', '~233,000 Tonnes/year', 'Massive 6.5x volume expansion over 10 years'],
            ['EV & Energy Storage EOL Share', '~2,880 Tonnes/year', '~123,000 Tonnes/year', 'Transition from consumer electronics to large EV packs'],
            ['Announced Recycling Capacity', '>80,000 Tonnes/year', 'Expected >350,000 T/yr', 'Recyclers face severe feedstock famine'],
            ['Formal Collection Capture', '~5,000 Tonnes/year (~14%)', 'Target >75% under EPR', 'Massive value capture for organized aggregators']
          ]
        }
      },
      {
        id: 'operational-routing',
        title: '02. Operational Architecture: Find → Collect → Grade → Route',
        summary: 'Maximizing value recovered per battery rather than blindly recycling functional cells.',
        paragraphs: [
          'A retired electric two-wheeler or bus battery may no longer deliver the peak power required for automotive acceleration, but often retains 70% to 80% of its original energy capacity. Sending that battery straight into an acid leaching bath for raw mineral recycling is an enormous destruction of economic value.',
          'The proposed platform operates as an asset-light, neutral lifecycle routing network:'
        ],
        steps: [
          {
            step: '1. Sourced Collection Network',
            desc: 'Aggregate pickups across OEM authorized service centers, dealership networks, commercial EV fleets (BluSmart, Zypp, Uber/Ola delivery partners), accident yards, and warranty replacement hubs.'
          },
          {
            step: '2. Mobile Diagnostics & State-of-Health (SoH) Testing',
            desc: 'Deploy standardized mobile testing rigs measuring open-circuit voltage, internal impedance, thermal degradation, and cycle history to determine remaining useful capacity.'
          },
          {
            step: '3. Tri-Tier Value Routing',
            desc: '• Grade A (SoH > 80%): Reconditioning and reuse for warranty replacement.\n• Grade B (SoH 60%–80%): Repackaging for second-life stationary energy storage (solar microgrids, telecom cell towers, UPS backup).\n• Grade C (SoH < 60% or damaged): Channeling to authorized hydrometallurgical recyclers for black mass and critical mineral extraction (Lithium, Nickel, Cobalt).'
          },
          {
            step: '4. Digital Battery Passport & EPR Traceability',
            desc: 'Issues tamper-proof digital compliance certificates satisfying CPCB Extended Producer Responsibility (EPR) mandates for automotive OEMs, generating high-margin software compliance revenue.'
          }
        ]
      },
      {
        id: 'strategic-moat',
        title: '03. Execution Roadmap & Long-Term Defensibility',
        summary: 'From asset-light collection network to full circular economy infrastructure operator.',
        paragraphs: [
          '• Phase 1 (Years 1–2): Asset-Light Collection & Diagnostics (1,000–2,500 tonnes/year). Build relationships with fleet operators and recyclers. Zero heavy capex; prove positive unit economics per collected kilogram.',
          '• Phase 2 (Years 3–4): Regional Aggregation & Modular Second-Life Assembly (5,000–10,000 tonnes/year). Convert Grade B battery packs into modular solar storage units for tier-2/3 commercial clients.',
          '• Phase 3 (Years 5+): Proprietary Hydrometallurgical Recycling (25,000+ tonnes/year). Once feedstock control and deep data history are established, backward integrate into chemical recycling to close the loop back to battery cell manufacturers.'
        ]
      }
    ]
  },

  // ── BUILT SYSTEMS ─────────────────────────────────────────────────────────
  'restaurant-billing-iot': {
    slug: 'restaurant-billing-iot',
    type: 'project',
    category: 'FULL-STACK CLOUD & IOT HARDWARE',
    badge: 'DEPLOYED PRODUCTION PILOT · 6X SCALE',
    title: 'Cloud-Based Restaurant Billing & Order Management Platform',
    subtitle: 'Decoupling POS Printing from Dedicated PC Hardware via ESP Microcontrollers & Lightweight MQTT Messaging',
    heroStats: [
      { label: 'Pilot Scaling', value: '6x Order Volume' },
      { label: 'Throughput', value: '150+ Orders/Day' },
      { label: 'Hardware Cost', value: '-75% CAPEX' },
      { label: 'Print Latency', value: '<200ms Direct' }
    ],
    problemIdeaImpact: {
      problemTitle: 'Fragile Desktop POS Hardware in High-Stress Restaurant Kitchens',
      problemDesc: 'Restaurants spend significant upfront CAPEX buying dedicated Windows PCs at every counter and kitchen prep station. Steam, spilled liquids, OS updates, and network disconnects cause missed orders during rush hours.',
      problemPoints: [
        'Dedicated computers cost ₹40k–₹80k per station and frequently crash or overheat in kitchen environments.',
        'Missed order tickets create order delays, kitchen food waste, and intense dining customer frustration.',
        'Multi-counter establishments (billing, beverage, tandoor, main kitchen) face duplicate hardware overhead.'
      ],
      ideaTitle: 'Low-Cost ESP32 Microcontrollers Driving Direct Thermal Printing via MQTT',
      ideaDesc: 'Eliminate PC workstations completely by embedding compact ESP microcontrollers directly beside thermal printers, communicating over an ultra-reliable cloud MQTT publish/subscribe messaging broker.',
      ideaPoints: [
        'Responsive Web POS: Waiters take orders on mobile browsers or tablets with zero device restrictions.',
        'Lightweight IoT Messaging: Node.js backend pushes JSON orders over HiveMQ/AWS IoT with QoS 1 guaranteed delivery.',
        'Direct ESC/POS Driver: Custom C++ firmware streams raw ESC/POS hex commands directly over serial TTL to thermal print heads.'
      ],
      impactTitle: 'Zero Missed Orders & 6× Scaling Through Real Restaurant Rush Hours',
      impactDesc: 'Tested and proven in an active commercial restaurant pilot, transforming kitchen turnaround speed and hardware reliability.',
      impactPoints: [
        'Scaled pilot throughput seamlessly from ~25 orders/day to 100–150+ orders/day (55,000+ orders annualized).',
        'Hardware setup cost slashed by over 75% per printing station (replacing ₹50,000 PCs with ₹1,500 microcontrollers).',
        'Completely eliminated dropped tickets; offline caching ensures buffered prints fire immediately upon WiFi reconnection.'
      ]
    },
    overview: 'Local restaurants routinely spend thousands on dedicated computer workstations and bulky POS infrastructure at every billing counter and kitchen prep station. Hardware failure, operating system crashes, spilled liquids, and network drops cause missed kitchen orders and customer dissatisfaction during peak dining hours. This project designed and deployed an ultra-low-cost IoT thermal printing architecture using ESP microcontrollers and MQTT cloud messaging that enables thermal printers to receive and print tickets directly from cloud software without requiring a dedicated PC at each station.',
    sections: [
      {
        id: 'the-problem',
        title: '01. The Problem & Operational Vulnerabilities',
        summary: 'Why traditional Windows PC setups in restaurant kitchens are expensive and fragile.',
        paragraphs: [
          'In busy restaurant kitchens, ambient heat, humidity, oil smoke, and physical space constraints create a harsh environment for desktop computers. Small and medium food businesses frequently purchase low-spec PC towers simply to run POS software and send print jobs via USB cables to thermal receipt printers.',
          'When the PC freezes, reboots for updates, or experiences driver conflicts during dinner rush hours, kitchen staff miss order tickets. This leads to duplicate meals, customer walkouts, and chaotic dispute resolution between waiters and kitchen chefs.',
          'Additionally, multi-counter restaurants (billing counter, juice counter, kitchen, bar) were forced to deploy multiple PCs, increasing setup capital expenditure by ₹40,000–₹80,000 per outlet plus ongoing maintenance costs.'
        ]
      },
      {
        id: 'iot-architecture',
        title: '02. System Architecture & Technical Implementation',
        summary: 'Direct cloud-to-hardware communication via lightweight Pub/Sub IoT protocols.',
        paragraphs: [
          'The architecture decouples the physical printer from the computing terminal completely:'
        ],
        steps: [
          {
            step: '1. Responsive Web Ordering & POS Interface',
            desc: 'Built with React and Tailwind CSS, allowing waitstaff to take table orders on any mobile phone, tablet, or web browser with zero device restrictions.'
          },
          {
            step: '2. Node.js Cloud Orchestration Engine',
            desc: 'Processes order state machines (Ordered → Cooking → Ready → Billed), applies tax and discounts, and dispatches formatted ticket payloads to an MQTT message broker.'
          },
          {
            step: '3. MQTT Broker (HiveMQ / AWS IoT)',
            desc: 'Uses lightweight Publish/Subscribe messaging with QoS 1 (At Least Once Delivery) guarantees. If WiFi drops momentarily, messages are buffered and flushed immediately upon reconnection.'
          },
          {
            step: '4. ESP Microcontroller Driver Hardware',
            desc: 'An ESP32/ESP8266 board mounted inside or beside the thermal printer enclosure receives the JSON payload, parses table items, and streams raw ESC/POS hex commands directly over TTL/RS232 serial to the thermal print head.'
          }
        ]
      },
      {
        id: 'outcomes-scale',
        title: '03. Measurable Outcomes & Pilot Impact',
        summary: 'Proven reliability through real restaurant rush hours with zero missed orders.',
        paragraphs: [
          'The system was deployed and stress-tested in an active restaurant pilot environment:',
          '• Order Volume Scaled 6x: Handled seamless scaling from ~25 orders/day during initial rollout to 100–150+ orders/day during festival weekends (55,000+ orders annualized).',
          '• Zero Missed Tickets: The MQTT ACK mechanism and hardware watchdog timers completely eliminated dropped tickets.',
          '• 75% Cost Reduction: Outlets eliminated the need for dedicated desktop PCs at prep counters, cutting hardware costs from ~₹50,000 to under ₹1,500 per printing station.'
        ]
      }
    ]
  },

  'precision-bid-management': {
    slug: 'precision-bid-management',
    type: 'project',
    category: 'AI/ML DECISION SUPPORT & ENTERPRISE ANALYTICS',
    badge: 'HACKATHON WINNER · PRAGYAN × AURIGO',
    title: 'Precision Bid Management & Tender Analysis System',
    subtitle: 'ML-Powered Bidding Optimization Engine for Capital Infrastructure Contractors',
    heroStats: [
      { label: 'Collaboration', value: 'Aurigo Software' },
      { label: 'Event', value: 'Pragyan Hackathon' },
      { label: 'Approach', value: 'Historical ML Modeling' },
      { label: 'Target', value: 'Infrastructure Bids' }
    ],
    problemIdeaImpact: {
      problemTitle: 'The Contractor\'s Dilemma: Manual Guesswork in High-Stakes Public Tenders',
      problemDesc: 'Infrastructure contractors bidding on major public tenders must parse thousands of Bill of Quantity (BoQ) items across hundreds of PDF pages while guessing competitor discounts, leading to lost contracts or margin collapse.',
      problemPoints: [
        'Manual spreadsheet extraction takes weeks and frequently overlooks critical technical penalty clauses.',
        'Bidding too high causes lost tenders; bidding too low wins unprofitable contracts that cause financial distress.',
        'Valuable historical bidding data and competitor pricing trends remain unanalyzed in static archives.'
      ],
      ideaTitle: 'ML Decision Support: Win-Probability Modeling & Optimal Price Corridors',
      ideaDesc: 'Developed in collaboration with Aurigo Software Technologies, this platform applies NLP and machine learning to historical tender archives, material cost indices, and competitor behavior to recommend win-maximizing price corridors.',
      ideaPoints: [
        'NLP Clause Extraction: Automatically identifies work scopes, compliance prerequisites, and penalty triggers from BoQ PDFs.',
        'Competitor Behavioral Envelopes: Models historical competitor discount distributions by geography and project scale.',
        'Optimal Price Corridor: Computes the mathematical frontier between probability of winning (P_win) and expected gross margin.'
      ],
      impactTitle: 'Data-Driven Bidding Strategy & Enterprise Hackathon Recognition',
      impactDesc: 'Replaced subjective executive intuition with predictive probability modeling, earning formal commendation from enterprise software judges.',
      impactPoints: [
        'Replaces weeks of manual tender estimation with rapid, standardized BoQ parameter modeling.',
        'Minimizes the "winner\'s curse" by highlighting margin-destroying material cost escalations.',
        'Recognized at Pragyan Hackathon in partnership with Aurigo Software Technologies.'
      ]
    },
    overview: 'Infrastructure contractors bidding on government and commercial tenders face a high-stakes dilemma: bid too high and lose the contract to competitors; bid too low and win an unprofitable project that leads to severe financial distress. Contractors routinely rely on manual spreadsheets to parse thousands of Bill of Quantity (BoQ) items and guess competitor margins. Built in collaboration with Aurigo Software Technologies, this platform applies machine learning to historical tender archives, material cost indexes, and competitor behavior to recommend profit-maximizing bid price corridors.',
    sections: [
      {
        id: 'bidding-dilemma',
        title: '01. The Problem: The Contractor\'s Curse in Public Tendering',
        summary: 'Manual bid preparation is slow, error-prone, and systematically ignores competitive price distributions.',
        paragraphs: [
          'Public infrastructure tenders involve hundreds of pages of engineering specifications, fluctuating commodity costs (rebar, bitumen, cement), local labor rates, and penalty clauses for project delays.',
          'Estimators spend weeks manually extracting quantities into Excel. When determining the final commercial mark-up, senior leadership typically relies on gut instinct and anecdotal competitor gossip. This leads to either leaving millions in profit on the table or bidding below actual break-even costs.'
        ]
      },
      {
        id: 'ml-approach',
        title: '02. Data Modeling & Machine Learning Approach',
        summary: 'Analyzing historical tender outcomes to compute win-probability curves.',
        steps: [
          {
            step: '1. Automated BoQ Extraction & Normalization',
            desc: 'NLP pipelines ingest legacy PDF tender documents, standardizing line items against standard highway and building construction schedules.'
          },
          {
            step: '2. Competitor Behavior & Margin Analysis',
            desc: 'Analyzes historical bid books across regional public works departments to identify aggressive vs conservative competitor discount patterns by geography and project size.'
          },
          {
            step: '3. Win-Probability vs Profitability Frontier',
            desc: 'Models the trade-off curve between bid winning probability (P_win) and expected gross margin, identifying the optimal price corridor that maximizes overall expected enterprise value.'
          }
        ]
      },
      {
        id: 'hackathon-recognition',
        title: '03. Industry Recognition & Outcome',
        summary: 'Validated by senior enterprise software leaders at Aurigo Software.',
        paragraphs: [
          'Developed as an end-to-end working prototype during the Pragyan Hackathon in direct collaboration with Aurigo Software Technologies (a global leader in capital program management software).',
          'The solution demonstrated how legacy ERP datasets can be converted into predictive decision-support engines, earning formal recognition and praise from enterprise software judges.'
        ]
      }
    ]
  },

  'smart-agriculture-iot': {
    slug: 'smart-agriculture-iot',
    type: 'project',
    category: 'AI + IOT HARDWARE · SUSTAINABLE TECH',
    badge: 'WINNER · PROTOTYPING CONTEST',
    title: 'AI-Powered Smart Agriculture & Farm-to-Market Platform',
    subtitle: 'Connecting Real-Time Soil Telemetry, ML Crop Prediction, and Direct Marketplace Channels',
    heroStats: [
      { label: 'ML Accuracy', value: '98.4% Prediction' },
      { label: 'Recognition', value: 'Contest Winner' },
      { label: 'Stack', value: 'IoT + ML + React' },
      { label: 'Sensors', value: 'NPK, Moisture, pH' }
    ],
    problemIdeaImpact: {
      problemTitle: 'Chemical Imbalance, Irrigation Waste & Commission Agent Exploitation',
      problemDesc: 'Smallholder farmers manage crop selection, fertilizer application, and irrigation schedules through manual guesswork, degrading soil fertility and suffering severe financial loss to middlemen.',
      problemPoints: [
        'Excess chemical fertilizer application (Urea/DAP) destroys soil biology and wastes money.',
        'Inaccurate irrigation schedules waste critical groundwater and rot crop root systems.',
        'Farmers lack direct wholesale market access and are forced to sell to local commission agents at steep discounts.'
      ],
      ideaTitle: 'Closed-Loop IoT Soil Telemetry Nodes + 98.4% Accuracy Crop ML',
      ideaDesc: 'An integrated product ecosystem combining multi-parameter soil hardware sensors with machine learning models for precision irrigation, crop recommendation, and a direct farm-to-market marketplace.',
      ideaPoints: [
        'Multi-Parameter IoT Probe: Solar-powered sensor nodes measuring Nitrogen (N), Phosphorus (P), Potassium (K), moisture, temperature, and pH in real-time.',
        'Ensemble ML Engine: Random forest and boosted tree classifiers reaching 98.4% accuracy for crop suitability and water timing.',
        'Direct Market Aggregation: Eliminates 2–3 layers of predatory commission agents by connecting harvests directly with wholesale institutional buyers.'
      ],
      impactTitle: 'Prototyping Contest Victory & End-to-End Agritech Integration',
      impactDesc: 'Awarded 1st place in university-wide Prototyping Contest, proving the power of connecting hardware telemetry with commercial distribution.',
      impactPoints: [
        '98.4% cross-validated prediction accuracy for crop selection based on micro-soil chemistry.',
        'Prevents over-irrigation while reducing synthetic fertilizer expenditure for farmers.',
        'Demonstrates holistic product execution—combining sensor hardware, predictive AI, and commercial market channels.'
      ]
    },
    overview: 'Smallholder farmers manage seed selection, irrigation schedules, fertilizer application, and crop sales through disconnected, manual guesswork and predatory intermediaries. This system bridges the physical farm and commercial wholesale markets by integrating multi-parameter IoT soil sensors with machine learning models that predict optimal crop choices and automated irrigation cycles with 98.4% accuracy, alongside a direct farm-to-market marketplace.',
    sections: [
      {
        id: 'agriculture-gap',
        title: '01. The Problem: Fragmented Decisions & Depleted Yields',
        summary: 'Farmers suffer from over-fertilization, water waste, and commission agent exploitation.',
        paragraphs: [
          'Over-application of chemical fertilizers (Urea and DAP) has degraded soil fertility across agricultural belts, while improper irrigation timing wastes groundwater and harms crop roots. Furthermore, farmers lack scientific insight into which crops are best suited for their specific micro-soil chemistry.',
          'Even when a successful harvest is achieved, farmers are forced to sell to local commission agents at steep discounts due to lack of market connectivity and real-time mandi price transparency.'
        ]
      },
      {
        id: 'iot-ml-stack',
        title: '02. Technical Architecture: Sensors, ML & Cloud Platform',
        summary: 'Real-time telemetry feeding an ensemble crop classification model.',
        steps: [
          {
            step: '1. Multi-Parameter IoT Soil Probe',
            desc: 'Solar-powered microcontroller nodes embedded in farm plots continuously monitor Nitrogen (N), Phosphorus (P), Potassium (K), soil moisture, soil temperature, atmospheric humidity, and pH levels.'
          },
          {
            step: '2. Predictive Machine Learning Engine',
            desc: 'Trained on agricultural soil datasets using Random Forest and gradient-boosted decision trees, reaching 98.4% prediction accuracy for crop selection and automated irrigation triggers.'
          },
          {
            step: '3. Farm-to-Market Direct Marketplace',
            desc: 'A multilingual web platform connecting farmers directly with institutional buyers, hotel chains, and retail aggregators, cutting out multi-tier intermediary commissions.'
          }
        ]
      },
      {
        id: 'impact-recognition',
        title: '03. Contest Victory & Real-World Validation',
        summary: 'Awarded 1st place in the university Prototyping Contest.',
        paragraphs: [
          'The prototype was demonstrated live with working soil sensor hardware, real-time wireless data transmission, and instant crop recommendation displays.',
          'Judges commended the end-to-end product thinking—combining scientific soil health management with commercial market distribution rather than treating agriculture as purely a sensor hardware experiment.'
        ]
      }
    ]
  }
};
