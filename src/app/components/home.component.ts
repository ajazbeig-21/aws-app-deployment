import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero -->
    <section class="relative min-h-screen flex items-center overflow-hidden" style="background:#0d0d14">
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 -left-40 w-96 h-96 rounded-full opacity-20 blur-3xl" style="background:#8977fe"></div>
        <div class="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl" style="background:#fd974d"></div>
        <div class="absolute top-2/3 left-1/3 w-72 h-72 rounded-full opacity-10 blur-3xl" style="background:#58b0e0"></div>
        <div class="absolute inset-0 opacity-5" style="background-image:linear-gradient(rgba(137,119,254,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(137,119,254,0.4) 1px,transparent 1px);background-size:60px 60px"></div>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div class="max-w-4xl">

          <h1 class="text-4xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight">
            Ajaz Beig
          </h1>
          <h2 class="text-3xl lg:text-4xl font-bold mb-3"
              style="background:linear-gradient(135deg,#fd974d,#8977fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">
            DevOps &amp; SRE Engineer
          </h2>
         

          <p class="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
            4+ years designing, automating, and scaling cloud infrastructure on AWS.
            I help engineers ship faster, run reliable systems, and
            <span style="color:#fd974d;font-weight:600">own production with confidence.</span>
          </p>

          <div class="flex flex-wrap gap-2 mb-10">
            <span *ngFor="let tag of focusTags"
                  class="px-3 py-1.5 rounded-full text-xs font-semibold terminal-text border"
                  style="background:rgba(255,255,255,0.04);border-color:rgba(255,255,255,0.1);color:#94a3b8">
              {{ tag }}
            </span>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
               class="px-8 py-3 rounded-xl font-bold text-white text-center transition-all hover:scale-105"
               style="background:linear-gradient(135deg,#fd974d,#8977fe);box-shadow:0 0 30px rgba(137,119,254,0.35)">
              Book a 1:1 Session
            </a>
            <a routerLink="/portfolio"
               class="px-8 py-3 rounded-xl font-bold text-center transition-all hover:scale-105 border"
               style="border-color:rgba(137,119,254,0.5);color:#8977fe;background:rgba(137,119,254,0.05)">
              View Projects
            </a>
            <a routerLink="/contact"
               class="px-8 py-3 rounded-xl font-bold text-center transition-all hover:scale-105 border"
               style="border-color:rgba(88,176,224,0.4);color:#58b0e0;background:rgba(88,176,224,0.05)">
              Contact Me
            </a>
          </div>

          <!-- Socials -->
          <div class="flex items-center gap-6">
            <a href="https://www.linkedin.com/in/ajaz-beig-6b0402193/" target="_blank" rel="noopener noreferrer"
               class="text-slate-500 hover:text-blue-400 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://github.com/ajazbeig-21/" target="_blank" rel="noopener noreferrer"
               class="text-slate-500 hover:text-white transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://m.youtube.com/@TechWithAjaz" target="_blank" rel="noopener noreferrer"
               class="text-slate-500 hover:text-red-400 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://ajaz-beig.medium.com/" target="_blank" rel="noopener noreferrer"
               class="text-slate-500 hover:text-green-400 transition-colors">
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            </a>
            <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
               class="text-sm font-semibold transition-colors" style="color:#fd974d">topmate ↗</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-14 border-y" style="background:rgba(255,255,255,0.015);border-color:rgba(255,255,255,0.06)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div *ngFor="let stat of stats" class="p-4">
            <div class="text-3xl lg:text-4xl font-black mb-1" [ngStyle]="{'color':stat.color}">{{ stat.value }}</div>
            <div class="text-slate-400 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise -->
    <section class="py-20" style="background:#0d0d14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="terminal-text text-sm mb-3" style="color:#6eec96">// what_i_do</p>
          <h2 class="text-4xl font-black text-white mb-4">Areas of
            <span style="background:linear-gradient(135deg,#fd974d,#8977fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Expertise</span>
          </h2>
          <p class="text-slate-400 max-w-2xl mx-auto">Deep experience across the DevOps and SRE lifecycle — from pipelines to production incidents</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div *ngFor="let area of expertiseAreas"
               class="p-6 rounded-2xl border transition-all duration-300 hover:scale-105 cursor-default"
               style="background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.08)"
               (mouseenter)="setHoverBorder($event, area.accent)"
               (mouseleave)="resetBorder($event)">
            <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" [ngStyle]="{'background':area.bg}">{{ area.icon }}</div>
            <h3 class="text-lg font-bold text-white mb-2">{{ area.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ area.desc }}</p>
            <div class="flex flex-wrap gap-1">
              <span *ngFor="let t of area.tags" class="px-2 py-0.5 rounded text-xs terminal-text"
                    [ngStyle]="{'background':area.tagBg,'color':area.accent}">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-16 border-t" style="background:rgba(255,255,255,0.01);border-color:rgba(255,255,255,0.05)">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="terminal-text text-sm text-center mb-8" style="color:#58b0e0">// tech_stack</p>
        <div class="flex flex-wrap gap-3 justify-center">
          <span *ngFor="let skill of skills"
                class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:scale-105 cursor-default"
                [ngStyle]="{'background':skill.bg,'border-color':skill.border,'color':skill.color}">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </section>

    <!-- Resume Highlights -->
    <section class="py-20" style="background:#0d0d14">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <p class="terminal-text text-sm mb-3" style="color:#fd974d">// professional_background</p>
          <h2 class="text-4xl font-black text-white mb-4">Experience &amp;
            <span style="background:linear-gradient(135deg,#58b0e0,#6eec96);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Background</span>
          </h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="p-8 rounded-2xl border" style="background:rgba(255,255,255,0.03);border-color:rgba(88,176,224,0.2)">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2" style="color:#58b0e0"><span>🏆</span> Key Achievements</h3>
            <ul class="space-y-4">
              <li *ngFor="let a of achievements" class="flex gap-3">
                <span class="text-lg flex-shrink-0">{{ a.icon }}</span>
                <p class="text-slate-300 text-sm leading-relaxed">{{ a.text }}</p>
              </li>
            </ul>
          </div>
          <div class="p-8 rounded-2xl border" style="background:rgba(255,255,255,0.03);border-color:rgba(110,236,150,0.2)">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2" style="color:#6eec96"><span>⚡</span> Core Competencies</h3>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let c of coreCompetencies"
                    class="px-3 py-1.5 rounded-lg text-xs terminal-text border"
                    style="background:rgba(110,236,150,0.05);border-color:rgba(110,236,150,0.2);color:#94a3b8">{{ c }}</span>
            </div>
          </div>
          <div class="p-8 rounded-2xl border" style="background:rgba(255,255,255,0.03);border-color:rgba(137,119,254,0.2)">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2" style="color:#8977fe"><span>🎓</span> Education</h3>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-xl" style="background:rgba(137,119,254,0.12)">🏛️</div>
              <div>
                <p class="text-white font-semibold">Master's in Computer Science</p>
                <p class="text-slate-400 text-sm">Pune University</p>
                <p class="text-slate-500 text-xs mt-1">2022</p>
              </div>
            </div>
          </div>
          <div class="p-8 rounded-2xl border" style="background:rgba(255,255,255,0.03);border-color:rgba(253,151,77,0.2)">
            <h3 class="text-lg font-bold mb-6 flex items-center gap-2" style="color:#fd974d"><span>🤝</span> Soft Skills</h3>
            <div class="grid grid-cols-2 gap-3">
              <div *ngFor="let s of softSkills" class="flex items-center gap-2 text-slate-300 text-sm">
                <span style="color:#fd974d">▸</span> {{ s }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 relative overflow-hidden border-t" style="background:#0d0d14;border-color:rgba(255,255,255,0.05)">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style="background:#8977fe"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style="background:#fd974d"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="terminal-text text-sm mb-4" style="color:#fd974d">// ready_to_level_up?</p>
        <h2 class="text-4xl lg:text-5xl font-black text-white mb-6">
          Let's Build Something
          <span style="background:linear-gradient(135deg,#fd974d,#8977fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Reliable</span>
        </h2>
        <p class="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">
          Production incidents, CI/CD modernization, or mentorship — I can help.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
             class="px-10 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
             style="background:linear-gradient(135deg,#fd974d,#8977fe);box-shadow:0 0 40px rgba(137,119,254,0.4)">
            Book a 1:1 on Topmate
          </a>
          <a href="mailto:ajazbeig200@gmail.com"
             class="px-10 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 border"
             style="border-color:rgba(88,176,224,0.5);color:#58b0e0;background:rgba(88,176,224,0.05)">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  focusTags = ['CI/CD','Monitoring','Observability','AWS Incidents','Postmortems','Chaos Engineering','Microservices','Kubernetes','Terraform','SRE'];

  skills = [
    {name:'AWS',           bg:'rgba(253,151,77,0.1)',  border:'rgba(253,151,77,0.3)',  color:'#fd974d'},
    {name:'Kubernetes',    bg:'rgba(88,176,224,0.1)',  border:'rgba(88,176,224,0.3)',  color:'#58b0e0'},
    {name:'Terraform',     bg:'rgba(137,119,254,0.1)', border:'rgba(137,119,254,0.3)', color:'#8977fe'},
    {name:'Docker',        bg:'rgba(88,176,224,0.08)', border:'rgba(88,176,224,0.25)', color:'#58b0e0'},
    {name:'Jenkins',       bg:'rgba(253,151,77,0.08)', border:'rgba(253,151,77,0.25)', color:'#fd974d'},
    {name:'GitHub Actions',bg:'rgba(137,119,254,0.08)',border:'rgba(137,119,254,0.25)',color:'#8977fe'},
    {name:'Prometheus',    bg:'rgba(253,151,77,0.08)', border:'rgba(253,151,77,0.25)', color:'#fd974d'},
    {name:'Grafana',       bg:'rgba(253,151,77,0.06)', border:'rgba(253,151,77,0.2)',  color:'#fd974d'},
    {name:'New Relic',     bg:'rgba(110,236,150,0.08)',border:'rgba(110,236,150,0.25)',color:'#6eec96'},
    {name:'Ansible',       bg:'rgba(110,236,150,0.08)',border:'rgba(110,236,150,0.25)',color:'#6eec96'},
    {name:'EKS',           bg:'rgba(88,176,224,0.08)', border:'rgba(88,176,224,0.25)', color:'#58b0e0'},
    {name:'Linux',         bg:'rgba(255,255,255,0.04)',border:'rgba(255,255,255,0.1)',  color:'#94a3b8'},
    {name:'Shell Scripting',bg:'rgba(255,255,255,0.04)',border:'rgba(255,255,255,0.1)', color:'#94a3b8'},
    {name:'Bitbucket',     bg:'rgba(88,176,224,0.06)', border:'rgba(88,176,224,0.2)',  color:'#58b0e0'},
  ];

  stats = [
    {value:'4+',    label:'Years Experience',     color:'#fd974d'},
    {value:'4.7K+', label:'Platform Followers',   color:'#8977fe'},
    {value:'189K+', label:'Monthly Reach',         color:'#58b0e0'},
    {value:'1.5M+', label:'Content Impressions',   color:'#6eec96'},
  ];

  expertiseAreas = [
    {icon:'🔄',title:'CI/CD Pipelines',             desc:'Automated build, test, and deploy workflows using Jenkins and GitHub Actions. Reduced deployment time by ~40-50%.',               tags:['Jenkins','GitHub Actions','Automation'],  accent:'#fd974d',bg:'rgba(253,151,77,0.1)', tagBg:'rgba(253,151,77,0.08)'},
    {icon:'📊',title:'Monitoring & Observability',  desc:'Full observability with Prometheus, Grafana, and New Relic. Improved MTTD and MTTR through proactive alerting.',                  tags:['Prometheus','Grafana','New Relic'],        accent:'#58b0e0',bg:'rgba(88,176,224,0.1)',  tagBg:'rgba(88,176,224,0.08)'},
    {icon:'☁️',title:'AWS Cloud Infrastructure',    desc:'Provisioning VPC, EC2, EKS, RDS using Terraform IaC. Reduced manual provisioning effort by ~50-60%.',                            tags:['EC2','EKS','RDS','VPC','IAM'],            accent:'#8977fe',bg:'rgba(137,119,254,0.1)',tagBg:'rgba(137,119,254,0.08)'},
    {icon:'⚡',title:'Incident Mgmt & Postmortems',desc:'Leading RCA on production incidents, writing postmortems, and implementing corrective actions to improve uptime.',               tags:['RCA','Postmortems','SLOs'],               accent:'#6eec96',bg:'rgba(110,236,150,0.1)',tagBg:'rgba(110,236,150,0.08)'},
    {icon:'🎯',title:'Chaos Engineering',           desc:'Introducing controlled failures to find weaknesses before they become incidents. Build resilient systems by design.',             tags:['Resilience','Fault Injection','SRE'],     accent:'#fd974d',bg:'rgba(253,151,77,0.1)', tagBg:'rgba(253,151,77,0.08)'},
    {icon:'🔬',title:'Microservices & Kubernetes',  desc:'Deploying containerized microservices on EKS with auto-scaling, rolling deployments, and zero-downtime releases.',               tags:['EKS','Helm','Auto-scaling','Docker'],     accent:'#58b0e0',bg:'rgba(88,176,224,0.1)',  tagBg:'rgba(88,176,224,0.08)'},
  ];

  achievements = [
    {icon:'🚀',text:'Implemented scalable AWS infrastructure using Terraform, reducing manual provisioning effort by ~50–60% across all environments.'},
    {icon:'⚙️',text:'Designed CI/CD pipelines using Jenkins and GitHub Actions, reducing deployment time by ~40–50%.'},
    {icon:'📈',text:'Built end-to-end monitoring with Prometheus, Grafana, and New Relic for proactive detection and faster resolution.'},
    {icon:'🛡️',text:'Managed Kubernetes (EKS) clusters for microservices with high availability, auto-scaling, and zero-downtime deployments.'},
    {icon:'🔧',text:'Automated provisioning with Ansible, eliminating manual interventions and reducing configuration drift.'},
  ];

  coreCompetencies = [
    'AWS (EC2, S3, IAM, VPC, EKS, RDS, CloudWatch)',
    'Terraform & Ansible (IaC)',
    'CI/CD (Jenkins, GitHub Actions)',
    'Docker & Kubernetes (EKS)',
    'Prometheus, Grafana, New Relic',
    'Linux Administration',
    'Git, GitHub, Bitbucket',
    'Incident Management & RCA',
    'Microservices Deployment',
    'Shell Scripting',
  ];

  softSkills = ['Problem-Solving','Critical Thinking','Adaptability','Mentorship','Collaboration','Teamwork','Entrepreneurship','Leadership'];

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getHomeSEO());
  }

  setHoverBorder(event: MouseEvent, accent: string): void {
    (event.currentTarget as HTMLElement).style.borderColor = accent + '60';
  }

  resetBorder(event: MouseEvent): void {
    (event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
  }
}
