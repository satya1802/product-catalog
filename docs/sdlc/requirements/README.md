# Product Requirements

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start narrative -->
## Summary

### REQ-001 · approved · source: requirements:technology-stack

Technology stack approved by the product owner: FastAPI backend, AWS cloud, PostgreSQL database, React frontend. Design must use exactly these, no substitutions.

- Backend: FastAPI 0.115 -- serves the public product list and detail pages, runs keyword search, and handles password-protected admin add/edit/remove actions with image uploads; chosen as the platform default with low ceremony, pairs with React and PostgreSQL.
- Cloud: AWS -- hosts the app and stores uploaded product images in one account; platform default with headroom to grow; compliance footprint stays small since no shopper data is collected.
- Database: PostgreSQL 16 -- holds simple structured product data (name, description, price, images, optional outbound link); built-in keyword/full-text search covers the basic search box without a separate search engine.
- Frontend: React 19 -- builds the responsive, image-led product grid, search box and detail page for phone and desktop shoppers; platform default; same skills reused for staff admin screens.

### REQ-002 · approved · source: requirements:capabilities-in-scope

Capabilities the catalog must provide: public browsing/search/detail viewing, admin product and image management, password-protected admin area, responsive layout, single currency/language, no shopper accounts or data collection.

In-scope capabilities:
- Browsable product list/grid for public shoppers
- Product detail page with name, description, images and price
- Keyword search over the product list
- Optional outbound 'buy / learn more' link per product
- Admin product management (add, edit, remove products)
- Product image upload and management
- Password-protected admin area
- Responsive mobile and desktop layout
- Single-currency price display
- No shopper accounts or login -- public browsing only
- Free-to-browse catalog with no payments or billing
- Single language and single currency
- No personal data collected from shoppers

### REQ-003 · approved · source: requirements:out-of-scope

Explicit scope boundary: checkout/payments, enquiry forms, category/attribute filtering, and standalone file storage are out of scope for this delivery.

Out of scope -- not to be designed or built:
- Online checkout -- shopping cart, payment, and order processing
- Product enquiry / request-a-quote forms
- Category navigation and attribute filters (price/brand/size, etc.)
- File storage (the suggested Amazon S3 was removed from the stack)
Note: image storage approach needs reconciling -- the technology stack entry names AWS as providing S3 image storage, while this out-of-scope note says S3 was removed from the stack. Both versions are recorded here per source input.

### REQ-004 · approved · source: requirements:feature:browsing-the-catalog

Public shoppers can view all products in a list/grid with no sign-in, the list stays navigable at modest scale, and browsing requires no account at any point.

- Browse all products: view a single browsable list/grid of all products without signing in; each entry shows at least image, name and price; empty catalog shows a friendly empty-state message instead of an error.
- Navigate a large catalog: list stays usable at modest catalog size via a navigable presentation such as paging or continuous loading.
- Browse freely without an account: no sign-up, login or personal-detail entry at any point, and no payment, billing or charge presented.

### REQ-005 · approved · source: requirements:feature:product-details

Each product has a detail page with name, description, images (gallery for multiple) and price, plus an optional outbound buy/learn-more link when configured.

- View product detail: selecting a product opens a detail page showing name, description, one or more images, and price in the single supported currency; multiple images are viewable via gallery or thumbnails.
- Optional buy or learn more link: shown and opens the external destination when a link is set; when none is set, nothing is shown and the rest of the page renders normally; no cart, checkout, payment or enquiry form is present.

### REQ-006 · approved · source: requirements:feature:searching-products

Shoppers can keyword-search the catalog by name/description, see a clear no-results message when nothing matches, and clear the search to restore the full list.

- Search products by keyword: type a keyword and submit to see only products matching it in name or description; no matches shows a clear 'no results' message; clearing the search box restores the full product list.

### REQ-007 · approved · source: requirements:feature:admin-sign-in

Admin area access requires a password; unauthenticated visitors are denied and prompted to sign in, and sessions end on sign-out or after inactivity.

- Password-protected admin sign-in: staff sign in with a password to reach the admin area; anyone not signed in who tries to open an admin page is denied access and prompted to sign in.
- Admin session ends securely: session ends on sign-out and after a period of inactivity, after which admin pages require signing in again.

### REQ-008 · approved · source: requirements:feature:managing-products

Signed-in administrators can add, edit and remove products with validation on required fields and a confirmation step before permanent removal.

