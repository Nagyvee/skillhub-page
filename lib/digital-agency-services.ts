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

export interface DigitalAgencyService {
    slug: string
    icon: LucideIcon
    title: string
    description: string
    overview: string
    benefits: string[]
    items: string[]
    
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
        items: [
            "Corporate websites",
            "E-commerce websites",
            "Educational institution websites",
            "Government and NGO websites",
            "Landing pages and campaign websites",
            "Website maintenance and support",
            "Website hosting and management",
        ],
        // website-design-and-development
benefits: [
    "A professional, credible online presence that builds trust with visitors",
    "Faster load times and smoother navigation that keep visitors engaged",
    "Mobile-friendly design that works across every device",
    "Ongoing support so your site stays secure and up to date",
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
        // software-and-application-development
benefits: [
    "Software built around your actual workflows, not a generic template",
    "Reduced manual work through automation of repetitive processes",
    "Seamless integration with the systems you already rely on",
    "A solution that scales as your organisation grows",
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
        // lms-and-e-learning-solutions
benefits: [
    "A learning platform built by people who also run training programmes",
    "Simplified certification, compliance, and learner reporting",
    "Support for everything from short courses to full accredited qualifications",
    "Cloud-hosted flexibility that scales with your learner numbers",
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
        // cybersecurity-solutions
benefits: [
    "Fewer vulnerabilities through proactive risk and penetration testing",
    "Stronger data protection and regulatory compliance",
    "A prepared team through security awareness training",
    "Faster, calmer recovery when an incident does occur",
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
        // cloud-services-and-infrastructure
benefits: [
    "Lower infrastructure costs through right-sized cloud resources",
    "Improved uptime, reliability, and disaster recovery",
    "Easier collaboration for distributed and remote teams",
    "Reduced burden on your team through managed cloud services",
],
    },
    {
        slug: "data-analytics-and-business-intelligence",
        icon: BarChart3,
        title: "Data Analytics and Business Intelligence",
        description:"Transform data into valuable insights that drive informed decision-making and business performance.",
        overview:"Most organisations aren't short on data — they're short on a clear view of what that data is actually telling them. We turn scattered numbers and disconnected systems into insight your leadership team can act on, whether that's understanding customer behaviour, tracking operational performance, or measuring learner and training outcomes.\n\nWe build business intelligence solutions, interactive dashboards, and reporting tools that put the right information in front of the right people at the right time, along with data visualisation that makes complex trends easy to understand at a glance. Where it adds value, we also develop predictive analytics to help you anticipate what's coming rather than just reporting on what already happened. Underpinning all of this is proper data management and governance, so the insights you're basing decisions on are accurate, consistent, and trustworthy — and so KPI reporting becomes a routine part of how your organisation runs, not a special project every quarter.",
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
        // data-analytics-and-business-intelligence
benefits: [
    "Faster, more confident decision-making backed by real data",
    "Clear visibility into performance through dashboards and reporting",
    "Early warning on trends through predictive analytics",
    "Consistent, trustworthy data through proper governance",
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
        // digital-transformation-consulting
benefits: [
    "A practical roadmap instead of technology adopted for its own sake",
    "Streamlined processes that reduce wasted time and effort",
    "Better-integrated systems across the organisation",
    "Change management support that makes transformation actually stick",
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
        // digital-marketing-and-social-media
benefits: [
    "Increased visibility with the audiences that matter to you",
    "More qualified leads and enquiries from targeted campaigns",
    "Stronger, more consistent brand presence across channels",
    "Clear, measurable return on your marketing spend",
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
        // creative-design-and-branding
benefits: [
    "A consistent, recognisable brand across every touchpoint",
    "Professional visual identity that builds credibility",
    "Marketing materials that communicate clearly and consistently",
    "A brand people remember and trust",
],
    },
]

export function getDigitalAgencyServiceBySlug(slug: string) {
    return digitalAgencyServices.find((service) => service.slug === slug)
}

export interface DigitalAgencyProcessStep {
    title: string
    description: string
}

// Our general approach, shown on every service page since it applies
// regardless of which service is being delivered.
export const digitalAgencyProcess: DigitalAgencyProcessStep[] = [
    {
        title: "Discover",
        description:
            "We start by understanding your organisation, your goals, and the challenge you're trying to solve, so the solution fits your reality rather than a generic template.",
    },
    {
        title: "Design & Plan",
        description:
            "We map out the approach, scope, and timeline, translating your requirements into a clear plan before any development begins.",
    },
    {
        title: "Build & Implement",
        description:
            "Our team develops, tests, and refines the solution, keeping you informed and involved at every stage of delivery.",
    },
    {
        title: "Launch & Support",
        description:
            "We deploy the finished solution and stay engaged afterwards with ongoing support, maintenance, and optimisation as your needs evolve.",
    },
]