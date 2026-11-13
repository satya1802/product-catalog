<!-- sdlc:auto:start adr -->
# ADR-0004: Use AWS for Cloud

Status: Accepted  
Date: 2026-11-13

## Context and Problem Statement

Which Cloud technology does the project use? Decided in architecture v1.

## Considered Options

- AWS
- GCP
- Azure

## Decision Outcome

Chosen option: AWS, because Hosts the static SPA, the FastAPI container and managed PostgreSQL (RDS) in one account; no S3 is used because file storage was removed from scope.

## Consequences

Single-cloud coupling; justified as the platform default and sufficient for a modest catalog with a small compliance footprint since no shopper data is collected.
<!-- sdlc:auto:end adr -->