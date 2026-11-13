# Traceability Matrix

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start legend -->
Built from recorded links, not written by a model: requirement key → plan item (`source_stable_key`) → development ticket (`stable_key`) → the ticket's test steps → the last live deployment that started after the work finished. **AC tests** counts the story's acceptance criteria that have a test case, and those whose test cases all passed in the latest finished E2E run.
<!-- sdlc:auto:end legend -->

<!-- sdlc:auto:start matrix -->
| Requirement | Epic | Title | Plan items | Sprint | Design | Code | Commits | Ticket | Tests | AC tests | Deployed |
|---|---|---|---|---|---|---|---|---|---|---|---|
| US-001 | EPIC-001 | Browse all products in a list/grid | US-001, US-001-T1, US-001-T2, US-001-T3 | 1 | GET /products, api, db, products, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-002 | EPIC-001 | Responsive layout on mobile and desktop | US-002 | 2 | web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-003 | EPIC-001 | Browse without accounts or personal data | US-003 | 3 | GET /products, GET /products/{id}, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-004 | EPIC-002 | View product detail | US-004 | 2 | GET /products/{id}, GET /products/{id}/images/{image_id}, api, db, product_images, products, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-005 | EPIC-002 | Optional outbound buy / learn more link | US-005 | 3 | GET /products/{id}, products, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-006 | EPIC-003 | Search products by keyword | US-006 | 2 | GET /products, api, db, products, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-007 | EPIC-004 | Add a product | US-007 | 2 | POST /admin/products, api, db, products, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-008 | EPIC-004 | Edit a product | US-008 | 3 | PUT /admin/products/{id}, api, db, products, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-009 | EPIC-004 | Remove a product | US-009 | 3 | DELETE /admin/products/{id}, api, db, products, web | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
| US-010 | EPIC-004 | Upload and manage product images | US-010, US-010-T1, US-010-T2, US-010-T3 | 3 | DELETE /admin/products/{id}/images/{image_id}, POST /admin/products/{id}/images, api, db, product_images, web | — | — | not started | not run | 0/3 tested · 0/3 passing | — |
| US-011 | EPIC-005 | Password-protected admin sign-in | US-011, US-011-T1, US-011-T2, US-011-T3, US-011-T4 | 1 | POST /auth/login, admin_sessions, admin_users, api, db, web | — | — | not started | not run | 0/4 tested · 0/4 passing | — |
| US-012 | EPIC-005 | Admin session ends securely | US-012 | 1 | POST /auth/logout, admin_sessions, api, db | — | — | not started | not run | 0/2 tested · 0/2 passing | — |
<!-- sdlc:auto:end matrix -->
