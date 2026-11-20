import Catalog from '../../Catalog';

export default function Collection() {
  return <main>
    <div className="eyebrow">BMverse · Digital jewels</div>
    <h1>BMJewels</h1>
    <p>Explore the rings and necklaces in the BMJewels showcase.</p>
    <Catalog initialCollection="BMJewels" />
  </main>;
}
