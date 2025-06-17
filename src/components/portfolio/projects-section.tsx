import Section from '@/components/section';
import type { ProjectItem } from '@/types/portfolio';
import {Workflow} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
//import Image from 'next/image';
//import Institutelogo1 from '@/images/gbulogo.png';
//import Institutelogo2 from '@/images/universal_public_school___india_logo.jpeg';

const projectHistory: ProjectItem[] = [
  {
    id: 'proj1',
    title: 'Legal Assistance Application',
    association: 'Associated with Gautam Buddha University(Major Project)',
    period: '2025',
    description: ["This application is developed to provide legal assistance to people who don't understand legal matter also.",'When an incident is provided as a prompt it uses NLP to identify key points and then searches database to show what all violations occured in the incident.'],
    technologiesused: ['Python', 'NLP', 'MySQL', 'FastAPI', 'React', 'GeminiAPI', 'Github', 'Law', 'Indian Constitution',],
    //institutionLogo:Institutelogo1.src,
  },
  {
    id: 'proj2',
    title: 'Endpoint Detection and Response Management application',
    association: 'Associated with Gautam Buddha University(Minor Project)',
    period: '2024',
    description: ['This project, developed for the 7th-semester minor project evaluation, addresses endpoint security challenges through the implementation of rules, regulations, and policies to enhance organisational security','Utilising Python, Excel, and SQL, the project is designed to capture specific events identified as threats to organisational security.', 'Upon detection of such an event, the system notifies the administrator via email and records the event for subsequent analysis. ', 'This recorded data enables detailed insights into specific security events, facilitating the development of improved rules and regulations to mitigate their occurrence.', ],
    technologiesused: ['Cybersecurity', 'Endpoint Security', 'SMTP', 'Compliance Management', 'MySQL', 'Python',],
    //institutionLogo:Institutelogo2.src,
  },
  {
    id: 'proj3',
    title: 'Network Sniffer',
    association: 'Independent',
    period: '2024',
    description: ['A CLI based network sniffer which shows the incoming and outgoing traffic in the network.', ],
    technologiesused: ['Cybersecurity', 'Scapy', 'tcpdump', 'CLI','Python',],
    //institutionLogo:Institutelogo2.src,
  },
  {
    id: 'proj4',
    title: 'Restaurant Billing System',
    association: 'Associated with Gautam Buddha University(Minor Project)',
    period: '2024',
    description: ['A CLI based network sniffer which shows the incoming and outgoing traffic in the network.', ],
    technologiesused: ['Cybersecurity', 'Scapy', 'tcpdump', 'CLI','Python',],
    //institutionLogo:Institutelogo2.src,
  },
];

export default function ProjectSection() {
  return (
    <Section id="project" title="Projects" icon={Workflow} className="bg-background">
      <div className="grid md:grid-cols-2 gap-8">
        {projectHistory.map((proj) => (
          <Card key={proj.id} className="shadow-lg transition-all hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="font-headline text-xl md:text-2xl text-primary">{proj.title}</CardTitle>
                  <CardDescription className="text-md text-foreground/80">
                    {proj.association} &bull; {proj.period}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            {proj.description && (
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-foreground/90">
                  {proj.description.map((descp, index) => (
                    <li key={index}>{descp}</li>
                  ))}
                </ul>
                <br></br>
                <h4 className="mb-4 text-left"><b>Skills Used</b></h4> 
                <div className="flex flex-wrap gap-2"> 
                  {proj.technologiesused.map((techsused, index) => (
                    <span
                      key={index}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium" // Styling for individual skill boxes
                    >
                      {techsused}
                    </span>
                  ))}
                </div>

              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
