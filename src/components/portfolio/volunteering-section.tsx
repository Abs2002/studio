import Section from '@/components/section';
import type { VolunteeringItem } from '@/types/portfolio';
import { HeartHandshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Institutelogo1 from '@/images/googlemapslogo.jpeg';
import Institutelogo2 from '@/images/brainlylogo.jpeg';

const volunteeringHistory: VolunteeringItem[] = [
  {
    id: 'volun1',
    title: 'Local Guide Level 8',
    organization: 'Google Maps Local Guide Program',
    period: '2016 - Present',
    responsibilities: 'Done more than 6500+ successful contributions and gained 19+ million views',
    organizationLogo:Institutelogo1.src,
  },
  {
    id: 'volun2',
    title: 'Answering questions ',
    organization: 'Brainly',
    period: '2022- Present',
    responsibilities: 'Current Rank : Ambitious, Providing meaningful and to the point answers to the questions', 
    organizationLogo:Institutelogo2.src,
  },
];

export default function VolunteeringSection() {
  return (
    <Section id="volunteering" title="Volunteering" icon={HeartHandshake} className="bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        {volunteeringHistory.map((volun) => (
          <Card key={volun.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{volun.title}</CardTitle>
                  <CardDescription className="text-md text-foreground/80">
                    {volun.organization} &bull; {volun.period}
                  </CardDescription>
                </div>
                {volun.organizationLogo && (
                    <Image 
                      src={volun.organizationLogo} 
                      alt={`${volun.organization} logo`} 
                      width={80} 
                      height={80} 
                      className="rounded-sm"
                      data-ai-hint="organization logo"
                    />
                  )}
              </div>
            </CardHeader>
            {volun.responsibilities && (
              <CardContent>
                <p className="text-foreground/90">{volun.responsibilities}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}