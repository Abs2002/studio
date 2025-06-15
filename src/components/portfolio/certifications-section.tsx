import Section from '@/components/section';
import type { CertificationItem } from '@/types/portfolio';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const certifications: CertificationItem[] = [
  {
    id: 'cert1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuingBody: 'Amazon Web Services',
    date: 'Issued: Mar 2023',
    credentialId: 'XYZ123ABCDEF',
  },
  {
    id: 'cert2',
    name: 'Certified Kubernetes Administrator (CKA)',
    issuingBody: 'The Linux Foundation',
    date: 'Issued: Sep 2022',
    credentialId: 'LFC987ZYXWVU',
  },
  {
    id: 'cert3',
    name: 'Professional Scrum Master I (PSM I)',
    issuingBody: 'Scrum.org',
    date: 'Issued: Jun 2021',
  },
];

export default function CertificationsSection() {
  return (
    <Section id="certifications" title="Certifications" icon={Award} className="bg-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <Card key={cert.id} className="shadow-lg transition-all hover:shadow-xl flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle className="font-headline text-lg md:text-xl text-primary">{cert.name}</CardTitle>
              <CardDescription className="text-sm text-foreground/80">
                {cert.issuingBody}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
              {cert.credentialId && (
                <Button variant="link" size="sm" asChild className="p-0 h-auto self-start text-primary hover:text-primary/80">
                  <Link href="#" target="_blank" rel="noopener noreferrer" aria-label={`Verify credential for ${cert.name}`}>
                    Verify Credential
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
