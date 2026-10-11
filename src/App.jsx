import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const heroRef = useRef(null)
  const phoneRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    const phone = phoneRef.current
    const ok =
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
      window.matchMedia('(pointer:fine)').matches
    if (!ok || !hero || !phone) return

    const move = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      phone.style.transform = `rotateY(${-24 + x * 14}deg) rotateX(${5 - y * 10}deg) rotateZ(4deg)`
    }
    const leave = () => { phone.style.transform = '' }

    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)
    return () => {
      hero.removeEventListener('mousemove', move)
      hero.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      <header className="hero" id="top" ref={heroRef}>
        <div className="wrap">
          <div className="hero-copy">
            <a className="logo" href="#top" aria-label="KolvIQ home">
              <svg viewBox="0 0 40 40" fill="none" stroke="#6B2D5C" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 4c5 3 9 3.5 13 3.8v10c0 9-5.5 14.5-13 18-7.5-3.5-13-9-13-18v-10c4-.3 8-.8 13-3.8z" />
                <path d="M15 14v12M15 20l8-6M17.5 19 24 26" />
              </svg>
              <span>KOLVIQ<small>INSURANCE &middot; RISK &middot; TECH</small></span>
            </a>
            <h1>Making complex things <b>feel simpler</b></h1>
            <a className="btn" href="#services">Learn more</a>
          </div>

          <div className="stage" aria-hidden="true">
            <div className="phone" ref={phoneRef}>
              <div className="phone-body">
                <svg viewBox="0 0 132 150" fill="none">
                  <defs>
                    <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#fff" />
                      <stop offset="1" stopColor="#F0D0DF" />
                    </linearGradient>
                  </defs>
                  <path d="M66 4c14 8 36 11 58 13v52c0 40-26 64-58 77C34 133 8 109 8 69V17C30 15 52 12 66 4z" fill="url(#sg)" />
                  <path d="M42 72l17 17 33-37" stroke="#6B2D5C" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="bar b1"></span>
                <span className="bar b2"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="story" id="story">
          <div className="wrap">
            <div>
              <h2>Our Story</h2>
              <p>We believe that better understanding leads to better decisions. KolvIQ brings together thoughtful technology and accessible knowledge to simplify the way people work, learn, and navigate complexity.
We are building tools and ideas that make information more useful, processes more intuitive, and everyday challenges easier to solve.</p>
            </div>
            <div className="duo" aria-hidden="true">
              <div className="tile one">
                <p className="label">KolvIQ Workspace</p>
                <h3>Renewals, tracked</h3>
                <div className="chips">
                  <div className="chip">60 days <em>Notify</em></div>
                  <div className="chip">30 days <em>Follow up</em></div>
                  <div className="chip">14 days <em>Urgent</em></div>
                </div>
              </div>
              <div className="tile two">
                <p className="label">Risk Unpuzzled</p>
                <h3>The Traffic Trap</h3>
                <div className="rule"></div>
                <p>The big story, in plain language.</p>
                <span className="read">Read issue 01</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="wrap">
            <h2>Our Ecosystem</h2>
            <div className="cards">
              <a className="card" href="https://app.kolviq.com" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 44 44" aria-hidden="true">
                  <rect x="5" y="6" width="34" height="32" rx="4" />
                  <path d="M5 15h34M17 15v23" />
                </svg>
                <h3>KolvIQ Workspace</h3>
                <p>Organise clients, policies, renewals and claims in one place.</p>
              </a>
              <a className="card" href="https://riskunpuzzled.kolviq.com" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 44 44" aria-hidden="true">
                  <path d="M9 6h26a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H9z" />
                  <path d="M15 15h16M15 22h16M15 29h9" />
                </svg>
                <h3>Risk Unpuzzled</h3>
                <p>Insurance and risk explained through real stories and clear language.</p>
              </a>
              <a className="card" href="#connect">
                <svg viewBox="0 0 44 44" aria-hidden="true">
                  <path d="M6 10a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H20l-9 8v-8h-1a4 4 0 0 1-4-4z" />
                </svg>
                <h3>Work With Us</h3>
                <p>Partnerships, collaborations or just a question. Say hello.</p>
              </a>
            </div>
          </div>
        </section>

        <div className="band">
          <div className="wrap">
            <p><b>Knowledge</b> is only useful when people can understand it. We build the tools and the stories that <b>make that easier</b>.</p>
          </div>
        </div>

        <section className="connect" id="connect">
          <div className="wrap">
            <div>
              <h2>Connect with Us</h2>
              <ul className="socials">
                <li><a href="https://www.linkedin.com/company/kolviq/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/kolviqofficial/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
            <dl className="info">
              <div><dt>Email Address</dt><dd><a href="mailto:hello@kolviq.com">hello@kolviq.com</a></dd></div>
              <div><dt>Workspace</dt><dd><a href="https://app.kolviq.com" target="_blank" rel="noopener noreferrer">app.kolviq.com</a></dd></div>
              <div><dt>Publication</dt><dd><a href="https://riskunpuzzled.kolviq.com" target="_blank" rel="noopener noreferrer">riskunpuzzled.kolviq.com</a></dd></div>
            </dl>
          </div>
        </section>
      </main>

      <footer>&copy; 2026 KolvIQ</footer>
    </>
  )
}

export default App