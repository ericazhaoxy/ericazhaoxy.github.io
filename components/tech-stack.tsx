import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const techStack = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "R"].sort(),
  },
  {
    title: "Front-End / Mobile",
    items: [
      "CSS",
      "HTML",
      "JavaScript",
      "jQuery",
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Vue",
    ].sort(),
  },
  {
    title: "Back-End Frameworks",
    items: [
      "Azure Functions",
      "Django",
      "FastAPI",
      "Flask",
      "GraphQL",
      "Java Spring",
      "Node.js / Express",
      "OpenAPI",
      "REST",
    ].sort(),
  },
  {
    title: "Data & Storage",
    items: [
      "Azure SQL",
      "Azure Storage",
      "DynamoDB",
      "MongoDB",
      "MySQL",
      "Neo4j",
      "Oracle",
      "PostgreSQL",
      "Redis",
      "SQL",
    ].sort(),
  },
  {
    title: "AI Stacks",
    items: [
      "Anthropic Claude",
      "Azure ML",
      "Azure OpenAI",
      "Copilot",
      "Deepseek",
      "DALL-E",
      "Gemini",
      "GitHub Copilot",
      "Gradio",
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "Llama Index",
      "MCP (Anthropic)",
      "Mistral AI",
      "OpenAI",
      "Qwen",
    ].sort(),
  },
  {
    title: "ML Frameworks",
    items: [
      "Keras",
      "NumPy",
      "OpenCV",
      "OpenML",
      "Pandas",
      "PyTorch",
      "Scikit-learn",
      "SciPy",
      "TensorFlow",
      "Transformers",
      "XGBoost",
    ].sort(),
  },
  {
    title: "DevOps & IaC",
    items: [
      "Azure DevOps",
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
      "Kubernetes",
    ].sort(),
  },
  {
    title: "Cloud & Hosting",
    items: [
      "AWS",
      "GCP",
      "Microsoft Azure",
      "Render",
      "Vercel",
      "VMWare Tanzu",
    ].sort(),
  },
  {
    title: "BI & Visualization",
    items: [
      "Tableau",
      "Power BI",
      "Plotly",
      "Dash",
      "Figma",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
    ].sort(),
  },
  {
    title: "Dev Tools",
    items: ["Git", "GitHub Copilot", "Prettier", "PyTest", "VSCode"].sort(),
  },
];

// Color map by card index for consistent, modern badge style
const cardColors = [
  "border-blue-400 text-blue-300",
  "border-teal-400 text-teal-300",
  "border-purple-400 text-purple-300",
  "border-pink-400 text-pink-300",
  "border-yellow-400 text-yellow-300",
  "border-green-400 text-green-300",
  "border-orange-400 text-orange-300",
  "border-indigo-400 text-indigo-300",
  "border-red-400 text-red-300",
  "border-cyan-400 text-cyan-300",
  "border-fuchsia-400 text-fuchsia-300",
  "border-emerald-400 text-emerald-300",
  "border-sky-400 text-sky-300",
];

export default function TechStack() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const handleResize = () => setIsMobile(mq.matches);
    handleResize();
    mq.addEventListener("change", handleResize);
    return () => mq.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {techStack.map((card, cardIdx) => {
        const expanded = !isMobile || openIdx === cardIdx;
        return (
          <Card key={card.title} className="p-6 flex flex-col h-full">
            <button
              type="button"
              className={`text-lg font-semibold text-balance flex justify-between items-center w-full sm:cursor-default sm:pointer-events-none focus:outline-none ${
                expanded ? "mb-4" : ""
              }`}
              onClick={() =>
                isMobile
                  ? setOpenIdx(openIdx === cardIdx ? null : cardIdx)
                  : undefined
              }
              aria-expanded={expanded}
              aria-controls={`card-content-${cardIdx}`}
            >
              {card.title}
              <span className="sm:hidden ml-2">{expanded ? "▲" : "▼"}</span>
            </button>
            <div
              id={`card-content-${cardIdx}`}
              className={`transition-all duration-200 ${
                expanded
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              } sm:max-h-full sm:opacity-100 sm:overflow-visible flex flex-wrap gap-2`}
            >
              {card.items.map((item) => (
                <span
                  key={item}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap border transition-colors
      bg-white text-gray-900 ${cardColors[cardIdx % cardColors.length]}
      dark:bg-black/30 dark:text-inherit dark:${
        cardColors[cardIdx % cardColors.length]
      }
      dark:backdrop-blur-sm
    `}
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  );
}

// Placeholder sections below the tech stack grid
export function PortfolioPlaceholders() {
  return (
    <div className="mt-12 space-y-10">
      <section>
        <h2 className="text-xl font-bold mb-2">Career Timeline</h2>
        <p className="text-muted-foreground">
          Coming soon: a visual timeline of my career journey, roles, and key
          milestones.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Speaking Engagements</h2>
        <p className="text-muted-foreground">
          Talks, workshops, and panels at conferences and meetups will be listed
          here.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold mb-2">Blogs Published</h2>
        <p className="text-muted-foreground">
          A curated list of my published blog posts and articles is coming soon.
        </p>
      </section>
    </div>
  );
}
