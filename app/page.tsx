import { ArrowRight, Check, Compass, Gauge, Wrench } from 'lucide-react';

const problems = [
  'Inquiries get slow or inconsistent responses',
  'Good prospects disappear after the first conversation',
  'Follow-up lives in too many places—or never happens',
  'AI tools are added without a clear business reason',
];

const services = [
  { icon: Compass, number: '01', title: 'Find the gap', text: 'We trace how customers find you, decide, inquire, and move forward—then locate where momentum is being lost.' },
  { icon: Gauge, number: '02', title: 'Choose what matters', text: 'We separate useful improvements from expensive distractions and prioritize the smallest fix with real potential.' },
  { icon: Wrench, number: '03', title: 'Make it work', text: 'When implementation makes sense, we build the workflow, tool, or practical AI system and help put it into use.' },
];

function RiverMark() {
  return <svg aria-hidden="true" viewBox="0 0 44 44" className="river-mark"><path d="M5 25c6-5 11-5 17 0s11 5 17 0" /><path d="M5 17c6-5 11-5 17 0s11 5 17 0" /></svg>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Rabbit River Systems home"><RiverMark /><span><b>Rabbit River</b><small>Systems</small></span></a>
        <nav aria-label="Primary navigation"><a href="#approach">Approach</a><a href="#work">What we do</a><a href="#about">About</a></nav>
        <a className="button button-small" href="mailto:kevin@rabbitriversystems.com?subject=Smart%20Sales%20Scan">Start a conversation <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Practical systems for owner-led businesses</p>
          <h1>Find what’s being missed. <em>Fix what matters.</em></h1>
          <p className="hero-lede">Rabbit River helps good businesses recover lost opportunities, improve customer follow-up, and put useful AI and technology to work—without unnecessary complexity.</p>
          <div className="hero-actions">
            <a className="button" href="mailto:kevin@rabbitriversystems.com?subject=Smart%20Sales%20Scan">Request a Smart Sales Scan <ArrowRight size={18} /></a>
            <a className="text-link" href="#approach">See how it works <span>↓</span></a>
          </div>
          <div className="trust-line"><span>Founder-led</span><i /><span>40+ years across technology &amp; sales</span><i /><span>Pacific Northwest</span></div>
        </div>

        <aside className="signal-card" aria-label="Common signs of missed opportunity">
          <div className="card-topline"><span>Signals we look for</span><span className="live-dot">In plain sight</span></div>
          <h2>Good businesses lose opportunities in ordinary places.</h2>
          <ul>{problems.map((problem) => <li key={problem}><Check size={16} />{problem}</li>)}</ul>
          <p>Most are fixable without rebuilding the whole business.</p>
        </aside>
        <div className="river-lines" aria-hidden="true"><span /><span /><span /></div>
      </section>

      <section className="approach" id="approach">
        <div className="section-heading">
          <p className="eyebrow">The Smart Sales Scan</p>
          <h2>A clear first step, before a big commitment.</h2>
          <p>We examine the path from first impression to next step. You get a practical view of what is getting in the way—and what is worth doing about it.</p>
        </div>
        <div className="service-grid" id="work">
          {services.map(({ icon: Icon, number, title, text }) => <article key={number}><div className="service-meta"><Icon size={20} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="principle" id="about">
        <div><p className="eyebrow">Our operating principle</p><h2>The goal is not the largest project.</h2></div>
        <blockquote>“The goal is to find the smallest useful fix that can make a meaningful difference.”</blockquote>
        <p>Rabbit River Systems is led by Kevin Butler, a Navy veteran whose career spans advanced electronics, systems engineering, enterprise technology, and more than 25 years in quota-carrying sales.</p>
      </section>

      <section className="final-cta">
        <p className="eyebrow">What are you trying to improve?</p><h2>Let’s find the next useful move.</h2>
        <p>Tell us what feels harder than it should, or where opportunities may be slipping through.</p>
        <a className="button button-light" href="mailto:kevin@rabbitriversystems.com?subject=Let%27s%20talk">Start a conversation <ArrowRight size={18} /></a>
      </section>

      <footer><a className="brand" href="#top"><RiverMark /><span><b>Rabbit River</b><small>Systems</small></span></a><p>Practical systems for finding, winning, and serving customers.</p><span>© 2026 Rabbit River Systems</span></footer>
    </main>
  );
}