- Add a product: signed-in admin adds name, description, price and optional outbound link, making it visible to shoppers; missing required field (name/price) is rejected with a validation message identifying the field.
- Edit a product: admin updates name, description, price or outbound link; changes are stored and reflected on shoppers' next view; clearing a required field and saving is rejected with a validation message, previous values retained.
- Remove a product: admin removes a product so it no longer appears in list, search, or detail page; a confirmation step is presented before permanent removal.

### REQ-009 · approved · source: requirements:feature:product-images

Administrators can upload and manage one or more images per product, remove individual images, and unsupported file types are rejected with a format message.

- Upload and manage product images: admin uploads and stores one or more images per product, shown on list entry and detail page; can remove an individual image while keeping the rest; files that are not a supported image are rejected with a message indicating accepted formats.

### NFR-001 · approved · source: requirements:NFR-001

[security] Admin area restricted to signed-in staff.

Only administrators signed in with valid credentials can reach admin product-management pages; anyone not signed in is denied access and prompted to sign in; a failed sign-in gives no indication of which credential was wrong.

**Related:** REQ-007

### NFR-002 · approved · source: requirements:NFR-002

[security] Admin passwords stored hashed.

Administrator passwords are stored only in hashed form and are never retrievable or shown as plain text.

**Related:** REQ-007

### NFR-003 · approved · source: requirements:NFR-003

[security] Admin sessions expire.

An administrator's session ends when they sign out and after a period of inactivity, so an unattended or shared device cannot be used to change the catalog without signing in again.

**Related:** REQ-007

### NFR-004 · approved · source: requirements:NFR-004

[privacy] No shopper personal data collected.

Shoppers can browse and view products with no account, login or personal-detail entry requested at any point, so no personal data is collected from them, keeping privacy obligations minimal.

**Related:** REQ-004

### NFR-005 · approved · source: requirements:NFR-005

[scalability] Usable at modest catalog size.

The product list stays responsive and navigable for a modest catalog, using paging or continuous loading so the page remains usable at that scale. Target: hundreds to low thousands of products.

**Related:** REQ-004

### NFR-006 · approved · source: requirements:NFR-006

[compatibility] Responsive on mobile and desktop.

The catalog adapts to screen size, showing readable text and tap-friendly targets with no horizontal scrolling on mobile, and using the wider screen to show multiple products per row on desktop.

**Related:** REQ-004

### NFR-007 · approved · source: requirements:NFR-007

[usability] Clear empty and no-results states.

When the catalog has no products or a search returns no matches, a clear empty-state or 'no results' message is shown instead of an error or blank page.

**Related:** REQ-004, REQ-006
<!-- sdlc:auto:end narrative -->

<!-- sdlc:auto:start summary -->
**Requirements version:** v1  
**Delivery scope:** lightweight  
**Approved:** 2026-11-13

**Capabilities in scope:** Browsable product list/grid for public shoppers, Product detail page with name, description, images and price, Keyword search over the product list, Optional outbound 'buy / learn more' link per product, Admin product management (add, edit, remove products), Product image upload and management, Password-protected admin area, Responsive mobile and desktop layout, Single-currency price display, No shopper accounts or login — public browsing only, Free-to-browse catalog with no payments or billing, Single language and single currency, No personal data collected from shoppers

**Approved technology stack:**

| Layer | Choice | Rationale |
|---|---|---|
| backend | FastAPI | The backend's job here is modest and well-defined: serve the public product list and detail pages, run a keyword search, and handle your password-protected admin add/edit/remove actions with image uploads. FastAPI covers exactly this with little ceremony, is the platform default, and pairs cleanly with both React and PostgreSQL, keeping a small catalog quick to build and cheap to run. |
| cloud | AWS | A public catalog needs reliable hosting and somewhere to store the product images your team uploads. AWS is the platform default and gives you both the app hosting and S3 image storage in one account, with plenty of headroom as your catalog grows — and since you collect no shopper data, your compliance footprint stays small. |
| database | PostgreSQL | Your data is simple and structured — products with name, description, price, images, and an optional outbound link — which is exactly what a relational database holds cleanly. PostgreSQL also has solid built-in keyword/full-text search, so your 'basic search box' is covered without adding a separate search engine, keeping the system to one moving part for your modest catalog. |
| frontend | React | Your shoppers reach the catalog on both phones and desktop browsers, and the experience is mostly reading: a product grid, a search box, and a detail page with images and price. React builds that responsive, image-led layout well and is the platform default, so it's the lowest-friction path to a fast, modern-feeling storefront. The same React skills also cover your staff admin screens for adding and editing products. |
<!-- sdlc:auto:end summary -->

