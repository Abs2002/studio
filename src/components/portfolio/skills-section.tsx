import Section from '@/components/section';
import { SquareStack } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  "Technical Skills": [
// Suggested code may be subject to a license. Learn more: ~LicenseLog:39617734.
    "CyberSecurity", "Programming","IDS/IPS","Threat Management","Blockchain","Vulnernability Management","Cryptography","Endpoint Security","Security Management","DevOps","SIEM","Network Security","Cloud Security", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Django", "SQL", "C", "C++", "Java", "PHP", "MySQL", 
  ],
  "Tools Used": [
    "Git", "Google Cloud","Firebase", "VS Code", "Wireshark", "Microsoft Azure","Github","MECM", "Nmap", "Metasploit","Aircrack","Burpsuite",
  ],
  "Soft Skills": [
    "Communication", "Collaboration", "Problem-solving", "Adaptability", "Time Management", "Team Management", "Analytical", "Logical",
  ]
};

export default function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" icon={SquareStack} className="bg-muted/50">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl text-primary text-center"></CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8"> {/* Changed to flex for row layout on desktop */}
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="flex-1 bg-card p-6 rounded-lg shadow-sm"> {/* Added styling for category boxes */}
                <h3 className="font-headline text-xl text-primary mb-4 text-center">{category}</h3> {/* Centered category title */}
                <div className="flex flex-wrap gap-2"> {/* Added flex-wrap for skill boxes */}
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium" // Styling for individual skill boxes
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
