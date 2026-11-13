<!-- sdlc:auto:start adr -->
# ADR-0003: Use PostgreSQL 16 for Database

Status: Accepted  
Date: 2026-11-13

## Context and Problem Statement

Which Database technology does the project use? Decided in architecture v1.

## Considered Options

- PostgreSQL 16
- MySQL
- SQLite

## Decision Outcome

Chosen option: PostgreSQL 16, because Holds the structured product data, hashed admin credentials and sessions, provides built-in full-text search (tsvector/GIN) for the keyword box, and stores image binaries as bytea since object storage was removed from scope.

## Consequences

Storing images in-row grows the database and streams through the API; fine for hundreds to low thousands of products but would warrant object storage at much larger scale.
<!-- sdlc:auto:end adr -->