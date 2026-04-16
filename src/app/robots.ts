import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/demo'],
      },
    ],
    sitemap: 'https://www.evalent.io/sitemap.xml',
    host: 'https://www.evalent.io',
  }
}