<!-- sdlc:auto:start epics -->
## EPIC-001: Public Product Browsing

Public shoppers (no login) browse a single list/grid of all products on a responsive web app that works on mobile and desktop browsers. There is no category navigation or attribute filtering — one unified browsable view of the whole catalog. Scoped to a modest catalog (hundreds to low thousands of products), single language and single currency, with no personal data collected from shoppers.

### US-001: Browse all products in a list/grid

**Priority:** high

> As a public shopper, I want to view a single browsable list/grid of all products without logging in, so that I can look through what is available and decide what to buy.

| ID | Given | When | Then |
|---|---|---|---|
| AC-001 | products exist in the catalog | a shopper opens the catalog page without signing in | a single list/grid of all products is displayed, each showing at least a product image, name and price |
| AC-002 | the catalog contains no products | a shopper opens the catalog page | an empty-state message is shown instead of an error |
| AC-003 | a modest catalog of hundreds to low thousands of products | a shopper browses the list/grid | products are presented in a navigable way (e.g. paging or continuous loading) so the page remains usable at that scale |

### US-002: Responsive layout on mobile and desktop

**Priority:** high

> As a public shopper, I want the catalog to adapt to my device screen size, so that I can browse comfortably on both a phone and a desktop browser.

| ID | Given | When | Then |
|---|---|---|---|
| AC-004 | a shopper opens the catalog on a mobile browser | the list/grid is displayed | the layout adapts to the narrow screen with readable text and tap-friendly targets, without horizontal scrolling |
| AC-005 | a shopper opens the catalog on a desktop browser | the list/grid is displayed | the layout uses the wider screen to show multiple products per row |

### US-003: Browse without accounts or personal data

**Priority:** medium

> As a public shopper, I want to browse the catalog without creating an account or providing any personal details, so that I can view products freely and privately.

| ID | Given | When | Then |
|---|---|---|---|
| AC-006 | a shopper arrives at the catalog | they browse the list and open product detail pages | no sign-up, login, or personal-data entry is required or requested at any point. Assumption: no personal data is collected from shoppers, keeping privacy obligations minimal |
| AC-007 | the catalog is free to browse | a shopper uses any browsing feature | no payment, billing, or charge of any kind is presented to the shopper. Assumption: the catalog is free to browse with no in-app charges |

## EPIC-002: Product Detail Page

Each product has a detail page showing its name, description, one or more images, and price displayed in the single supported currency. The page may include an optional outbound 'buy / learn more' link pointing to an external destination. Assumption: product detail consists of name, description, one or more images, price display, and an optional outbound link; there is no cart, checkout, payment, or enquiry form.

### US-004: View product detail

**Priority:** high

> As a public shopper, I want to open a product and see its name, description, images and price, so that I have the information I need to decide about the product.

| ID | Given | When | Then |
|---|---|---|---|
| AC-008 | a product exists in the catalog | a shopper selects it from the list/grid | a detail page opens showing the product name, description, one or more images, and the price |
| AC-009 | a product has multiple images | a shopper views its detail page | all of the product's images are viewable (e.g. via a gallery or thumbnails) |
| AC-010 | a product's price is displayed | the detail page renders | the price is shown in the single supported currency. Assumption: single language and single currency; no multi-currency support |

### US-005: Optional outbound buy / learn more link

**Priority:** medium

> As a public shopper, I want to follow an outbound link to buy or learn more about a product elsewhere, so that I can complete my purchase or get more detail on an external site.

| ID | Given | When | Then |
|---|---|---|---|
| AC-011 | a product has an outbound 'buy / learn more' link configured | a shopper views the product detail page | the outbound link is displayed and opens the configured external destination when activated |
| AC-012 | a product has no outbound link configured | a shopper views the product detail page | no outbound link is shown and the rest of the detail page renders normally. Assumption: the outbound link is optional per product |
| AC-013 | a shopper is on a product detail page | they look for ways to transact | no cart, checkout, payment, or enquiry form is present — only the optional outbound link |

## EPIC-003: Keyword Search

A basic keyword search box lets shoppers search over the product list by keyword. Assumption: a basic keyword search is included even though category navigation and attribute filters are explicitly out of scope.

### US-006: Search products by keyword

**Priority:** high

> As a public shopper, I want to type a keyword and see matching products, so that I can quickly find a product without scrolling the whole catalog.

