export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  gradient: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "experience" | "education";
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
