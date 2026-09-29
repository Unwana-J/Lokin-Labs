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
      "Practice explaining complex ideas under pressure and challenge friends in live parlor debate games. Converts passive consumption into high-stakes verbal synthesis.",
    techStack: "Next.js · WebRTC · Speech AI · Canvas",
    domain: "Cognition & Parlor Play",
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
    thesis: "AI-powered meeting intelligence for elite technical PMs.",
    description:
      "Automated backlog extraction, real-time RAID log tracking, Notion dual-sync, and RAG health diagnostics for high-velocity software engineering teams.",
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
    thesis: "Automated financial data parser and intelligent bookkeeping accountant.",
    description:
      "Auto-categorizes transactions into custom taxonomy cores with instant PDF reporting, spending anomalies, and ledger audits.",
    techStack: "Google GenAI · Recharts · jsPDF · Next.js",
    domain: "Fintech & Automated Ledger",
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
      "Features an AI-powered executive coach analyzing leadership patterns, KPI metrics, delivery velocity, and career trajectory gaps.",
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
      "Engineered for seamless portfolio tracking, milestone governance, technical implementation management, and multi-stream delivery oversight.",
    techStack: "React · Vite · Supabase · Tailwind",
    domain: "Strategic Project Governance",
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
    thesis: "AI-powered study tracker and concept synthesis assistant.",
    description:
      "Tracks active recall cycles, subject mastery curves, and personalized knowledge retention using spaced-repetition cognitive models.",
    techStack: "React 19 · Google GenAI · Framer Motion",
    domain: "Cognitive Retention & Study",
    status: "Live Deployment",
    statusType: "live",
    liveUrl: "https://lokin-study-app.vercel.app/",
    categories: ["learning"],
  },
];
