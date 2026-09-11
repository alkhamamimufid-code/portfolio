export const person = {
  name: "Mufid Alkhamami",
  role: "Business Intelligence Developer · Power BI & Microsoft Power Platform · Reporting Automation",
  location: "Abu Dhabi, UAE",
  email: "alkhamami.mufid@gmail.com",
  phone: "+971 55 814 5658",
  whatsapp: "https://wa.me/971558145658",
  linkedin: "https://www.linkedin.com/in/mufid-alkhamami/",
  cvPath: "/cv/Mufid-Alkhamami-Data-Analyst.pdf",
  tagline: "Engineering Insights, Automation Impact.",
  objective:
    "Business Intelligence developer and System Analyst specializing in enterprise Power BI delivery, semantic model performance, reporting automation, and financial data reconciliation. I'm the sole Power BI specialist within a Microsoft Power Platform team at ADNOC, owning 50+ dashboards for eight departments on a Microsoft Fabric lakehouse alongside SQL, SharePoint, Web API, and Excel sources. I build the capability the platform doesn't ship with — automated report distribution, multi-million-row extracts — and engineer models that hold at scale, including a reconciliation solution that replaced a month-long manual cycle and a 30M-row model tuned from four minutes to eight seconds.",
};

export const stats = [
  { value: "50+", label: "Power BI dashboards shipped" },
  { value: "30x", label: "faster reporting — 4 min to 8 sec" },
  { value: "15M", label: "rows unlocked past the export limit" },
  { value: "54", label: "certificates & honors" },
];

export interface FeaturedSkill {
  name: string;
  icon: string;
}

export const featuredSkills: FeaturedSkill[] = [
  { name: "Power BI", icon: "powerbi" },
  { name: "Microsoft Fabric", icon: "fabric" },
  { name: "DAX", icon: "dax" },
  { name: "SQL", icon: "sql" },
  { name: "Python", icon: "python" },
  { name: "Power Automate", icon: "powerautomate" },
  { name: "Power Apps", icon: "powerapps" },
];

export interface Experience {
  company: string;
  website: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  certificate?: { label: string; href: string };
  highlights: string[];
}

