# Planning

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
### EPIC-001 · approved · source: planning:EPIC-001

Public shoppers browse a single list/grid of all products with no login, on a responsive web app, with no category navigation or filtering -- one unified view of a modest catalog.

Scoped to hundreds to low thousands of products, single language and single currency, with no personal data collected from shoppers.

**Related:** US-001, US-002, US-003

### EPIC-002 · approved · source: planning:EPIC-002

Each product has a detail page showing name, description, one or more images, and price in the single supported currency, with an optional outbound 'buy / learn more' link.

Assumption recorded in planning: no cart, checkout, payment, or enquiry form on the detail page.

**Related:** US-004, US-005

### EPIC-003 · approved · source: planning:EPIC-003

A basic keyword search box lets shoppers search over the product list by keyword.

Assumption recorded in planning: basic keyword search is included even though category navigation and attribute filters are out of scope.

**Related:** US-006

### EPIC-004 · approved · source: planning:EPIC-004

Staff maintain the catalog manually through the admin area: adding, editing and removing products, and uploading and managing one or more images per product.

Assumption recorded in planning: product images are uploaded and stored by the app.

**Related:** US-007, US-008, US-009, US-010

### EPIC-005 · approved · source: planning:EPIC-005

The admin area is password-protected so only authorised staff can manage products, while the public catalog needs no shopper login. Covers sign-in, session handling and secure credential storage.

Expressed as outcomes staff can verify: access denial, session handling, and hashed credential storage.

**Related:** US-011, US-012
<!-- sdlc:auto:end narrative -->
