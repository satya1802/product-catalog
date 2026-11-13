# Sprint Plan

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start sprints -->
## Sprint 1: Sprint 1

Stand up the product browsing foundation (schema + paginated list API + grid) and secure admin authentication (sign-in and sign-out).

Capacity: 20 points · Committed: 19

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-001 | Story | Browse all products in a list/grid | 8 | backend-agent | — |
| ↳ US-001-T1 | Task | Create products schema | — | backend-agent | — |
| ↳ US-001-T2 | Task | Implement GET /products with pagination | — | backend-agent | — |
| ↳ US-001-T3 | Task | Build product grid UI | — | frontend-agent | — |
| US-011 | Story | Password-protected admin sign-in | 8 | backend-agent | — |
| ↳ US-011-T1 | Task | Create admin_users and admin_sessions schema | — | backend-agent | — |
| ↳ US-011-T2 | Task | Implement POST /auth/login | — | backend-agent | — |
| ↳ US-011-T3 | Task | Add admin route protection | — | security-agent | — |
| ↳ US-011-T4 | Task | Build admin sign-in page | — | frontend-agent | — |
| US-012 | Story | Admin session ends securely | 3 | backend-agent | US-011 |

## Sprint 2: Sprint 2

Deliver the product detail page, responsive polish, keyword search, and let admins add new products.

Capacity: 20 points · Committed: 18

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-002 | Story | Responsive layout on mobile and desktop | 3 | frontend-agent | US-001 |
| US-004 | Story | View product detail | 5 | frontend-agent | US-001 |
| US-006 | Story | Search products by keyword | 5 | backend-agent | US-001 |
| US-007 | Story | Add a product | 5 | backend-agent | US-011 |

## Sprint 3: Sprint 3

Complete admin product management (edit, remove, image upload/management) and confirm no-login/no-payment shopper browsing.

Capacity: 20 points · Committed: 17

| Key | Type | Title | Points | Role | Depends on |
|---|---|---|---|---|---|
| US-003 | Story | Browse without accounts or personal data | 2 | frontend-agent | US-001, US-004 |
| US-005 | Story | Optional outbound buy / learn more link | 2 | frontend-agent | US-004 |
| US-008 | Story | Edit a product | 3 | backend-agent | US-007 |
| US-009 | Story | Remove a product | 2 | backend-agent | US-007 |
| US-010 | Story | Upload and manage product images | 8 | backend-agent | US-007 |
| ↳ US-010-T1 | Task | Implement image upload endpoint | — | backend-agent | — |
| ↳ US-010-T2 | Task | Implement image removal endpoint | — | backend-agent | — |
| ↳ US-010-T3 | Task | Build image upload/management UI | — | frontend-agent | — |

## Unscheduled

_Nothing unscheduled._
<!-- sdlc:auto:end sprints -->
