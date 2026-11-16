export interface Project {
  id: string;
  title: string;
  number: string;
  category: 'Computer Vision' | 'Generative AI & RAG' | 'Cybersecurity' | 'Machine Learning';
  technologies: string[];
  description: string;
  achievement?: string;
  problem: string;
  solution: string;
  architecture: string[];
  metrics: { label: string; value: string }[];
  visualType: 'autorickshaw' | 'rag-audio' | 'lingoleap' | 'phishing';
  githubPlaceholder: string;
  demoPlaceholder?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location?: string;
  type: 'Leadership' | 'Internship' | 'Management';
  highlights: string[];
  skills: string[];
}

export interface SkillItem {
  name: string;
  level: string;
  category: string;
  popular?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  type: 'academic' | 'hackathon' | 'leadership';
  badge: string;
  year: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  skillsCovered: string[];
}

export interface EducationInfo {
  degree: string;
  major: string;
  institution: string;
  location: string;
  cgpa: string;
  honors: string[];
  coursework: string[];
}
