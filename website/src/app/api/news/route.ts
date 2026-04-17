import { NextResponse } from "next/server";

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  url: string;
}


async function fetchIssuePage(url: string): Promise<{ title: string; excerpt: string } | null> {
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) return null;

    const html = await response.text();

    // Try to find the main content area - look for article or main tags
    const mainContentMatch = html.match(/<(?:article|main)[^>]*>([\s\S]*?)<\/(?:article|main)>/i);
    const content = mainContentMatch ? mainContentMatch[1] : html;

    // Try multiple patterns for title, but skip navigation titles
    let title: string | null = null;
    const titlePatterns = [
      /<h1[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)<\/h1>/i,
      /<h1[^>]*>([^<]+)<\/h1>/i,
      /<h2[^>]*class="[^"]*title[^"]*"[^>]*>([^<]+)<\/h2>/i,
    ];

    for (const pattern of titlePatterns) {
      const match = content.match(pattern);
      if (match) {
        const potentialTitle = match[1].trim();
        // Skip navigation/common titles
        if (!potentialTitle.includes("Search") && !potentialTitle.includes("Back") && 
            !potentialTitle.includes("Skip") && potentialTitle.length >= 10) {
          title = potentialTitle;
          break;
        }
      }
    }

    // Fallback: try to find title from <title> tag and clean it
    if (!title) {
      const titleTagMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleTagMatch) {
        title = titleTagMatch[1].trim().replace(/\|.*$/, "").trim();
      }
    }

    // Try to find excerpt from content paragraphs
    let excerpt = "";
    const pMatches = content.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
    if (pMatches) {
      let introSkipped = false;
      for (const p of pMatches) {
        const text = p.replace(/<[^>]+>/g, "").trim();
        
        // Skip intro/summary paragraphs
        if (text.includes("Subscribe") || 
            text.includes("Newsletter") ||
            text.includes("Back to issues") ||
            text.includes("Skip to Main") ||
            text.includes("Search") ||
            text.includes("rss") ||
            text.includes("Cmd+K") ||
            text.includes("We checked") ||
            text.includes("subreddits") ||
            text.includes("Twitters") ||
            text.includes("Discords") ||
            text.startsWith("AI News for") ||
            text.includes("AINews' website") ||
            text.includes("Latent Space") ||
            text.includes("opt in/out") ||
            text.length < 30) {
          continue;
        }

        // Skip the first paragraph after intro (likely a header/summary)
        if (!introSkipped) {
          introSkipped = true;
          continue;
        }

        // Look for paragraphs that contain actual news content
        // News paragraphs typically have: company names, technical terms, or specific actions
        const newsKeywords = /OpenAI|Anthropic|Google|Meta|Microsoft|Amazon|Claude|GPT|LLM|model|AI|agent|released|launched|announced|introduced|unveiled/i;
        if (newsKeywords.test(text) && 
            text.length > 50 && 
            text.split(' ').length > 10) {
          const firstSentence = text.split(/[.!?]/)[0];
          excerpt = firstSentence.trim() + (text.includes('.') ? '.' : '');
          break;
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
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const html = await response.text();
    console.log("Fetched HTML length:", html.length);
    
    const newsItems: NewsItem[] = [];

    // Try multiple regex patterns
    const patterns = [
      /https:\/\/news\.smol\.ai\/issues\/([^\s\)"']+)/g,
      /news\.smol\.ai\/issues\/([a-z0-9\-]+)/gi,
      /href="\/issues\/([^"]+)"/g,
    ];

    const urls: { url: string; date: string }[] = [];
    const seenUrls = new Set();

    for (const pattern of patterns) {
      let match;
      while ((match = pattern.exec(html)) !== null && urls.length < 10) {
        const urlPath = match[1];
        const url = `https://news.smol.ai/issues/${urlPath}`;

        if (seenUrls.has(url)) continue;
        seenUrls.add(url);

        // Try to extract date from URL
        const dateMatch = urlPath.match(/(\d{2})-(\d{2})-(\d{2})/);
        let date: string;
        if (dateMatch) {
          const year = `20${dateMatch[1]}`;
          const month = dateMatch[2];
          const day = dateMatch[3];
          date = `${year}-${month}-${day}`;
        } else {
          // Fallback to current date
          date = new Date().toISOString().split('T')[0];
        }

        urls.push({ url, date });
      }
      if (urls.length > 0) break;
    }

    console.log("Found URLs:", urls.length);

    if (urls.length === 0) {
      return [];
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

    console.log("Fetched news items:", newsItems.length);

    if (newsItems.length > 0) {
      return newsItems.slice(0, 5);
    }

    return [];
  } catch (error) {
    console.error("Error fetching news from smol.ai:", error);
    return [];
  }
}

export async function GET() {
  const news = await fetchNewsFromSmolAI();
  return NextResponse.json({ news });
}