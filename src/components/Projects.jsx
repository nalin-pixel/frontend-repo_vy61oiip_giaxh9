import React from 'react'

const projects = [
  {
    title: 'Interactive Dashboard',
    desc: 'A performant, accessible analytics dashboard with live charts and dark mode.',
    tags: ['React', 'Tailwind', 'ARIA'],
    img: 'https://images.unsplash.com/photo-1551281044-8c5f9cdb91f3?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'E‑commerce Experience',
    desc: 'End-to-end storefront with smooth micro-interactions and optimized LCP.',
    tags: ['Next.js', 'Stripe', 'A11y'],
    img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Marketing Microsite',
    desc: 'Animated product narrative with scroll-based reveals and high contrast.',
    tags: ['Framer Motion', 'SEO', 'Performance'],
    img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-8 sm:mb-10" data-reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">Selected Projects</h2>
          <p className="mt-2 text-white/70">A snapshot of things I’ve recently built.</p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {projects.map((p, idx) => (
            <li key={p.title} className="group" data-reveal style={{ transitionDelay: `${idx * 80}ms` }}>
              <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/30 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-1 hover:shadow-2xl focus-within:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={`${p.img}&sat=-30`}
                    alt="Project preview"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 ease-[cubic-bezier(.2,.9,.2,1)] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f14] to-transparent opacity-60" aria-hidden="true" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {p.tags.map(tag => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Projects
