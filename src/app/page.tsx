import AppHeader from '@/components/layout/app-header';
import AppFooter from '@/components/layout/app-footer';
import AboutSection from '@/components/portfolio/about-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import EducationSection from '@/components/portfolio/education-section';
import SkillsSection from '@/components/portfolio/skills-section';
import CertificationsSection from '@/components/portfolio/certifications-section';
import BioGeneratorSection from '@/components/portfolio/bio-generator-section';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <BioGeneratorSection />
      </main>
      <AppFooter />
    </div>
  );
}
