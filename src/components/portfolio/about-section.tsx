import Section from '@/components/section';
import Image from 'next/image';
import { UserRound } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react'; // Import the download icon
import profileImage from '@/images/fotor-2024060512759.png'; // Adjust the path as needed

export default function AboutSection() {
  const bio = (
    <>
      <p className="mb-4 text-justify">I'm a highly motivated and results-oriented Cyber Security student at Gautam Buddha University with a passion for learning and applying knowledge.</p>
      <p className="mb-4 text-justify">My interest in Cyber Security led me to attain Certification in <b>Comptia Security+ (SY0-701)</b>.</p>
      <p className="mb-4 text-justify">I have written a <b>Research paper which is published on Zenodo.org</b>.</p>
      <p className="mb-4 text-justify">I'm an Ex-intern at Publicis Re:Sources and I honed my content management skills by leading content development for presentations and social media platforms at Blacksociety. Additionally, I fostered collaboration within a small team and delivered engaging presentations in Blacksociety.</p>
      <p className="mb-4 text-justify">Beyond Cyber Security, I possess a strong foundation in programming languages like Python, Javascript, PHP, and SQL. These skills have been instrumental in developing various projects, including a network sniffer with Python, a restaurant billing system, and an expense tracker application. To further explore automation and cloud technologies, I'm actively learning about Google Cloud and Open Source development.</p>
      <p className="mb-4 text-justify">Besides, My other activities include volunteering for Google Maps Local Guide where I rank at Level 8 with 19 Million views on contributions.</p>
    </>
  );
  const personalDetails = [
    { label: "Name", value: "Anirudh Bishnoi" },
    { label: "Location", value: "Delhi, India" },
    { label: "Email", value: "anirudhbishnoi5@gmail.com" },
    { label: "Phone", value: "+91-8178697437" },
  ];


  return (
    <Section id="about" title="" icon={UserRound} className="bg-background">
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
 <div className="md:col-span-1 flex flex-col items-center justify-center">
 <Image
 src={profileImage}
 alt="Anirudh Bishnoi"
 width={300}
 height={300}
 className="rounded-full shadow-xl border-4 border-accent object-cover mb-4" // Added mb-4 for spacing
 data-ai-hint="portrait professional"
 />
 {/* Download CV button */}
 <a
 href="https://drive.google.com/uc?export=download&id=1BWGOPQZoVxhWioL8EQ6-3-JbTbAGQzIF" // Path to your CV in the public directory
 download="Anirudh_Bishnoi_CV.pdf" // Suggested filename for download
 className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md transition-colors flex items-center" // Added flex items-center for alignment
 >
 <Download className="mr-2 h-4 w-4" /> {/* Download icon with margin and size */}
 Download CV
 </a>



        </div>
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Cyber Security Enthusiast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg text-foreground/80 leading-relaxed mb-6">
                {bio}
              </div>
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
//adding this line for fun