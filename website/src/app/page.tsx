import { Hero } from "@/components/hero";
import { PopularCategories } from "@/components/popular-categories";
import { HowItsMade } from "@/components/how-its-made";
import { FeaturedTools } from "@/components/featured-tools";
import { FeaturedStacks } from "@/components/featured-stacks";
import { NewsSection } from "@/components/news-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <PopularCategories />
      <HowItsMade />
      <FeaturedTools />
      <FeaturedStacks />
      <NewsSection />
    </div>
  );
}

