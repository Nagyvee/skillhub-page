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
};