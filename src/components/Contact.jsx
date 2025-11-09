import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0b0f14] text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mb-8 sm:mb-10" data-reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <p className="mt-2 text-white/70">Have a project in mind? Let’s talk.</p>
        </div>

        <form
          className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault()
            const form = e.currentTarget
            const data = new FormData(form)
            const name = data.get('name')
            alert(`Thanks, ${name}! I will get back to you shortly.`)
            form.reset()
          }}
        >
          <div className="sm:col-span-1" data-reveal>
            <label htmlFor="name" className="block text-sm text-white/80">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)] focus:border-emerald-400"
              placeholder="Jane Doe"
            />
          </div>
          <div className="sm:col-span-1" data-reveal style={{ transitionDelay: '80ms' }}>
            <label htmlFor="email" className="block text-sm text-white/80">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)] focus:border-emerald-400"
              placeholder="jane@example.com"
            />
          </div>
          <div className="sm:col-span-2" data-reveal style={{ transitionDelay: '160ms' }}>
            <label htmlFor="message" className="block text-sm text-white/80">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors duration-200 ease-[cubic-bezier(.2,.9,.2,1)] focus:border-emerald-400"
              placeholder="Tell me a bit about your project..."
            />
          </div>
          <div className="sm:col-span-2" data-reveal style={{ transitionDelay: '240ms' }}>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500/90 px-5 py-3 text-sm font-medium text-[#0b0f14] shadow-lg shadow-emerald-500/20 transition-all duration-300 ease-[cubic-bezier(.2,.9,.2,1)] hover:-translate-y-0.5 hover:bg-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
