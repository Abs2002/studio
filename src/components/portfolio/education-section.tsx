import Section from '@/components/section';
import type { EducationItem } from '@/types/portfolio';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Institutelogo1 from '@/images/gbulogo.png';
import Institutelogo2 from '@/images/universal_public_school___india_logo.jpeg';

const educationHistory: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Gautam Buddha University',
    period: '2021 - 2025',
    description: 'Graduated with CPGA 8.48. Focused on Cyber Security and made projects on EDR management and Indian Legal',
    institutionLogo:Institutelogo1.src,
  },
  {
    id: 'edu2',
    degree: 'Class 12',
    institution: 'Universal Public School, Delhi',
    period: '2020 - 2021',
    description: 'CBSE score : 85% PCM with Computer Science. Member of Computer Club. Actively Participated in Activites like Basketball, Chess etc.',
    institutionLogo:Institutelogo2.src,
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education" icon={GraduationCap} className="bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        {educationHistory.map((edu) => (
          <Card key={edu.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{edu.degree}</CardTitle>
                  <CardDescription className="text-md text-foreground/80">
                    {edu.institution} &bull; {edu.period}
                  </CardDescription>
                </div>
                {edu.institutionLogo && (
                    <Image 
                      src={edu.institutionLogo} 
                      alt={`${edu.institution} logo`} 
                      width={80} 
                      height={80} 
                      className="rounded-sm"
                      data-ai-hint="institution logo"
                    />
                  )}
              </div>
            </CardHeader>
            {edu.description && (
              <CardContent>
                <p className="text-foreground/90">{edu.description}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
