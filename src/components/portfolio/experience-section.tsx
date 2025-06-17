import Section from '@/components/section';
import type { ExperienceItem } from '@/types/portfolio';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Companylogo1 from '@/images/publicislogo.png';
import Companylogo2 from '@/images/blacksociety.png';

const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    title: 'Infrastructure Admin Intern',
    company: 'Publicis Re:Sources',
    period: 'Jul 2024 - Aug 2024',
    responsibilities: [
      'Assisted and comprehended in infrastructure administration, implementing cybersecurity best practices and conducting audits.',
      ' Leverage Microsoft SCCM for system management and reporting.',
      'Managed Microsoft Azure, ensuring compliance with security policy guidelines',
    ],
    companyLogo:Companylogo1.src,
  },
  {
    id: 'exp2',
    title: 'Content Management Lead and Mentor',
    company: 'Blacksociety',
    period: 'Jun 2023 - Jun 2024',
    responsibilities: [
      "Led content generation for social media and articles, enhancing the club's digital presence.",
      'Organized study sessions and mentored team members to build their skills.',
    ],
    companyLogo:Companylogo2.src,
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Experience" icon={Briefcase} className="bg-muted/50">
      <div className="space-y-8">
        {experiences.map((exp) => (
          <Card key={exp.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{exp.title}</CardTitle>
                  <CardDescription className="text-md text-foreground/80">
                    {exp.company} &bull; {exp.period}
                  </CardDescription>
                </div>
                {exp.companyLogo && (
                  <Image 
                    src={exp.companyLogo} 
                    alt={`${exp.company} logo`} 
                    width={80} 
                    height={80} 
                    className="rounded-sm"
                    data-ai-hint="company logo"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
