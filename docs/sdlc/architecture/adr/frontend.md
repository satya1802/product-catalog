<!-- sdlc:auto:start adr -->
# ADR-0001: Use React 19 for Frontend

Status: Accepted  
Date: 2026-11-13

## Context and Problem Statement

Which Frontend technology does the project use? Decided in architecture v1.

## Considered Options

- React 19
- Vue
- Svelte

## Decision Outcome

Chosen option: React 19, because Builds the responsive, image-led product grid, detail gallery and admin forms as a single SPA served from its own static origin, reading the API base URL from VITE_API_BASE_URL and sending a bearer token on admin calls.

## Consequences

A client-rendered SPA needs the API reachable at load; acceptable for a read-mostly catalog and keeps the frontend a static deploy.
<!-- sdlc:auto:end adr -->