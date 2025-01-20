const fs = require('fs');

const domain = 'https://infilemon.com';
const routes = [
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

const dynamicRoutes = [
  { path: 'services/service1', priority: '0.8', changefreq: 'weekly' },
  { path: 'blog/blog-post-id', priority: '0.7', changefreq: 'weekly' },
];

const allRoutes = [...routes, ...dynamicRoutes];
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

// Write the sitemap to the `src/assets` folder
fs.writeFileSync('src/assets/sitemap.xml', sitemapXML, 'utf8');
console.log('Sitemap generated successfully!');