| ID | Given | When | Then |
|---|---|---|---|
| AC-014 | a shopper is on the catalog | they enter a keyword into the search box and submit it | the list/grid updates to show only products matching the keyword (e.g. in name or description) |
| AC-015 | a shopper searches for a keyword with no matches | the search completes | a clear 'no results' message is shown rather than an error or blank page |
| AC-016 | a shopper has an active keyword search applied | they clear the search box | the full product list/grid is shown again. Assumption: keyword search only; no category navigation or attribute filters are provided |

## EPIC-004: Admin Product & Image Management

Staff maintain the catalog manually through the admin area: adding, editing and removing products, and uploading and managing one or more images per product. Images are uploaded and stored by the app as part of product management. Assumption: product images are uploaded and stored by the app.

### US-007: Add a product

**Priority:** high

> As a staff administrator, I want to add a new product with its name, description, price and optional outbound link, so that shoppers can browse and view the product in the catalog.

| ID | Given | When | Then |
|---|---|---|---|
| AC-017 | an authenticated administrator is in the admin area | they submit a new product with a name, description and price | the product is created and becomes visible to shoppers in the catalog list/grid and on its detail page |
| AC-018 | an administrator is adding a product | they submit without a required field such as name or price | the product is not created and a validation message identifies the missing field |
| AC-019 | an administrator is adding a product | they supply an optional outbound 'buy / learn more' link | the link is saved and shown on the product's detail page |

### US-008: Edit a product

**Priority:** high

> As a staff administrator, I want to edit an existing product's details, so that I can keep the catalog information accurate and up to date.

| ID | Given | When | Then |
|---|---|---|---|
| AC-020 | an existing product | an administrator updates its name, description, price or outbound link and saves | the updated details are stored and reflected to shoppers on the next view |
| AC-021 | an administrator is editing a product | they clear a required field and attempt to save | the change is rejected with a validation message and the previous values are retained |

### US-009: Remove a product

**Priority:** medium

> As a staff administrator, I want to remove a product from the catalog, so that products that are no longer offered stop appearing to shoppers.

| ID | Given | When | Then |
|---|---|---|---|
| AC-022 | an existing product | an administrator removes it | the product no longer appears in the shopper list/grid, search results, or as a detail page |
| AC-023 | an administrator chooses to remove a product | the removal action is triggered | a confirmation step is presented before the product is permanently removed |

### US-010: Upload and manage product images

**Priority:** high

> As a staff administrator, I want to upload and manage one or more images for a product, so that shoppers can see what the product looks like.

| ID | Given | When | Then |
|---|---|---|---|
| AC-024 | an administrator is adding or editing a product | they upload one or more image files | the images are stored by the app and shown on the product's list/grid entry and detail page. Assumption: images are uploaded and stored by the app |
| AC-025 | a product has one or more images | an administrator removes an image | that image is no longer shown for the product and the remaining images are retained |
| AC-026 | an administrator uploads a file that is not a supported image | they attempt to save | the upload is rejected with a message indicating the accepted image formats |

## EPIC-005: Admin Access & Security

The admin area is password-protected so that only authorised staff can manage products, while the public catalog needs no shopper login. Covers administrator sign-in, session handling and secure credential storage, expressed as outcomes staff can verify.

### US-011: Password-protected admin sign-in

**Priority:** critical

> As a staff administrator, I want to sign in with a password to reach the admin area, so that only authorised staff can manage the catalog.

| ID | Given | When | Then |
|---|---|---|---|
| AC-027 | a person is not signed in | they try to open any admin product-management page | they are denied access and prompted to sign in. Assumption: only staff use the password-protected admin area; shoppers have no login |
| AC-028 | a staff administrator provides valid credentials | they sign in | they gain access to the admin area and its product-management functions |
| AC-029 | a person provides invalid credentials | they attempt to sign in | access is denied and no indication is given as to which credential was wrong |
| AC-030 | administrator credentials are stored | a password is saved | it is stored only in hashed form and never retrievable as plain text |

### US-012: Admin session ends securely

**Priority:** high

> As a staff administrator, I want my admin session to end when I sign out or after a period of inactivity, so that an unattended or shared device cannot be used to change the catalog.

| ID | Given | When | Then |
|---|---|---|---|
| AC-031 | a signed-in administrator | they sign out | their session ends and admin pages require signing in again |
| AC-032 | a signed-in administrator who has been inactive | the session expiry period passes | the session expires and further admin access requires signing in again |
<!-- sdlc:auto:end epics -->
