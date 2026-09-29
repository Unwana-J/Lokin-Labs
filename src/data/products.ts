export interface ProductItem {
  id: string;
  code: string;
  name: string;
  badge: string;
  badgeColor: string;
  isFlagship?: boolean;
  thesis: string;
  description: string;
  techStack: string;
  domain: string;
  status: string;
  statusType: "production" | "live" | "beta";
  liveUrl: string;
  categories: Array<"flagship" | "ai-tools" | "delivery" | "learning">;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: "fey",
    code: "LK-01",
    name: "Fey",
    badge: "★ CROWN PLATFORM",
    badgeColor: "text-terra-crimson",
    isFlagship: true,
    thesis: "Intellectual learning & vocal articulation platform.",
    description:
      "Practice explaining complex ideas under pressure and challenge friends in live parlor games. Converts passive reading into sharp, spoken clarity.",
    techStack: "Next.js · WebRTC · Speech AI · Canvas",
    domain: "Learning & Parlor Games",
    status: "Live in Production",
    statusType: "production",
    liveUrl: "https://fey.lokinlabs.com.ng",
    categories: ["flagship", "learning"],
  },
  {
    id: "creed",
    code: "LK-02",
    name: "Creed",
    badge: "PM CO-PILOT",
    badgeColor: "text-blue-700",
    thesis: "AI-powered meeting intelligence for technical PMs.",
    description:
      "Automated action item extraction, real-time RAID log tracking, Notion sync, and project health diagnostics for software teams.",
    techStack: "Claude 3.5 · Gemini · Notion Sync · Supabase",
    domain: "Delivery Intelligence",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://creed-red.vercel.app/",
    categories: ["ai-tools", "delivery"],
  },
  {
    id: "roost-ai",
    code: "LK-03",
    name: "Roost AI",
    badge: "FINANCIAL PARSER",
    badgeColor: "text-amber-700",
    thesis: "Automated financial data parser and intelligent bookkeeping assistant.",
    description:
      "Auto-categorizes transactions into custom expense categories with instant PDF reporting, spending insights, and receipt audits.",
    techStack: "Google GenAI · Recharts · jsPDF · Next.js",
    domain: "Fintech & Bookkeeping",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://roost-ai.vercel.app/",
    categories: ["ai-tools"],
  },
  {
    id: "vantage",
    code: "LK-04",
    name: "Vantage",
    badge: "EXECUTIVE HUB",
    badgeColor: "text-indigo-700",
    thesis: "Executive performance dashboard and leadership trajectory hub.",
    description:
      "Features an AI-powered coach analyzing leadership patterns, KPI metrics, delivery velocity, and team milestones.",
    techStack: "React · GenAI · Recharts · Tailwind",
    domain: "Executive Leadership",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://vantage-nine-steel.vercel.app/",
    categories: ["ai-tools", "delivery"],
  },
  {
    id: "qore-sd-pis",
    code: "LK-05",
    name: "Qore SD-PIS",
    badge: "DELIVERY TRACKER",
    badgeColor: "text-stone-700",
    thesis: "Strategic Delivery & Project Information System.",
    description:
      "Engineered for portfolio tracking, milestone governance, technical implementation management, and multi-stream delivery oversight.",
    techStack: "React · Vite · Supabase · Tailwind",
    domain: "Project Governance",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://qore-pd.vercel.app/",
    categories: ["delivery"],
  },
  {
    id: "lokin-study",
    code: "LK-06",
    name: "Lokin Study",
    badge: "LEARNING COMPANION",
    badgeColor: "text-teal-700",
    thesis: "Smart study tracker and active recall assistant.",
    description:
      "Tracks active study cycles, subject progress, and personalized knowledge retention using spaced repetition.",
    techStack: "React 19 · Google GenAI · Framer Motion",
    domain: "Learning & Education",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://lokin-study-app.vercel.app/",
    categories: ["learning"],
  },
];
