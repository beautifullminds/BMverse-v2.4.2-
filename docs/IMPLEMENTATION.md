# BMverse v2.4.2 — implementation matrix

**Source:** user-supplied BMverse Platform Architecture & Development Blueprint v2.4.2 (37 pages). The document is a proposed specification, not proof of deployment.

| Domain | Current starter | Next engineering milestone |
|---|---|---|
| Public website / Explore | Routed UI shell | CMS, discovery APIs, search, SEO |
| Member dashboard | Routed UI shell | Account/session, wallet linkage, inventory, activity |
| Gaming / metaverse | Routed UI shell | Catalog, launch gateway, SDK, events, achievements |
| Learning | Routed UI shell | Courses, lessons, enrollment, progress, assessments |
| Community | Routed UI shell | Profiles, feeds, groups, moderation |
| Creator studio | Routed UI shell | Publishing workflow, asset storage, collections, analytics |
| NFT marketplace | Existing ANTVERSE catalog preview | Full metadata ingestion, chain indexer, reviewed listing/buy flow |
| DEX | Routed UI shell | Token registry, audited router integration, quotes, swaps |
| Admin | Routed UI shell | Server-side RBAC, MFA, audit log, operations |
| Backend | Two read-only Next.js endpoints | NestJS API, PostgreSQL, Redis, jobs, typed DTOs |
| Blockchain | No transactions | Select L2, EIP-1193 wallet, indexer, audited contracts |
| Infrastructure | Local Next.js project | CI/CD, staging, telemetry, backups, threat model |

## Roadmap from blueprint section 21

0. Discovery & decisions (2–3 weeks)
1. Platform foundation (3–5 weeks)
2. Core website & dashboards (4–6 weeks)
3. Creator & content systems (4–6 weeks)
4. Marketplace MVP (5–7 weeks)
5. DEX MVP (5–7 weeks)
6. Metaverse & SDK (6–10 weeks)
7. Security & beta (4–8 weeks)
8. Mainnet readiness (2–4 weeks)
9. Scale & expansion (ongoing)

Durations are blueprint estimates, not commitments. All financial operations remain disabled until a chosen network, reviewed contracts, operational controls, and testnet acceptance are complete.

## Recommended repo evolution

`apps/web`, `apps/admin`, `apps/api`, `apps/worker`, `packages/ui`, `packages/config`, `packages/sdk`, `packages/web3`, `packages/schemas`, `contracts`, `infra`, `docs`.

## Security rules

No seed phrases, backend signing of user transactions, fictitious balances, or simulated success labels. Chain receipts and ownership must be verified before displaying completed trades. Admin authorization must be enforced server-side.
