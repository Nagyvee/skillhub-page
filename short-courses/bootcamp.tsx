export const bootcamps = {
    "provider": {
        "name": "Melsoft",
        "phone": "010 158 4346",
        "email": "hello@melsoft.org",
        "address": "1F, 173 Oxford Rd, Rosebank, Johannesburg",
        "website": "https://melsoft.org"
    },
    "shared": {
        "pricing": {
            "amount": 50000,
            "currency": "ZAR",
            "display": "R50 000",
            "payment_plans": true,
            "financing": {
                "available": true,
                "partners": ["Nedbank", "Manati"]
            }
        },
        "enrollment": {
            "seats_per_cohort": 20,
            "apply_url": "https://melsoft.org"
        },
        "program": {
            "format": "100% Online",
            "self_paced": true,
            "credits_breakdown": null
        },
        "meta": {
            "credits": null,
            "nqf_level": null,
            "saqa_id": null,
            "occupational_certificate": null,
            "level": "Advanced",
            "students": 234
        },
        "accreditation": {
            "body": null,
            "international_equivalent": null
        },
        "badge": {
            "label": "Bootcamp",
            "type": "bootcamp"
        },
        "advantages": [
            {
                "title": "Lifetime access",
                "description": "Stay updated, revisit key concepts, and enjoy a perpetual competitive edge in your field."
            },
            {
                "title": "Practice-based lessons",
                "description": "Hands-on learning designed to provide practical skills and real-world insights."
            },
            {
                "title": "Quarterly updates",
                "description": "Mentors review the course syllabus once per quarter; lifetime access includes all future updates."
            },
            {
                "title": "100% Job Guarantee",
                "description": "Guaranteed placement or internship within 3 months of completion via Melsoft's partner network."
            },
            {
                "title": "1-on-1 Mentorship",
                "description": "Direct access to industry experts providing personalized guidance throughout the program."
            },
            {
                "title": "Portfolio Building",
                "description": "Build a professional portfolio with CV/LinkedIn optimization, mock interviews, and employer connections."
            }
        ]
    },
    "bootcamps": [
        {
            "id": "software-engineering-bootcamp",
            "slug": "software-engineering",
            "url": "https://www.melsoft.org/software-engineering/bootcamp",
            "image": "/asset/se-boot.avif",
            "title": "Software Engineering",
            "tagline": "Intensive, hands-on program aimed at transforming beginners into job-ready full-stack developers.",
            "meta": {
                "lessons": 35,
                "duration": "60 hours, 24 mins"
            },
            "program": {
                "duration": "6 months",
                "delivery": "Asynchronous videos and readings with live mentorship calls and peer collaborations via AI-powered LMS",
                "intensity": "20–40 hours per week"
            },
            "curriculum": [
                {
                    "phase": "Foundation",
                    "period": "Weeks 1–4",
                    "focus_area": "Web Development Fundamentals",
                    "highlights": [
                        "Basics of web development",
                        "Programming fundamentals",
                        "Introduction to front-end technologies"
                    ]
                },
                {
                    "phase": "Core Skills",
                    "period": "Weeks 5–12",
                    "focus_area": "Front-End & Back-End Development",
                    "highlights": [
                        "Deep dive into front-end technologies",
                        "Back-end development and server-side logic",
                        "Hands-on projects and coding challenges",
                        "Version control and collaborative coding"
                    ]
                },
                {
                    "phase": "Advanced Application",
                    "period": "Weeks 13–18",
                    "focus_area": "Full-Stack Integration",
                    "highlights": [
                        "Full-stack integration and architecture",
                        "Data structures, algorithms, and problem-solving",
                        "Debugging and code optimization",
                        "AI prompt engineering for development workflows"
                    ]
                },
                {
                    "phase": "Capstone & Portfolio",
                    "period": "Weeks 19–24",
                    "focus_area": "Real-World Projects & Career Launch",
                    "highlights": [
                        "Real-world project builds and deployment",
                        "Portfolio development and presentation",
                        "CV/LinkedIn optimization and mock interviews",
                        "Access to exclusive job boards and employer connections"
                    ]
                }
            ],
            "skills": [
                { "title": "Full-Stack Development", "description": "Build and deploy complete web applications covering both front-end and back-end." },
                { "title": "Problem Solving", "description": "Apply data structures, algorithms, and debugging techniques to real-world challenges." },
                { "title": "Version Control", "description": "Collaborate effectively using version control and industry-standard coding workflows." },
                { "title": "AI Prompt Engineering", "description": "Leverage AI tools to enhance productivity and stand out in the job market." },
                { "title": "Web Deployment", "description": "Build, test, and deploy production-ready web applications and websites." },
                { "title": "Portfolio & Career Readiness", "description": "Build a professional portfolio with networking, interview prep, and employer connections." }
            ],
            "target_roles": [
                "Software Engineer",
                "Full-Stack Developer",
                "Programmer",
                "Software Tester"
            ],
            "alumni": [
                { "name": "Grace Kipa", "role": "Software Engineer", "company": "Synergy Wellness" },
                { "name": "Lindsey Monyepao", "role": "Software Developer", "company": "ProcureSense" },
                { "name": "Campbell Davies-Webb", "role": "Software Developer", "company": "Linebooker" },
                { "name": "Lehlogonolo Shai", "role": "Software Developer", "company": "ProcureSense" }
            ],
            "ratings": {
                "score": 5.0,
                "out_of": 5,
                "reviews": 24,
                "platform": "SwitchUp"
            },
            "accreditation": {
                "note": "Non-accredited bootcamp. For formal qualification, see the Software Developer (NQF Level 5, SAQA ID: 118707)."
            }
        },
        {
            "id": "ui-ux-design-bootcamp",
            "slug": "ui-ux-design",
            "url": "https://www.melsoft.org/ui-ux-design/bootcamp",
            "image": "/asset/uiux-boot.avif",
            "title": "UI/UX Design",
            "tagline": "Focused, practical program designed to equip beginners with the skills to create user-centered digital experiences.",
            "meta": {
                "lessons": 43,
                "duration": "50 hours, 24 mins"
            },
            "program": {
                "duration": "3 months",
                "delivery": "Asynchronous content with live mentorship sessions, peer reviews, and virtual workshops via AI-powered LMS",
                "intensity": "15–30 hours per week"
            },
            "curriculum": [
                {
                    "phase": "Foundation",
                    "period": "Weeks 1–3",
                    "focus_area": "Design Principles & User Empathy",
                    "highlights": [
                        "User-centered design principles",
                        "Visual hierarchy, color theory, and typography",
                        "Accessibility standards",
                        "Introduction to sketching and basic design tools"
                    ]
                },
                {
                    "phase": "Core Skills",
                    "period": "Weeks 4–7",
                    "focus_area": "User Research & Low-Fidelity Design",
                    "highlights": [
                        "User Research & Empathy (interviews, surveys, personas, empathy mapping)",
                        "Usability testing fundamentals",
                        "Low-fidelity wireframing (paper and digital)",
                        "Collaboration tools (Google Forms, Miro)"
                    ]
                },
                {
                    "phase": "Advanced Application",
                    "period": "Weeks 8–10",
                    "focus_area": "High-Fidelity Prototyping & UI Design",
                    "highlights": [
                        "High-fidelity prototyping and interaction design (Figma, Adobe XD, Sketch)",
                        "Interface layout, responsive design, and iconography",
                        "Animation basics and front-end awareness (HTML/CSS)",
                        "Design Thinking for Innovation and iterative design"
                    ]
                },
                {
                    "phase": "Capstone & Portfolio",
                    "period": "Weeks 11–12",
                    "focus_area": "Final Projects & Career Launch",
                    "highlights": [
                        "Real-world redesign projects (apps or websites)",
                        "AI prompt engineering for design ideation",
                        "Portfolio presentation and iteration",
                        "Agile team collaboration and ethical design"
                    ]
                }
            ],
            "skills": [
                { "title": "UI/UX Design", "description": "Craft intuitive user interfaces and seamless digital experiences." },
                { "title": "User Research", "description": "Conduct comprehensive user research, interviews, and usability testing." },
                { "title": "Wireframing & Prototyping", "description": "Build wireframes and high-fidelity prototypes using Figma, Adobe XD, and Sketch." },
                { "title": "Design Thinking", "description": "Apply ideation and iterative design methodologies to solve complex problems." },
                { "title": "Visual Design", "description": "Apply color theory, typography, and responsive design principles to interfaces." },
                { "title": "AI-Assisted Ideation", "description": "Use AI prompt engineering tools to accelerate and enhance the design process." }
            ],
            "target_roles": [
                "UI/UX Designer",
                "Product Designer",
                "Interaction Designer",
                "Design Thinking Practitioner"
            ],
            "accreditation": {
                "note": "Non-accredited bootcamp. For formal qualification, see the Design Thinking Practitioner (NQF Level 4, SAQA ID: 118705)."
            }
        },
        {
            "id": "cyber-security-bootcamp",
            "slug": "cyber-security",
            "url": "https://www.melsoft.org/cyber-security/bootcamp",
            "image": "/asset/cs-boot.avif",
            "title": "Cyber Security",
            "tagline": "Prepares for roles like Cybersecurity Analyst, Ethical Hacker, or Information Security Consultant.",
            "meta": {
                "lessons": 54,
                "duration": "750 hours, 24 mins"
            },
            "program": {
                "duration": "6 months",
                "delivery": "Asynchronous content with live hacks, mentorship, and team drills via secure LMS with virtual labs",
                "intensity": "20–40 hours per week"
            },
            "curriculum": [
                {
                    "phase": "Foundation",
                    "period": "Weeks 1–4",
                    "focus_area": "Cybersecurity Fundamentals",
                    "highlights": [
                        "Cybersecurity fundamentals and terminology",
                        "Network basics and architecture",
                        "Introduction to security tools"
                    ]
                },
                {
                    "phase": "Core Skills",
                    "period": "Weeks 5–12",
                    "focus_area": "Security Tools & Ethical Hacking",
                    "highlights": [
                        "Network Security (Wireshark, Cisco Packet Tracer, pfSense)",
                        "Ethical Hacking & Penetration Testing (Metasploit, Nmap, Burp Suite)",
                        "Threat Detection & Response (Splunk, ELK Stack, Volatility)",
                        "Cryptography & Access Control (OpenSSL, Hashcat, MFA)"
                    ]
                },
                {
                    "phase": "Advanced Application",
                    "period": "Weeks 13–18",
                    "focus_area": "Incident Response & Compliance",
                    "highlights": [
                        "Incident response planning and malware analysis",
                        "Compliance & Risk Management (GDPR, POPIA, ISO 27001)",
                        "Security audits and risk assessments",
                        "Cloud security basics (AWS/Azure)"
                    ]
                },
                {
                    "phase": "Capstone & Portfolio",
                    "period": "Weeks 19–24",
                    "focus_area": "Real-World Simulations & Career Launch",
                    "highlights": [
                        "End-to-end breach simulations",
                        "AI prompt engineering for security tools and threat intel",
                        "Certification preparation (CompTIA Security+)",
                        "Portfolio of security reports and defenses"
                    ]
                }
            ],
            "skills": [
                { "title": "Network Security", "description": "Secure networks and systems against intrusions using firewalls, VPNs, and IDS." },
                { "title": "Ethical Hacking", "description": "Conduct penetration tests and vulnerability scans using Nmap, Metasploit, and Burp Suite." },
                { "title": "Threat Detection & Response", "description": "Detect threats, analyze malware, and execute incident response using SIEM tools." },
                { "title": "Cryptography & Access Control", "description": "Implement encryption algorithms, PKI, and multi-factor authentication." },
                { "title": "Compliance & Risk Management", "description": "Align security practices with GDPR, POPIA, and ISO 27001 frameworks." },
                { "title": "AI-Assisted Security", "description": "Apply AI prompt engineering and cloud security tools for proactive threat defense." }
            ],
            "target_roles": [
                "Cybersecurity Analyst",
                "Ethical Hacker",
                "Information Security Consultant",
                "Security Operations Analyst",
                "Penetration Tester"
            ],
            "accreditation": {
                "note": "Non-accredited bootcamp. For formal qualification, see the Cybersecurity Analyst (NQF Level 5, SAQA ID: 118986)."
            }
        },
        {
            "id": "data-science-bootcamp",
            "slug": "data-science",
            "url": "https://www.melsoft.org/data-science/bootcamp",
            "image": "/asset/ds-boot.webp",
            "title": "Data Science",
            "tagline": "Intensive, practical program aimed at equipping beginners with the skills to handle the full data science lifecycle.",
            "meta": {
                "lessons": 35,
                "duration": "60 hours, 24 mins"
            },
            "program": {
                "duration": "6 months",
                "delivery": "Asynchronous modules with live sessions, mentorship calls, and group projects via AI-enhanced LMS",
                "intensity": "20–40 hours per week"
            },
            "curriculum": [
                {
                    "phase": "Foundation",
                    "period": "Weeks 1–4",
                    "focus_area": "Data Fundamentals",
                    "highlights": [
                        "Introduction to data science concepts and tools",
                        "Python basics",
                        "Data environment setup"
                    ]
                },
                {
                    "phase": "Core Skills",
                    "period": "Weeks 5–12",
                    "focus_area": "Data Manipulation & Visualisation",
                    "highlights": [
                        "Data Wrangling & Preparation (Python, Pandas, NumPy, SQL)",
                        "Data Visualization & Storytelling (Tableau, Power BI, Matplotlib, Seaborn)",
                        "Exploratory Data Analysis (SciPy, StatsModels)"
                    ]
                },
                {
                    "phase": "Advanced Application",
                    "period": "Weeks 13–18",
                    "focus_area": "Machine Learning & Analytics",
                    "highlights": [
                        "Machine Learning Basics (Scikit-learn, TensorFlow)",
                        "Supervised and unsupervised learning",
                        "Regression, classification, and clustering"
                    ]
                },
                {
                    "phase": "Capstone & Portfolio",
                    "period": "Weeks 19–24",
                    "focus_area": "Real-World Projects & Career Prep",
                    "highlights": [
                        "End-to-end capstone projects",
                        "Full lifecycle: data ingestion to model deployment and reporting",
                        "AI prompt engineering and ethical data use",
                        "Portfolio and career preparation"
                    ]
                }
            ],
            "skills": [
                { "title": "Data Wrangling", "description": "Clean and organize datasets using Python, Pandas, and SQL." },
                { "title": "Data Visualisation", "description": "Create compelling dashboards and reports using Tableau and Power BI." },
                { "title": "Exploratory Analysis", "description": "Uncover patterns and insights using statistical methods and hypothesis testing." },
                { "title": "Machine Learning", "description": "Build and deploy predictive models to solve real-world business problems." },
                { "title": "Data Storytelling", "description": "Communicate data insights effectively to non-technical audiences." },
                { "title": "Ethical AI Integration", "description": "Apply ethical considerations and AI prompt engineering in data workflows." }
            ],
            "target_roles": [
                "Data Scientist",
                "Data Analyst",
                "Business Intelligence Analyst",
                "Data Practitioner"
            ],
            "accreditation": {
                "note": "Non-accredited bootcamp. For formal qualification, see the Data Science Practitioner (NQF Level 5, SAQA ID: 118708)."
            }
        }
    ]
};