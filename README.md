# younghan-travel

B2B travel booking platform for Korea, Taiwan, Japan and Thailand.

## Target Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Supabase Database, Auth, and Storage
- Vercel deployment
- Toss Payments and Stripe payment integration later

## Current Migration State

The legacy static homepage files are still kept in the repository as reference material. The new platform app lives in:

- `app/` - Next.js App Router pages and route handlers
- `src/components/` - shared React UI components
- `src/lib/catalog/` - static fallback product catalog
- `src/lib/repositories/` - data access layer, ready to swap from static data to Supabase
- `src/lib/supabase/` - browser, server, and admin Supabase clients
- `src/lib/booking/` - reservation draft structure
- `src/lib/payments/` - payment provider abstraction
- `src/types/` - platform and Supabase database types
- `supabase/schema.sql` - first database and storage schema draft
- `public/` - images and static assets used by Next.js

## Run Locally

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Environment

Copy `.env.example` to `.env.local` and fill in Supabase, Stripe, and Toss Payments keys when those integrations are ready.

## Platform Direction

Pages call the repository layer instead of importing database details directly. When the admin page is implemented, product, price, image, schedule, reservation, and notice updates should be saved to Supabase. The public pages can then read the latest data automatically without code changes.
