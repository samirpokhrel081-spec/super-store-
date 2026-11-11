# Super Store — Next.js starter

A responsive multi-category storefront starter with product search, category filters, sorting, wishlist interactions, a cart drawer, checkout form, and an admin dashboard preview.

## Run locally
1. Install Node.js 20+.
2. Extract this project.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local` and fill in credentials when integrations are implemented.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Included
- Responsive storefront and sample catalogue
- Search, category filtering, price sorting
- Cart drawer and quantity controls (demo state only)
- Wishlist interaction (demo state only)
- Checkout form preview
- Admin dashboard preview
- Payment API placeholder that fails closed

## Important production work still required
This is a runnable starter, not a production-ready commerce backend. The browser cart is in-memory and resets on refresh. Checkout currently displays a demo confirmation and does not create a real order. The admin dashboard is not authenticated and uses sample metrics.

Before launch, implement:
- PostgreSQL schema and migrations for users, products, inventory, carts, orders, payments, addresses, coupons, reviews, shipments and returns.
- Server-side authentication, password hashing, email/phone verification, password reset and role-based admin access.
- Persistent cart and wishlist APIs.
- Order creation with inventory reservation and idempotency.
- Official eSewa and Khalti payment initiation, callback/webhook signature verification and server-to-server transaction status verification. Use their current official documentation and merchant sandbox credentials.
- COD order workflow, shipping/tax calculation, cancellation, refund and invoice handling.
- Admin CRUD, audit logs, analytics, rate limiting, validation, CSRF/XSS protections, secure cookies, backups and monitoring.
- Tests for registration, checkout, payment success/failure, duplicate callbacks and admin permissions.

## Payment safety
Never put gateway secret keys in client code or commit them to Git. Do not mark an order paid based on a browser redirect alone. Verify every transaction on the server using the provider's documented verification mechanism. Do not store card numbers or CVV.

## Suggested next build stage
Add PostgreSQL + Prisma, then implement authentication and persistent product/order APIs. Add eSewa and Khalti sandbox integrations only after merchant accounts and credentials are available.
