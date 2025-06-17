import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import AboutSection from '@/components/portfolio/about-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import EducationSection from '@/components/portfolio/education-section';
import SkillsSection from '@/components/portfolio/skills-section';
import CertificationsSection from '@/components/portfolio/certifications-section';
import PublicationSection from '@/components/portfolio/publication-section';
import ProjectSection from '@/components/portfolio/projects-section';
import VolunteeringSection from '@/components/portfolio/volunteering-section';
import LanguagesSection from '@/components/portfolio/languages-section';
import SocialMediaSection from '@/components/portfolio/social-media-section';
//import ContactSection from '@/components/portfolio/contact-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <AboutSection />
        <ExperienceSection />
        <CertificationsSection />
        <EducationSection />
        <PublicationSection />
        <SkillsSection />
        <ProjectSection />
        <VolunteeringSection />
        <LanguagesSection />
        <SocialMediaSection />
      </main>
      <AppFooter />
    </div>
  );
}
