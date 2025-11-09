import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(
    private meta: Meta,
    private titleService: Title
  ) { }

  updateSEOData(data: SEOData): void {
    // Update title
    if (data.title) {
      this.titleService.setTitle(data.title);
    }

    // Update meta tags
    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({ property: 'og:description', content: data.description });
      this.meta.updateTag({ property: 'twitter:description', content: data.description });
    }

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    if (data.author) {
      this.meta.updateTag({ name: 'author', content: data.author });
    }

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
      this.meta.updateTag({ property: 'twitter:image', content: data.image });
    }

    if (data.url) {
      this.meta.updateTag({ property: 'og:url', content: data.url });
      this.meta.updateTag({ property: 'twitter:url', content: data.url });
      this.meta.updateTag({ rel: 'canonical', href: data.url });
    }

    if (data.type) {
      this.meta.updateTag({ property: 'og:type', content: data.type });
    }

    // Always update og:title and twitter:title if title is provided
    if (data.title) {
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ property: 'twitter:title', content: data.title });
    }
  }

  // Predefined SEO data for different pages
  getHomeSEO(): SEOData {
    return {
      title: 'Ajaz Beig - Frontend Developer & DevOps Engineer | Portfolio & Digital Products',
      description: 'Expert Frontend Developer & DevOps Engineer specializing in Angular, React, AWS, Kubernetes, CI/CD. Browse premium digital products, courses, and development services.',
      keywords: 'frontend developer, devops engineer, angular, react, aws, kubernetes, docker, ci/cd, portfolio, digital products',
      url: 'https://ajazbeig.com',
      type: 'website',
      image: 'https://ajazbeig.com/assets/images/og-home.jpg',
      author: 'Ajaz Beig'
    };
  }

  getPortfolioSEO(): SEOData {
    return {
      title: 'Portfolio - Ajaz Beig | Frontend & DevOps Projects',
      description: 'Explore innovative web development and DevOps projects by Ajaz Beig. Featuring Angular applications, AWS infrastructure, Kubernetes deployments, and CI/CD implementations.',
      keywords: 'portfolio, web development projects, devops projects, angular applications, aws infrastructure, kubernetes',
      url: 'https://ajazbeig.com/portfolio',
      type: 'website',
      image: 'https://ajazbeig.com/assets/images/og-portfolio.jpg',
      author: 'Ajaz Beig'
    };
  }

  getProductsSEO(): SEOData {
    return {
      title: 'Digital Products - Ajaz Beig | Courses, Templates & Tools',
      description: 'Premium digital products for developers. Download eBooks, code templates, video courses, and development tools. DevOps guides, Angular templates, and more.',
      keywords: 'digital products, programming courses, code templates, ebooks, devops guides, angular templates, developer tools',
      url: 'https://ajazbeig.com/products',
      type: 'website',
      image: 'https://ajazbeig.com/assets/images/og-products.jpg',
      author: 'Ajaz Beig'
    };
  }

  getContactSEO(): SEOData {
    return {
      title: 'Contact Ajaz Beig - Hire Frontend Developer & DevOps Engineer',
      description: 'Get in touch with Ajaz Beig for your next project. Available for frontend development, DevOps consulting, and custom software solutions. Free consultation available.',
      keywords: 'hire frontend developer, hire devops engineer, consultation, custom development, freelance developer',
      url: 'https://ajazbeig.com/contact',
      type: 'website',
      image: 'https://ajazbeig.com/assets/images/og-contact.jpg',
      author: 'Ajaz Beig'
    };
  }

  getTermsSEO(): SEOData {
    return {
      title: 'Terms & Conditions - Ajaz Beig Digital Products & Services',
      description: 'Read the terms and conditions for digital products and services offered by Ajaz Beig. Legal information for customers and service agreements.',
      keywords: 'terms and conditions, legal, digital products terms, service agreement',
      url: 'https://ajazbeig.com/terms',
      type: 'article',
      author: 'Ajaz Beig'
    };
  }

  getPrivacySEO(): SEOData {
    return {
      title: 'Privacy Policy - Ajaz Beig | Data Protection & GDPR Compliance',
      description: 'Privacy policy explaining how Ajaz Beig collects, uses, and protects your personal information. GDPR and CCPA compliant data handling practices.',
      keywords: 'privacy policy, data protection, gdpr, ccpa, personal information, data security',
      url: 'https://ajazbeig.com/privacy',
      type: 'article',
      author: 'Ajaz Beig'
    };
  }

  getRefundSEO(): SEOData {
    return {
      title: 'Refund Policy - Ajaz Beig Digital Products | Money Back Guarantee',
      description: 'Refund policy for digital products and services. Learn about our money-back guarantee, refund eligibility, and return process for customer satisfaction.',
      keywords: 'refund policy, money back guarantee, digital product returns, customer satisfaction',
      url: 'https://ajazbeig.com/refund',
      type: 'article',
      author: 'Ajaz Beig'
    };
  }
}