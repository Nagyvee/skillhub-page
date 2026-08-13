import {
    Globe,
    Code2,
    GraduationCap,
    ShieldCheck,
    Cloud,
    BarChart3,
    Rocket,
    Megaphone,
    Palette,
    type LucideIcon,
} from "lucide-react"

export interface DigitalAgencyApproachStep {
    title: string
    description: string
}

export interface DigitalAgencyFaq {
    question: string
    answer: string
}

export interface DigitalAgencyService {
    slug: string
    icon: LucideIcon
    title: string
    description: string
    overview: string
    whoItsFor: string
    problems: string[]
    approach: DigitalAgencyApproachStep[]
    benefits: string[]
    items: string[]
    faqs: DigitalAgencyFaq[]
}

export const digitalAgencyServices: DigitalAgencyService[] = [
    {
        slug: "website-design-and-development",
        icon: Globe,
        title: "Website Design and Development",
        description:
            "Modern, responsive, and user-friendly websites that enhance your brand, engage customers, and support your business objectives.",
        overview:
            "Your website is often the first interaction a customer, learner, or partner has with your organisation, so it needs to work as hard as the rest of your business. Our team designs and builds websites that combine clean, modern visual design with genuine usability — fast load times, clear navigation, and layouts that guide visitors toward the action you want them to take, whether that's making an enquiry, registering for a course, or completing a purchase.\n\nEvery project starts with understanding your brand, your audience, and your goals before a single line of code is written. From there we handle the full journey: information architecture, responsive design across desktop and mobile, content integration, and rigorous testing before launch. We build on modern, secure frameworks so your site stays fast and stable as it grows, and we don't disappear once it's live — ongoing maintenance, hosting, and support keep it running smoothly long after launch.",
        whoItsFor:
            "Marketing leads, business owners, and institutions who need a website that actually converts visitors into enquiries, not just one that looks good in a mockup.",
        problems: [
            "Outdated sites that don't work properly on mobile",
            "Slow load times that push visitors away before the page even loads",
            "Content that's a nightmare to update without calling a developer",
            "Sites that look fine but generate zero enquiries",
        ],
        approach: [
            { title: "Discovery & Planning", description: "We map your goals, audience, and content before design starts, so the site is built around outcomes, not guesswork." },
            { title: "Design & Build", description: "Our designers and developers work in parallel, building a responsive, on-brand site with clean, maintainable code." },
            { title: "Launch & Support", description: "We test thoroughly before going live, then stay on for hosting, maintenance, and updates as your needs change." },
        ],
        benefits: [
            "A professional, credible online presence that builds trust with visitors",
            "Faster load times and smoother navigation that keep visitors engaged",
            "Mobile-friendly design that works across every device",
            "Ongoing support so your site stays secure and up to date",
        ],
        items: [
            "Corporate websites",
            "E-commerce websites",
            "Educational institution websites",
            "Government and NGO websites",
            "Landing pages and campaign websites",
            "Website maintenance and support",
            "Website hosting and management",
        ],
        faqs: [
            { question: "How long does a typical website project take?", answer: "Most business websites take 4–8 weeks from kickoff to launch, depending on the number of pages, content readiness, and whether custom functionality is involved. E-commerce and larger institutional sites can take longer." },
            { question: "Will I be able to update the website myself once it's live?", answer: "Yes. We build on content management systems that let your team update text, images, and basic pages without needing a developer for every small change." },
            { question: "Do you offer hosting, or do I need to arrange that separately?", answer: "We offer managed hosting as part of our ongoing support, or we can deploy to hosting you already have in place — whichever suits your setup." },
        ],
    },
    {
        slug: "software-and-application-development",
        icon: Code2,
        title: "Software and Application Development",
        description:
            "Custom software solutions that streamline business processes, improve efficiency, and create exceptional user experiences.",
        overview:
            "Off-the-shelf software can only take an organisation so far — at some point, the gaps between what a generic tool offers and what your business actually needs start costing time and money. We design and build custom software and applications tailored to how your organisation genuinely operates, whether that means automating a manual workflow, replacing a patchwork of spreadsheets with a proper system, or giving your team and customers a dedicated portal to work from.\n\nOur approach covers the full lifecycle: requirements gathering, solution architecture, development, quality assurance, deployment, and post-launch support. We build web and mobile applications that integrate cleanly with the systems you already use through well-designed APIs, so new tools slot into your existing operations rather than fighting against them. The result is software that grows with your organisation instead of becoming another limitation to work around.",
        whoItsFor:
            "Operations leads and founders drowning in spreadsheets, manual processes, or software that almost does what they need.",
        problems: [
            "Manual processes eating hours every week that software could handle",
            "Systems that don't talk to each other, forcing duplicate data entry",
            "Off-the-shelf tools that force your business to work around their limitations",
            "Previous development projects that stalled or shipped half-finished",
        ],
        approach: [
            { title: "Requirements & Architecture", description: "We translate your workflow into a technical plan covering what to build, how it should work, and how it fits your existing systems." },
            { title: "Development & Testing", description: "We build iteratively, with regular check-ins and thorough QA, so there are no surprises at delivery." },
            { title: "Deployment & Support", description: "We deploy carefully, train your team, and stay available for fixes, updates, and future features." },
        ],
        benefits: [
            "Software built around your actual workflows, not a generic template",
            "Reduced manual work through automation of repetitive processes",
            "Seamless integration with the systems you already rely on",
            "A solution that scales as your organisation grows",
        ],
        items: [
            "Custom web applications",
            "Mobile application development",
            "Enterprise software solutions",
            "Customer and employee portals",
            "Workflow automation systems",
            "Membership management platforms",
            "Booking and reservation systems",
            "Database development and integration",
            "API development and systems integration",
        ],
        faqs: [
            { question: "Do you build both web and mobile applications?", answer: "Yes, we build web applications, mobile apps (iOS and Android), and hybrid solutions depending on what fits your users and budget best." },
            { question: "What if our requirements change partway through the project?", answer: "We build iteratively with regular check-ins, so scope changes can usually be absorbed into upcoming sprints rather than derailing the whole project. Larger changes are scoped and agreed before we proceed." },
            { question: "Can you integrate with software we already use?", answer: "Yes. We regularly build integrations with existing CRMs, accounting systems, payment gateways, and other business tools via APIs." },
        ],
    },
    {
        slug: "lms-and-e-learning-solutions",
        icon: GraduationCap,
        title: "Learning Management Systems (LMS) & E-Learning",
        description:
            "As a trusted provider in the learning and development sector, we build digital learning environments that support education, training, and workforce development.",
        overview:
            "Because SkillHub International is itself an active training and skills development provider, we understand learning platforms from both sides — as the people who build them and the people who run programmes on them every day. That perspective shapes every LMS and e-learning solution we deliver: they're designed around how learners, facilitators, and administrators actually use these systems, not just how they look in a demo.\n\nWe design, build, and implement learning management systems and e-learning platforms that support everything from short online courses to full accredited qualifications — course and content management, assessments, certification tracking, virtual classrooms, and reporting on learner progress and outcomes. Whether you need a new LMS built from the ground up, an existing platform customised to your qualifications and compliance requirements, or a cloud-hosted environment that scales with your learner numbers, we deliver systems that make learning easier to manage and easier to measure.",
        whoItsFor:
            "Training providers, corporates, and institutions that need a reliable platform to deliver, track, and certify learning at scale.",
        problems: [
            "Learner records scattered across spreadsheets and email",
            "Manual certificate generation and compliance tracking",
            "Platforms that weren't built with SETA/QCTO reporting in mind",
            "Clunky learner experiences that hurt completion rates",
        ],
        approach: [
            { title: "Learning Needs Assessment", description: "We understand your programmes, compliance requirements, and learner journey before choosing or building a platform." },
            { title: "Platform Build & Configuration", description: "We build or configure your LMS around your courses, assessments, and certification workflows." },
            { title: "Rollout & Ongoing Support", description: "We onboard facilitators and learners, then provide ongoing support as your programme catalogue grows." },
        ],
        benefits: [
            "A learning platform built by people who also run training programmes",
            "Simplified certification, compliance, and learner reporting",
            "Support for everything from short courses to full accredited qualifications",
            "Cloud-hosted flexibility that scales with your learner numbers",
        ],
        items: [
            "LMS design and development",
            "LMS implementation and customisation",
            "E-learning platform development",
            "Online assessment systems",
            "Certification and compliance management",
            "Virtual classroom integration",
            "Learner management and reporting",
            "Digital content hosting solutions",
        ],
        faqs: [
            { question: "Can the LMS handle SETA/QCTO reporting requirements?", answer: "Yes, we design LMS platforms with compliance and certification tracking in mind, including the reporting structures accredited training providers need." },
            { question: "Do you build a new LMS or can you customise an existing platform?", answer: "Both. We can build a fully custom LMS from scratch, or configure and extend an existing platform to match your qualifications and workflows." },
            { question: "Can learners access the platform on mobile devices?", answer: "Yes, our LMS builds are responsive and tested across desktop, tablet, and mobile so learners can study from whatever device they have available." },
        ],
    },
    {
        slug: "cybersecurity-solutions",
        icon: ShieldCheck,
        title: "Cybersecurity Solutions",
        description:
            "Protect your organisation's digital assets with comprehensive cybersecurity services designed to reduce risks and strengthen resilience.",
        overview:
            "Cyber threats don't discriminate by organisation size, and the cost of a breach — financial, reputational, and operational — almost always outweighs the cost of prevention. We help organisations understand where their real vulnerabilities lie and close those gaps before they become incidents, rather than reacting after the damage is done.\n\nOur cybersecurity services span the full spectrum of protection: risk and vulnerability assessments, penetration testing, and compliance-focused security audits that identify weaknesses in your systems and processes; data protection, network security, and endpoint protection that guard your infrastructure day to day; and identity and access management that controls who can reach what. Because technology alone can't stop every threat, we also build human resilience through security awareness training for your staff, and organisational resilience through incident response and business continuity planning — so if something does go wrong, your team already knows exactly what to do.",
        whoItsFor:
            "Organisations handling sensitive data, financial transactions, or compliance obligations who can't afford to treat security as an afterthought.",
        problems: [
            "No clear picture of where your actual vulnerabilities are",
            "Security policies that exist on paper but aren't followed in practice",
            "Staff who are the weakest link because no one has trained them",
            "No plan for what happens in the first hour after a breach",
        ],
        approach: [
            { title: "Assessment", description: "We run risk assessments, vulnerability scans, and penetration tests to find real gaps before attackers do." },
            { title: "Remediation", description: "We implement the technical and procedural fixes needed, from access controls to network hardening." },
            { title: "Ongoing Protection", description: "We provide staff training, monitoring, and incident response planning so protection doesn't stop at go-live." },
        ],
        benefits: [
            "Fewer vulnerabilities through proactive risk and penetration testing",
            "Stronger data protection and regulatory compliance",
            "A prepared team through security awareness training",
            "Faster, calmer recovery when an incident does occur",
        ],
        items: [
            "Cybersecurity risk assessments",
            "Vulnerability assessments",
            "Penetration testing",
            "Security audits and compliance reviews",
            "Data protection and privacy solutions",
            "Network security solutions",
            "Endpoint protection",
            "Identity and access management",
            "Security awareness training",
            "Incident response planning",
            "Business continuity and disaster recovery planning",
        ],
        faqs: [
            { question: "How often should we run a vulnerability assessment?", answer: "We generally recommend at least annually, or after any significant change to your systems, network, or infrastructure — more frequently for organisations handling sensitive data." },
            { question: "Do you help with compliance requirements like POPIA?", answer: "Yes, our data protection and security audit services are designed to help you meet regulatory obligations such as POPIA, alongside general best-practice security standards." },
            { question: "What happens if you find a serious vulnerability during an assessment?", answer: "We flag critical findings immediately rather than waiting for the final report, and can assist with remediation directly so the gap doesn't stay open longer than necessary." },
        ],
    },
    {
        slug: "cloud-services-and-infrastructure",
        icon: Cloud,
        title: "Cloud Services and Infrastructure",
        description:
            "Leverage the power of cloud technology to improve scalability, accessibility, security, and operational efficiency.",
        overview:
            "Moving to the cloud isn't just about where your data lives — done right, it changes how flexibly your organisation can operate, how quickly you can scale, and how resilient you are when something goes wrong. We help organisations plan and execute that move with a clear strategy rather than a rushed migration, so the infrastructure you end up with actually fits how your business works.\n\nFrom initial cloud strategy and consulting through to migration, deployment, and ongoing management, we cover the full journey. That includes hosting applications and LMS platforms in the cloud, setting up reliable data backup and disaster recovery, and building in the security controls that cloud environments demand. For organisations adapting to distributed or remote teams, we also implement the collaboration and remote-work infrastructure that keeps everyone connected and productive — all backed by managed cloud services so your systems keep running smoothly without you needing an in-house team to babysit them.",
        whoItsFor:
            "IT leads and business owners looking to move off ageing on-premise infrastructure or get more value from the cloud they're already paying for.",
        problems: [
            "On-premise servers that are expensive, fragile, and hard to scale",
            "A cloud migration that stalled halfway or blew the budget",
            "No real backup or disaster recovery plan if something fails",
            "Cloud costs that keep climbing with no one watching them",
        ],
        approach: [
            { title: "Cloud Strategy", description: "We assess your current infrastructure and design a migration plan that fits your budget and risk tolerance." },
            { title: "Migration & Deployment", description: "We move your systems and data with minimal disruption, testing thoroughly at every stage." },
            { title: "Managed Support", description: "We monitor, back up, and optimise your cloud environment on an ongoing basis." },
        ],
        benefits: [
            "Lower infrastructure costs through right-sized cloud resources",
            "Improved uptime, reliability, and disaster recovery",
            "Easier collaboration for distributed and remote teams",
            "Reduced burden on your team through managed cloud services",
        ],
        items: [
            "Cloud strategy and consulting",
            "Cloud migration services",
            "Cloud infrastructure deployment",
            "Cloud-hosted applications",
            "Cloud-hosted LMS platforms",
            "Data backup and recovery solutions",
            "Managed cloud services",
            "Cloud security implementation",
            "Remote work and collaboration solutions",
        ],
        faqs: [
            { question: "Which cloud providers do you work with?", answer: "We work across major providers including AWS, Microsoft Azure, and Google Cloud, and recommend whichever best fits your budget, compliance needs, and existing tools." },
            { question: "Will there be downtime during migration?", answer: "We plan migrations to minimise disruption, often running systems in parallel and switching over during low-traffic periods so downtime is kept as short as possible." },
            { question: "Do you provide ongoing monitoring after migration?", answer: "Yes, our managed cloud services include ongoing monitoring, backups, and optimisation so your environment stays reliable after go-live." },
        ],
    },
    {
        slug: "data-analytics-and-business-intelligence",
        icon: BarChart3,
        title: "Data Analytics and Business Intelligence",
        description:
            "Transform data into valuable insights that drive informed decision-making and business performance.",
        overview:
            "Most organisations aren't short on data — they're short on a clear view of what that data is actually telling them. We turn scattered numbers and disconnected systems into insight your leadership team can act on, whether that's understanding customer behaviour, tracking operational performance, or measuring learner and training outcomes.\n\nWe build business intelligence solutions, interactive dashboards, and reporting tools that put the right information in front of the right people at the right time, along with data visualisation that makes complex trends easy to understand at a glance. Where it adds value, we also develop predictive analytics to help you anticipate what's coming rather than just reporting on what already happened. Underpinning all of this is proper data management and governance, so the insights you're basing decisions on are accurate, consistent, and trustworthy — and so KPI reporting becomes a routine part of how your organisation runs, not a special project every quarter.",
        whoItsFor:
            "Leadership teams making decisions on gut feel because their data lives in five different systems that don't talk to each other.",
        problems: [
            "Reports that take days to compile and are outdated by the time they're done",
            "Data spread across systems with no single source of truth",
            "No visibility into what's actually driving performance",
            "Decisions made on instinct instead of evidence",
        ],
        approach: [
            { title: "Data Audit", description: "We map your data sources and identify what's usable, what's missing, and what needs cleaning." },
            { title: "Dashboard & Pipeline Build", description: "We build the reporting infrastructure and dashboards that turn raw data into answers." },
            { title: "Insight & Iteration", description: "We refine what we've built based on how your team actually uses it, and extend it as new questions come up." },
        ],
        benefits: [
            "Faster, more confident decision-making backed by real data",
            "Clear visibility into performance through dashboards and reporting",
            "Early warning on trends through predictive analytics",
            "Consistent, trustworthy data through proper governance",
        ],
        items: [
            "Business intelligence solutions",
            "Interactive dashboards and reporting",
            "Data visualisation",
            "Performance monitoring systems",
            "Predictive analytics",
            "Market and customer insights",
            "Operational analytics",
            "Learning and training analytics",
            "KPI development and reporting",
            "Data management and governance",
        ],
        faqs: [
            { question: "What data sources can you work with?", answer: "We can pull from spreadsheets, databases, CRMs, LMS platforms, financial systems, and most other structured data sources your organisation already uses." },
            { question: "Do we need clean data before you can start?", answer: "Not necessarily — data cleaning and preparation is often part of the project itself. We assess what you have and build a plan to get it into a usable state." },
            { question: "How do we access the dashboards once they're built?", answer: "Dashboards are typically web-based and accessible to your team via login, with permissions set so the right people see the right data." },
        ],
    },
    {
        slug: "digital-transformation-consulting",
        icon: Rocket,
        title: "Digital Transformation Consulting",
        description:
            "We help organisations embrace innovation and adapt to changing business environments through technology-driven transformation.",
        overview:
            "Digital transformation is easy to talk about and hard to execute — most organisations know they need to modernise but aren't sure where to start or how far to go. We work alongside your leadership team to build a clear, practical roadmap that connects technology decisions to actual business outcomes, rather than adopting new tools for their own sake.\n\nThat starts with an honest assessment of your current digital maturity: where processes are manual, where systems don't talk to each other, and where outdated ways of working are quietly costing you time and money. From there we help design transformation strategies and technology roadmaps, streamline and automate business processes, integrate the systems you rely on, and provide the change management support that determines whether a transformation initiative actually sticks or quietly fades once the consultants leave. Our advisory work is grounded in delivery — because we also build the software, cloud infrastructure, and platforms behind these transformations, our recommendations stay realistic about what's achievable.",
        whoItsFor:
            "Executive teams who know they need to modernise but don't have a clear, realistic plan for how to get there.",
        problems: [
            "Digital initiatives that stall because there's no clear roadmap",
            "Legacy processes nobody wants to touch because they 'work'",
            "New tools adopted without anyone asking if they solve a real problem",
            "Transformation projects that lose momentum after the initial excitement",
        ],
        approach: [
            { title: "Digital Maturity Assessment", description: "We assess where your organisation stands today across people, process, and technology." },
            { title: "Roadmap Development", description: "We build a phased, realistic transformation plan tied to measurable business outcomes." },
            { title: "Implementation Support", description: "We help execute the roadmap, with change management support so it actually sticks." },
        ],
        benefits: [
            "A practical roadmap instead of technology adopted for its own sake",
            "Streamlined processes that reduce wasted time and effort",
            "Better-integrated systems across the organisation",
            "Change management support that makes transformation actually stick",
        ],
        items: [
            "Digital transformation strategies",
            "Technology roadmaps",
            "Business process optimisation",
            "Workflow automation",
            "Systems integration",
            "Innovation advisory services",
            "Change management support",
            "Digital maturity assessments",
        ],
        faqs: [
            { question: "Do you only advise, or do you also implement?", answer: "Both. Because we also build software, cloud infrastructure, and digital platforms, we can carry a transformation roadmap through to actual implementation rather than handing it off." },
            { question: "How long does a digital maturity assessment take?", answer: "A typical assessment takes 2–4 weeks, depending on the size of your organisation and how many departments and systems are involved." },
            { question: "Is this only for large organisations?", answer: "No, we work with organisations of varying sizes. The scope and pace of transformation is tailored to what's realistic and valuable for your specific context." },
        ],
    },
    {
        slug: "digital-marketing-and-social-media",
        icon: Megaphone,
        title: "Digital Marketing and Social Media Management",
        description:
            "We help organisations increase visibility, engage audiences, generate leads, and grow their brands through effective digital marketing strategies.",
        overview:
            "Having a great product, service, or training programme doesn't count for much if the right audience never finds out about it. We build digital marketing strategies that get organisations in front of the people who matter to them — customers, learners, partners, or donors — and then turn that attention into real engagement and enquiries.\n\nOur work spans the channels that actually move the needle: social media strategy, content, and community management to build an ongoing presence; search engine optimisation and search engine marketing to make sure you show up when people are actively looking; content marketing and email marketing to nurture relationships over time rather than relying on one-off campaigns; and targeted digital advertising across platforms like Facebook, Instagram, LinkedIn, and YouTube. Every campaign is built around measurable outcomes, so you always know what's working, what isn't, and where your marketing budget is actually delivering a return.",
        whoItsFor:
            "Marketing leads and business owners who are active on social media and search but aren't seeing it convert into real enquiries.",
        problems: [
            "Social media posting that isn't tied to any real strategy or goal",
            "Ad spend going out without a clear return on investment",
            "A website ranking nowhere for the searches that actually matter",
            "Email lists that go untouched for months at a time",
        ],
        approach: [
            { title: "Strategy & Audit", description: "We assess your current channels, audience, and competitors to build a strategy tied to real goals." },
            { title: "Content & Campaign Execution", description: "We create and run the content, SEO, and advertising campaigns that reach your audience." },
            { title: "Measurement & Optimisation", description: "We track performance against your goals and continually refine what's working." },
        ],
        benefits: [
            "Increased visibility with the audiences that matter to you",
            "More qualified leads and enquiries from targeted campaigns",
            "Stronger, more consistent brand presence across channels",
            "Clear, measurable return on your marketing spend",
        ],
        items: [
            "Social media strategy development",
            "Content creation and management",
            "Community engagement",
            "Social media advertising and campaign management",
            "Audience growth strategies",
            "Search Engine Optimisation (SEO): audits, keyword research, on-page and technical SEO, local SEO",
            "Search Engine Marketing (SEM): Google Ads, PPC, display advertising, remarketing",
            "Content marketing: website content, blog writing, newsletters, video and multimedia",
            "Email marketing: campaign development, automation, lead nurturing, customer engagement",
            "Digital advertising: Facebook, Instagram, LinkedIn, YouTube, and multi-platform campaigns",
        ],
        faqs: [
            { question: "How soon can we expect to see results?", answer: "Paid campaigns can show results within days, while organic efforts like SEO and content marketing typically take a few months to build momentum. We set expectations clearly at the start of every engagement." },
            { question: "Do you manage our advertising budget for us?", answer: "Yes, we can manage ad spend across platforms like Google, Facebook, Instagram, and LinkedIn, with transparent reporting on where your budget is going and what it's returning." },
            { question: "Can you work with our existing social media accounts?", answer: "Yes, we can take over and build on your existing accounts, or set up new ones as part of a broader strategy." },
        ],
    },
    {
        slug: "creative-design-and-branding",
        icon: Palette,
        title: "Creative Design and Branding",
        description:
            "We create memorable brands and digital experiences that connect organisations with their audiences.",
        overview:
            "Strong branding isn't just about looking polished — it's about being instantly recognisable and consistently trusted across every touchpoint a person has with your organisation, from your logo and website to a printed brochure or a social media post. We help organisations build that consistency from the ground up, or refresh it when it's started to feel dated or disconnected from where the business is heading.\n\nOur creative work covers logo design and full corporate identity development, underpinned by a clear brand strategy that defines how your organisation looks, sounds, and feels across every channel. From there we extend that identity into everything your audience actually sees: graphic design and marketing collateral, UI/UX design for digital products, and infographics and presentation design that make complex information easy to communicate. The goal in every project is the same — a brand that people recognise, remember, and trust.",
        whoItsFor:
            "Organisations whose branding no longer matches where the business is today, or never had a proper identity to begin with.",
        problems: [
            "A logo and identity that looks inconsistent across different platforms",
            "Marketing materials that don't feel like they belong to the same brand",
            "A brand that doesn't reflect the quality of the actual work being done",
            "No clear brand guidelines, so every new piece of content looks different",
        ],
        approach: [
            { title: "Brand Discovery", description: "We explore your organisation's values, audience, and positioning to define what your brand should stand for." },
            { title: "Identity Design", description: "We design the logo, visual identity, and brand guidelines that bring that positioning to life." },
            { title: "Rollout & Application", description: "We apply the new identity across your website, marketing materials, and digital presence." },
        ],
        benefits: [
            "A consistent, recognisable brand across every touchpoint",
            "Professional visual identity that builds credibility",
            "Marketing materials that communicate clearly and consistently",
            "A brand people remember and trust",
        ],
        items: [
            "Logo design",
            "Corporate identity development",
            "Brand strategy",
            "Graphic design",
            "UI/UX design",
            "Marketing collateral design",
            "Infographics and presentations",
            "Digital media design",
        ],
        faqs: [
            { question: "Do you provide brand guidelines we can use ourselves?", answer: "Yes, every identity project includes a set of brand guidelines covering logo usage, colours, typography, and tone, so your team can apply the brand consistently going forward." },
            { question: "Can you refresh an existing brand rather than starting from scratch?", answer: "Yes, we regularly work on brand refreshes that modernise an existing identity while keeping the recognition you've already built." },
            { question: "What file formats will we receive for our logo and assets?", answer: "You'll receive your logo and key assets in the full range of formats needed for print and digital use, including vector formats for future scaling." },
        ],
    },
]

export function getDigitalAgencyServiceBySlug(slug: string) {
    return digitalAgencyServices.find((service) => service.slug === slug)
}
