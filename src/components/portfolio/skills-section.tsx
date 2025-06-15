import Section from '@/components/section';
import type { SkillItem } from '@/types/portfolio';
import SkillBar from '@/components/ui/skill-bar';
import { SquareStack } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData: SkillItem[] = [
  { id: 'skill1', name: 'JavaScript & TypeScript', proficiency: 90 },
  { id: 'skill2', name: 'React & Next.js', proficiency: 85 },
  { id: 'skill3', name: 'Node.js & Express', proficiency: 80 },
  { id: 'skill4', name: 'Python & Django', proficiency: 75 },
  { id: 'skill5', name: 'Database Management (SQL, NoSQL)', proficiency: 88 },
  { id: 'skill6', name: 'Cloud Platforms (AWS, Firebase)', proficiency: 70 },
  { id: 'skill7', name: 'UI/UX Design Principles', proficiency: 65 },
];

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" icon={SquareStack} className="bg-muted/50">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary text-center">My Technical Arsenal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skillsData.map((skill) => (
              <SkillBar key={skill.id} skillName={skill.name} proficiency={skill.proficiency} />
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
