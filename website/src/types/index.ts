export type ToolCategory =
  | "llm-api"
  | "ide"
  | "cli"
  | "local-model"
  | "rag"
  | "agent"
  | "speech"
  | "image"
  | "video"
  | "vector-db"
  | "hosting"
  | "evaluation"
  | "embedding"
  | "automation"
  | "browser"
  | "chat-platform";

export type PricingType = "free" | "freemium" | "paid" | "open-source";

export type DeploymentType = "api" | "local" | "hybrid";

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  shortDescription: string;
  website: string;
  github?: string;
  docs?: string;
  logo?: string;
  
  // Pricing & Limits
  pricing: {
    type: PricingType;
    freeTier?: string;
    paidTier?: string;
    creditCardRequired: boolean;
  };
  
  // Models & Capabilities
  models?: string[];
  swrBenchScore?: number;
  
  // Usage Limits
  limits?: {
    requestsPerDay?: number;
    requestsPerMonth?: number;
    requestsPerHour?: number;
    tokensPerDay?: number;
    tokensPerMonth?: number;
    rateLimitPerMinute?: number;
    rateLimitPerHour?: number;
    credits?: string;
  };
  
  // Properties
  tags: string[];
  deployment: DeploymentType;
  openSource: boolean;
  
  // Details
  features?: string[];
  pros?: string[];
  cons?: string[];
  useCases?: string[];
  
  // Comparison
  strengths?: string[];
  limitations?: string[];
  
  // Related
  relatedTools?: string[];
  
  // Metadata
  featured?: boolean;
  verified?: boolean;
  addedDate?: string;
}

export interface Category {
  id: ToolCategory;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  toolCount: number;
  featured: boolean;
}

export interface Stack {
  id: string;
  name: string;
  description: string;
  useCase: string;
  cost: string;
  layers: StackLayer[];
  tags: string[];
  featured: boolean;
}

export interface StackLayer {
  name: string;
  tool: string;
  toolId?: string;
  reason: string;
}

export interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

export interface FilterGroup {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface SearchResult {
  type: "tool" | "category" | "stack";
  item: Tool | Category | Stack;
  relevance: number;
}
