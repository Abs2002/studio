"use client";
import { useState } from 'react';
import Section from '@/components/section';
import type { CertificationItem } from '@/types/portfolio';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Credentiallogo1 from '@/images/comptialogo.png';
import Credentiallogo2 from '@/images/Coursera-Logo.png';
import Credentiallogo3 from '@/images/googlecloudskillsboostlogo.jpeg';
import Credentiallogo4 from '@/images/endorlabs_logo.jpeg';
import Credentiallogo5 from '@/images/nptellogo.jpeg'
import Credentiallogo6 from '@/images/ciscologo.jpeg';

const certifications: CertificationItem[] = [
  {
    id: 'cert1',
    name: 'Comptia Security+ (SYO-701)',
    issuingBody: 'Comptia',
    date: 'Issued: May 2025',
    credentialId: 'XYZ123ABCDEF',
    credentialUrl: 'https://drive.google.com/file/d/1Xr7HmvyG4nfNr_1eznVoEPp7qdGgJsJ3/view?usp=drive_link',
    credentialLogo: Credentiallogo1.src,
  },
  {
    id: 'cert2',
    name: 'Google Cybersecurity Professional Certificate',
    issuingBody: 'Coursera',
    date: 'Issued: Jun 2024',
    credentialId: 'LFC987ZYXWVU',
    credentialUrl: 'https://drive.google.com/file/d/1PuZxMlYAlX3C-LB4ogDlqhmurmCJoNJD/view?usp=sharing',
    credentialLogo: Credentiallogo2.src,
  },
  {
    id: 'cert3',
    name: "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
    issuingBody: 'Google Cloud Skills Boost',
    date: 'Issued: Aug 2024',
    credentialLogo: Credentiallogo3.src,
  },
  {
    id: 'cert4',
    name: "Google AI Essentials",
    issuingBody: 'Coursera',
    date: 'Issued: Aug 2024',
    credentialLogo: Credentiallogo2.src,
  },
  {
    id: 'cert5',
    name: "Introduction to Open Source Security and Dependency Management",
    issuingBody: 'Endor Labs',
    date: 'Issued: Aug 2024',
    credentialLogo: Credentiallogo4.src,
  },
  {
    id: 'cert6',
    name: "Blockchain and it's Applications",
    issuingBody: 'NPTEL',
    date: 'Issued: May 2024',
    credentialLogo: Credentiallogo5.src,
  },
  {
    id: 'cert7',
    name: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
    issuingBody: 'Google Cloud Skills Boost',
    date: 'Issued: Aug 2023',
    credentialLogo: Credentiallogo3.src,
  },
  {
    id: 'cert8',
    name: "Networking Essentials",
    issuingBody: 'Cisco',
    date: 'Issued: Jan 2023',
    credentialLogo: Credentiallogo6.src,
  },
  {
    id: 'cert9',
    name: "Introduction to Cybersecurity",
    issuingBody: 'Cisco',
    date: 'Issued: Jan 2023',
    credentialLogo: Credentiallogo6.src,
  },
];

export default function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedCertifications = showAll ? certifications : certifications.slice(0, 5);

  return (
    <Section id="certifications" title="Certifications" icon={Award} className="bg-background">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedCertifications.map((cert) => (
          <Card key={cert.id} className="shadow-lg transition-all hover:shadow-xl flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between gap-4">

                <div>
                  <CardTitle className="font-headline text-lg md:text-xl text-primary">{cert.name}</CardTitle>
                  <CardDescription className="text-sm text-foreground/80">
                    {cert.issuingBody}
                  </CardDescription>
                </div>
                {cert.credentialLogo && (
                  <Image
                    src={cert.credentialLogo}
                    alt={`${cert.issuingBody} logo`}
                    width={80}
                    height={80}
                    className="rounded-sm"
                    data-ai-hint="institution logo"
                  />
                  )}
              </div>  
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between">
              <p className="text-xs text-muted-foreground mb-2">{cert.date}</p>
              {cert.credentialUrl && (
                <Button variant="link" size="sm" asChild className="p-0 h-auto self-start text-primary hover:text-primary/80">
                  <Link href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" aria-label={`Verify credential for ${cert.name}`}>
                    Verify Credential
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}

        {certifications.length > 5 && (
          <Card
            onClick={() => setShowAll(!showAll)}
            className="shadow-lg transition-all hover:shadow-xl flex flex-col items-center justify-center cursor-pointer text-center bg-primary text-primary-foreground"
          >
            <CardTitle className="font-headline text-lg md:text-xl text-primary-foreground">
              {showAll ? 'Show Less' : 'Show More'}
            </CardTitle>
          </Card>
        )}
      </div>
    </Section>
  );
}
