import React from 'react'

const About = () => {
  return (
    <section id="about" className="bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5" data-reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
            <p className="mt-3 text-white/70">
              I specialize in modern, accessible interfaces with a strong focus on animation and performance. I’ve helped startups and teams ship polished products that scale.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Highlights">
            {[
              { title: 'Design Systems', desc: 'Crafting cohesive UI kits and tokens.' },
              { title: 'Performance', desc: 'Auditing, optimizing, and shipping fast.' },
              { title: 'Accessibility', desc: 'WCAG-compliant experiences for everyone.' },
              { title: 'Motion', desc: 'Micro-interactions with tasteful motion.' },
            ].map((item, idx) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-0.5 hover:bg-white/[0.08]"
                style={{ transitionDelay: `${idx * 80}ms` }}
                data-reveal
              >
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
