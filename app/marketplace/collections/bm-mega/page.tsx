import Catalog from '../../Catalog';

export default function Collection() {
  return <main>
    <div className="eyebrow">ANTVERSE · BMverse</div>
    <h1>BM Mega Collection</h1>
    <p>Explore ANTVERSE collectibles from the BMverse catalog snapshot.</p>
    <Catalog initialCollection="ANTVERSE" />
  </main>;
}
