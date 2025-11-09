import React, { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

// Simple IntersectionObserver to reveal elements with fade-up on scroll.
// Respects prefers-reduced-motion and staggers by 80ms via inline style delays set on elements.
const useRevealOnScroll = () => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))

    if (prefersReduced) {
      // If user prefers reduced motion, show elements immediately without animation
      elements.forEach((el) => {
        el.removeAttribute('data-reveal')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el, i) => {
      el.classList.add('reveal')
      el.style.transitionDelay = el.style.transitionDelay || `${i * 80}ms`
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}

function App() {
  useRevealOnScroll()

  return (
    <div className="min-h-screen bg-[#0b0f14] text-white selection:bg-emerald-400/30 selection:text-white">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded focus:bg-emerald-500 focus:px-3 focus:py-2 focus:text-[#0b0f14]"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0f14]/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <a href="#home" className="text-white font-semibold">Portfolio</a>
          <nav aria-label="Primary navigation" className="hidden sm:flex items-center gap-6">
            <a href="#about" className="text-white/80 hover:text-white transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)]">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)]">Projects</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)]">Skills</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-[#0b0f14] border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>

      {/* Animation utility styles injected here to keep files minimal and focused */}
      <style>
        {`
          .reveal { opacity: 0; transform: translateY(12px); }
          .reveal.reveal-in { opacity: 1; transform: translateY(0); }
          .reveal, .reveal.reveal-in {
            transition-property: opacity, transform;
            transition-duration: 300ms; /* 200–450ms range */
            transition-timing-function: cubic-bezier(.2,.9,.2,1);
          }
        `}
      </style>
    </div>
  )
}

export default App
