import React from 'react'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Accessibility (WCAG)',
  'Performance Auditing',
  'Node.js',
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-8 sm:mb-10" data-reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          <p className="mt-2 text-white/70">A selection of tools and disciplines I use regularly.</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3" role="list" aria-label="Skills list">
          {skills.map((s, idx) => (
            <li
              key={s}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 shadow-lg shadow-black/20 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-0.5 hover:bg-white/10"
              data-reveal
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
