# BMverse Platform v2.4.2

BMverse's Next.js platform preview with the Cyber City homepage and ANTVERSE and BMJewels NFT catalog.

## Development

Run `npm ci` followed by `npm run dev` and open `http://localhost:3000/platform/`. The marketplace is at `/platform/marketplace/`, with collection pages for ANTVERSE and BMJewels. The API routes expose read-only build snapshots.

## Deployment

Run `npm run build` to produce `out/`. The public site serves this export under `/platform/` on the BMverse-Landing GitHub Pages branch.

The marketplace uses a catalog snapshot and OpenSea links. The remaining platform modules are frontend previews. See [implementation notes](docs/IMPLEMENTATION.md) for the blueprint coverage.
