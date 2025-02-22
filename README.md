# TypeScript Monorepo with Next.js & Express

## Overview
This project is a **TypeScript monorepo** built with **TurboRepo**. It consists of a frontend and backend application:

- **Frontend**: Next.js 15+ (running on port `8080`)
- **Backend**: Express (running on port `3001`)
- **API Client**: Generated using `openapi2aspida`
- **Package Manager**: pnpm
- **Development Server**: TurboRepo (to run both frontend & backend simultaneously)

---

## Project Structure
```sh
ts-monorepo/
├── apps/
│   ├── frontend/    # Next.js 15+ (React Frontend)
│   ├── backend/     # Express API Server
│
├── turbo.json       # TurboRepo config for monorepo execution
├── package.json     # Root package.json (manages dependencies & scripts)
├── pnpm-lock.yaml   # Lock file for package dependencies
```

---

## Setup
### Prerequisites
- **Node.js** `>=18.x`
- **pnpm** (installed globally)

If pnpm is not installed, run:
```sh
npm install -g pnpm
```

---

## Installation
Clone the repository and install dependencies:
```sh
git clone <repo-url>
cd ts-monorepo
pnpm install
```

---

## Development
Run the frontend (Next.js) and backend (Express) simultaneously:
```sh
pnpm dev
```
- Frontend runs at: **`http://localhost:8080`**
- Backend runs at: **`http://localhost:3001`**

Alternatively, you can run them separately:
```sh
pnpm --filter frontend dev
pnpm --filter backend dev
```

---

## Backend API Endpoints
### `GET /users`
Returns a list of mock users.
```json
[
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" }
]
```

### `GET /user/:id`
Returns a single user by ID or a 404 if not found.
```json
{ "id": 1, "name": "Alice" }
```

---

## Tech Stack
- **Frontend**: Next.js 15, TypeScript, React Query
- **Backend**: Express, TypeScript
- **API Client**: openapi2aspida, aspida, axios
- **Monorepo Tooling**: TurboRepo, pnpm

---

## Notes
- API responses are currently mocked (no database yet).
- The backend serves JSON responses over REST endpoints.
- Frontend will consume API using `aspida`-generated client.

---

## Next Steps
- [ ] Integrate `openapi2aspida` for API client generation.
- [ ] Implement frontend UI components.
- [ ] Add authentication & middleware to backend.
- [ ] Connect to a real database.

---

## License
MIT License
