import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SEOService } from '../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 pb-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Profile & Info -->
          <div class="text-center lg:text-left">
            <div class="flex justify-center lg:justify-start mb-6">
              <img src="assets/images/ajaz-profile-pic.png" 
                   class="w-32 h-32 lg:w-40 lg:h-40 rounded-full shadow-xl border-4 border-white" 
                   alt="Ajaz Beig - Frontend Developer & DevOps Engineer" />
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ajaz Beig</span>
            </h1>
            
            <p class="text-xl lg:text-2xl text-gray-600 mb-6 font-light">
              Frontend Developer & DevOps/SRE Enthusiast
            </p>
            
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">
              Crafting seamless user interfaces & robust infrastructures. 
              Skilled in Angular, CI/CD, Docker, Kubernetes, AWS, and Monitoring.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a routerLink="/portfolio" 
                 class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View My Work
              </a>
              <a routerLink="/contact" 
                 class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Get In Touch
              </a>
            </div>

            <!-- Social Links -->
            <div class="flex justify-center lg:justify-start gap-6 mt-8">
              <a href="https://www.linkedin.com/in/ajaz-beig-6b0402193/" target="_blank" rel="noopener noreferrer"
                 class="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group">
                <div class="p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img src="assets/images/socials/linkedin.png" alt="LinkedIn" class="h-8 w-8">
                </div>
                <span class="text-sm font-medium">LinkedIn</span>
              </a>
              
              <a href="https://github.com/ajazbeig-21/" target="_blank" rel="noopener noreferrer"
                 class="flex flex-col items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors duration-200 group">
                <div class="p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img src="assets/images/socials/github.png" alt="GitHub" class="h-8 w-8">
                </div>
                <span class="text-sm font-medium">GitHub</span>
              </a>
              
              <a href="https://m.youtube.com/@ProgrammingWithAjaz" target="_blank" rel="noopener noreferrer"
                 class="flex flex-col items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200 group">
                <div class="p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img src="assets/images/socials/youtube.png" alt="YouTube" class="h-8 w-8">
                </div>
                <span class="text-sm font-medium">YouTube</span>
              </a>
              
              <a href="https://ajaz-beig.medium.com/" target="_blank" rel="noopener noreferrer"
                 class="flex flex-col items-center gap-2 text-gray-600 hover:text-green-600 transition-colors duration-200 group">
                <div class="p-2 bg-white rounded-lg shadow-md group-hover:shadow-lg transition-shadow">
                  <img src="assets/images/socials/medium.png" alt="Medium" class="h-8 w-8">
                </div>
                <span class="text-sm font-medium">Medium</span>
              </a>
            </div>
          </div>

          <!-- Skills Section -->
          <div class="text-center">
            <h2 class="text-2xl font-semibold text-gray-900 mb-8">Technical Skills</h2>
            <div class="space-y-4">
              <div class="flex gap-2 flex-wrap justify-center">
                <div class="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/linux.png" alt="Linux" class="h-5 w-5">
                  <span>Linux</span>
                </div>
                <div class="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/ansible.png" alt="Ansible" class="h-5 w-5">
                  <span>Ansible</span>
                </div>
              </div>
              
              <div class="flex gap-2 flex-wrap justify-center">
                <div class="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/aws.png" alt="AWS" class="h-5 w-5">
                  <span>AWS</span>
                </div>
                <div class="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/azure.png" alt="Azure" class="h-5 w-5">
                  <span>Azure</span>
                </div>
                <div class="bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/docker.png" alt="Docker" class="h-5 w-5">
                  <span>Docker</span>
                </div>
              </div>
              
              <div class="flex gap-2 flex-wrap justify-center">
                <div class="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/github.png" alt="Git/GitHub" class="h-5 w-5">
                  <span>Git / GitHub</span>
                </div>
                <div class="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/terraform.png" alt="Terraform" class="h-5 w-5">
                  <span>Terraform</span>
                </div>
                <div class="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/kubernetes.png" alt="Kubernetes" class="h-5 w-5">
                  <span>Kubernetes</span>
                </div>
              </div>
              
              <div class="flex gap-2 flex-wrap justify-center">
                <div class="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/jenkins.png" alt="Jenkins" class="h-5 w-5">
                  <span>Jenkins CI/CD</span>
                </div>
                <div class="bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/prometheus.png" alt="Prometheus" class="h-5 w-5">
                  <span>Prometheus</span>
                </div>
                <div class="bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/grafana.png" alt="Grafana" class="h-5 w-5">
                  <span>Grafana</span>
                </div>
              </div>
              
              <div class="flex gap-2 flex-wrap justify-center">
                <div class="bg-gradient-to-r from-green-100 to-green-50 text-green-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/bash.png" alt="Bash" class="h-5 w-5">
                  <span>Bash</span>
                </div>
                <div class="bg-gradient-to-r from-yellow-100 to-yellow-50 text-yellow-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/python.png" alt="Python" class="h-5 w-5">
                  <span>Python</span>
                </div>
                <div class="bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-800 text-sm md:text-base font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <img src="assets/images/skills/networking.png" alt="Networking" class="h-5 w-5">
                  <span>Networking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="bg-white py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">4726+</div>
            <div class="text-lg text-gray-600 font-medium">Amazing Followers</div>
            <div class="text-sm text-gray-500 mt-1">Across all platforms</div>
          </div>
          <div class="p-6">
            <div class="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">189K+</div>
            <div class="text-lg text-gray-600 font-medium">Engaged Viewers</div>
            <div class="text-sm text-gray-500 mt-1">Monthly reach</div>
          </div>
          <div class="p-6">
            <div class="text-4xl lg:text-5xl font-bold text-green-600 mb-2">1.56M+</div>
            <div class="text-lg text-gray-600 font-medium">Total Reach</div>
            <div class="text-sm text-gray-500 mt-1">Content impressions</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-gray-50 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What I Do</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses build scalable web applications and robust cloud infrastructures
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Frontend Development</h3>
            <p class="text-gray-600 mb-4">
              Modern, responsive web applications using Angular, React, and cutting-edge frontend technologies.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Angular & TypeScript</li>
              <li>• Responsive Design</li>
              <li>• Component Libraries</li>
              <li>• Performance Optimization</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">DevOps & SRE</h3>
            <p class="text-gray-600 mb-4">
              Cloud infrastructure, CI/CD pipelines, and site reliability engineering for scalable systems.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• AWS & Azure Cloud</li>
              <li>• Docker & Kubernetes</li>
              <li>• CI/CD Automation</li>
              <li>• Monitoring & Alerting</li>
            </ul>
          </div>

          <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Digital Products</h3>
            <p class="text-gray-600 mb-4">
              Premium courses, templates, and tools to accelerate your development journey.
            </p>
            <ul class="text-sm text-gray-500 space-y-1">
              <li>• Development Courses</li>
              <li>• Project Templates</li>
              <li>• Code Snippets</li>
              <li>• Best Practices Guides</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Let's collaborate on your next project or explore my digital products to accelerate your development.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/contact" 
             class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg">
            Start a Project
          </a>
          <a routerLink="/products" 
             class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
            Browse Products
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  
  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.updateSEOData(this.seoService.getHomeSEO());
  }
}