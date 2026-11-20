import Link from 'next/link';
import { modules } from '../data/modules';

export default function Home() {
  return <>
    <section className="platform-hero" aria-labelledby="hero-title">
      <div className="hero-inner">
        <div className="eyebrow">BMverse · Platform v2.4.2</div>
        <h1 id="hero-title">Enter Cyber City</h1>
        <p>Explore the BMverse platform and meet the digital collectibles of ANTVERSE and BMJewels.</p>
        <Link className="button" href="/marketplace">Browse NFT collections</Link>
      </div>
    </section>
    <main>
      <h2>Platform modules</h2>
      <section className="grid">
        <Link href="/marketplace" className="card"><div className="content"><h2>NFT Marketplace</h2><p>Browse ANTVERSE and BMJewels.</p></div></Link>
        {Object.entries(modules).map(([slug, module]) => <Link href={`/${slug}`} key={slug} className="card">
          <div className="content"><h2>{module.title}</h2><p>{module.description}</p></div>
        </Link>)}
      </section>
    </main>
  </>;
}
