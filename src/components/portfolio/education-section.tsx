import Section from '@/components/section';
import type { EducationItem } from '@/types/portfolio';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const educationHistory: EducationItem[] = [
  {
    id: 'edu1',
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2016 - 2018',
    description: 'Focused on Artificial Intelligence and Machine Learning. Thesis on NLP.',
  },
  {
    id: 'edu2',
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of California, Berkeley',
    period: '2012 - 2016',
    description: 'Graduated with Honors. Capstone project on mobile application development.',
  },
];

export default function EducationSection() {
  return (
    <Section id="education" title="Education" icon={GraduationCap} className="bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        {educationHistory.map((edu) => (
          <Card key={edu.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-xl md:text-2xl text-primary">{edu.degree}</CardTitle>
              <CardDescription className="text-md text-foreground/80">
                {edu.institution} &bull; {edu.period}
              </CardDescription>
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
