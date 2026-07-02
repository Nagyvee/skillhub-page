export interface Module {
  week: string;
  title: string;
  topics: string[];
}

export interface LandingPageData {
  slug: string;
  title: string;
  subtitle: string;
  heroHook: string;
  heroSub: string;
  duration: string;
  location: string;
  date: string;
  price: string;
  ctaLabel: string;
  ctaUrl: string;
  stats: { value: string; label: string }[];
  problemHeading: string;
  problemBody: string;
  transformationHeading: string;
  transformationPoints: string[];
  modules: Module[];
  whoFor: string[];
  whoNot: string[];
  outcomes: string[];
  heroImage?: string;
  faqs: { q: string; a: string }[];
}

export const landingPages: Record<string, LandingPageData> = {
  "strategic-railway-management": {
    slug: "strategic-railway-management",
    title: "Strategic Railway Management",
    subtitle: "Executive Short Course",
    heroHook: "Lead Rail Reform. Drive Operational Excellence.",
    heroSub: "A focused executive programme equipping senior rail professionals with the strategic tools, governance frameworks, and leadership skills to transform South Africa's rail sector.",
    duration: "5 Days",
    location: "Cape Town",
    date: "July 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Strategic Railway Management – Enquiry",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Intensive Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "July 2026", label: "Cape Town" },
    ],
    problemHeading: "Rail Reform Needs Leaders, Not Just Managers.",
    problemBody: "South Africa's rail sector is at a turning point. Private-sector participation, network restructuring, and the pressure to restore freight and passenger performance demand executives who can operate at the intersection of strategy, policy, and operations. Most rail professionals have deep technical expertise — but the transition from operational management to strategic leadership is a gap that costs the sector every day.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Design and execute railway reform strategies aligned with national policy",
      "Lead cross-functional teams through complex operational change",
      "Apply governance and risk frameworks specific to rail infrastructure",
      "Engage effectively with regulators, funders, and private operators",
      "Drive performance improvement across safety, reliability, and cost",
      "Build commercially sustainable rail business models",
    ],
    modules: [
      {
        week: "Day 1",
        title: "Railway Industry Landscape & Policy Framework",
        topics: [
          "Global and African rail reform models",
          "SA rail policy: Transnet, PRASA, and the private-sector mandate",
          "Regulatory environment and compliance obligations",
          "Stakeholder mapping: government, SOEs, and private operators",
        ],
      },
      {
        week: "Day 2",
        title: "Strategic Planning & Commercial Management",
        topics: [
          "Strategic planning frameworks for rail enterprises",
          "Commercial models: concessions, PPPs, and third-party access",
          "Revenue optimisation and tariff strategy",
          "Financial management and capital investment planning",
        ],
      },
      {
        week: "Day 3",
        title: "Operational Excellence & Safety",
        topics: [
          "Performance management frameworks and KPIs",
          "Operational risk and safety management systems",
          "Asset management and lifecycle planning",
          "Technology and digitalisation in rail operations",
        ],
      },
      {
        week: "Day 4",
        title: "Leadership, Governance & Change Management",
        topics: [
          "Governance structures for rail organisations",
          "Leading transformation in complex, regulated environments",
          "Labour relations and workforce strategy",
          "Stakeholder communication and public accountability",
        ],
      },
      {
        week: "Day 5",
        title: "Strategy Execution & Case Studies",
        topics: [
          "International best practice: benchmarking successful rail turnarounds",
          "Participant strategy presentations and peer review",
          "Developing a personal leadership action plan",
          "Networking session and programme close",
        ],
      },
    ],
    whoFor: [
      "Senior managers and executives in Transnet, PRASA, or related SOEs",
      "Government officials in transport, logistics, or infrastructure portfolios",
      "Private-sector professionals entering the rail concession market",
      "Consultants and advisors working on rail reform programmes",
      "Professionals seeking CPD points in transport and logistics",
    ],
    whoNot: [
      "Entry-level operational staff (a foundational programme is better suited)",
      "Those seeking a purely technical or engineering qualification",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Access to SkillHub's professional network across Africa",
      "Post-programme coaching and follow-up resources",
      "Case study toolkit for immediate on-the-job application",
    ],
    faqs: [
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Where is the programme held?", a: "The July 2026 cohort is hosted in Cape Town. Accommodation and venue recommendations are shared upon registration." },
      { q: "Can my organisation enrol multiple participants?", a: "Absolutely. Group bookings receive preferential pricing. Contact hello@skillhub.africa for a corporate rate." },
      { q: "Is this available as an in-house programme?", a: "Yes. We can deliver this programme exclusively for your organisation, customised to your strategic context. Get in touch to discuss." },
      { q: "What is the application process?", a: "Simply contact us via email at hello@skillhub.africa. Our team will confirm your eligibility, send a programme brochure, and process your booking." },
    ],
  },

  "practical-railway-operations-and-service-delivery": {
    slug: "practical-railway-operations-and-service-delivery",
    title: "Practical Railway Operations & Service Delivery",
    subtitle: "Professional Short Course",
    heroHook: "From the Control Room to the Corridor — Master Rail Operations.",
    heroSub: "A hands-on professional programme for railway operations staff, supervisors, and planners who need practical tools to improve service delivery, safety, and day-to-day performance.",
    duration: "5 Days",
    location: "Cape Town",
    date: "July 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Practical Railway Operations – Enquiry",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Practical Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "July 2026", label: "Cape Town" },
    ],
    problemHeading: "Good Intentions Don't Move Trains. Competent Operations Do.",
    problemBody: "South Africa's rail network carries millions of commuters and megatons of freight — yet service reliability remains a critical challenge. The gap isn't always infrastructure: it's often operational. Timetable failures, poor incident response, weak scheduling, and inadequate safety culture compound into the service breakdowns that erode public and investor confidence. The professionals who fix this are those who understand rail operations end to end.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Plan and manage train schedules for reliability and passenger satisfaction",
      "Apply operational safety frameworks and incident response protocols",
      "Coordinate control room functions under normal and disrupted conditions",
      "Monitor and improve service delivery KPIs",
      "Lead your team through service recovery after disruptions",
      "Identify and close gaps between policy, planning, and on-the-ground reality",
    ],
    modules: [
      {
        week: "Day 1",
        title: "Rail Operations Fundamentals",
        topics: [
          "Overview of rail operating systems: freight vs passenger",
          "Key roles in railway operations: controllers, planners, supervisors",
          "Regulatory environment and safety obligations",
          "Introduction to timetabling and capacity planning",
        ],
      },
      {
        week: "Day 2",
        title: "Train Control & Scheduling",
        topics: [
          "Train control systems and signalling principles",
          "Timetable construction and conflict resolution",
          "Capacity management and route planning",
          "Managing multi-operator environments",
        ],
      },
      {
        week: "Day 3",
        title: "Safety, Risk & Incident Management",
        topics: [
          "Railway safety management systems (SMS)",
          "Hazard identification and risk assessment in operations",
          "Incident response procedures and investigation methods",
          "Near-miss reporting culture and safety improvement",
        ],
      },
      {
        week: "Day 4",
        title: "Service Delivery & Performance Management",
        topics: [
          "Defining and measuring service delivery KPIs",
          "Passenger and freight service quality standards",
          "Real-time monitoring and operational dashboards",
          "Continuous improvement tools for rail operations",
        ],
      },
      {
        week: "Day 5",
        title: "Disruption Management & Case Studies",
        topics: [
          "Contingency planning and service recovery protocols",
          "Communication during disruptions: passengers, media, internal teams",
          "Case study analysis: SA rail disruption events",
          "Practical scenario exercises and programme wrap-up",
        ],
      },
    ],
    whoFor: [
      "Train controllers, operations supervisors, and station managers",
      "Railway planners and scheduling staff at Transnet or PRASA",
      "Frontline service delivery teams seeking formal recognition",
      "New entrants to the rail sector building operational foundations",
      "Infrastructure and maintenance staff wanting cross-functional understanding",
    ],
    whoNot: [
      "C-suite executives seeking a strategic leadership programme (see Strategic Railway Management)",
      "Professionals with no connection to transport or logistics",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Practical toolkit: templates, checklists, and frameworks for immediate use",
      "Access to SkillHub's professional network across Africa",
      "Post-programme support and resource library",
    ],
    faqs: [
      { q: "What level of experience do I need?", a: "This programme is designed for working rail professionals — from supervisors to mid-level managers. No formal qualification is required, but some operational experience is recommended." },
      { q: "Is the programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a certificate and CPD points on completion." },
      { q: "Can my employer fund this training?", a: "Yes. Many participants use SETA funding or employer bursaries. We can provide a formal quotation and supporting documentation for funding applications." },
      { q: "Where is the July 2026 cohort held?", a: "Cape Town. Exact venue details and logistics are confirmed upon registration." },
      { q: "Is group booking available?", a: "Yes. Organisations sending multiple delegates receive preferential rates. Contact hello@skillhub.africa." },
    ],
  },

  "advanced-principles-in-ports-and-marine-terminals-management": {
    slug: "advanced-principles-in-ports-and-marine-terminals-management",
    title: "Advanced Principles in Ports & Marine Terminals Management",
    subtitle: "Executive Short Course",
    heroHook: "Command the Port. Master the Terminal.",
    heroSub: "An advanced programme for port and terminal professionals ready to operate at the highest levels of strategic management, safety leadership, and operational efficiency in maritime logistics.",
    duration: "5 Days",
    location: "Cape Town",
    date: "July 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Ports and Marine Terminals – Enquiry",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Advanced Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "July 2026", label: "Cape Town" },
    ],
    problemHeading: "Africa's Ports Are Under Pressure. The Leaders Who Navigate That Are Rare.",
    problemBody: "Global trade flows are shifting. African ports face unprecedented pressure to modernise operations, comply with evolving international regulations, and compete for cargo volumes in an increasingly competitive maritime environment. Port and terminal managers who can combine operational mastery with strategic thinking — and apply risk-based management across complex, safety-critical environments — are among the most valuable professionals in the logistics sector.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Apply advanced risk-based management across port and terminal operations",
      "Lead safety and compliance programmes aligned with SOLAS, MARPOL, and ISPS",
      "Optimise terminal throughput and capacity using KPI-driven frameworks",
      "Manage charter parties, lay time, and demurrage claims with confidence",
      "Oversee dangerous cargo handling and environmental compliance",
      "Position your port or terminal for sustainable, long-term performance",
    ],
    modules: [
      {
        week: "Day 1",
        title: "Port & Terminal Strategy and Governance",
        topics: [
          "Global port industry landscape and African maritime trade",
          "Port authority structures, governance, and landlord vs operator models",
          "Capacity planning, budgeting, and organisational design",
          "Regulatory framework: national port authorities and international law",
        ],
      },
      {
        week: "Day 2",
        title: "Terminal Operations & Performance Management",
        topics: [
          "Container, bulk, liquid, and Ro-Ro terminal operations",
          "KPI frameworks for terminal efficiency and throughput",
          "Vessel planning, scheduling, and berth management",
          "Technology and automation in modern terminal operations",
        ],
      },
      {
        week: "Day 3",
        title: "Safety, Risk & Environmental Compliance",
        topics: [
          "Risk-based safety management systems for ports and terminals",
          "SOLAS, MARPOL, and ISPS Code: practical compliance",
          "Dangerous cargo storage and handling best practices",
          "Environmental regulations: air, water, waste, and green port initiatives",
        ],
      },
      {
        week: "Day 4",
        title: "Commercial Management & Legal Frameworks",
        topics: [
          "Charter parties: obligations, liabilities, and responsibilities",
          "Lay time calculation and demurrage claims management",
          "Contract management and dispute resolution in port operations",
          "Customs, border control, and cargo security procedures",
        ],
      },
      {
        week: "Day 5",
        title: "Strategic Leadership & Future Ports",
        topics: [
          "Digital transformation: smart ports and Port Community Systems",
          "Sustainable port development and ESG in maritime logistics",
          "Leadership and change management in port organisations",
          "Case studies, strategy presentations, and programme close",
        ],
      },
    ],
    whoFor: [
      "Port and terminal managers seeking to operate at a strategic level",
      "Senior operations professionals at Transnet Port Terminals or private operators",
      "Maritime logistics managers and supply chain directors",
      "Government officials in transport, trade, or infrastructure roles",
      "Shipping company representatives and freight forwarding executives",
    ],
    whoNot: [
      "Entry-level port workers seeking a technical trade qualification",
      "Professionals with no background in maritime, logistics, or operations",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Practical frameworks and templates applicable from day one",
      "Access to SkillHub's professional network across Africa",
      "Post-programme coaching and resource access",
    ],
    faqs: [
      { q: "Who is this programme designed for?", a: "Mid-to-senior professionals working in port management, terminal operations, or maritime logistics who want to advance their strategic and operational capabilities." },
      { q: "Is the programme QCTO-accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. A formal certificate and CPD points are issued on completion." },
      { q: "Can SETA funding be used?", a: "Yes. We provide all documentation required for SETA and employer bursary applications. Contact us and we'll assist." },
      { q: "Where is the July 2026 cohort held?", a: "Cape Town. Venue and logistics details are confirmed upon booking." },
      { q: "Can this be delivered in-house for our organisation?", a: "Yes. We offer customised in-house delivery for port authorities, SOEs, and private terminal operators. Contact hello@skillhub.africa to discuss." },
    ],
  },
  "ports-management-and-transshipment-operations": {
    slug: "ports-management-and-transshipment-operations",
    title: "Ports Management & Transshipment Operations",
    subtitle: "Professional Short Course",
    heroHook: "Understand the Role of Ports in Global Trade and Logistics.",
    heroSub: "A comprehensive 5-day programme equipping port professionals, logistics managers, and trade specialists with the knowledge to manage port operations, transshipment flows, and terminal efficiency in a competitive global environment.",
    duration: "5 Days",
    location: "Enrol Today",
    date: "August 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Ports Management and Transshipment Operations – Enquiry",
    heroImage: "/assets/lp/lp-ports-transshipment.png",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Intensive Programme" },
      { value: "9", label: "Modules" },
      { value: "CPD", label: "Points Awarded" },
    ],
    problemHeading: "Ports Are the Engine of Global Trade. Most Professionals Only See One Part.",
    problemBody: "Africa's ports handle billions of rands worth of cargo every year — yet inefficiency, congestion, and poor transshipment coordination cost the continent billions more. Professionals working in port environments often have deep expertise in one area but lack the cross-functional understanding needed to drive real performance improvement. This programme closes that gap.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Apply port management principles across container, bulk, and Ro-Ro operations",
      "Plan and optimise transshipment operations for speed and cost efficiency",
      "Manage cargo handling and terminal throughput using industry best practices",
      "Understand hinterland connectivity and its impact on port competitiveness",
      "Evaluate port performance using KPIs and benchmarking frameworks",
      "Navigate the regulatory and commercial environment of modern port management",
    ],
    modules: [
      {
        week: "Day 1",
        title: "Port Management Principles",
        topics: [
          "Global port industry overview and African maritime trade context",
          "Port governance models: landlord, tool, and service port structures",
          "Port authority roles, responsibilities, and stakeholder relationships",
          "Introduction to port planning and capacity management",
        ],
      },
      {
        week: "Day 2",
        title: "Transshipment Operations",
        topics: [
          "Transshipment hub dynamics and global shipping network integration",
          "Container routing, feeder services, and relay operations",
          "Yard management and container tracking systems",
          "Optimising dwell time and berth productivity",
        ],
      },
      {
        week: "Day 3",
        title: "Cargo Handling & Terminal Efficiency",
        topics: [
          "Terminal equipment and technology: cranes, RTGs, and automation",
          "Cargo handling procedures for containers, bulk, and breakbulk",
          "Terminal operating systems (TOS) and digital integration",
          "Safety management in cargo handling environments",
        ],
      },
      {
        week: "Day 4",
        title: "Hinterland Connectivity & Trade Facilitation",
        topics: [
          "Inland container depots and dry port operations",
          "Road, rail, and pipeline connections to port hinterlands",
          "Customs procedures and trade facilitation frameworks",
          "Port community systems and single window environments",
        ],
      },
      {
        week: "Day 5",
        title: "Performance Evaluation & KPIs",
        topics: [
          "Key performance indicators for port and terminal operations",
          "Benchmarking African ports against global standards",
          "Continuous improvement and operational excellence frameworks",
          "Case studies and participant presentations",
        ],
      },
    ],
    whoFor: [
      "Port authority staff and terminal operations managers",
      "Freight forwarders, shipping agents, and logistics coordinators",
      "Supply chain professionals with port-facing responsibilities",
      "Government officials in trade, transport, and customs roles",
      "Professionals seeking formal recognition in port management",
    ],
    whoNot: [
      "Professionals with no connection to maritime, logistics, or trade",
      "Those seeking a purely technical engineering qualification",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Practical toolkit for port performance monitoring and improvement",
      "Access to SkillHub's professional network across Africa",
      "Post-programme support and resource library",
    ],
    faqs: [
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Who should attend?", a: "Port authority staff, terminal operators, freight forwarders, shipping agents, and any professional with port-facing responsibilities." },
      { q: "Can my employer fund this training?", a: "Yes. We provide documentation for SETA and employer bursary applications. Contact us for a formal quotation." },
      { q: "Where is the programme held?", a: "Contact us at hello@skillhub.africa for venue and logistics details." },
      { q: "Is group booking available?", a: "Yes. Organisations sending multiple delegates receive preferential rates. Contact hello@skillhub.africa." },
    ],
  },

  "international-public-private-partnerships-ppp-projects-and-infrastructure-management": {
    slug: "international-public-private-partnerships-ppp-projects-and-infrastructure-management",
    title: "International Public-Private Partnerships (PPP) Projects & Infrastructure Management",
    subtitle: "Executive Short Course",
    heroHook: "Building Sustainable Partnerships. Delivering Infrastructure. Creating Value.",
    heroSub: "An executive programme for infrastructure professionals, government officials, and private sector leaders who need to structure, manage, and deliver PPP projects that create lasting public value.",
    duration: "5 Days",
    location: "Enrol Today",
    date: "August 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=PPP Projects and Infrastructure Management – Enquiry",
    heroImage: "/assets/lp/lp-ppp-infrastructure.png",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Executive Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "August 2026", label: "Next Intake" },
    ],
    problemHeading: "Infrastructure Gaps Are Holding Africa Back. PPPs Are Part of the Solution — If Done Right.",
    problemBody: "Africa faces a massive infrastructure deficit. Governments lack the capital to close it alone, making public-private partnerships a critical delivery mechanism. But PPPs are complex — poorly structured deals cost governments billions and leave communities without the services they need. The professionals who can design, negotiate, and manage PPPs effectively are among the most sought-after on the continent.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Structure PPP projects that deliver value for money and public benefit",
      "Navigate the full PPP project lifecycle from identification to implementation",
      "Apply risk allocation frameworks that protect public interest",
      "Draft and negotiate contracts that are bankable and legally sound",
      "Monitor PPP performance and manage concession agreements",
      "Evaluate sustainability and social impact across infrastructure projects",
    ],
    modules: [
      {
        week: "Day 1",
        title: "PPP Fundamentals & Project Identification",
        topics: [
          "What makes a good PPP: value for money and public benefit tests",
          "PPP models: concessions, BOT, DBFOM, and availability payment structures",
          "Project identification, screening, and feasibility assessment",
          "African PPP landscape: regulatory frameworks and enabling environments",
        ],
      },
      {
        week: "Day 2",
        title: "Project Structuring & Finance",
        topics: [
          "Financial modelling and bankability assessment",
          "Infrastructure finance: DFIs, bonds, and blended finance structures",
          "Revenue models and tariff design in PPP projects",
          "Value for money analysis and public sector comparator",
        ],
      },
      {
        week: "Day 3",
        title: "Risk Management & Contract Design",
        topics: [
          "Risk identification, allocation, and mitigation in PPP contracts",
          "Contract structures: key clauses, step-in rights, and termination provisions",
          "Legal frameworks and dispute resolution mechanisms",
          "Government support instruments and credit enhancement tools",
        ],
      },
      {
        week: "Day 4",
        title: "Procurement & Implementation",
        topics: [
          "PPP procurement process: RFQ, RFP, and bid evaluation",
          "Negotiation strategies for government and private sector teams",
          "Financial close: conditions precedent and drawdown mechanics",
          "Construction phase oversight and milestone management",
        ],
      },
      {
        week: "Day 5",
        title: "Performance Monitoring & Sustainability",
        topics: [
          "KPI frameworks for PPP concession monitoring",
          "Managing underperformance, disputes, and contract renegotiation",
          "Sustainability and social impact assessment in infrastructure",
          "Case studies: African PPP successes and lessons learned",
        ],
      },
    ],
    whoFor: [
      "Government officials in infrastructure, finance, or treasury departments",
      "Private sector executives bidding for or managing PPP concessions",
      "Development finance institution staff and infrastructure advisors",
      "Legal and financial professionals working on infrastructure transactions",
      "Project managers overseeing large public infrastructure programmes",
    ],
    whoNot: [
      "Professionals with no connection to infrastructure, finance, or public policy",
      "Those seeking a technical construction or engineering qualification",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "PPP toolkit: frameworks, templates, and checklists for immediate use",
      "Access to SkillHub's professional network across Africa",
      "Post-programme coaching and resource access",
    ],
    faqs: [
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Who should attend?", a: "Government officials, private sector executives, DFI staff, legal and financial advisors, and project managers involved in infrastructure delivery." },
      { q: "Can SETA funding be used?", a: "Yes. We provide all documentation required for SETA and employer bursary applications." },
      { q: "Is in-house delivery available?", a: "Yes. We can customise and deliver this programme exclusively for your organisation or government department. Contact hello@skillhub.africa." },
      { q: "How do I enrol?", a: "Email hello@skillhub.africa or click Reserve Your Seat above. Our team will respond within one business day." },
    ],
  },

  "transport-and-fleet-management": {
    slug: "transport-and-fleet-management",
    title: "Transport & Fleet Management",
    subtitle: "Professional Short Course",
    heroHook: "Move Smarter. Manage Better. Cut Costs.",
    heroSub: "A practical programme for transport managers, fleet supervisors, and logistics professionals who need to optimise vehicle operations, reduce costs, and improve service delivery across road transport networks.",
    duration: "5 Days",
    location: "Enrol Today",
    date: "August 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Transport and Fleet Management – Enquiry",
    heroImage: "/assets/lp/lp-fleet-management.png",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Practical Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "August 2026", label: "Next Intake" },
    ],
    problemHeading: "A Fleet That Isn't Managed Is a Fleet That's Losing Money.",
    problemBody: "Fuel costs, vehicle downtime, driver behaviour, maintenance backlogs, and compliance failures — every unmanaged variable in a fleet operation erodes margin and increases risk. South African transport and logistics businesses operate in one of the most demanding environments on the continent. The difference between a profitable fleet and a costly one is almost always management capability.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Design and implement a fleet management system that reduces costs and downtime",
      "Monitor and improve driver behaviour, safety, and compliance",
      "Build a preventive maintenance programme that extends vehicle life",
      "Use telematics and fleet technology to make data-driven decisions",
      "Manage fuel consumption and implement cost-reduction strategies",
      "Ensure legal compliance across roadworthiness, licensing, and transport regulations",
    ],
    modules: [
      {
        week: "Day 1",
        title: "Fleet Management Fundamentals",
        topics: [
          "Fleet management scope: vehicles, drivers, routes, and compliance",
          "Fleet policy development and standard operating procedures",
          "Vehicle acquisition, specification, and lifecycle planning",
          "Total cost of ownership (TCO) analysis and fleet budgeting",
        ],
      },
      {
        week: "Day 2",
        title: "Vehicle Maintenance & Asset Management",
        topics: [
          "Preventive vs reactive maintenance: building the right programme",
          "Maintenance scheduling, job cards, and workshop management",
          "Tyre management, fuel systems, and fleet consumables",
          "Vehicle condition monitoring and defect reporting",
        ],
      },
      {
        week: "Day 3",
        title: "Driver Management & Safety",
        topics: [
          "Driver recruitment, licensing, and induction procedures",
          "Driver behaviour monitoring: telematics, scoring, and coaching",
          "Fatigue management and hours-of-service compliance",
          "Accident investigation, reporting, and prevention",
        ],
      },
      {
        week: "Day 4",
        title: "Fleet Technology & Fuel Management",
        topics: [
          "GPS tracking and telematics: selecting and implementing systems",
          "Fuel management: consumption monitoring, cards, and fraud prevention",
          "Fleet management software: features, integration, and reporting",
          "Electric and alternative fuel vehicles: transition planning",
        ],
      },
      {
        week: "Day 5",
        title: "Compliance, KPIs & Continuous Improvement",
        topics: [
          "Transport legislation: NRTA, operating licences, and roadworthiness",
          "Fleet KPIs: utilisation, availability, cost per kilometre, and uptime",
          "Continuous improvement frameworks for fleet operations",
          "Case studies and participant action planning",
        ],
      },
    ],
    whoFor: [
      "Fleet managers and transport supervisors in logistics and distribution",
      "Municipal and government transport department officials",
      "Supply chain and operations managers with fleet responsibilities",
      "Owner-operators and SME transport business owners",
      "Professionals seeking formal recognition in transport management",
    ],
    whoNot: [
      "Drivers seeking a professional driving licence or PDP",
      "Professionals with no connection to transport or logistics operations",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Fleet management toolkit: policies, checklists, and KPI templates",
      "Access to SkillHub's professional network across Africa",
      "Post-programme support and resource library",
    ],
    faqs: [
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Who should attend?", a: "Fleet managers, transport supervisors, logistics managers, municipal transport officials, and owner-operators managing vehicle fleets." },
      { q: "Can my employer fund this training?", a: "Yes. We provide documentation for SETA and employer bursary applications. Contact us for a formal quotation." },
      { q: "Is in-house delivery available?", a: "Yes. We can deliver this programme for your organisation with content tailored to your fleet environment. Contact hello@skillhub.africa." },
      { q: "How do I enrol?", a: "Email hello@skillhub.africa or click Reserve Your Seat above. Our team will respond within one business day." },
    ],
  },

  "procurement-management-for-world-bank-funded-projects": {
    slug: "procurement-management-for-world-bank-funded-projects",
    title: "Procurement Management for World Bank Funded Projects",
    subtitle: "Professional Short Course",
    heroHook: "Master Donor-Funded Procurement. Deliver Projects That Pass Audit.",
    heroSub: "A specialist programme for procurement officers, project managers, and government officials who work on World Bank and donor-funded projects and need to navigate procurement regulations with confidence and compliance.",
    duration: "5 Days",
    location: "Enrol Today",
    date: "August 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=Procurement Management for World Bank Funded Projects – Enquiry",
    heroImage: "/assets/lp/lp-procurement-worldbank.png",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Specialist Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "August 2026", label: "Next Intake" },
    ],
    problemHeading: "Procurement Errors on Donor Projects Don't Just Cost Money — They Cost Credibility.",
    problemBody: "World Bank and donor-funded projects operate under strict procurement regulations that differ significantly from standard government or private sector processes. Non-compliance leads to disallowed costs, project suspension, and reputational damage that affects future funding. Yet many professionals managing these projects have never received formal training in donor procurement frameworks. This programme closes that gap.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Apply World Bank Procurement Regulations for IPF Borrowers with confidence",
      "Select the correct procurement method for goods, works, and services",
      "Prepare compliant bidding documents and evaluation reports",
      "Manage the full procurement cycle from planning to contract award",
      "Conduct post-procurement reviews and respond to audit findings",
      "Avoid the most common compliance pitfalls that trigger donor sanctions",
    ],
    modules: [
      {
        week: "Day 1",
        title: "World Bank Procurement Framework",
        topics: [
          "Overview of World Bank financing and procurement regulations",
          "STEP system: Systematic Tracking of Exchanges in Procurement",
          "Procurement planning and market assessment",
          "Roles and responsibilities of borrowers, task teams, and procurement specialists",
        ],
      },
      {
        week: "Day 2",
        title: "Procurement Methods & Bidding Documents",
        topics: [
          "Request for Bids (RFB), Request for Proposals (RFP), and direct selection",
          "Standard Procurement Documents (SPDs) and their correct use",
          "Advertising requirements and procurement notice preparation",
          "Pre-qualification and shortlisting procedures",
        ],
      },
      {
        week: "Day 3",
        title: "Evaluation & Contract Award",
        topics: [
          "Bid opening procedures and evaluation committee roles",
          "Technical and financial evaluation methodologies",
          "Evaluation report preparation and World Bank no-objection process",
          "Negotiations, contract award, and debriefing unsuccessful bidders",
        ],
      },
      {
        week: "Day 4",
        title: "Contract Management & Compliance",
        topics: [
          "Contract administration and performance monitoring",
          "Variations, extensions, and contract amendments under donor rules",
          "Payment processing and documentation requirements",
          "Fraud and corruption prevention in donor-funded procurement",
        ],
      },
      {
        week: "Day 5",
        title: "Audit, Review & Case Studies",
        topics: [
          "Post procurement review (PPR) process and preparation",
          "Responding to audit findings and implementing corrective actions",
          "Common compliance failures and how to avoid them",
          "Case studies and participant procurement plan review",
        ],
      },
    ],
    whoFor: [
      "Procurement officers on World Bank or donor-funded projects",
      "Project managers and coordinators in government PIUs",
      "Finance and compliance staff working on international development projects",
      "NGO and implementing agency staff managing donor funds",
      "Consultants advising on donor-funded infrastructure or development projects",
    ],
    whoNot: [
      "Professionals working exclusively in private sector commercial procurement",
      "Those with no involvement in donor or government-funded projects",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "Procurement toolkit: templates, checklists, and evaluation frameworks",
      "Access to SkillHub's professional network across Africa",
      "Post-programme support and resource library",
    ],
    faqs: [
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Who should attend?", a: "Procurement officers, project managers, finance staff, and consultants working on World Bank or other donor-funded projects." },
      { q: "Does this cover other donor frameworks like AfDB or EU?", a: "The programme focuses on World Bank procurement regulations, which form the foundation for many other donor frameworks. Principles covered are broadly transferable." },
      { q: "Can SETA funding be used?", a: "Yes. We provide all documentation required for SETA and employer bursary applications." },
      { q: "How do I enrol?", a: "Email hello@skillhub.africa or click Reserve Your Seat above. Our team will respond within one business day." },
    ],
  },

  "artificial-intelligence-and-data-analytics-in-supply-chain-management": {
    slug: "artificial-intelligence-and-data-analytics-in-supply-chain-management",
    title: "Artificial Intelligence & Data Analytics in Supply Chain Management",
    subtitle: "Professional Short Course",
    heroHook: "The Future of Supply Chain Is Data-Driven. Are You Ready?",
    heroSub: "A forward-looking programme for supply chain professionals, operations managers, and logistics leaders who want to harness AI and data analytics to build smarter, faster, and more resilient supply chains.",
    duration: "5 Days",
    location: "Enrol Today",
    date: "August 2026",
    price: "Contact us for pricing",
    ctaLabel: "Reserve Your Seat",
    ctaUrl: "mailto:hello@skillhub.africa?subject=AI and Data Analytics in Supply Chain – Enquiry",
    heroImage: "/assets/lp/lp-supply-chain.png",
    stats: [
      { value: "QCTO", label: "Accredited Provider" },
      { value: "5 Days", label: "Forward-Looking Programme" },
      { value: "CPD", label: "Points Awarded" },
      { value: "August 2026", label: "Next Intake" },
    ],
    problemHeading: "Supply Chains Are Drowning in Data. Most Organisations Aren't Using It.",
    problemBody: "Modern supply chains generate enormous volumes of data — from demand signals and inventory levels to supplier performance and logistics tracking. The organisations that turn this data into decisions are pulling ahead. Those that don't are managing by intuition in an environment that demands precision. AI and analytics are no longer a competitive advantage — they are becoming a baseline requirement.",
    transformationHeading: "What You'll Be Equipped to Do",
    transformationPoints: [
      "Apply AI and machine learning concepts to real supply chain challenges",
      "Use data analytics to improve demand forecasting and inventory optimisation",
      "Build dashboards and visualisations that drive operational decisions",
      "Identify automation opportunities across procurement, warehousing, and logistics",
      "Evaluate AI tools and platforms relevant to supply chain management",
      "Lead data-driven transformation initiatives within your organisation",
    ],
    modules: [
      {
        week: "Day 1",
        title: "AI & Data Analytics Foundations",
        topics: [
          "Introduction to AI, machine learning, and data analytics concepts",
          "The data-driven supply chain: opportunities and maturity models",
          "Data types, sources, and quality in supply chain environments",
          "Overview of AI applications across the supply chain spectrum",
        ],
      },
      {
        week: "Day 2",
        title: "Demand Forecasting & Inventory Optimisation",
        topics: [
          "Traditional vs AI-driven demand forecasting methods",
          "Machine learning models for demand sensing and prediction",
          "Inventory optimisation: safety stock, reorder points, and AI-driven replenishment",
          "Reducing stockouts and overstock using predictive analytics",
        ],
      },
      {
        week: "Day 3",
        title: "Procurement & Supplier Analytics",
        topics: [
          "Spend analytics and supplier performance dashboards",
          "AI in supplier selection, risk assessment, and contract management",
          "Predictive risk modelling for supply chain disruptions",
          "Automating procurement workflows and approval processes",
        ],
      },
      {
        week: "Day 4",
        title: "Logistics, Warehousing & Last-Mile Analytics",
        topics: [
          "Route optimisation and AI-driven transport planning",
          "Warehouse automation: robotics, WMS, and pick path optimisation",
          "Last-mile delivery analytics and customer experience metrics",
          "Real-time visibility platforms and IoT integration",
        ],
      },
      {
        week: "Day 5",
        title: "Implementation, Ethics & Case Studies",
        topics: [
          "Building a roadmap for AI adoption in your supply chain",
          "Change management and workforce implications of AI implementation",
          "Data ethics, privacy, and responsible AI in supply chain contexts",
          "Case studies and participant project presentations",
        ],
      },
    ],
    whoFor: [
      "Supply chain managers and operations directors seeking digital capability",
      "Procurement and logistics professionals wanting to work with data",
      "IT and digital transformation leads supporting supply chain functions",
      "Analysts and planners in manufacturing, retail, or distribution environments",
      "Consultants advising on supply chain technology and transformation",
    ],
    whoNot: [
      "Data scientists or AI engineers seeking a technical coding programme",
      "Professionals with no connection to supply chain, logistics, or operations",
    ],
    outcomes: [
      "Certificate of Completion from a QCTO-accredited provider",
      "CPD points recognised by relevant professional bodies",
      "AI adoption roadmap template and analytics toolkit",
      "Access to SkillHub's professional network across Africa",
      "Post-programme support and resource library",
    ],
    faqs: [
      { q: "Do I need a technical background to attend?", a: "No. This programme is designed for supply chain professionals, not data scientists. Concepts are explained in practical, business-focused terms with no coding required." },
      { q: "Is this programme accredited?", a: "Yes. SkillHub International is a QCTO-accredited provider. Participants receive a formal certificate and CPD points upon completion." },
      { q: "Can SETA funding be used?", a: "Yes. We provide all documentation required for SETA and employer bursary applications." },
      { q: "Is in-house delivery available?", a: "Yes. We can customise and deliver this programme for your organisation. Contact hello@skillhub.africa to discuss." },
      { q: "How do I enrol?", a: "Email hello@skillhub.africa or click Reserve Your Seat above. Our team will respond within one business day." },
    ],
  },
};