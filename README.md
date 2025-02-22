# aspidaトレーニング(TypeScript Monorepo with Next.js & Express)

## 概要

- **Frontend**: Next.js 15+ (running on port `8080`)
- **Backend**: Express (running on port `3001`)
- **API Client**: Generated using `openapi2aspida`
- **Package Manager**: pnpm
- **Development Server**: TurboRepo (to run both frontend & backend simultaneously)

---

## 構成
```sh
aspida-sample/
├── apps/
│   ├── frontend/    # Next.js 15+ (React Frontend)
│   ├── backend/     # Express API Server
│
├── turbo.json       # TurboRepo config for monorepo execution
├── package.json     # Root package.json (manages dependencies & scripts)
├── pnpm-lock.yaml   # Lock file for package dependencies
```

---

## 設定
### 前提条件
- **Node.js** `>=18.x`
- **pnpm** (installed globally)

If pnpm is not installed, run:
```sh
npm install -g pnpm
```

---

## インストール
Clone the repository and install dependencies:
```sh
git clone git@github.com:hoshico/aspida-sample.git
cd aspida-sample
pnpm install
```

---

## 開発
フロントエンド（Next.js）とバックエンド（Express）を同時に実行する:
```sh
pnpm dev
```
- Frontend runs at: **`http://localhost:8080`**
- Backend runs at: **`http://localhost:3001`**

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
