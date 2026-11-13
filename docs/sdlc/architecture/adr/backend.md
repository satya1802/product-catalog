<!-- sdlc:auto:start adr -->
# ADR-0002: Use FastAPI 0.115 for Backend

Status: Accepted  
Date: 2026-11-13

## Context and Problem Statement

Which Backend technology does the project use? Decided in architecture v1.

## Considered Options

- FastAPI 0.115
- Flask
- Django

## Decision Outcome

Chosen option: FastAPI 0.115, because Serves the public list/search/detail/image endpoints and the authenticated admin CRUD with multipart uploads with little ceremony, and streams image bytes straight from PostgreSQL.

## Consequences

Async stack means CPU-bound image validation should stay lightweight; Pillow checks are cheap at this scale.
<!-- sdlc:auto:end adr -->