# Deployment Guide

> Maintained by QuorQ AI SDLC. Text between `sdlc:auto` markers is regenerated; anything outside them is yours and is kept.

<!-- sdlc:auto:start how-it-deploys -->
Pushes to `main` run `.github/workflows/deploy.yml`, which builds the API image (if there is a backend) and deploys the SPA to AWS Amplify. Commits touching only `docs/sdlc/**` don't deploy. Deployments can also be started from the platform's Deployment tab.
<!-- sdlc:auto:end how-it-deploys -->

<!-- sdlc:auto:start environments -->
| Name | Service | Runtime | Scaling | Environment |
|---|---|---|---|---|
| Catalog SPA Host | Static web hosting (AWS) | React 19 build served as static assets | CDN-fronted static, no app scaling | dev |
| Catalog API Service | Containerized FastAPI (AWS) | Python 3.12 / FastAPI 0.115 under uvicorn | 1 container in dev, horizontal later | dev |
| Catalog Database | Amazon RDS for PostgreSQL | PostgreSQL 16 | Single instance in dev | dev |
<!-- sdlc:auto:end environments -->

<!-- sdlc:auto:start live -->
_Not deployed yet._
<!-- sdlc:auto:end live -->

<!-- sdlc:auto:start topology -->
```mermaid
graph LR
  n_Catalog_SPA_Host["Catalog SPA Host<br/>Static web hosting (AWS)"]
  n_Catalog_API_Service["Catalog API Service<br/>Containerized FastAPI (AWS)"]
  n_Catalog_Database["Catalog Database<br/>Amazon RDS for PostgreSQL"]
  n_Catalog_SPA_Host -->|"HTTPS"| n_Catalog_API_Service
  n_Catalog_API_Service -->|"TCP/TLS (PostgreSQL)"| n_Catalog_Database
```
<!-- sdlc:auto:end topology -->
