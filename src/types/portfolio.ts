export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  institutionLogo?: string; // URL to logo
}

export interface CertificationItem {
  id: string;
  name: string;
  issuingBody: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  credentialLogo?: string; // URL to logo
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

export interface PublicationItem
{
  id: string;
  title: string;
  publisher: string;
  period: string;
  description: string[];
  publisherLogo?: string; // URL to logo
  credentialUrl?: string;
}

export interface ProjectItem
{
  id: string;
  title: string;
  association: string;
  period:string;
  description: string[];
  technologiesused: string[];
}

export interface LanguageItem {
  id: string;
  name: string;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Bilingual';
}


export interface VolunteeringItem
{
  id: string;
  title: string;
  organization: string;
  period: string;
  responsibilities: string;
  organizationLogo?: string; // URL to logo
}

export interface SocialMediaItem {
  id: string;
  name: string;
  url: string;
  icon: string; // This will be the path to the image logo
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ElementType;
}
