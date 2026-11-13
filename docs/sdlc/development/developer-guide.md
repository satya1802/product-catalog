# Developer Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start status -->
_Up to date._
<!-- sdlc:auto:end status -->

<!-- sdlc:auto:start source -->
Generated from commit `f3d3927` · model `claude-sonnet-5`
<!-- sdlc:auto:end source -->

<!-- sdlc:auto:start overview -->
Product Catalog is a generated repository from the Quorq AI SDLC platform containing two independent applications. The frontend is a Vite + React 19 single-page app whose screens were generated from an approved design and currently render seeded sample data rather than calling a live API. The backend is a FastAPI 0.115 service that, since no architecture had been approved at generation time, ships only a health-check endpoint plus the scaffolding (SQLAlchemy models/database setup, Pydantic stub schema, router package) needed to add real endpoints later. A docker-compose file provisions a Postgres 16 database for local use, though the backend defaults to SQLite so it can run with no database server at all.
<!-- sdlc:auto:end overview -->

<!-- sdlc:auto:start prerequisites -->
- Node.js (for the frontend, Vite 6 / React 19 toolchain)
- Python 3.12
- pip
- Docker and Docker Compose (optional, for the Postgres service in docker-compose.yml)
<!-- sdlc:auto:end prerequisites -->

<!-- sdlc:auto:start setup -->
1. Clone the repository
2. Backend: cd backend && pip install -r requirements.txt
3. (Optional) Start Postgres: from the repo root run docker-compose up -d db, then set DATABASE_URL to point at it before starting the backend (defaults to a local SQLite file app.db otherwise)
4. Backend: uvicorn app.main:app --reload
5. Frontend: cd frontend && npm install
6. Frontend: npm run dev
<!-- sdlc:auto:end setup -->

<!-- sdlc:auto:start run -->
| Name | Command | Description |
|---|---|---|
| backend dev | `uvicorn app.main:app --reload` | Runs the FastAPI backend locally with auto-reload (from the backend/ directory) |
| frontend dev | `npm run dev` | Starts the Vite dev server for the React SPA (from the frontend/ directory) |
| frontend build | `npm run build` | Bundles the app with Vite; does not typecheck |
| frontend preview | `npm run preview` | Serves the production build locally |
| db | `docker-compose up -d db` | Starts the Postgres 16 database container defined in docker-compose.yml |
<!-- sdlc:auto:end run -->

<!-- sdlc:auto:start structure -->
| Path | Purpose |
|---|---|
| `backend/` | FastAPI service: app/main.py (entrypoint, CORS, /health route), app/database.py (engine/session setup), app/models.py (SQLAlchemy models, currently empty), app/schemas.py (Pydantic schemas incl. StubResponse), app/routers/ (per-component routers, currently empty) |
| `backend/tests/` | Pytest suite: unit/ and integration/ (includes test_health.py), conftest.py for fixtures |
| `frontend/` | Vite + React SPA: src/ for app code, e2e/ for Playwright acceptance tests, config files (vite, tsconfig, playwright, eslint, prettier) |
| `frontend/src/` | App source: main.tsx entrypoint, lib/ (api.ts client, ui.tsx and icons.tsx component vocabulary, navigate.ts), index.css, test-setup.ts for Vitest |
| `frontend/e2e/` | Playwright end-to-end specs and support helpers (support/admin.ts) |
| `.devcontainer/` | Dev container configuration for a consistent local dev environment |
| `.quorq/` | Platform metadata (handoff.json) from the Quorq AI SDLC generation process |
| `docker-compose.yml` | Defines the Postgres 16 database service for local development |
<!-- sdlc:auto:end structure -->

<!-- sdlc:auto:start conventions -->
- Backend routes are organized one router per architecture component, registered under app/routers/
- Unimplemented backend endpoints return a typed StubResponse (status/detail placeholder) rather than raising, keeping the OpenAPI spec complete before handlers are written
- Database access uses a request-scoped SQLAlchemy session via the get_db dependency, one session per request
- DATABASE_URL env var selects the database (defaults to local SQLite app.db); ALLOWED_ORIGINS env var (comma-separated) configures CORS, falling back to the Vite dev server origins
- Frontend screens currently render seeded sample data; src/lib/api.ts is the designated seam for wiring screens to real backend calls via apiFetch, using VITE_API_BASE_URL and VITE_API_SECRET_KEY as the bearer token source
- Frontend uses path alias @/ mapping to src/, configured in both vite.config.ts and tsconfig.json
- Component tests live beside the components they test and run under Vitest with jsdom; Playwright specs live in e2e/ separate from Vitest's test glob
<!-- sdlc:auto:end conventions -->

<!-- sdlc:auto:start testing -->
| Name | Command | Description |
|---|---|---|
| backend test | `pytest` | Runs backend unit and integration tests (from backend/, requires pythonpath=. per pytest.ini) |
| backend lint | `ruff check .` | Lints the backend Python code |
| backend format | `ruff format .` | Formats backend Python code |
| frontend test | `npm test` | Runs Vitest component tests |
| frontend lint | `npm run lint` | Runs ESLint over the frontend app |
| frontend format | `npm run format` | Formats frontend code with Prettier |
| frontend typecheck | `npm run typecheck` | Runs tsc --noEmit (not run by npm run build) |
| frontend e2e | `npm run test:e2e` | Runs Playwright acceptance tests from e2e/; builds/serves the app and boots the backend locally unless E2E_BASE_URL is set |
| frontend e2e install | `npm run test:e2e:install` | Installs the Chromium browser Playwright needs |
<!-- sdlc:auto:end testing -->

<!-- sdlc:auto:start troubleshooting -->
| Problem | Solution |
|---|---|
| Frontend dev server can't reach the backend / CORS errors in the browser console | Ensure the backend is running on http://localhost:8000 (the default VITE_API_BASE_URL fallback) or set VITE_API_BASE_URL to match, and set ALLOWED_ORIGINS on the backend to include the frontend's origin if it differs from the Vite defaults (http://localhost:5173) |
| pytest fails with 'ModuleNotFoundError: No module named app' when run from a different directory | Run pytest from the backend/ directory so pytest.ini's pythonpath = . setting applies |
| npm run build succeeds but the app is actually type-broken | Run npm run typecheck (tsc --noEmit) separately, since the build step does not typecheck |
| npm run test:e2e fails because Chromium isn't installed | Run npm run test:e2e:install first to fetch the Chromium browser |
| Backend has no persisted data between restarts or you want Postgres instead of SQLite | Start the Postgres container with docker-compose up -d db and set DATABASE_URL (e.g. postgresql://app:app@localhost:5432/app) before starting uvicorn |
<!-- sdlc:auto:end troubleshooting -->
