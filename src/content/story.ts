import type { IconName } from "../components/Icons";

// Every figure below is taken from the CV / existing site copy. Figures that
// only exist on the site (not the CV) are marked "site-only" so they can be
// double-checked before being quoted elsewhere.

export const positioning =
  "System Analyst delivering enterprise BI, data analytics, and process automation across oil & gas, consulting, and technology environments.";

export const pillars: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "chart",
    title: "Enterprise BI",
    text: "Power BI reporting, semantic models and performance tuning that hold at scale.",
  },
  {
    icon: "workflow",
    title: "Process automation",
    text: "Power Automate, Power Apps and SharePoint workflows that remove manual steps.",
  },
  {
    icon: "database",
    title: "Data & reconciliation",
    text: "SQL, Python and ETL/ELT that keep numbers consistent across systems.",
  },
];

/* ---------- by the numbers ---------- */

export const departments = [
  "Treasury",
  "Finance",
  "Credit Risk",
  "Operations",
  "Shipping",
  "Procurement",
  "Research",
  "Executive Management",
];

export const dataSources = [
  "Microsoft Fabric lakehouse",
  "SQL databases",
  "SharePoint lists",
  "Web APIs",
  "Excel",
];

// Two remaining metrics get a dedicated animated visual instead of a plain
// tile (see RowsMotion / SatisfactionMotion in ByTheNumbers.tsx). Everything
// else that used to live here is now shown as one of the three before/after
// panels below, so nothing is lost — just shown once, as a visual instead of
// a duplicate number.
export const rowsMetric = {
  icon: "database" as IconName,
  value: 15,
  suffix: "M+",
  label: "rows exported past the native limit",
  detail: "Power Automate workaround for Power BI's ~150K-row export cap",
  cap: 150_000,
  delivered: 15_000_000,
};

export const satisfactionMetric = {
  icon: "chart" as IconName,
  value: 45,
  suffix: "%",
  label: "higher client satisfaction score",
  detail: "Client submission tracker at Unity Partners",
};

/* ---------- what I build ---------- */

export interface CapabilityNode {
  label: string;
  use: string;
  icon: IconName;
}

export interface Capability {
  id: string;
  title: string;
  subtitle: string;
  icon: IconName;
  nodes: CapabilityNode[];
}

export const capabilities: Capability[] = [
  {
    id: "powerbi",
    title: "Power BI",
    subtitle: "Reporting layer",
    icon: "chart",
    nodes: [
      { label: "Data modeling", icon: "nodes", use: "Semantic models behind 50+ enterprise dashboards, tuned for large datasets." },
      { label: "DAX", icon: "code", use: "Measures kept consistent with source systems as business rules change." },
      { label: "Power Query", icon: "filter", use: "Shaping SQL, SharePoint, Web API and Excel data into the model." },
      { label: "Row-level security", icon: "lock", use: "Sensitive dashboard data visible only to authorized users." },
      { label: "Semantic models", icon: "layers", use: "Rebuilt a 30M+ row model: page load from ~4 minutes to 8 seconds." },
      { label: "Dashboards", icon: "monitor", use: "50+ dashboards used by eight departments, incl. Treasury, Finance and Credit Risk." },
      { label: "Scheduled refresh", icon: "refresh", use: "Refresh schedules, incremental refresh and refresh-failure troubleshooting." },
    ],
  },
  {
    id: "powerautomate",
    title: "Power Automate",
    subtitle: "Workflow layer",
    icon: "workflow",
    nodes: [
      { label: "Approvals", icon: "check", use: "Approval routing and tracking for insurance and declaration requests." },
      { label: "Notifications", icon: "bell", use: "Automated alerts with HTML/CSS email templates." },
      { label: "PDF generation", icon: "pdf", use: "Weekly attendance PDF packs emailed back to the requesting Human Capital user." },
      { label: "Email automation", icon: "mail", use: "AI-assisted flows that read incoming emails and extract the required fields." },
      { label: "SharePoint integration", icon: "list", use: "SharePoint lists as the capture and tracking layer for workflows." },
      { label: "Business workflows", icon: "workflow", use: "30+ automations: insurance requests, task management, incident reporting, license renewals." },
    ],
  },
  {
    id: "data",
    title: "Data",
    subtitle: "Foundation layer",
    icon: "database",
    nodes: [
      { label: "SQL", icon: "database", use: "SQL databases as dashboard sources; extraction and cleaning." },
      { label: "Python", icon: "code", use: "ETL pipelines, data migration and forecasting models." },
      { label: "ETL / ELT", icon: "refresh", use: "Pipelines from Zoho CRM and internal systems into reporting." },
      { label: "Data cleaning", icon: "filter", use: "Legacy records consolidated and migrated for the Hamdan Bin Rashid Al Maktoum Foundation." },
      { label: "Reconciliation", icon: "check", use: "An hourly-refreshing dashboard replacing a month-long manual cycle." },
      { label: "APIs", icon: "api", use: "Web API / REST integration as a reporting data source." },
    ],
  },
];

