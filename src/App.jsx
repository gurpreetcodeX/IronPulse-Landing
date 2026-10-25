import { useEffect, useState } from 'react'
import { ArrowRight, Check, Dumbbell, Flame, HeartPulse, Menu, Star, Users, X } from 'lucide-react'

const BRAND = 'IronPulse'
const WHATSAPP = '+91 9779452449' // change: country code + number, no + or spaces

const links = [['Programs', '#programs'], ['Pricing', '#pricing'], ['Trainers', '#trainers'], ['Reviews', '#reviews'], ['Contact', '#contact']]
const programs = [
  [Dumbbell, 'Strength Training', 'Build real strength with guided free-weight and machine training.'],
  [Flame, 'HIIT & Fat Burn', 'High-energy 45-minute sessions that burn fat and boost stamina.'],
  [HeartPulse, 'Yoga & Mobility', 'Improve flexibility, posture and recovery with calm, focused classes.'],
  [Users, 'Personal Coaching', 'One-to-one plans built around your body, goals and schedule.'],
]
const plans = [
  { name: 'Starter', price: '1,499', items: ['Gym floor access', '2 group classes a week', 'Locker facility'] },
  { name: 'Pro', price: '2,499', hot: true, items: ['Unlimited gym access', 'Unlimited group classes', 'Diet guidance', 'Monthly body check'] },
  { name: 'Elite', price: '4,999', items: ['Everything in Pro', 'Personal trainer, 3x a week', 'Custom workout plan', 'Priority booking'] },
]
const trainers = [['Arjun Mehta', 'Strength Coach', 'AM'], ['Simran Kaur', 'HIIT & Yoga Coach', 'SK'], ['Rohit Verma', 'Fitness Nutrition', 'RV']]
const reviews = [
  ['Karan S.', 'The trainers actually correct your form. I feel stronger within weeks.'],
  ['Neha P.', 'Clean gym, friendly team and classes that never feel boring.'],
  ['Amit R.', 'The personal plan fit around my job. Best decision this year.'],
]

const card = 'reveal hover:shadow-[0_0_40px_-10px_rgba(163,230,53,0.5)] rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50'
const btn = 'inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold transition duration-300 hover:-translate-y-0.5'
const label = 'reveal text-sm font-bold uppercase tracking-[0.25em] text-lime-400'
const title = 'reveal mt-3 font-display text-4xl font-extrabold uppercase leading-none sm:text-6xl'

