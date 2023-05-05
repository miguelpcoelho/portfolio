interface TechStackProps {
  title: "";
  img: "";
}

export interface ExperienceCardProps {
  img: string;
  alt: string;
  jobTitle: string;
  company: string;
  techStack: TechStackProps[];
  date: Date;
  description: string[];
}

export interface SkillIconProps {
  directionLeft?: boolean;
  img: string;
  alt: string;
  profienciency: number;
}
