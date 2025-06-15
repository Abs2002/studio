import Section from '@/components/section';
import Image from 'next/image';
import { UserRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutSection() {
  const bio = "Hello! I'm a passionate and dedicated professional with a knack for creating innovative solutions. My journey in tech has been driven by a relentless curiosity and a desire to make a tangible impact. I thrive in collaborative environments and am always eager to learn new skills and take on challenging projects. When I'm not coding, you can find me exploring new hiking trails or engrossed in a good book.";
  const personalDetails = [
    { label: "Name", value: "Alex Persona" },
    { label: "Location", value: "San Francisco, CA" },
    { label: "Email", value: "alex.persona@example.com" },
    { label: "Phone", value: "(123) 456-7890" },
  ];


  return (
    <Section id="about" title="About Me" icon={UserRound} className="bg-background">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Alex Persona"
            width={300}
            height={300}
            className="rounded-full shadow-xl border-4 border-accent object-cover"
            data-ai-hint="portrait professional"
          />
        </div>
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">A Glimpse Into My World</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {bio}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map(detail => (
                  <div key={detail.label} className="text-foreground/90">
                    <span className="font-semibold text-primary">{detail.label}: </span>
                    {detail.value}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
