# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Lets public shoppers browse a single unified list/grid of the entire catalog, with no login, no category navigation or filtering, on a responsive web app.

Scope: modest catalog (hundreds to low thousands of products), single language, single currency, no personal data collected from shoppers. Covers unified list/grid browsing (US-001), responsive layout for mobile and desktop (US-002), and browsing without accounts or personal-data entry (US-003).

**Related:** US-001, US-002, US-003

### EPIC-002 · approved · source: planning:EPIC-002

Provides a per-product detail page showing name, description, images and price, with an optional outbound buy/learn-more link.

No cart, checkout, payment, or enquiry form is in scope. Covers viewing full product detail (US-004) and the optional outbound link (US-005).

**Related:** US-004, US-005

### EPIC-003 · approved · source: planning:EPIC-003

Adds a basic keyword search box over the product list so shoppers can quickly find products.

Keyword search only; explicitly excludes category navigation and attribute filters. Covers US-006.

**Related:** US-006

### EPIC-004 · approved · source: planning:EPIC-004

Gives staff a manual admin workflow to add, edit, and remove products, and to upload/manage one or more images per product.

Images are uploaded and stored by the app. Covers adding a product (US-007), editing a product (US-008), removing a product (US-009), and uploading/managing product images (US-010).

**Related:** US-007, US-008, US-009, US-010

### EPIC-005 · approved · source: planning:EPIC-005

Password-protects the admin area so only authorised staff can manage products, while shoppers need no login at all.

Covers administrator password sign-in with hashed credential storage (US-011) and secure session termination on sign-out or inactivity timeout (US-012).

**Related:** US-011, US-012

### SPRINT-1 · approved · source: planning:Sprint 1

First sprint of the approved v1 plan (capacity 20): stands up the product browsing foundation and secure admin authentication.

Goal: 'Stand up the product browsing foundation (schema + paginated list API + grid) and secure admin authentication (sign-in and sign-out).' Planned items: US-001 Browse all products in a list/grid (8 pts, backend-agent) with tasks US-001-T1 Create products schema, US-001-T2 Implement GET /products with pagination, US-001-T3 Build product grid UI (frontend-agent); US-011 Password-protected admin sign-in (8 pts, backend-agent) with tasks US-011-T1 Create admin_users and admin_sessions schema, US-011-T2 Implement POST /auth/login, US-011-T3 Add admin route protection (security-agent), US-011-T4 Build admin sign-in page (frontend-agent); US-012 Admin session ends securely (3 pts, backend-agent).

**Related:** US-001, US-011, US-012, EPIC-001, EPIC-005

### SPRINT-2 · approved · source: planning:Sprint 2

Second sprint of the approved v1 plan (capacity 20): delivers the product detail page, responsive polish, keyword search, and lets admins add products.

Goal: 'Deliver the product detail page, responsive polish, keyword search, and let admins add new products.' Planned items: US-002 Responsive layout on mobile and desktop (3 pts, frontend-agent); US-004 View product detail (5 pts, frontend-agent); US-005 Optional outbound buy / learn more link (2 pts, frontend-agent); US-006 Search products by keyword (5 pts, backend-agent); US-007 Add a product (5 pts, backend-agent).

**Related:** US-002, US-004, US-005, US-006, US-007, EPIC-002, EPIC-003

### SPRINT-3 · approved · source: planning:Sprint 3

Third sprint of the approved v1 plan (capacity 20): completes admin product management and confirms no-login/no-payment shopper browsing.

Goal: 'Complete admin product management (edit, remove, image upload/management) and confirm no-login/no-payment shopper browsing.' Planned items: US-008 Edit a product (3 pts, backend-agent); US-009 Remove a product (2 pts, backend-agent); US-010 Upload and manage product images (8 pts, backend-agent) with tasks US-010-T1 Implement image upload endpoint, US-010-T2 Implement image removal endpoint (backend-agent), US-010-T3 Build image upload/management UI (frontend-agent); confirmation activity relates to US-003 Browse without accounts or personal data (no explicit points/role given for this confirmation activity in the plan).

**Related:** US-003, US-008, US-009, US-010, EPIC-004
<!-- sdlc:auto:end narrative -->
