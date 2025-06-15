export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingBody: string;
  date: string;
  credentialId?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  proficiency: number; // 0-100
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  companyLogo?: string; // URL to logo
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}
