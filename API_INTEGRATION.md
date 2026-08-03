# API Integration Guide

## Project

**GearUp - Outdoor Gear Rental Marketplace**

Frontend: Next.js 16 + TypeScript + TailwindCSS + Shadcn/UI

Backend: Express.js + Prisma + PostgreSQL

Authentication: JWT (Access Token + Refresh Token)

---

# Base URL

Development

```text
http://localhost:5000/api
```

Production

```text
https://gearup-backend-eight.vercel.app/api
```

---

# Authentication

The application uses:

- JWT Access Token
- JWT Refresh Token
- HTTP Only Cookies

Authentication flow

```text
Login
   │
   ▼
Backend returns
   ├── accessToken
   └── refreshToken
   │
   ▼
Frontend stores cookies
   │
   ▼
Proxy validates accessToken
   │
   ├── valid → continue
   │
   └── expired
          │
          ▼
     refresh token endpoint
          │
          ▼
     new access token
```

---

# API Structure

## Authentication

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /auth/register      |
| POST   | /auth/login         |
| POST   | /auth/refresh-token |
| GET    | /auth/me            |

---

## Categories

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /categories     |
| GET    | /categories/:id |

---

## Gear

| Method | Endpoint   |
| ------ | ---------- |
| GET    | /gears     |
| GET    | /gears/:id |
| POST   | /gears     |
| PATCH  | /gears/:id |
| DELETE | /gears/:id |

### Query Parameters

| Query       | Description                   |
| ----------- | ----------------------------- |
| page        | pagination                    |
| limit       | pagination size               |
| searchTerm  | search by gear/category/brand |
| categoryId  | category filter               |
| brand       | brand filter                  |
| minPrice    | minimum price                 |
| maxPrice    | maximum price                 |
| isAvailable | true / false                  |
| sortBy      | pricePerDay, createdAt, stock |
| sortOrder   | asc / desc                    |

Example

```text
/api/gears?page=1&limit=12

/api/gears?searchTerm=tent

/api/gears?brand=NatureHike

/api/gears?categoryId=xxxxx

/api/gears?minPrice=10&maxPrice=50

/api/gears?sortBy=pricePerDay&sortOrder=asc
```

---

## Rental

| Method | Endpoint            |
| ------ | ------------------- |
| POST   | /rentals            |
| GET    | /rentals/my-rentals |
| GET    | /rentals/:id        |
| PATCH  | /rentals/:id        |
| PATCH  | /rentals/:id/return |

---

## Payment

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /payments/checkout |
| GET    | /payments/:id      |

---

## Reviews

| Method | Endpoint         |
| ------ | ---------------- |
| POST   | /reviews         |
| GET    | /reviews         |
| GET    | /reviews/:gearId |

---

# Frontend Service Layer

```
src/
 ├── services/
 │      auth/
 │      gear/
 │      rental/
 │      review/
 │      payment/
```

Each service performs API communication only.

Example

```ts
getAllGear();

createRental();

createReview();

checkout();

login();
```

---

# Server Actions

Server actions are used to:

- Login
- Register
- Create Review
- Checkout
- Logout

Structure

```
src/actions/
```

---

# Proxy

The application uses **proxy.ts** for:

- Route protection
- JWT validation
- Refresh token flow
- Role based authorization

Protected dashboards

```
/dashboard/customer

/dashboard/provider

/dashboard/admin
```

---

# Error Response

Every API follows

```json
{
  "success": false,
  "message": "...",
  "errorDetails": {}
}
```

---

# Pagination Response

```json
{
  "success": true,
  "meta": {
    "page": 1,
    "limit": 12,
    "total": 50,
    "totalPage": 5
  },
  "data": []
}
```

---

# Folder Structure

```
services/
    auth/
    gears/
    rentals/
    reviews/
    payments/

actions/
    auth/
    rentals/
    reviews/

types/

schemas/
```

---

# Best Practices

- Business logic remains in backend.
- Frontend services only call APIs.
- Server Actions handle mutations.
- JWT validation handled in proxy.
- UI components never communicate directly with APIs.
- Services are reusable.
- Strong TypeScript typing throughout the application.

---

# API Flow Example

```text
User clicks Rent

        │

        ▼

Checkout Button

        │

        ▼

Server Action

        │

        ▼

Rental Service

        │

        ▼

Backend API

        │

        ▼

Stripe Checkout

        │

        ▼

Success Page

        │

        ▼

Customer Dashboard
```

---

# Review Flow

```text
RETURNED Rental

      │

      ▼

Leave Review Button

      │

      ▼

Review Dialog

      │

      ▼

Server Action

      │

      ▼

POST /reviews

      │

      ▼

Success Toast
```

---

# Sorting Flow

```text
Sort Dropdown

      │

      ▼

URL Search Params

      │

      ▼

Server Component

      │

      ▼

getAllGear()

      │

      ▼

Backend

      │

      ▼

Prisma OrderBy
```