export const platform: CapabilityNode[] = [
  { label: "Power Apps", icon: "form", use: "App front-ends inside the 30+ automation solutions." },
  { label: "Power Automate", icon: "workflow", use: "Extends what Power BI can't do natively — e.g. 15M-row exports." },
  { label: "SharePoint", icon: "list", use: "Lists and libraries for capture, tracking and hand-offs." },
  { label: "Forms", icon: "form", use: "Structured intake at the start of request workflows." },
  { label: "Power BI", icon: "chart", use: "The reporting layer that ties the platform together." },
];

/* ---------- data ecosystem ---------- */

export interface FlowNode {
  icon: IconName;
  title: string;
  sub: string;
  detail: string;
}

export interface Flow {
  id: string;
  title: string;
  caption: string;
  nodes: FlowNode[];
}

export const flows: Flow[] = [
  {
    id: "reporting",
    title: "Reporting pipeline",
    caption: "From source systems to the people who make decisions",
    nodes: [
      {
        icon: "database",
        title: "Source systems",
        sub: "Finance · SQL · SharePoint · APIs · Excel",
        detail:
          "Connecting to the data where it lives: enterprise finance systems, SQL databases, SharePoint lists, Web APIs and Excel.",
      },
      {
        icon: "layers",
        title: "Microsoft Fabric",
        sub: "Lakehouse",
        detail: "A Fabric lakehouse feeds the reporting estate alongside the other sources.",
      },
      {
        icon: "filter",
        title: "Power Query",
        sub: "Dataflows",
        detail: "Transformation and dataflows that clean and shape raw data before it reaches the model.",
      },
      {
        icon: "nodes",
        title: "Semantic model",
        sub: "DAX · RLS · Incremental refresh",
        detail:
          "Where performance and trust are decided: DAX measures, row-level security and incremental refresh policies.",
      },
      {
        icon: "monitor",
        title: "Power BI",
        sub: "50+ dashboards",
        detail: "Enterprise dashboards with scheduled refresh, connectivity and access management.",
      },
      {
        icon: "building",
        title: "Business users",
        sub: "8 departments",
        detail: "Treasury, Finance, Credit Risk, Operations, Shipping, Procurement, Research and Executive Management.",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation pipeline",
    caption: "From a request to a completed, tracked outcome",
    nodes: [
      {
        icon: "mail",
        title: "Trigger",
        sub: "Email · Change · Schedule",
        detail:
          "A flow starts: an incoming email, a change in a source (e.g. a new Form response or list item), or a scheduled time.",
      },
      {
        icon: "workflow",
        title: "Power Automate",
        sub: "Logic + AI-assisted parsing",
        detail: "Flows validate input and, for emails, extract the required fields automatically — no manual data entry at intake.",
      },
      {
        icon: "list",
        title: "SharePoint",
        sub: "Lists & tracking",
        detail: "SharePoint lists hold the request record and its status end to end.",
      },
      {
        icon: "bell",
        title: "Outcomes",
        sub: "Approvals · Notifications · PDF reports",
        detail: "Approval routing, alerts and generated PDF reports delivered to the right people.",
      },
    ],
  },
];

/* ---------- career timeline ---------- */

export interface CareerStage {
  id: string;
  org: string;
  role: string;
  period: string;
  logo: string;
  headline: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  kind: "education" | "work";
}

export const career: CareerStage[] = [
  {
    id: "iust",
    kind: "education",
    org: "IUST",
    role: "B.Sc. Information Technology",
    period: "2019 — 2024",
    logo: "/logos/university.png",
    headline: "Built an exam-conflict detector in Power BI that replaced a paper-based process.",
    metrics: [{ value: "2+ wks", label: "manual work removed" }],
    tech: ["Power BI"],
  },
  {
    id: "lemonilab",
    kind: "work",
    org: "Lemonilab",
    role: "Data Analyst",
    period: "Feb 2023 — Oct 2024",
    logo: "/logos/lemonilab.png",
    headline: "Cleaned, migrated and reported on client data — including forecasting models for pricing.",
    metrics: [
      { value: "17%", label: "team productivity rise" },
      { value: "2 days", label: "cut from the contracting cycle" },
    ],
    tech: ["Power BI", "SQL", "Python", "Forecasting / ML"],
  },
  {
    id: "unity",
    kind: "work",
    org: "Unity Partners",
    role: "Data Analyst",
    period: "Oct 2024 — Oct 2025",
    logo: "/logos/unity-partners.png",
    headline: "Replaced manual reporting with self-serve executive dashboards and ETL pipelines.",
    metrics: [
      { value: "65+ hrs", label: "manual reporting / month replaced" },
      { value: "45%", label: "client satisfaction score gain" },
    ],
    tech: ["Power BI", "Python", "SQL", "Zoho CRM", "ETL"],
  },
  {
    id: "adnoc",
    kind: "work",
    org: "ADNOC",
    role: "System Analyst",
    period: "Nov 2025 — Present",
    logo: "/logos/adnoc.png",
    headline: "Sole Power BI specialist in a Power Platform team — owning enterprise BI and automation.",
    metrics: [
      { value: "50+", label: "dashboards owned" },
      { value: "8", label: "departments supported" },
      { value: "30+", label: "automations built" },
    ],
    tech: ["Power BI", "Microsoft Fabric", "DAX", "Power Automate", "Power Apps", "SQL", "SharePoint", "RLS"],
  },
];

/* ---------- case studies ---------- */

export type CaseVisual = "speed" | "reconciliation" | "limit" | "workflow";

export interface CaseStudy {
  id: string;
  title: string;
  visual: CaseVisual;
  problem: string;
  approach: string;
  tech: string[];
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "semantic",
    title: "Semantic model optimization",
    visual: "speed",
    problem: "A 30M+ row reconciliation model meant page loads of roughly four minutes — too slow for day-to-day financial reporting.",
    approach: "Identified the semantic model as the bottleneck and rebuilt it.",
    tech: ["Power BI", "Semantic model design", "DAX"],
    result: "Page load cut from about 4 minutes to 8 seconds — 30× faster and usable every day.",
  },
  {
    id: "reconciliation",
    title: "Automated reconciliation",
    visual: "reconciliation",
    problem: "A month-long manual reconciliation cycle occupied a team of five and surfaced discrepancies only in a monthly batch.",
    approach: "Built an hourly-refreshing Power BI reconciliation dashboard so a single user can find and correct discrepancies continuously.",
    tech: ["Power BI", "Microsoft Fabric", "SQL"],
    result: "Month-long cycle replaced by hourly refresh, run by one user instead of five.",
  },
  {
    id: "limit",
    title: "Beyond the export limit",
    visual: "limit",
    problem: "Power BI caps visual exports at ~150K rows, with no official Microsoft fix.",
    approach: "Engineered a Power Automate flow that reads the filtered Power BI data in controlled loops and emails the complete dataset.",
    tech: ["Power Automate", "Power BI", "Email"],
    result: "Datasets of up to 15 million rows delivered — roughly 100× the native cap.",
  },
  {
    id: "vessel",
    title: "Automated insurance workflow",
    visual: "workflow",
    problem: "Vessel insurance and declaration requests needed an end-to-end automated flow, on an urgent timeline.",
    approach: "Email-to-SharePoint capture, Excel validation, automated approval routing and centralized tracking.",
    tech: ["Power Automate", "SharePoint", "Excel"],
    result: "A one-hour process reduced to one click.",
  },
];
