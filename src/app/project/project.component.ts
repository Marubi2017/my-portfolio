import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderComponent, NgFor],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {
  experiences: Experience[] = [
    {
      role: 'Web Developer',
      company: 'The Offshore Lab',
      location: 'London, UK',
      period: 'Jul 2024 - Aug 2025',
      highlights: [
        'Built a graphical web interface for Scapy, enabling non-programmers to generate network packets.',
        'Developed dynamic UI components for ARP, IP, and DNS packet configuration.',
        'Implemented validation logic that reduced packet errors by 40%.',
        'Integrated Flask-based REST APIs to connect frontend workflows with the Scapy engine.',
        'Validated packet accuracy using Wireshark.',
      ],
    },
    {
      role: 'Frontend Developer Intern',
      company: 'Integrated Smart Solutions LLC',
      location: 'Naples, FL',
      period: 'May 2024 - Jun 2024',
      highlights: [
        'Developed scalable frontend modules for a smart building management platform using Angular and TypeScript.',
        'Improved data integrity through stronger form validation and structured input constraints.',
        'Enhanced accessibility and UX through standardized UI components.',
        'Collaborated in Agile sprints to ship iterative product improvements.',
      ],
    },
    {
      role: 'Software Engineer I',
      company: 'Nordstrom',
      location: 'Seattle, WA',
      period: 'Jun 2022 - Jan 2023',
      highlights: [
        'Developed scalable frontend features for analytics and computer vision tools using React, TypeScript, and Jest.',
        'Designed interactive UI components that simplified complex analytics outputs.',
        'Partnered with ML and data teams to help achieve about 90% foot-traffic tracking accuracy.',
        'Increased frontend reliability with automated tests and legacy fixes.',
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Everyones Radio',
      location: 'Remote',
      period: 'Jun 2024 - Dec 2025',
      highlights: [
        'Leading frontend development of a fan engagement platform, enablin artists to monetize using digital licenses.',
        'Built reusable components and optimized responsive layouts for scalability.',
        'Integrated Spotify Web API for streaming and fan interaction features.',
        'Improved API response times and platform performance by 35%.',
      ],
    },
  ];
}
