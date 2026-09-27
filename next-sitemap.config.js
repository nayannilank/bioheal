/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bioheal.co.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/coming-soon', '/design-system', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/coming-soon', '/design-system'],
      },
    ],
  },
  transform: async (config, path) => {
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() }
    }
    if (['/about', '/services', '/conditions', '/contact'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() }
    }
    if (path.startsWith('/conditions/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() }
    }
    return { loc: path, changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() }
  },
}
