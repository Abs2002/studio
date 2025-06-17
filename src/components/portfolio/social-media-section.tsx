import Section from "@/components/section";
import type { SocialMediaItem } from "@/types/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import { Share2 } from 'lucide-react';
import sociallogo1 from '@/images/linkedinlogo.png';
import sociallogo2 from '@/images/githublogo.png';
import sociallogo3 from '@/images/mediumlogo.png';
import sociallogo4 from '@/images/instalogo.png';
import sociallogo5 from '@/images/tryhackmelogo.png';
import sociallogo6 from '@/images/Zenodo-gradient-square.svg.png';
import sociallogo7 from '@/images/wordpresslogo.png';
import sociallogo8 from '@/images/googlecloudskillsboostlogo.jpeg';
import sociallogo9 from '@/images/googleplaylogo.png';
import sociallogo10 from '@/images/chesslogo.png';

const socialMediaLinks: SocialMediaItem[] = [
  {
    id: "sm1",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anirudh-bishnoi/", // Replace with your LinkedIn URL
    icon: sociallogo1.src, // Replace with the actual path to your LinkedIn icon
  },
  {
    id: "sm2",
    name: "GitHub",
    url: "https://github.com/Abs2002", // Replace with your GitHub URL
    icon: sociallogo2.src, // Replace with the actual path to your GitHub icon
  },
  {
    id: "sm3",
    name: "Medium",
    url: "https://medium.com/@anirudhbishnoi5", 
    icon: sociallogo3.src, 
  },
  {
    id: "sm4",
    name: "Instagram",
    url: "https://www.instagram.com/anirudh_1176/", 
    icon: sociallogo4.src, 
  },
  {
    id: "sm5",
    name: "TryHackMe",
    url: "https://tryhackme.com/p/bishopweeping83", 
    icon: sociallogo5.src, 
  },
  {
    id: "sm6",
    name: "Zenodo",
    url: "https://zenodo.org/records/15597975", 
    icon: sociallogo6.src, 
  },
  {
    id: "sm7",
    name: "Photography Website",
    url: "https://oneclickpics.wordpress.com/", 
    icon: sociallogo7.src, 
  },
  {
    id: "sm8",
    name: "Google Cloud Skills Boost Profile",
    url: "https://www.cloudskillsboost.google/public_profiles/4fa3896f-2741-4e88-960c-bacc84b1435a", 
    icon: sociallogo8.src, 
  },
  {
    id: "sm9",
    name: "Google Play Books",
    url: "https://play.google.com/store/books/collection/cluster?gsr=SheCARQKEAoMNjVGYUR3QUFRQkFKEAkQBA%3D%3D:S:ANO1ljIar44&hl=en", 
    icon: sociallogo9.src, 
  },
  {
    id: "sm10",
    name: "Chess.com",
    url: "https://www.chess.com/member/manuel1729", 
    icon: sociallogo10.src, 
  },
  // Add more social media links as needed
];

export default function SocialMediaSection() {
  return (
    <Section id="social-media" title="Social Media" icon={Share2} className="bg-background">
      <div className="flex flex-wrap justify-center gap-6">
        {socialMediaLinks.map((link) => (
          <Card key={link.id} className="flex items-center justify-center p-4">
            <CardContent className="p-0">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={40}
                  height={40}
                />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}