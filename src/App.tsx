import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { Github, Linkedin, Send, Mail, Phone, ExternalLink, ArrowDown, Menu, X } from 'lucide-react'
import { social, projects, skills, services, journey, type Project } from './data'

const nav = ['about', 'skills', 'projects', 'services', 'journey', 'contact']

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current!
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect() } }, { threshold: 0.12 })
    io.observe(el); return () => io.disconnect()
  }, [])
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = ref.current!, ctx = c.getContext('2d')!
    const n = innerWidth < 700 ? 30 : 70
    const ps = Array.from({ length: n }, () => ({ x: Math.random(), y: Math.random(), v: 0.0002 + Math.random() * 0.0005, r: Math.random() * 1.6 + 0.4 }))
    let raf = 0
    const size = () => { c.width = innerWidth; c.height = innerHeight }
    size(); addEventListener('resize', size)
    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      for (const p of ps) { p.y -= p.v; if (p.y < 0) p.y = 1; ctx.fillStyle = 'rgba(180,200,255,.55)'; ctx.beginPath(); ctx.arc(p.x * c.width, p.y * c.height, p.r, 0, 6.3); ctx.fill() }
      raf = requestAnimationFrame(tick)
    }
    tick(); return () => { cancelAnimationFrame(raf); removeEventListener('resize', size) }
  }, [])
  return <canvas ref={ref} className="particles" aria-hidden="true" />
}

