'use client';

import { useRef, useState } from 'react';
import catalog from '../../data/catalog.json';

type Item = (typeof catalog)[number];
const collections = ['All collections', 'ANTVERSE', 'BMJewels'];

function Artwork({ item }: { item: Item }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="nft-art">
      {item.image && !failed
        ? <img src={`/platform/${item.image}`} alt={item.name} loading="lazy" onError={() => setFailed(true)} />
        : <span>Artwork unavailable</span>}
    </div>
  );
}

export default function Catalog({ initialCollection = collections[0] }) {
  const [collection, setCollection] = useState(initialCollection);
  const [category, setCategory] = useState('All categories');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Item>();
  const dialog = useRef<HTMLDialogElement>(null);
  const collectionItems = catalog.filter(item => collection === collections[0] || item.collection === collection);
  const categories = ['All categories', ...Array.from(new Set(collectionItems.map(item => item.category))).sort()];
  const results = collectionItems.filter(item =>
    (category === categories[0] || item.category === category) &&
    item.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return <>
    <div className="catalog-controls">
      <fieldset className="nft-collections">
        <legend>Collection</legend>
        {collections.map(name => <label key={name}>
          <input type="radio" name="collection" checked={collection === name}
            onChange={() => { setCollection(name); setCategory('All categories'); }} />
          <span>{name}</span>
        </label>)}
      </fieldset>
      <label className="nft-filter">Category
        <select value={category} onChange={event => setCategory(event.target.value)}>
          {categories.map(name => <option key={name}>{name}</option>)}
        </select>
      </label>
      <label className="nft-filter">Search NFTs
        <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search by name" />
      </label>
    </div>
    <p role="status">{results.length} {results.length === 1 ? 'collectible' : 'collectibles'}</p>
    {results.length === 0 && <p>No collectibles match your filters.</p>}
    <div className="nft-grid">
      {results.map(item => <button className="nft-card" data-collection={item.collection} key={`${item.collection}:${item.name}`}
        onClick={() => { setSelected(item); dialog.current?.showModal(); }}>
        <Artwork item={item} />
        <span className="nft-copy"><small>{item.collection} · {item.category}</small><strong>{item.name}</strong><span>View details</span></span>
      </button>)}
    </div>
    <dialog ref={dialog} className="nft-dialog" aria-labelledby="nft-name">
      <form method="dialog"><button className="nft-close" aria-label="Close NFT details">×</button></form>
      {selected && <div className="nft-detail">
        <Artwork key={selected.name} item={selected} />
        <div><p className="eyebrow">{selected.collection} · {selected.category}</p><h2 id="nft-name">{selected.name}</h2>
          <a className="button" href={selected.url}>{selected.url.includes('/item/') ? 'View item on OpenSea' : 'View collection on OpenSea'}</a>
        </div>
      </div>}
    </dialog>
  </>;
}
