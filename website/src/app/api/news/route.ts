import { NextResponse } from "next/server";

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

const fallbackNewsData: NewsItem[] = [
  {
    date: "2026-04-10",
    title: "GLM-5.1 Breaks into the Frontier Tier for Coding",
    excerpt: "GLM-5.1 has reached #3 on Code Arena, surpassing Gemini 3.1 and GPT-5.4, and matching Claude Sonnet 4.6 in coding performance. Z.ai now holds the #1 open model rank close to the top overall.",
    url: "https://news.smol.ai/issues/26-04-10-not-much",
  },
  {
    date: "2026-04-09",
    title: "Anthropic's Mythos and OpenAI's Cyber-Capable Models",
    excerpt: "Anthropic's Mythos and OpenAI's upcoming restricted cyber-capable models are central to recent discussions. LangChain's Deep Agents deploy introduces an open memory, model-agnostic agent harness architecture.",
    url: "https://news.smol.ai/issues/26-04-09-not-much",
  },
  {
    date: "2026-04-08",
    title: "Meta Superintelligence Labs Launches Muse Spark",
    excerpt: "Meta Superintelligence Labs launched Muse Spark, a natively multimodal reasoning model featuring tool use, visual chain of thought, and multi-agent orchestration. Zhipu AI's GLM-5.1 is recognized as a leading open-weight model.",
    url: "https://news.smol.ai/issues/26-04-08-not-much",
  },
  {
    date: "2026-04-07",
    title: "Anthropic @ $30B ARR, Project GlassWing and Claude Mythos Preview",
    excerpt: "Anthropic strategically challenges OpenAI by announcing a jump from $19B ARR in March to $30B ARR in April. The company revealed Claude Mythos, restricted under Project Glasswing due to its dangerous capabilities.",
    url: "https://news.smol.ai/issues/26-04-06-anthropic-mythos",
  },
  {
    date: "2026-04-06",
    title: "Hermes Agent and Open Training-Data Movement",
    excerpt: "Hermes Agent is gaining attention as a leading open agent stack with features like self-improving skills, persistent memory, and a self-improvement loop. An open training-data movement for agents is emerging.",
    url: "https://news.smol.ai/issues/26-04-07-not-much",
  },
];

async function fetchIssuePage(url: string): Promise<{ title: string; excerpt: string } | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return null;

    const html = await response.text();
    const titleMatch = html.match(/<h2[^>]*>([^<]+)<\/h2>/i);
    const title = titleMatch ? titleMatch[1].trim() : null;

    let excerpt = "";
    if (title) {
      const titleIndex = html.indexOf(`<h2>${title}</h2>`) || html.indexOf(`<h2 class="${title}"`);
      const afterTitle = html.substring(html.indexOf(title) + title.length);
      const paragraphMatch = afterTitle.match(/<p>([^<]+<strong>[^<]+<\/strong>[^<]*)<\/p>/i);
      if (paragraphMatch) {
        excerpt = paragraphMatch[1].replace(/<[^>]+>/g, "").trim();
      } else {
        const pMatch = afterTitle.match(/<p>([^<]+)<\/p>/i);
        if (pMatch) {
          excerpt = pMatch[1].replace(/<[^>]+>/g, "").trim();
        }
      }
    }

    if (title) {
      return { title, excerpt };
    }
    return null;
  } catch (error) {
    console.error(`Error fetching issue page ${url}:`, error);
    return null;
  }
}

async function fetchNewsFromSmolAI(): Promise<NewsItem[]> {
  try {
    const response = await fetch("https://news.smol.ai/issues/", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    const newsItems: NewsItem[] = [];

    const issueRegex = /\[Apr\s+(\d+)\s+[^\]]+?\s+Show details\]\(https:\/\/news\.smol\.ai\/issues\/(26-\d{2}-\d{2}-[^\)]+)\)/g;

    let match;
    const currentYear = 2026;
    const urls: { url: string; date: string }[] = [];

    while ((match = issueRegex.exec(html)) !== null && urls.length < 10) {
      const day = match[1].padStart(2, "0");
      const urlPath = match[2];
      const url = `https://news.smol.ai/issues/${urlPath}`;

      const dateMatch = urlPath.match(/26-(\d{2})-(\d{2})/);
      let date: string;
      if (dateMatch) {
        const month = dateMatch[1];
        const dayFromUrl = dateMatch[2];
        date = `${currentYear}-${month}-${dayFromUrl}`;
      } else {
        date = `${currentYear}-04-${day}`;
      }

      if (!urls.some((item) => item.url === url)) {
        urls.push({ url, date });
      }
    }

    const fetchPromises = urls.slice(0, 5).map(async ({ url, date }) => {
      const content = await fetchIssuePage(url);
      return {
        date,
        url,
        title: content?.title || "Untitled",
        excerpt: content?.excerpt || "",
      };
    });

    const results = await Promise.all(fetchPromises);
    newsItems.push(...results.filter((item) => item.title !== "Untitled"));

    if (newsItems.length > 0) {
      return newsItems.slice(0, 5);
    }

    return fallbackNewsData;
  } catch (error) {
    console.error("Error fetching news from smol.ai:", error);
    return fallbackNewsData;
  }
}

export async function GET() {
  const news = await fetchNewsFromSmolAI();
  return NextResponse.json({ news });
}