import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  images: string[];
  icon?: string;
  badge: string;
  link?: string;
  linkLabel?: string;
}

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './portfolio-section.component.html',
  styleUrl: './portfolio-section.component.css'
})
export class PortfolioSectionComponent {
  projects: Project[] = [
    {
      id: 'rampiere-pos',
      title: 'Rampiere POS',
      subtitle: 'Point-of-Sale System',
      description: 'Point-of-sale system with sales terminal, inventory, cash drawer, and kitchen-screen modules. Checkout is integrated with Xendit and GCash for QR payments; shipped as both an Android app and a Windows desktop app.',
      stack: ['Angular', 'Ionic', 'Capacitor', 'Electron', 'Xendit', 'GCash'],
      images: [
        'assets/projects/rampiere-pos-sales.png',
        'assets/projects/rampiere-pos-dashboard.png',
        'assets/projects/rampiere-pos-checkout.png',
        'assets/projects/rampiere-pos-cash-drawer.png'
      ],
      badge: 'Client Project'
    },
    {
      id: 'soar-next',
      title: 'SOAR+ Next',
      subtitle: 'Field-Operations ERP',
      description: 'Field-operations ERP mobile app for a multi-branch food distribution client — sales order entry, inventory movements, physical inventory counts, and warehouse picklist/packlist processing. Role-based logins for crew, driver and warehouse accounts, with Firebase push notifications and PDF delivery confirmations with digital signatures.',
      stack: ['Angular', 'Ionic', 'Capacitor', 'Java REST API', 'Firebase'],
      images: [
        'assets/projects/soar-next-login.png',
        'assets/projects/soar-next-home.png'
      ],
      badge: 'Client Project'
    },
    {
      id: 'paypiere',
      title: 'Paypiere',
      subtitle: 'Payroll & Workforce Dashboard',
      description: 'Payroll and workforce management dashboard for employee scheduling, attendance tracking, and manpower planning across multiple client accounts.',
      stack: ['Angular', 'TypeScript', 'Chart.js'],
      images: [
        'assets/projects/paypiere-dashboard.png',
        'assets/projects/paypiere-manpower.png',
        'assets/projects/paypiere-time-tracker.webp',
        'assets/projects/paypiere-attendance.webp'
      ],
      badge: 'Client Project'
    },
    {
      id: 'biometrics',
      title: 'Biometrics Verification App',
      subtitle: 'Identity Verification',
      description: 'Identity verification app using the device camera to scan QR codes, built to confirm user identity before granting access to sensitive workflows like time-in/time-out.',
      stack: ['Ionic', 'Capacitor', 'QR Code Scanning'],
      images: [
        'assets/projects/biometrics-scan.webp',
        'assets/projects/biometrics-app.webp'
      ],
      badge: 'Client Project'
    }
  ];

  otherProjects: Project[] = [
    {
      id: 'inventory-system',
      title: 'Inventory System',
      subtitle: 'Stock & Warehouse Tracking',
      description: 'A client project for an inventory management system tracking stock movement, physical inventory counts, and returns to supplier.',
      stack: ['Angular', 'Ionic'],
      images: [
        'assets/projects/inventory-system.png',
        'assets/projects/inventory-system-move.png',
        'assets/projects/inventory-system-physical.png'
      ],
      badge: 'Client Project'
    },
    {
      id: 'n8n-automation',
      title: 'n8n Workflow Automation',
      subtitle: 'Internal Ops Tooling',
      description: 'Automated internal operational workflows using n8n — SQL queries chained to conditional checks and Mattermost team-chat notifications.',
      stack: ['n8n', 'SQL', 'Mattermost API'],
      images: [
        'assets/projects/n8n-workflow.png'
      ],
      badge: 'Internal Tooling'
    }
  ];
}
