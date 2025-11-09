import React from 'react'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#0b0f14] text-white"
      aria-label="Introductory section"
    >
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
        <div className="text-center">
          <p
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur transition-colors duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            data-reveal
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Available for freelance work
          </p>

          <h1
            className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-white"
            data-reveal
          >
            Building elegant, performant web experiences.
          </h1>

          <p
            className="mx-auto mt-5 max-w-2xl text-base sm:text-lg text-white/70"
            data-reveal
          >
            I’m a front‑end engineer crafting delightful, accessible interfaces with a focus on motion, clarity, and speed.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3" data-reveal>
            <a
              href="#projects"
              className="group rounded-lg bg-emerald-500/90 px-5 py-3 text-sm font-medium text-[#0b0f14] shadow-lg shadow-emerald-500/20 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="group rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-0.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Subtle radial accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15),transparent_60%)]" />
      </div>
    </section>
  )
}

export default Hero
