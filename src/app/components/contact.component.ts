import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero -->
    <section class="relative pt-24 pb-16 overflow-hidden" style="background:#0d0d14">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/3 left-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl" style="background:#8977fe"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" style="background:#fd974d"></div>
        <div class="absolute inset-0 opacity-5" style="background-image:linear-gradient(rgba(137,119,254,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(137,119,254,0.4) 1px,transparent 1px);background-size:60px 60px"></div>
      </div>
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="terminal-text text-sm mb-3" style="color:#6eec96">// get_in_touch</p>
        <h1 class="text-5xl lg:text-6xl font-black text-white mb-6">
          Let's <span style="background:linear-gradient(135deg,#fd974d,#8977fe);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Connect</span>
        </h1>
        <p class="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Whether you want to book a mentorship session, discuss a project, or just say hi — I'm always open to meaningful conversations.
        </p>
      </div>
    </section>

    <!-- Contact Cards -->
    <section class="py-20" style="background:#0d0d14">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Topmate -->
          <div class="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
               style="background:rgba(253,151,77,0.04);border-color:rgba(253,151,77,0.2)">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style="background:rgba(253,151,77,0.12)">🎯</div>
            <h3 class="text-xl font-bold text-white mb-2">Book a 1:1 Session</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Schedule a mentorship call, DevOps consultation, career guidance, or architecture review on Topmate.
            </p>
            <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
               style="background:linear-gradient(135deg,#fd974d,#8977fe);box-shadow:0 0 20px rgba(253,151,77,0.25)">
              topmate.io/techworld_with_ajaz ↗
            </a>
          </div>

          <!-- Email -->
          <div class="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
               style="background:rgba(88,176,224,0.04);border-color:rgba(88,176,224,0.2)">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style="background:rgba(88,176,224,0.12)">📧</div>
            <h3 class="text-xl font-bold text-white mb-2">Send an Email</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              For project inquiries, collaborations, speaking opportunities, or any professional questions.
            </p>
            <a href="mailto:ajazbeig200@gmail.com"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 border"
               style="border-color:rgba(88,176,224,0.5);color:#58b0e0;background:rgba(88,176,224,0.08)">
              ajazbeig200&#64;gmail.com ↗
            </a>
          </div>

          <!-- LinkedIn -->
          <div class="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
               style="background:rgba(137,119,254,0.04);border-color:rgba(137,119,254,0.2)">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style="background:rgba(137,119,254,0.12)">💼</div>
            <h3 class="text-xl font-bold text-white mb-2">LinkedIn</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Connect professionally, follow DevOps content, and stay updated with cloud engineering insights.
            </p>
            <a href="https://www.linkedin.com/in/ajaz-beig-6b0402193/" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 border"
               style="border-color:rgba(137,119,254,0.5);color:#8977fe;background:rgba(137,119,254,0.08)">
              Connect on LinkedIn ↗
            </a>
          </div>

          <!-- GitHub -->
          <div class="p-8 rounded-2xl border transition-all duration-300 hover:scale-105"
               style="background:rgba(110,236,150,0.04);border-color:rgba(110,236,150,0.2)">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5" style="background:rgba(110,236,150,0.12)">🐙</div>
            <h3 class="text-xl font-bold text-white mb-2">GitHub</h3>
            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Explore Terraform modules, Kubernetes configs, CI/CD templates, and automation scripts.
            </p>
            <a href="https://github.com/ajazbeig-21/" target="_blank" rel="noopener noreferrer"
               class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 border"
               style="border-color:rgba(110,236,150,0.5);color:#6eec96;background:rgba(110,236,150,0.08)">
              github.com/ajazbeig-21 ↗
            </a>
          </div>
        </div>

        <!-- What I can help with -->
        <div class="mt-16 p-8 rounded-2xl border" style="background:rgba(255,255,255,0.02);border-color:rgba(255,255,255,0.07)">
          <p class="terminal-text text-sm mb-3 text-center" style="color:#8977fe">// how_i_can_help</p>
          <h2 class="text-2xl font-black text-white mb-8 text-center">What I Can Help You With</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div *ngFor="let item of helpTopics"
                 class="flex items-start gap-3 p-4 rounded-xl border transition-all hover:scale-105 cursor-default"
                 style="background:rgba(255,255,255,0.03);border-color:rgba(255,255,255,0.07)"
                 (mouseenter)="setHoverBorder($event, item.color)"
                 (mouseleave)="resetBorder($event)">
              <span class="text-xl flex-shrink-0">{{ item.icon }}</span>
              <div>
                <p class="text-white font-semibold text-sm">{{ item.title }}</p>
                <p class="text-slate-500 text-xs mt-0.5">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-12 text-center">
          <p class="terminal-text text-sm mb-4" style="color:#fd974d">// ready_to_start?</p>
          <a href="https://topmate.io/techworld_with_ajaz" target="_blank" rel="noopener noreferrer"
             class="inline-block px-10 py-4 rounded-xl font-bold text-white text-lg transition-all hover:scale-105"
             style="background:linear-gradient(135deg,#fd974d,#8977fe);box-shadow:0 0 40px rgba(137,119,254,0.35)">
            Book a 1:1 Mentor Session
          </a>
        </div>

        <!-- Legal -->
        <div class="mt-12 p-5 rounded-xl border text-center" style="background:rgba(255,255,255,0.02);border-color:rgba(255,255,255,0.05)">
          <p class="text-slate-600 text-xs terminal-text">
            Merchant: AJAZ ARIF BEIG &nbsp;|&nbsp; Email: ajazbeig200&#64;gmail.com
          </p>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  helpTopics = [
    {icon:'🔄', title:'CI/CD Pipeline Design',      desc:'Jenkins, GitHub Actions, best practices', color:'#fd974d'},
    {icon:'📊', title:'Monitoring & Observability',  desc:'Prometheus, Grafana, New Relic setup',    color:'#58b0e0'},
    {icon:'☁️', title:'AWS Architecture Review',     desc:'Cost optimization, security, scalability', color:'#8977fe'},
    {icon:'☸️', title:'Kubernetes Troubleshooting',  desc:'EKS, scaling, deployments, networking',   color:'#58b0e0'},
    {icon:'🔥', title:'Incident Management',         desc:'Postmortems, RCA, SLOs, error budgets',   color:'#6eec96'},
    {icon:'🎓', title:'DevOps Career Mentorship',    desc:'Roadmap, interview prep, skill building',  color:'#8977fe'},
    {icon:'🏗️', title:'Terraform & IaC',             desc:'Module design, state mgmt, CI integration', color:'#fd974d'},
    {icon:'🎯', title:'Chaos Engineering',           desc:'Resilience testing, failure injection',    color:'#6eec96'},
    {icon:'🐳', title:'Docker & Containers',         desc:'Optimization, multi-stage builds',         color:'#58b0e0'},
  ];

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getContactSEO());
  }

  setHoverBorder(event: MouseEvent, color: string): void {
    (event.currentTarget as HTMLElement).style.borderColor = color + '50';
  }

  resetBorder(event: MouseEvent): void {
    (event.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
  }
}