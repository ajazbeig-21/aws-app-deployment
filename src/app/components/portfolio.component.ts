import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SEOService } from '../services/seo.service';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white pt-24 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">
          My <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
        </h1>
        <p class="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
          Showcasing innovative projects in web development, DevOps automation, and cloud infrastructure
        </p>
      </div>
    </section>

    <!-- Filter Navigation -->
    <section class="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4 py-4">
          <button 
            (click)="setActiveFilter('all')"
            [class]="activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full font-medium transition-colors duration-200">
            All Projects
          </button>
          <button 
            (click)="setActiveFilter('web')"
            [class]="activeFilter === 'web' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full font-medium transition-colors duration-200">
            Web Development
          </button>
          <button 
            (click)="setActiveFilter('devops')"
            [class]="activeFilter === 'devops' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full font-medium transition-colors duration-200">
            DevOps & Infrastructure
          </button>
          <button 
            (click)="setActiveFilter('mobile')"
            [class]="activeFilter === 'mobile' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            class="px-6 py-2 rounded-full font-medium transition-colors duration-200">
            Mobile Apps
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="py-16 bg-gray-50" *ngIf="featuredProjects.length > 0">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div *ngFor="let project of featuredProjects" 
               class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <p class="text-gray-600">{{ project.title }}</p>
                </div>
              </div>
            </div>
            
            <div class="p-8">
              <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {{ project.category }}
                </span>
                <span class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
              
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ project.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ project.description }}</p>
              
              <div class="mb-6">
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.technologies" 
                        class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="flex gap-4">
                <a *ngIf="project.demoUrl" 
                   [href]="project.demoUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Live Demo
                </a>
                <a *ngIf="project.githubUrl" 
                   [href]="project.githubUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Projects Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-12 text-center">All Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of filteredProjects" 
               class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            
            <!-- Project Image Placeholder -->
            <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
                    </svg>
                  </div>
                  <p class="text-sm text-gray-500">{{ project.category }}</p>
                </div>
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex items-center justify-between mb-3">
                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {{ project.category }}
                </span>
                <span *ngIf="project.featured" class="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                  Featured
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-gray-900 mb-3">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4 text-sm leading-relaxed">{{ project.description }}</p>
              
              <div class="mb-4">
                <div class="flex flex-wrap gap-1">
                  <span *ngFor="let tech of project.technologies.slice(0, 3)" 
                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {{ tech }}
                  </span>
                  <span *ngIf="project.technologies.length > 3" 
                        class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    +{{ project.technologies.length - 3 }} more
                  </span>
                </div>
              </div>
              
              <div class="flex gap-2">
                <a *ngIf="project.demoUrl" 
                   [href]="project.demoUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center">
                  Demo
                </a>
                <a *ngIf="project.githubUrl" 
                   [href]="project.githubUrl" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   class="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center">
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Have a Project in Mind?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's collaborate and bring your ideas to life with cutting-edge technology and best practices.
        </p>
        <a routerLink="/contact" 
           class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg inline-block">
          Start a Conversation
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class PortfolioComponent implements OnInit {
  activeFilter = 'all';

  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getPortfolioSEO());
  }

  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform with Microservices',
      category: 'Web Development',
      description: 'Full-stack e-commerce platform built with Angular, Node.js, and microservices architecture. Features include user authentication, payment processing, inventory management, and real-time notifications.',
      technologies: ['Angular', 'Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis', 'Stripe'],
      image: '/assets/images/projects/ecommerce.jpg',
      demoUrl: 'https://demo-ecommerce.ajazbeig.com',
      githubUrl: 'https://github.com/ajazbeig-21/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'AWS Infrastructure as Code',
      category: 'DevOps & Infrastructure',
      description: 'Complete AWS infrastructure setup using Terraform and Ansible. Includes VPC configuration, EKS cluster, RDS database, and CI/CD pipeline with automated deployments.',
      technologies: ['Terraform', 'Ansible', 'AWS', 'Jenkins', 'Docker', 'Kubernetes'],
      image: '/assets/images/projects/aws-iac.jpg',
      githubUrl: 'https://github.com/ajazbeig-21/aws-infrastructure',
      featured: true
    },
    {
      id: 3,
      title: 'Real-time Chat Application',
      category: 'Web Development',
      description: 'Modern chat application with real-time messaging, file sharing, group chats, and user presence indicators. Built with Angular and WebSocket technology.',
      technologies: ['Angular', 'Socket.io', 'Node.js', 'Express', 'MongoDB', 'WebRTC'],
      image: '/assets/images/projects/chat-app.jpg',
      demoUrl: 'https://chat.ajazbeig.com',
      githubUrl: 'https://github.com/ajazbeig-21/realtime-chat',
      featured: false
    },
    {
      id: 4,
      title: 'Monitoring Dashboard with Grafana',
      category: 'DevOps & Infrastructure',
      description: 'Comprehensive monitoring solution for microservices using Prometheus, Grafana, and custom alerting rules. Includes performance metrics, error tracking, and automated alerts.',
      technologies: ['Prometheus', 'Grafana', 'Docker', 'Kubernetes', 'Alertmanager'],
      image: '/assets/images/projects/monitoring.jpg',
      githubUrl: 'https://github.com/ajazbeig-21/monitoring-stack',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management Mobile App',
      category: 'Mobile Apps',
      description: 'Cross-platform mobile application for task management with offline support, push notifications, and team collaboration features.',
      technologies: ['React Native', 'TypeScript', 'SQLite', 'Firebase', 'Redux'],
      image: '/assets/images/projects/task-app.jpg',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.ajazbeig.taskmanager',
      githubUrl: 'https://github.com/ajazbeig-21/task-manager-app',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website Template',
      category: 'Web Development',
      description: 'Responsive portfolio website template with dark/light mode, animation effects, and SEO optimization. Perfect for developers and designers.',
      technologies: ['Angular', 'TailwindCSS', 'TypeScript', 'GSAP', 'PWA'],
      image: '/assets/images/projects/portfolio.jpg',
      demoUrl: 'https://portfolio-template.ajazbeig.com',
      githubUrl: 'https://github.com/ajazbeig-21/portfolio-template',
      featured: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects.filter(p => !p.featured);
    }
    return this.projects.filter(p => 
      p.category.toLowerCase().includes(this.activeFilter.toLowerCase()) && !p.featured
    );
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }
}