export const experience: Experience[] = [
  {
    company: "ADNOC Group",
    website: "https://www.adnoc.ae/",
    role: "System Analyst",
    location: "Abu Dhabi, UAE · On-site",
    period: "Nov 2025 — Present",
    logo: "/logos/adnoc.png",
    highlights: [
      "Own the Power BI function as the sole Power BI specialist within a Microsoft Power Platform team, managing 50+ enterprise dashboards used by eight departments — Treasury, Finance, Credit Risk, Operations, Shipping, Procurement, Research, and Executive Management — sourced from a Microsoft Fabric lakehouse, SQL databases, SharePoint lists, Web APIs, and Excel, and covering connectivity, scheduled refreshes, troubleshooting, and enhancements.",
      "Replaced a month-long manual reconciliation cycle that occupied a team of five with an hourly-refreshing Power BI reconciliation dashboard, allowing a single user to identify and correct discrepancies across enterprise systems continuously instead of in a monthly batch — strengthening financial reporting accuracy and internal controls.",
      "Rebuilt the semantic model behind a 30M+ row reconciliation dashboard after identifying it as the performance bottleneck, cutting page load time from four minutes to eight seconds and making the report usable for day-to-day financial reporting rather than periodic review.",
      "Developed a Power Automate export solution that works around Power BI's standard export row limitation, enabling business users to extract datasets of up to 15 million rows and giving them direct access to large-volume data that was previously unavailable through the platform.",
      "Built a self-service Power Automate and Power BI reporting flow for the Human Capital team that generates weekly employee attendance PDF reports — looping through the employee set selected in the report, compiling weekly totals per row, and emailing the completed pack back to the user who triggered it. In weekly production use by the Human Capital team.",
      "Built 30+ automations using Power Automate, Power Apps, Microsoft Forms, and SharePoint — covering insurance requests, approval tracking, task management, incident reporting, and license renewal monitoring — including AI-driven flows that read incoming emails and extract required fields automatically, eliminating manual data entry at intake.",
      "Designed and implemented Row-Level Security (RLS) and manage workspace access for business-critical dashboards, ensuring sensitive data is visible only to authorized users and access remains compliant.",
      "Gather requirements directly from business stakeholders and design BI solutions end to end — building semantic models, dataflows, DAX measures, and incremental refresh policies through to visualization and rollout — and extend business logic and measures as rules change so reported figures stay consistent with source systems.",
      "Resolve production issues, refresh failures, data quality problems, and integration challenges across the reporting estate, protecting the availability and reliability of enterprise reporting platforms.",
      "Commended by the Treasury team lead, the Shipping and Operations manager, and stakeholders across other departments for solutions that overcame platform limitations and improved access to business reporting.",
    ],
  },
  {
    company: "Unity Partners",
    website: "https://www.unitypartners.ae/",
    role: "Data Analyst",
    location: "Dubai, UAE · On-site",
    period: "Oct 2024 — Oct 2025",
    logo: "/logos/unity-partners.png",
    highlights: [
      "Designed and deployed executive Power BI dashboards spanning sales, marketing, operations, and finance, replacing 65+ hours of manual reporting per month with self-serve reporting for leadership.",
      "Analyzed CRM lead-handling data and surfaced a one-hour gap between lead capture and sales-coordinator follow-up; presented the finding and a corrective process to leadership, which was adopted ahead of a 15% rise in sales.",
      "Built ETL pipelines in Python and SQL to extract, clean, and load data from Zoho CRM and internal systems, and restructured the CRM data model to remove the inconsistencies undermining reporting reliability.",
      "Built a client submission tracker giving delivery teams and clients a shared view of project status, reducing project delays and raising the client satisfaction score by 45%.",
      "Defined business KPIs with department stakeholders and ran internal training that drove dashboard adoption across teams.",
    ],
  },
  {
    company: "Lemonilab",
    website: "https://lemonilab.com/en",
    role: "Data Analyst",
    location: "Damascus, Syria · On-site",
    period: "Feb 2023 — Oct 2024",
    logo: "/logos/lemonilab.png",
    certificate: {
      label: "Certificate of Employment",
      href: "/documents/Mufid-Alkhamami-Lemonilab-Certificate.pdf",
    },
    highlights: [
      "Led the data cleaning, migration, and dashboard build for the Hamdan Bin Rashid Al Maktoum Foundation, consolidating legacy records in SQL and Python and delivering the Power BI reporting layer on top of them.",
      "Built Power BI dashboards exposing employee performance and workflow bottlenecks to operational managers; team productivity rose 17% over the following period.",
      "Developed forecasting and machine learning models with the sales team to predict service pricing ranges, cutting two days from the contracting cycle.",
      "Delivered Power BI analytics for external clients across the USA, Monaco, and the UAE, supporting strategic planning and feasibility analysis for new service lines.",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  highlight: string;
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor of Information Technology",
    school: "International University for Science and Technology",
    location: "Damascus, Syria",
    period: "Oct 2019 — Feb 2024",
    highlight:
      "Developed a Power BI dashboard automating exam-conflict detection with the Dean of IT, and presented it to the University Owner and senior leadership; the solution replaced a paper-based process with real-time conflict detection and removed over two weeks of manual work for students and administrative staff.",
  },
];

export interface Project {
  title: string;
  period: string;
  company: string;
  impact: string;
  description: string;
}

export const projects: Project[] = [
  {
    title: "Reconciliation Dashboard Rebuild",
    period: "2026",
    company: "ADNOC",
    impact: "30x faster — 4 min → 8 sec",
    description:
      "Identified a 30M+ row semantic model as the performance bottleneck behind a reconciliation dashboard and rebuilt it, cutting page load time from four minutes to eight seconds and making it usable for day-to-day financial reporting.",
  },
  {
    title: "Enterprise Reconciliation Automation",
    period: "2026",
    company: "ADNOC",
    impact: "Month-long cycle → Live",
    description:
      "Replaced a month-long manual reconciliation cycle that occupied a team of five with an hourly-refreshing Power BI dashboard, letting a single user catch discrepancies across enterprise systems continuously instead of in a monthly batch.",
  },
  {
    title: "Power BI Row-Limit Workaround",
    period: "2026",
    company: "ADNOC",
    impact: "15M rows unlocked",
    description:
      "Power BI natively caps visual exports at ~150K rows, with no official Microsoft fix. I engineered a Power Automate solution that reads filtered Power BI data in controlled loops and delivers the complete dataset by email — scaling up to 15 million rows.",
  },
  {
    title: "Automated Vessel Insurance Workflow",
    period: "2026",
    company: "ADNOC",
    impact: "One-hour process to one click",
    description:
      "End-to-end automation for vessel insurance and declaration requests — email-to-SharePoint capture, Excel validation, automated approval routing and centralized tracking — built on an urgent timeline during Strait of Hormuz disruptions.",
  },
  {
    title: "Visa & Business License Expiry Tracker",
    period: "2025",
    company: "UnityPartners",
    impact: "−78% processing time",
    description:
      "Real-time dashboard tracking expired and upcoming visa/license renewals, so the operations team reaches clients before deadlines instead of after.",
  },
  {
    title: "Hiring Pipeline Dashboard",
    period: "2025",
    company: "UnityPartners",
    impact: "Full funnel visibility",
    description:
      "Synced CV submissions with hiring data to visualize open, closed and pending roles by branch and unit.",
  },
  {
    title: "Tahkeem & Gifted Dashboard",
    period: "2024",
    company: "Lemonilab",
    impact: "Sheikh Hamdan Foundation",
    description:
      "Reporting suite visualizing student-project distribution across the year for the Hamdan Bin Rashid Al Maktoum Foundation.",
  },
  {
    title: "CO₂ Emissions Explorer",
    period: "2024",
    company: "My University",
    impact: "Predictive Analytics",
    description:
      "Interactive site analyzing per-country CO₂ emissions against population, with a Power BI layer and a prediction input.",
  },
  {
    title: "Exam Conflict Detector",
    period: "2024",
    company: "My University",
    impact: "2+ weeks saved per term",
    description:
      "Replaced paper-based exam scheduling at university level with a Power BI tool that automatically flags conflicts for the deanship.",
  },
];

export const skillGroups = [
  {
    label: "Business Intelligence",
    skills: [
      "Power BI (Desktop, Service, Gateway)",
      "Microsoft Fabric",
      "DAX",
      "Power Query (M)",
      "Semantic model design",
      "Dataflows",
      "Incremental refresh",
      "Performance tuning (DAX Studio)",
      "Row-Level Security",
      "UI/UX for dashboards (Figma)",
    ],
  },
  {
    label: "Automation & Power Platform",
    skills: [
      "Power Automate",
      "Power Apps",
      "Microsoft Forms",
      "SharePoint",
      "AI-assisted email & document processing",
      "HTML/CSS email templating",
    ],
  },
  {
    label: "Data & Analytics",
    skills: [
      "SQL",
      "Python",
      "ETL / ELT",
      "BigQuery",
      "Data reconciliation & validation",
      "Forecasting & predictive modeling",
      "Excel",
    ],
  },
  {
    label: "Data Sources & Platforms",
    skills: [
      "Microsoft Fabric lakehouse",
      "SQL databases",
      "SharePoint lists",
      "Web API / REST integration",
      "Zoho CRM",
      "Microsoft 365",
      "Enterprise finance systems",
    ],
  },
  {
    label: "Business & Professional",
    skills: [
      "Requirements gathering",
      "Stakeholder management",
      "KPI definition",
      "Data storytelling",
      "User training & adoption",
      "Production support",
    ],
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "Russian", level: "Native" },
  { name: "English", level: "Fluent" },
];

export const leadership = [
  "Grew the Russian Youth in Syria organization from 6 to 100+ active volunteers through outreach and structured recruitment.",
  "Led humanitarian and cultural initiatives — aid projects for nursing homes and orphanages, Ramadan food distribution, Russian cultural events — and volunteer with the UAE national volunteering program.",
];

export interface Testimonial {
  quote: string;
  name?: string;
  role?: string;
}

export const testimonials: Testimonial[] = [
  { quote: "Wow, that was fast. Much faster than I expected." },
  { quote: "This saved us so much manual work. Thank you!" },
  { quote: "You turned a month of work into a few seconds." },
  { quote: "This is exactly what we needed. Great work!" },
  { quote: "Thank you! I honestly didn't expect the dashboard to turn out this well." },
  { quote: "This completely changed the way we look at the data." },
  { quote: "This used to take hours. Now it takes minutes." },
  { quote: "Thank you for fixing this so quickly!" },
];
