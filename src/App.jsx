
import './App.css';

const destinations = [
  {
    number: '01',
    name: 'KolvIQ Workspace',
    category: 'DIGITAL TOOLS',
    description:
      'A more organised way to manage insurance work, keep track of responsibilities, and bring clarity to everyday workflows.',
    link: 'https://app.kolviq.com',
    className: 'workspace',
  },
  {
    number: '02',
    name: 'Risk Unpuzzled',
    category: 'INSURANCE & RISK PUBLICATION',
    description:
      'Making insurance, claims, and everyday risk easier to understand through practical insights and clear explanations.',
    link: 'https://riskunpuzzled.kolviq.com',
    className: 'publication',
  },
];

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="KolvIQ home">
          <span className="brand-mark">K</span>
          <span>Kolv<span className="brand-iq">IQ</span></span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#ventures">Our ventures</a>
          <a className="nav-contact" href="mailto:hello@kolviq.com">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" />
            CLARITY FOR COMPLEX WORK
          </p>

          <h1>
            Making complex things
            <span className="headline-accent"> feel simpler.</span>
          </h1>

          <p className="hero-description">
            KolvIQ builds practical digital tools and useful resources that
            bring clarity to work, insurance, and risk.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#ventures">
              Explore KolvIQ <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#about">
              Get to know us <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Thoughtfully built. Practically useful.
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract KolvIQ brand illustration">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-card card-back">
            <span className="mini-label">IDEAS INTO ACTION</span>
            <span className="card-line line-long" />
            <span className="card-line line-short" />
            <span className="card-symbol">↗</span>
          </div>
          <div className="art-card card-front">
            <span className="art-monogram">K<span>IQ</span></span>
            <span className="mini-label">THINK CLEARER.</span>
            <span className="mini-label">WORK SMARTER.</span>
          </div>
          <span className="floating-dot dot-one" />
          <span className="floating-dot dot-two" />
          <span className="floating-dot dot-three" />
        </div>

        <div className="hero-index">
          <span>01</span>
          <span className="index-rule" />
          <span>IDEAS, MADE USEFUL</span>
        </div>
      </section>

      <section className="ventures section-wrap" id="ventures">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHAT WE'RE BUILDING</p>
            <h2>Two ways to make sense of complexity.</h2>
          </div>
          <p className="section-intro">
            From practical tools to accessible knowledge, each venture has a
            simple purpose: make things easier to navigate.
          </p>
        </div>

        <div className="venture-grid">
          {destinations.map((item) => (
            <article
              className={`venture-card ${item.className}`}
              key={item.name}
              id={item.className === 'workspace' ? 'workspace' : 'risk-unpuzzled'}
            >
              <div className="venture-topline">
                <span>{item.category}</span>
                <span className="venture-number">{item.number}</span>
              </div>

              <div className="venture-icon" aria-hidden="true">
                {item.className === 'workspace' ? '▦' : '✳'}
              </div>

              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <a className="venture-link" href={item.link}>
                {item.className === 'workspace'
                  ? 'Workspace overview'
                  : 'Explore the publication'}
                <span aria-hidden="true">↗</span>
              </a>

              <span className="venture-decoration" aria-hidden="true">
                {item.className === 'workspace' ? 'K' : 'R'}
              </span>
            </article>
          ))}
        </div>
        <p className="availability-note">
          Our ventures are evolving. More details and resources will be added
          as they become available.
        </p>
      </section>

      <section className="about-section" id="about">
        <div className="about-inner">
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h2>
            Less confusion.
            <br />
            More <span>understanding.</span>
          </h2>
          <p className="about-description">
            We believe useful technology and clear information should make
            everyday work easier, not more complicated. KolvIQ is building
            thoughtful solutions around that belief, starting with insurance
            workflows and accessible risk knowledge.
          </p>
          <a className="about-email" href="mailto:hello@kolviq.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="about-stamp" aria-hidden="true">
          <span>BUILT WITH</span>
          <strong>CLARITY</strong>
          <span>AND PURPOSE · KOLVIQ</span>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">K</span>
          <span>Kolv<span className="brand-iq">IQ</span></span>
        </a>
        <p>Clarity for complex work.</p>
        <div className="footer-links">
          <a href="#ventures">Our ventures</a>
          <a href="mailto:hello@kolviq.com">Contact</a>
        </div>
        <span className="copyright">
          © {new Date().getFullYear()} KolvIQ. All rights reserved.
        </span>
      </footer>
    </main>
  );
}

export default App;