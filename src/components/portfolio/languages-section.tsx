import Section from '@/components/section';
import type { LanguageItem } from '@/types/portfolio';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Speech } from 'lucide-react';

const languageSkills: LanguageItem[] = [
  {
    id: 'lang1',
    name: 'English',
    proficiency: 'Bilingual',
  },
  {
    id: 'lang2',
    name: 'Hindi',
    proficiency: 'Bilingual',
  },
  {
    id: 'lang3',
    name: 'Spanish',
    proficiency: 'Intermediate',
  },
  {
    id: 'lang4',
    name: 'Russian',
    proficiency: 'Beginner',
  },
  {
    id: 'lang5',
    name: 'Morse Code',
    proficiency: 'Beginner',
  },
  {
    id: 'lang6',
    name: 'Indian Sign Language',
    proficiency: 'Intermediate',
  },
];

const proficiencyMap: Record<LanguageItem['proficiency'], number> = {
  'Beginner': 25,
  'Intermediate': 50,
  'Advanced': 75,
  'Bilingual': 100,
};

export default function LanguagesSection() {
  return (
    <Section id="languages" title="Languages" icon={Speech} className="bg-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {languageSkills.map((language) => (
          <Card key={language.id} className="shadow-md">
            <CardHeader>
              <h3 className="text-lg font-semibold">{language.name}</h3>
            </CardHeader>
            <CardContent>
              <Progress value={proficiencyMap[language.proficiency]} className="w-full" />
              <p className="text-sm text-muted-foreground mt-2">{language.proficiency}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
/*

*/