import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Data Security — Evalent',
  description: 'How Evalent protects student data. Encryption, access controls, infrastructure security, and data handling practices for international school admissions.',
}

const sections = [
  {
    id: 'overview',
    title: 'Overview',
    content: `Evalent handles sensitive personal data on behalf of schools — including student names, dates of birth, nationalities, and academic assessment responses. We take this responsibility seriously. This page describes the technical and organisational measures we use to protect that data.

We are honest about what we have and what we are working towards. We do not claim certifications we have not achieved.`,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: '🏗️',
    items: [
      {
        label: 'Hosting',
        detail: 'The Evalent application is hosted on Vercel, running on AWS infrastructure. All compute and storage operates within managed, enterprise-grade cloud environments with physical security controls, redundancy, and 24/7 monitoring maintained by AWS.',
      },
      {
        label: 'Database',
        detail: 'Student data, assessment responses, and school records are stored in Supabase (PostgreSQL on AWS). Data at rest is encrypted using AES-256. Supabase maintains SOC 2 Type II certification.',
      },
      {
        label: 'Data region',
        detail: 'The primary database region is eu-west-1 (Ireland). All data remains within AWS EU infrastructure. Schools requiring specific regional data residency should contact us.',
      },
      {
        label: 'Backups',
        detail: 'Database backups are taken automatically on a daily schedule with point-in-time recovery. Backups are encrypted and stored within the same regional infrastructure.',
      },
    ],
  },
  {
    id: 'encryption',
    title: 'Encryption',
    icon: '🔒',
    items: [
      {
        label: 'In transit',
        detail: 'All data transmitted between users and Evalent is encrypted using TLS 1.2 or higher. HTTPS is enforced on all endpoints — HTTP connections are automatically redirected. SSL certificates are managed and auto-renewed via Vercel.',
      },
      {
        label: 'At rest',
        detail: 'Data stored in the database is encrypted at rest using AES-256 encryption, managed by the underlying AWS/Supabase infrastructure.',
      },
      {
        label: 'Passwords',
        detail: 'User passwords are hashed using bcrypt with a cost factor of 12 before storage. Plaintext passwords are never stored or logged. Passwords must be a minimum of 12 characters.',
      },
      {
        label: 'Session tokens',
        detail: 'Authentication sessions use signed JWT tokens with an 8-hour expiry. Partner portal sessions also expire after 8 hours. Tokens are stored in httpOnly cookies, inaccessible to JavaScript.',
      },
    ],
  },
  {
    id: 'access',
    title: 'Access Controls',
    icon: '🛡️',
    items: [
      {
        label: 'School data isolation',
        detail: 'Each school account can only access its own data. API endpoints validate school identity on every request — it is not possible for one school to access another school’s students, assessments, or reports.',
      },
      {
        label: 'Role-based access',
        detail: 'The platform enforces role-based access control. School administrators have access only to their school’s data. Super-admin functions require a separate authenticated role that cannot be assumed by school users.',
      },
      {
        label: 'Database-level security',
        detail: 'Row-level security (RLS) is enabled on all tables containing student data, assessment responses, decisions, and user accounts. Direct database access is blocked for all application-level credentials.',
      },
      {
        label: 'Rate limiting',
        detail: 'Login and signup endpoints are rate-limited to prevent brute-force attacks. Repeated failed login attempts result in temporary lockout. Rate limiting is enforced at the infrastructure level via Upstash Redis.',
      },
      {
        label: 'Internal APIs',
        detail: 'Internal scoring and processing APIs require a shared secret header in addition to any authentication. These endpoints are not accessible from the public internet without the correct credentials.',
      },
    ],
  },
  {
    id: 'data-handling',
    title: 'Data Handling',
    icon: '📋',
    items: [
      {
        label: 'What we store',
        detail: 'Evalent stores student registration data (name, grade, date of birth, nationality, first language), assessment responses, AI-generated evaluation scores and narratives, and school decision records. We do not store payment card data — payments are processed by Paddle as Merchant of Record.',
      },
      {
        label: 'Who can access student data',
        detail: 'Student data is accessible only to authenticated users at the school that registered the student, and to Evalent staff for the purposes of support and platform operation. Data is never sold, shared with third parties for marketing purposes, or used to train AI models without explicit consent.',
      },
      {
        label: 'AI processing',
        detail: 'Assessment responses are processed by Anthropic’s Claude API to generate evaluation narratives and scores. Data sent to Anthropic is subject to their enterprise data processing terms. Anthropic does not use API data to train models by default. Evalent maintains a Data Processing Agreement with Anthropic.',
      },
      {
        label: 'Assessment delivery',
        detail: 'Student assessments are delivered via Jotform, an enterprise form platform. Student responses are transmitted to Jotform’s servers during assessment completion and then processed by Evalent’s scoring pipeline. Jotform is SOC 2 Type II certified.',
      },
      {
        label: 'Audit logging',
        detail: 'Sensitive actions — including student registration, assessment dispatch, and decision recording — are written to an immutable audit log with timestamp, actor identity, and action details. This supports accountability and investigation in the event of a dispute.',
      },
      {
        label: 'Retention',
        detail: 'School accounts and associated student data are retained for the duration of the subscription and for 12 months following cancellation, after which data is deleted. Schools may request earlier deletion by contacting us.',
      },
    ],
  },
  {
    id: 'application',
    title: 'Application Security',
    icon: '⚙️',
    items: [
      {
        label: 'Security headers',
        detail: 'All responses include security headers: X-Frame-Options (clickjacking protection), X-Content-Type-Options (MIME sniffing protection), Referrer-Policy, and Permissions-Policy. Content Security Policy is managed by Vercel’s edge infrastructure.',
      },
      {
        label: 'Input validation',
        detail: 'All API inputs are validated using Zod schema validation before processing. Unexpected or malformed inputs are rejected with appropriate error responses.',
      },
      {
        label: 'Dependency management',
        detail: 'Application dependencies are managed via npm with automated vulnerability scanning. Critical security updates are applied promptly.',
      },
      {
        label: 'Secret management',
        detail: 'API keys, database credentials, and other secrets are stored as environment variables in Vercel’s encrypted secrets store. Secrets are never committed to source control.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Certifications',
    icon: '📜',
    content: `We are transparent about our current compliance posture.`,
    items: [
      {
        label: 'GDPR',
        detail: 'Evalent operates as a Data Processor on behalf of schools, who act as Data Controllers. We are working towards a formal Data Processing Agreement (DPA) for all school customers. Schools with GDPR obligations should contact us to discuss their requirements.',
      },
      {
        label: 'Infrastructure certifications',
        detail: 'Our infrastructure providers hold relevant certifications: AWS (ISO 27001, SOC 2 Type II, ISO 27017, ISO 27018), Supabase (SOC 2 Type II), Vercel (SOC 2 Type II). These certifications cover the physical and infrastructure layer on which Evalent operates.',
      },
      {
        label: 'Penetration testing',
        detail: 'Formal penetration testing has not yet been conducted on the Evalent application layer. This is on our roadmap. Schools with specific requirements should contact us.',
      },
      {
        label: 'ISO 27001 / SOC 2',
        detail: 'Evalent does not currently hold ISO 27001 or SOC 2 certification at the application level. These are on our roadmap as the platform scales.',
      },
    ],
  },
  {
    id: 'incident',
    title: 'Incident Response',
    icon: '🚨',
    content: `In the event of a data breach or security incident affecting school or student data, Evalent will notify affected schools within 72 hours of becoming aware of the incident, in line with GDPR Article 33 requirements. Notification will include the nature of the incident, the categories of data affected, likely consequences, and measures taken or proposed.

To report a security vulnerability, please contact us at security@evalent.io. We aim to acknowledge reports within 24 hours and respond substantively within 5 business days.`,
  },
]

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* Hero */}
      <section className="bg-navy text-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-300 text-xs font-bold tracking-widest px-4 py-1.5 rounded-full mb-5">
            DATA SECURITY
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            How we protect<br />
            <span className="text-blue-300">student data.</span>
          </h1>
          <p className="text-blue-300 text-lg leading-relaxed max-w-2xl">
            Evalent handles sensitive information on behalf of schools. This page describes, plainly and accurately, the technical and organisational measures we use to protect it.
          </p>
          <p className="text-blue-400 text-sm mt-4">Last updated: March 2026</p>
        </div>
      </section>

      {/* Quick nav */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap gap-x-5 gap-y-1">
          {sections.filter(s => s.id !== 'overview').map(s => (
            <a key={s.id} href={`#${s.id}`} className="text-xs text-gray-500 hover:text-navy transition-colors">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-14 space-y-14">

        {/* Overview */}
        <div>
          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{sections[0].content}</p>
        </div>

        {/* Sections */}
        {sections.slice(1).map(section => (
          <div key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-black text-navy tracking-tight mb-1">
              {section.title}
            </h2>
            <div className="h-0.5 w-10 bg-brand mb-5" />

            {section.content && (
              <p className="text-gray-600 text-sm leading-relaxed mb-5 whitespace-pre-line">{section.content}</p>
            )}

            {section.items && (
              <div className="space-y-5">
                {section.items.map(item => (
                  <div key={item.label}>
                    <div className="text-sm font-bold text-navy mb-1">{item.label}</div>
                    <div className="text-sm text-gray-600 leading-relaxed">{item.detail}</div>
                  </div>
                ))}
              </div>
            )}

            {section.table && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest py-2 pr-4">Provider</th>
                      <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest py-2 pr-4">Purpose</th>
                      <th className="text-left text-xs font-bold text-gray-400 uppercase tracking-widest py-2">Region</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {section.table.map(row => (
                      <tr key={row.name}>
                        <td className="py-3 pr-4 font-medium text-gray-900">{row.name}</td>
                        <td className="py-3 pr-4 text-gray-600">{row.purpose}</td>
                        <td className="py-3 text-gray-500">{row.region}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        {/* Contact */}
        <div className="bg-navy rounded-2xl p-8 text-center">
          <h2 className="text-xl font-black text-white mb-2">Questions about data security?</h2>
          <p className="text-blue-300 text-sm mb-5 leading-relaxed">
            We are happy to discuss our security practices with school IT teams, procurement teams, or data protection officers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="mailto:security@evalent.io" className="inline-block bg-white text-navy font-bold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
              Email security@evalent.io
            </a>
            <a href="mailto:hello@evalent.io" className="inline-block bg-white/10 border border-white/20 text-white font-medium text-sm px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
              General enquiries
            </a>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