export default function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  function send(event) {
    event.preventDefault()
    const f = new FormData(event.currentTarget)
    const text = `Hi ${BRAND}, I am ${f.get('name')} (phone: ${f.get('phone')}). I am interested in the ${f.get('plan')} plan and would like a free trial session.`
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0c] font-sans text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0a0c]/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-3xl font-extrabold uppercase tracking-wide">Iron<span className="text-lime-400">Pulse</span></a>
          <div className="hidden items-center gap-8 md:flex">
            {links.map(([name, href]) => <a key={href} href={href} className="relative text-sm text-white/70 transition hover:text-lime-400 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full">{name}</a>)}
          </div>
          <a href="#contact" className="hidden rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300 md:inline-block">Free trial</a>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">{open ? <X size={26} /> : <Menu size={26} />}</button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
            {links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[radial-gradient(60%_50%_at_75%_15%,rgba(163,230,53,0.2),transparent)]">
          <div className="grid-bg absolute inset-0" />
          <div className="float absolute -right-24 top-10 h-96 w-96 rounded-full bg-lime-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-32">
            <p className={`${label} up`}>Gym · HIIT · Yoga · Coaching</p>
            <h1 className="up mt-5 max-w-4xl font-display text-6xl font-extrabold uppercase leading-[0.92] sm:text-8xl lg:text-9xl">
              Forge a <span className="bg-gradient-to-r from-lime-300 to-emerald-400 bg-clip-text text-transparent">stronger</span> you.
            </h1>
            <p className="up mt-7 max-w-xl text-lg leading-8 text-white/70">Expert trainers, modern equipment and a community that pushes you further. Start with a free trial session.</p>
            <div className="up mt-10 flex flex-wrap gap-4">
              <a href="#contact" className={`${btn} pulse-ring bg-lime-400 text-black hover:bg-lime-300`}>Book free trial <ArrowRight size={18} /></a>
              <a href="#pricing" className={`${btn} border border-white/25 hover:border-lime-400`}>View plans</a>
            </div>
            <div className="up mt-16 flex flex-wrap gap-10 border-t border-white/10 pt-8">
              {[['4', 'Core programs'], ['6AM–10PM', 'Open daily'], ['Free', 'Trial session']].map(([v, l]) => (
                <div key={l}><p className="font-display text-4xl font-extrabold text-lime-400">{v}</p><p className="mt-1 text-sm text-white/60">{l}</p></div>
              ))}
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-white/10 bg-lime-400 py-4 text-black">
          <div className="marquee flex w-max gap-12 font-display text-2xl font-extrabold uppercase">
            {[0, 1].flatMap((k) => ['Strength', 'HIIT', 'Yoga', 'Coaching', 'Nutrition', 'Results'].map((w) => <span key={`${k}${w}`} className="flex items-center gap-12">{w}<span>✦</span></span>))}
          </div>
        </div>

        <section id="programs" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24">
          <p className={label}>What we offer</p>
          <h2 className={title}>Programs for every goal</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map(([Icon, name, text]) => (
              <article key={name} className={card}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400 text-black"><Icon size={24} /></span>
                <h3 className="mt-6 font-display text-2xl font-extrabold uppercase">{name}</h3>
                <p className="mt-3 leading-7 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="scroll-mt-16 bg-white/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className={label}>Membership</p>
            <h2 className={title}>Simple, honest pricing</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {plans.map((p) => (
                <article key={p.name} className={`reveal rounded-2xl border p-8 transition duration-300 hover:-translate-y-1 ${p.hot ? 'border-lime-400 bg-lime-400/10 shadow-[0_0_60px_-15px_rgba(163,230,53,0.6)] lg:scale-105' : 'border-white/10 bg-[#0a0a0c]'}`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-3xl font-extrabold uppercase">{p.name}</h3>
                    {p.hot && <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black">Most popular</span>}
                  </div>
                  <p className="mt-5"><span className="font-display text-6xl font-extrabold">₹{p.price}</span><span className="text-white/60"> / month</span></p>
                  <ul className="mt-7 space-y-3">
                    {p.items.map((i) => <li key={i} className="flex gap-3 text-white/80"><Check className="shrink-0 text-lime-400" size={20} />{i}</li>)}
                  </ul>
                  <a href="#contact" className={`${btn} mt-8 w-full ${p.hot ? 'bg-lime-400 text-black hover:bg-lime-300' : 'border border-white/25 hover:border-lime-400'}`}>Choose {p.name}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trainers" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24">
          <p className={label}>Your coaches</p>
          <h2 className={title}>Train with the best</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {trainers.map(([name, role, ini]) => (
              <article key={name} className={`${card} text-center`}>
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-lime-400 to-emerald-600 font-display text-4xl font-extrabold text-black">{ini}</div>
                <h3 className="mt-5 font-display text-2xl font-extrabold uppercase">{name}</h3>
                <p className="mt-1 text-white/60">{role}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="reviews" className="scroll-mt-16 bg-white/[0.03] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className={label}>Member stories</p>
            <h2 className={title}>Real results</h2>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {reviews.map(([name, text]) => (
                <article key={name} className={card}>
                  <div className="flex gap-1 text-lime-400">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}</div>
                  <p className="mt-5 leading-7 text-white/80">“{text}”</p>
                  <p className="mt-6 font-bold">{name}</p>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs text-white/40">Sample testimonials shown for layout purposes.</p>
          </div>
        </section>

        <section id="contact" className="mx-auto grid max-w-7xl scroll-mt-16 gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className={label}>Get started</p>
            <h2 className={title}>Your first session is on us.</h2>
            <p className="mt-6 max-w-md leading-8 text-white/70">Fill in your details and we will continue the chat on WhatsApp to book your free trial.</p>
          </div>
          <form onSubmit={send} className="reveal rounded-2xl border border-white/10 bg-white/[0.03] p-7 sm:p-9">
            {[['name', 'Full name', 'text'], ['phone', 'Phone number', 'tel']].map(([id, text, type]) => (
              <div key={id} className="mb-5">
                <label htmlFor={id} className="mb-2 block text-sm font-bold">{text}</label>
                <input id={id} name={id} type={type} required className="w-full rounded-lg border border-white/15 bg-[#0a0a0c] px-4 py-3 outline-none transition focus:border-lime-400" />
              </div>
            ))}
            <label htmlFor="plan" className="mb-2 block text-sm font-bold">Plan</label>
            <select id="plan" name="plan" defaultValue="Pro" className="w-full rounded-lg border border-white/15 bg-[#0a0a0c] px-4 py-3 outline-none transition focus:border-lime-400">
              {plans.map((p) => <option key={p.name}>{p.name}</option>)}
            </select>
            <button type="submit" className={`${btn} mt-7 w-full bg-lime-400 text-black hover:bg-lime-300`}>Book on WhatsApp <ArrowRight size={18} /></button>
            {sent && <p role="status" className="mt-4 text-sm text-white/60">WhatsApp should open with your message ready to send.</p>}
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} IronPulse Fitness. Portfolio concept project: all content is sample text.
      </footer>
    </div>
  )
}
