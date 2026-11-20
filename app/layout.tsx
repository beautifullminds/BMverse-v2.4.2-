import './style.css';
import Link from 'next/link';

export const metadata = {
  title: 'BMverse v2.4.2 | Cyber City',
  description: 'Explore the BMverse platform preview and its ANTVERSE and BMJewels NFT collections.',
};

const routes = [
  ['Explore', '/explore'], ['Play', '/play'], ['Learn', '/learn'],
  ['Marketplace', '/marketplace'], ['DEX', '/dex'], ['Community', '/community'],
  ['Dashboard', '/dashboard'], ['Studio', '/studio'], ['Admin', '/admin'],
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#content">Skip to content</a>
    <header><Link className="brand" href="/">BM<span>VERSE</span></Link>
      <nav aria-label="Platform">{routes.map(([name, url]) => <Link key={url} href={url}>{name}</Link>)}</nav>
      <span className="pill">v2.4.2 · Preview</span>
    </header>
    <div id="content">{children}</div>
    <footer>
      <div className="footer-grid">
        <div><Link className="brand" href="/">BM<span>VERSE</span></Link><p>Platform preview v2.4.2</p></div>
        <div><h2>Collections</h2><Link href="/marketplace/collections/bm-mega">ANTVERSE</Link><Link href="/marketplace/collections/bm-jewels">BMJewels</Link></div>
        <div><h2>BMverse</h2><a href="https://bmverse.best/#characters">Cyber City characters</a><a href="https://x.com/bmverseio">X</a><a href="https://github.com/beautifullminds">GitHub</a></div>
      </div>
    </footer>
  </body></html>;
}
