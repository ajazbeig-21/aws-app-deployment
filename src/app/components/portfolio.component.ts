import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero -->
    <section class="relative pt-24 pb-16 overflow-hidden" style="background: #0d0d14;">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl" style="background:#8977fe"></div>
        <div class="absolute bottom-1/3 -right-32 w-80 h-80 rounded-full opacity-10 blur-3xl" style="background:#fd974d"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="terminal-text text-sm mb-3" style="color:#6eec96">// project_portfolio</p>
        <h1 class="text-5xl lg:text-6xl font-black text-white mb-6">
          Real-World <span style="background: linear-gradient(135deg,#fd974d,#8977fe); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;">Projects</span>
        </h1>
        <p class="text-slate-400 text-xl max-w-3xl mx-auto">
          Infrastructure automation, cloud architecture, CI/CD, and observability at scale — 
          built to solve real production challenges.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20" style="background: #0d0d14;">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <div *ngFor="let project of projects; let i = index"
               class="p-8 rounded-2xl border transition-all duration-300 group hover:scale-[1.01]"
               style="background: rgba(255,255,255,0.03); border-color: rgba(255,255,255,0.08);"
               (mouseenter)="setHoverBorder($event, project.accent)"
               (mouseleave)="resetBorder($event)">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <!-- Icon + title -->
              <div>
                <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4" [ngStyle]="{'background': project.iconBg}">
                  {{ project.icon }}
                </div>
                <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 terminal-text" [ngStyle]="{'background': project.tagBg, 'color': project.accent}">
                  {{ project.designation }}
                </div>
                <h2 class="text-2xl font-black text-white mb-2">{{ project.title }}</h2>
                <p class="text-slate-400 text-sm leading-relaxed">{{ project.desc }}</p>
              </div>
              <!-- Contributions -->
              <div class="lg:col-span-2">
                <h3 class="text-sm font-semibold mb-4 terminal-text" [ngStyle]="{'color': project.accent}">// key_contributions</h3>
                <ul class="space-y-3">
                  <li *ngFor="let c of project.contributions" class="flex gap-3 items-start">
                    <span class="mt-0.5 flex-shrink-0 text-sm" [ngStyle]="{'color': project.accent}">▸</span>
                    <span class="text-slate-300 text-sm leading-relaxed">{{ c }}</span>
                  </li>
                </ul>
                <!-- Tags -->
                <div class="flex flex-wrap gap-2 mt-6">
                  <span *ngFor="let tag of project.tags"
                        class="px-3 py-1 rounded-lg text-xs terminal-text border"
                        [ngStyle]="{'background': project.tagBg, 'border-color': project.accent + '30', 'color': project.accent}">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t" style="background: rgba(255,255,255,0.015); border-color: rgba(255,255,255,0.05)">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <p class="terminal-text text-sm mb-4" style="color:#fd974d">// want_to_collaborate?</p>
        <h2 class="text-3xl font-black text-white mb-6">Mentor 1:1 — Let's accelerate your DevOps journey together</h2>
        <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
           class="inline-block px-10 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
           style="background: linear-gradient(135deg, #fd974d, #8977fe); box-shadow: 0 0 40px rgba(137,119,254,0.3)">
          Book a 1:1 Session
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class PortfolioComponent implements OnInit {

  projects = [
    {
      icon: '🏗️',
      title: 'Cloud Infrastructure Automation (AWS + Terraform)',
      desc: 'Designed and implemented reusable Terraform modules for complete AWS infrastructure provisioning across multiple environments.',
      designation: 'DevOps Engineer | Varroc Connect, Pune',
      accent: '#fd974d',
      iconBg: 'rgba(253,151,77,0.1)',
      tagBg: 'rgba(253,151,77,0.06)',
      contributions: [
        'Designed reusable Terraform modules for provisioning AWS infrastructure (VPC, EC2, EKS, RDS)',
        'Automated infrastructure deployment, reducing manual provisioning effort and ensuring environment consistency',
        'Integrated Terraform with CI/CD pipelines for automated infrastructure changes',
        'Ensured consistent environments across dev, QA, and production',
        'Reduced provisioning errors and deployment inconsistencies through IaC best practices',
      ],
      tags: ['Terraform', 'AWS', 'VPC', 'EC2', 'EKS', 'RDS', 'IaC'],
    },
    {
      icon: '☸️',
      title: 'Kubernetes Deployment on EKS',
      desc: 'Deployed and managed containerized microservices on Kubernetes EKS with high availability, auto-scaling, and zero-downtime deployments.',
      designation: 'DevOps Engineer | Varroc Connect, Pune',
      accent: '#58b0e0',
      iconBg: 'rgba(88,176,224,0.1)',
      tagBg: 'rgba(88,176,224,0.06)',
      contributions: [
        'Deployed and managed containerized microservices on Kubernetes (EKS)',
        'Configured auto-scaling, rolling deployments, and health checks for high availability',
        'Optimized cluster performance and resource utilization across dev, QA, and production environments',
        'Supported deployment and operations of microservices-based applications',
        'Improved application uptime and resilience through optimized scaling and health checks',
      ],
      tags: ['Kubernetes', 'EKS', 'Docker', 'Helm', 'Auto-scaling', 'Microservices'],
    },
    {
      icon: '🔄',
      title: 'CI/CD Pipeline Automation',
      desc: 'Designed and implemented end-to-end CI/CD pipelines that reduced deployment time by 40-50% and improved release reliability.',
      designation: 'DevOps Engineer | Varroc Connect, Pune',
      accent: '#8977fe',
      iconBg: 'rgba(137,119,254,0.1)',
      tagBg: 'rgba(137,119,254,0.06)',
      contributions: [
        'Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions',
        'Automated build, test, and deployment workflows for microservices applications',
        'Reduced deployment time by ~40–50% and improved release reliability',
        'Enabled faster and more reliable releases across multiple environments',
        'Standardized pipeline templates for consistent deployments across teams',
      ],
      tags: ['Jenkins', 'GitHub Actions', 'CI/CD', 'Automation', 'Deployment'],
    },
    {
      icon: '📊',
      title: 'Observability & Monitoring Implementation',
      desc: 'Built comprehensive monitoring stack improving MTTD and MTTR through real-time dashboards and proactive alerting.',
      designation: 'DevOps Engineer | Varroc Connect, Pune',
      accent: '#6eec96',
      iconBg: 'rgba(110,236,150,0.1)',
      tagBg: 'rgba(110,236,150,0.06)',
      contributions: [
        'Implemented monitoring stack using Prometheus, Grafana, and New Relic',
        'Designed dashboards for system health, performance, and alerting across all services',
        'Reduced incident detection and resolution time through proactive monitoring',
        'Improved MTTR (Mean Time to Resolution) through proactive alerting and runbooks',
        'Reduced Mean Time to Detection (MTTD) using real-time monitoring dashboards',
      ],
      tags: ['Prometheus', 'Grafana', 'New Relic', 'Alerting', 'Dashboards', 'MTTD', 'MTTR'],
    },
  ];

  ngOnInit(): void {}

  setHoverBorder(event: MouseEvent, accent: string): void {
    (event.currentTarget as HTMLElement).style.borderColor = accent + '50';
  }

  resetBorder(event: MouseEvent): void {
    (event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
  }
}
