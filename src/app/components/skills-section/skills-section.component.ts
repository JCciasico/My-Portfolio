import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.css'
})
export class SkillsSectionComponent {
  skillGroups = [
    {
      title: 'Frontend',
      icon: 'fa-solid fa-code',
      items: ['Angular (v14-19)', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Bootstrap', 'RxJS']
    },
    {
      title: 'Mobile & Desktop',
      icon: 'fa-solid fa-mobile-screen-button',
      items: ['Ionic', 'Capacitor (Android/iOS)', 'Electron']
    },
    {
      title: 'Backend & APIs',
      icon: 'fa-solid fa-server',
      items: ['Node.js', 'Express', 'Java', 'REST API Design', 'JWT Auth', 'Reverse Proxy']
    },
    {
      title: 'Payments & Messaging',
      icon: 'fa-solid fa-credit-card',
      items: ['Xendit', 'PayMaya SDK', 'GCash QR', 'Firebase Cloud Messaging']
    },
    {
      title: 'Automation & Data Viz',
      icon: 'fa-solid fa-diagram-project',
      items: ['n8n', 'Chart.js', 'ngx-charts', 'pdfmake']
    },
    {
      title: 'Hardware Integration',
      icon: 'fa-solid fa-microchip',
      items: ['Thermal Printers', 'Bluetooth LE', 'Web Serial API', 'QR Code Scanning']
    },
    {
      title: 'AI',
      icon: 'fa-solid fa-robot',
      items: ['AI Chatbot Integration', 'OpenAI API', 'Other LLMs (familiar)']
    },
    {
      title: 'ERP',
      icon: 'fa-solid fa-building',
      items: ['iDempiere']
    }
  ];
}
