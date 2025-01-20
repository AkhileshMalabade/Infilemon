import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sitemap',
  template: '',
})
export class SitemapComponent {
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const sitemap = this.generateSitemap();
    this.downloadSitemap(sitemap);
  }

  generateSitemap(): string {
    const domain = 'https://infilemon.com';
    const staticRoutes = [
      { path: '', priority: '1.0', changefreq: 'daily' },
      { path: 'services', priority: '0.8', changefreq: 'weekly' },
      { path: 'about', priority: '0.6', changefreq: 'monthly' },
      { path: 'contact', priority: '0.6', changefreq: 'monthly' },
      { path: 'blog', priority: '0.7', changefreq: 'weekly' },
      { path: 'portfolio', priority: '0.5', changefreq: 'monthly' },
      { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { path: 'terms-conditions', priority: '0.3', changefreq: 'yearly' },
      { path: 'refund-cancelation', priority: '0.3', changefreq: 'yearly' },
      { path: 'careers', priority: '0.6', changefreq: 'monthly' },
    ];

    // Dynamic Routes
    const dynamicRoutes = [
      { path: 'services/service1', priority: '0.8', changefreq: 'weekly' },
      { path: 'blog/blog-post-id', priority: '0.7', changefreq: 'weekly' },
    ];

    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    allRoutes.forEach((route) => {
      sitemapXML += `
        <url>
          <loc>${domain}/${route.path}</loc>
          <changefreq>${route.changefreq}</changefreq>
          <priority>${route.priority}</priority>
        </url>`;
    });

    sitemapXML += '\n</urlset>';
    return sitemapXML;
  }

  downloadSitemap(content: string): void {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = this.sanitizer.bypassSecurityTrustUrl(url) as string;
    a.download = 'sitemap.xml';
    a.click();
  }
}
