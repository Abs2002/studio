import Section from '@/components/section';
import type { PublicationItem } from '@/types/portfolio';
import { ScrollText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
//import Companylogo1 from '@/images/publicislogo.png';
//import Companylogo2 from '@/images/blacksociety.png';

const publications: PublicationItem[] = [
  {
    id: 'pub1',
    title: 'Secure and Privacy-Preserving Identity Framework',
    publisher: 'Zenodo',
    period: 'June 2025',
    description: [
      'This paper proposes a novel, privacy-driven system designed to securely authenticate citizens in public services while minimising sensitive data exposure. ',
      ' It tackles challenges like system integration and scalability, ensuring enhanced privacy and reducing repetitive form-filling for everyone.',
      " It also accommodates the law enforcement's use to actively identify and track people with criminal record.",
    ],
    //companyLogo:Companylogo1.src,
    credentialUrl:'https://zenodo.org/uploads/15597975',
  },
  {
    id: 'pub2',
    title: 'Multiple Articles Published on Medium.com',
    publisher: 'Medium.com',
    period: '2023 - Present',
    description: [
      "Published 10+ articles on website. ",
      'Topics include Cybersecurity, Programming and Walkthroughs',
    ],
    //companyLogo:Companylogo2.src,
    credentialUrl:"https://medium.com/@anirudhbishnoi5",
  },
];

export default function PublicationSection() {
  return (
    <Section id="publication" title="Publications and Research" icon={ScrollText} className="bg-muted/50">
      <div className="space-y-8">
        {publications.map((pub) => (
          <Card key={pub.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{pub.title}</CardTitle>
                  <CardDescription className="text-md text-foreground/80">
                    {pub.publisher} &bull; {pub.period}
                  </CardDescription>
                </div>
                {pub.publisherLogo && (
                  <Image 
                    src={pub.publisherLogo} 
                    alt={`${pub.publisher} logo`} 
                    width={80} 
                    height={80} 
                    className="rounded-sm"
                    data-ai-hint="publisher logo"
                  />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-foreground/90">
                {pub.description.map((descp, index) => (
                  <li key={index}>{descp}</li>
                ))}
              </ul>
              <br></br>
              {pub.credentialUrl && (
                <Button variant="link" size="sm" asChild className="p-0 h-auto self-start text-primary hover:text-primary/80">
                  <Link href={pub.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify credential for ${pub.title}`}>
                    View Document
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}