import { MetadataRoute } from 'next'

const BASE = 'https://www.evalent.io'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes = [
    // Core
    { url: '/',                           priority: 1.0,  changeFrequency: 'weekly'  as const },
    { url: '/pricing',                    priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/about',                      priority: 0.7,  changeFrequency: 'monthly' as const },
    // Features
    { url: '/features',                   priority: 0.9,  changeFrequency: 'monthly' as const },
    { url: '/features/registration',      priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/dashboard',         priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/assessment',        priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/reports',           priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/decisions',         priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/strategy',          priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/features/team',              priority: 0.8,  changeFrequency: 'monthly' as const },
    // Why Evalent
    { url: '/why',                        priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/why/evaluation',             priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/transparency',           priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/defensibility',          priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/wellbeing',              priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/conversion',             priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/data-security',          priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/why/decision-making',        priority: 0.7,  changeFrequency: 'monthly' as const },
    // Curricula
    { url: '/curricula',                  priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/curricula/ib',               priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/curricula/british',          priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/curricula/american',         priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/curricula/australian',       priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/curricula/new-zealand',      priority: 0.7,  changeFrequency: 'monthly' as const },
    // Regions
    { url: '/international',              priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/uk',                         priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/usa',                        priority: 0.8,  changeFrequency: 'monthly' as const },
    { url: '/australia',                  priority: 0.7,  changeFrequency: 'monthly' as const },
    { url: '/new-zealand',                priority: 0.7,  changeFrequency: 'monthly' as const },
    // Legal
    { url: '/legal/privacy',              priority: 0.4,  changeFrequency: 'yearly'  as const },
    { url: '/legal/terms',                priority: 0.4,  changeFrequency: 'yearly'  as const },
    { url: '/legal/cookies',              priority: 0.4,  changeFrequency: 'yearly'  as const },
    { url: '/legal/refunds',              priority: 0.4,  changeFrequency: 'yearly'  as const },
    // Security
    { url: '/security',                   priority: 0.6,  changeFrequency: 'monthly' as const },
    // Partners
    { url: '/partners',                   priority: 0.7,  changeFrequency: 'monthly' as const },
    // Blog
    { url: '/blog',                       priority: 0.7,  changeFrequency: 'weekly'  as const },
    { url: '/faq',                        priority: 0.8,  changeFrequency: 'monthly' as const },
  ]

  return routes.map(route => ({
    url: `${BASE}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
