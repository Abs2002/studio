import Section from '@/components/section';
import type { ExperienceItem } from '@/types/portfolio';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';

const experiences: ExperienceItem[] = [
  {
    id: 'exp1',
    title: 'Senior Software Engineer',
    company: 'Innovatech Solutions',
    period: 'Jan 2021 - Present',
    responsibilities: [
      'Led development of key features for a flagship SaaS product.',
      'Mentored junior engineers and conducted code reviews.',
      'Collaborated with cross-functional teams to define project scope and deliverables.',
      'Optimized application performance, resulting in a 20% reduction in load times.',
    ],
    companyLogo: 'https://placehold.co/40x40.png',
  },
  {
    id: 'exp2',
    title: 'Software Engineer',
    company: 'Tech Startup Inc.',
    period: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Developed and maintained web applications using React and Node.js.',
      'Participated in agile development cycles, including sprint planning and retrospectives.',
      'Contributed to the design and implementation of RESTful APIs.',
    ],
    companyLogo: 'https://placehold.co/40x40.png',
  },
];

export default function ExperienceSection() {
  return (
    <Section id="experience" title="Professional Experience" icon={Briefcase} className="bg-muted/50">
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
                    width={40} 
                    height={40} 
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
