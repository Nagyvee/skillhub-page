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
    items: string[]
}

export const digitalAgencyServices: DigitalAgencyService[] = [
    {
        slug: "website-design-and-development",
        icon: Globe,
        title: "Website Design and Development",
        description:
            "Modern, responsive, and user-friendly websites that enhance your brand, engage customers, and support your business objectives.",
        items: [
            "Corporate websites",
            "E-commerce websites",
            "Educational institution websites",
            "Government and NGO websites",
            "Landing pages and campaign websites",
            "Website maintenance and support",
            "Website hosting and management",
        ],
    },
    {
        slug: "software-and-application-development",
        icon: Code2,
        title: "Software and Application Development",
        description:
            "Custom software solutions that streamline business processes, improve efficiency, and create exceptional user experiences.",
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
    },
    {
        slug: "lms-and-e-learning-solutions",
        icon: GraduationCap,
        title: "Learning Management Systems (LMS) & E-Learning",
        description:
            "As a trusted provider in the learning and development sector, we build digital learning environments that support education, training, and workforce development.",
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
    },
    {
        slug: "cybersecurity-solutions",
        icon: ShieldCheck,
        title: "Cybersecurity Solutions",
        description:
            "Protect your organisation's digital assets with comprehensive cybersecurity services designed to reduce risks and strengthen resilience.",
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
    },
    {
        slug: "cloud-services-and-infrastructure",
        icon: Cloud,
        title: "Cloud Services and Infrastructure",
        description:
            "Leverage the power of cloud technology to improve scalability, accessibility, security, and operational efficiency.",
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
    },
    {
        slug: "data-analytics-and-business-intelligence",
        icon: BarChart3,
        title: "Data Analytics and Business Intelligence",
        description:
            "Transform data into valuable insights that drive informed decision-making and business performance.",
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
    },
    {
        slug: "digital-transformation-consulting",
        icon: Rocket,
        title: "Digital Transformation Consulting",
        description:
            "We help organisations embrace innovation and adapt to changing business environments through technology-driven transformation.",
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
    },
    {
        slug: "digital-marketing-and-social-media",
        icon: Megaphone,
        title: "Digital Marketing and Social Media Management",
        description:
            "We help organisations increase visibility, engage audiences, generate leads, and grow their brands through effective digital marketing strategies.",
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
    },
    {
        slug: "creative-design-and-branding",
        icon: Palette,
        title: "Creative Design and Branding",
        description:
            "We create memorable brands and digital experiences that connect organisations with their audiences.",
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
    },
]

export function getDigitalAgencyServiceBySlug(slug: string) {
    return digitalAgencyServices.find((service) => service.slug === slug)
}