function Tilt({ children, className = '' }: { children: ReactNode; className?: string }) {
  const move = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget, r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${(0.5 - y) * 8}deg`); el.style.setProperty('--ry', `${(x - 0.5) * 8}deg`)
    el.style.setProperty('--mx', `${x * 100}%`); el.style.setProperty('--my', `${y * 100}%`)
  }
  const leave = (e: MouseEvent<HTMLElement>) => { e.currentTarget.style.setProperty('--rx', '0deg'); e.currentTarget.style.setProperty('--ry', '0deg') }
  return <article className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>{children}</article>
}

function ProjectCard({ p }: { p: Project }) {
  const [open, setOpen] = useState(false)
  return (
    <Tilt className={p.featured ? 'project featured' : 'project'}>
      <div className="preview">
        {p.image ? <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" /> : <div className="ph"><span>{p.name}</span><small>Screenshot coming soon</small></div>}
      </div>
      <div className="pbody">
        {p.featured && <span className="badge">Featured project</span>}
        <h3>{p.name}</h3><p>{p.summary}</p>
        <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
        <button className="link" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Hide details' : 'View details'}</button>
        {open && <div className="details">
          <h4>Problem it solves</h4><p>{p.problem}</p>
          <h4>Main features</h4><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul>
          <h4>My contribution</h4><p>{p.contribution}</p>
        </div>}
        <div className="row">
          <a className="btn small" href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>
          {p.live && <a className="btn small ghost" href={p.live} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
        </div>
      </div>
    </Tilt>
  )
}

export default function App() {
  const [active, setActive] = useState('home'), [menu, setMenu] = useState(false), [loaded, setLoaded] = useState(false)
  const glow = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 900)
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('section[id]').forEach(s => io.observe(s))
    const mm = (e: globalThis.MouseEvent) => glow.current?.style.setProperty('transform', `translate(${e.clientX - 150}px,${e.clientY - 150}px)`)
    addEventListener('mousemove', mm)
    return () => { clearTimeout(t); io.disconnect(); removeEventListener('mousemove', mm) }
  }, [])
  const send = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const f = new FormData(e.currentTarget)
    location.href = `mailto:${social.email}?subject=${encodeURIComponent(`Portfolio message from ${f.get('name')}`)}&body=${encodeURIComponent(`${f.get('message')}\n\nReply to: ${f.get('email')}`)}`
  }
  return (
    <>
      <div className={`loader ${loaded ? 'done' : ''}`} aria-hidden="true"><img src="/logo.jpg" width="120" height="120" alt="" /></div>
      <div className="glow" ref={glow} aria-hidden="true" /><Particles />
      <header className="nav">
        <a href="#home" className="brand" aria-label="Yisak home"><img src="/logo.jpg" width="38" height="38" alt="Yisak logo" /><span>Yisak</span></a>
        <nav className={menu ? 'open' : ''} aria-label="Primary">
          {nav.map(n => <a key={n} href={`#${n}`} className={active === n ? 'active' : ''} onClick={() => setMenu(false)}>{n}</a>)}
        </nav>
        <button className="burger" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X /> : <Menu />}</button>
      </header>
      <main>
        <section id="home" className="hero">
          <div className="orb o1" /><div className="orb o2" />
          <div className="shape s1" aria-hidden="true" /><div className="shape s2" aria-hidden="true" />
          <div className="hero-in">
            <div className="hero-logo"><div className="ring" /><img src="/logo.jpg" width="320" height="320" alt="Yisak Asrat Indale logo" fetchPriority="high" /></div>
            <div>
              <p className="eyebrow">Software Engineering Student · Full-Stack · AI Applications</p>
              <h1>Turning Ideas Into <span className="grad">Intelligent Digital Experiences.</span></h1>
              <p className="lead">I'm Yisak Asrat Indale, a Software Engineering student and developer passionate about building full-stack applications, AI-powered systems, and meaningful digital products.</p>
              <div className="row">
                <a className="btn" href="#projects">View My Work</a><a className="btn ghost" href="#contact">Contact Me</a>
                <a className="icon" href={social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a className="icon" href={social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              </div>
            </div>
          </div>
          <a href="#about" className="scroll" aria-label="Scroll down"><ArrowDown /></a>
        </section>

        <section id="about"><Reveal><h2>About me</h2>
          <p className="big">I'm a Software Engineering student at Addis Ababa Science and Technology University (AASTU) who enjoys turning ideas into working software.</p>
          <p>I learn by building and deploying real applications. My interests include full-stack development, AI integration, Retrieval-Augmented Generation, backend engineering, API development and database systems. I value continuous learning, experimentation and solving problems independently.</p></Reveal></section>

        <section id="skills"><h2>Skills & technologies</h2>
          <div className="grid">{Object.entries(skills).map(([k, v], i) => <Reveal key={k} delay={i * 80}><div className="card glass"><h3>{k}</h3><div className="tags">{v.map(t => <span key={t}>{t}</span>)}</div></div></Reveal>)}</div></section>

        <section id="projects"><h2>Featured projects</h2>
          <div className="projects">{projects.map((p, i) => <Reveal key={p.name} delay={(i % 2) * 100}><ProjectCard p={p} /></Reveal>)}</div></section>

        <section id="services"><h2>What I can build</h2>
          <div className="grid">{services.map((s, i) => <Reveal key={s} delay={i * 50}><div className="card glass service"><span className="num">0{i + 1}</span><p>{s}</p></div></Reveal>)}</div>
          <Reveal><a className="btn" href="#contact">Let's work together</a></Reveal></section>

        <section id="journey"><h2>My development journey</h2>
          <ol className="timeline">{journey.map((j, i) => <li key={j.title}><Reveal delay={i * 80}>{j.date && <small>{j.date}</small>}<h3>{j.title}</h3><p>{j.text}</p></Reveal></li>)}</ol></section>

        <section id="contact"><Reveal><h2>Let's talk</h2>
          <div className="contact">
            <div>
              <p className="big">{social.name}</p>
              <a className="cl" href={`mailto:${social.email}`}><Mail size={18} /> {social.email}</a>
              <a className="cl" href={`tel:${social.phone}`}><Phone size={18} /> {social.phone}</a>
              <div className="row">
                <a className="btn small" href={social.telegram} target="_blank" rel="noreferrer"><Send size={16} /> Telegram</a>
                <a className="btn small ghost" href={social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                <a className="btn small ghost" href={social.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
              </div>
            </div>
            <form className="glass card" onSubmit={send}>
              <label>Name<input name="name" required /></label>
              <label>Email<input name="email" type="email" required /></label>
              <label>Message<textarea name="message" rows={4} required /></label>
              <button className="btn" type="submit">Send via email</button>
            </form>
          </div></Reveal></section>
      </main>
      <footer>
        <img src="/logo.jpg" width="44" height="44" alt="Yisak logo" />
        <p>Building practical software, one project at a time.</p>
        <div className="row">{nav.map(n => <a key={n} href={`#${n}`}>{n}</a>)}</div>
        <p className="copy">© {new Date().getFullYear()} {social.name}</p>
      </footer>
    </>
  )
}
