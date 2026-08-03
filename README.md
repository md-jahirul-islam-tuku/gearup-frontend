# GearUp — Outdoor Gear Rental Marketplace

GearUp is a modern **outdoor gear rental marketplace** where customers can discover and rent outdoor equipment, providers can manage their gear and rental orders, and administrators can manage the overall platform.

The application is built with a modern full-stack architecture using **Next.js 16, TypeScript, TailwindCSS, Shadcn/UI, Express.js, Prisma, PostgreSQL, JWT, and Stripe**.

---

## 🚀 Tech Stack

### Frontend

- **Next.js 16**
- **TypeScript**
- **TailwindCSS**
- **Shadcn/UI**
- **Base UI**
- **Lucide React**
- **Sonner**
- **JWT Authentication**
- **Server Actions**
- **Next.js Proxy**

### Backend

- **Express.js**
- **Prisma ORM**
- **PostgreSQL**
- **JWT**
- **Stripe Checkout**

---

# 🌐 Base URL

### Development

```text
http://localhost:5000/api
```

### Production

```text
https://gearup-backend-eight.vercel.app/api
```

---

# 🔐 Authentication

GearUp uses JWT-based authentication with:

- Access Token
- Refresh Token
- HTTP-only Cookies

### Authentication Flow

```text
                         Login
                           │
                           ▼
                  Backend Authentication
                           │
                           ▼
              ┌────────────┴────────────┐
              │                         │
         Access Token             Refresh Token
              │                         │
              └────────────┬────────────┘
                           ▼
                  HTTP-only Cookies
                           │
                           ▼
                    Next.js Proxy
                           │
                 ┌─────────┴─────────┐
                 │                   │
              Valid                Expired
                 │                   │
                 ▼                   ▼
             Continue        Refresh Token API
                                     │
                                     ▼
                              New Access Token
```

---

# 📡 API Documentation

## Authentication API

| Method | Endpoint              |
| ------ | --------------------- |
| `POST` | `/auth/register`      |
| `POST` | `/auth/login`         |
| `POST` | `/auth/refresh-token` |
| `GET`  | `/auth/me`            |

---

## Categories API

| Method | Endpoint          |
| ------ | ----------------- |
| `GET`  | `/categories`     |
| `GET`  | `/categories/:id` |

---

## Gear API

| Method   | Endpoint     |
| -------- | ------------ |
| `GET`    | `/gears`     |
| `GET`    | `/gears/:id` |
| `POST`   | `/gears`     |
| `PATCH`  | `/gears/:id` |
| `DELETE` | `/gears/:id` |

### Gear Query Parameters

| Parameter     | Description                        |
| ------------- | ---------------------------------- |
| `page`        | Pagination page                    |
| `limit`       | Number of items per page           |
| `searchTerm`  | Search by gear, category, or brand |
| `categoryId`  | Filter by category                 |
| `brand`       | Filter by brand                    |
| `minPrice`    | Minimum price                      |
| `maxPrice`    | Maximum price                      |
| `isAvailable` | Filter by availability             |
| `sortBy`      | Sort field                         |
| `sortOrder`   | `asc` or `desc`                    |

### Examples

```text
/api/gears?page=1&limit=12

/api/gears?searchTerm=tent

/api/gears?brand=NatureHike

/api/gears?categoryId=xxxxx

/api/gears?minPrice=10&maxPrice=50

/api/gears?sortBy=pricePerDay&sortOrder=asc
```

---

## Rental API

| Method  | Endpoint              |
| ------- | --------------------- |
| `POST`  | `/rentals`            |
| `GET`   | `/rentals/my-rentals` |
| `GET`   | `/rentals/:id`        |
| `PATCH` | `/rentals/:id`        |
| `PATCH` | `/rentals/:id/return` |

---

## Payment API

| Method | Endpoint             |
| ------ | -------------------- |
| `POST` | `/payments/checkout` |
| `GET`  | `/payments/:id`      |

---

## Review API

| Method | Endpoint           |
| ------ | ------------------ |
| `POST` | `/reviews`         |
| `GET`  | `/reviews`         |
| `GET`  | `/reviews/:gearId` |

---

# 🏗️ Frontend Architecture

The frontend follows a **service-layer architecture**.

UI components do not communicate directly with backend APIs.

```text
UI Component
     │
     ▼
Server Component / Server Action
     │
     ▼
Service Layer
     │
     ▼
Backend API
     │
     ▼
Database / External Services
```

---

# 📁 Project Structure

```text
src/
│
├── actions/
│   ├── auth/
│   ├── rentals/
│   └── reviews/
│
├── app/
│   ├── (dashboardGroup)/
│   │   └── dashboard/
│   │       ├── admin/
│   │       ├── customer/
│   │       └── provider/
│   │
│   └── ...
│
├── components/
│   ├── dashboard/
│   ├── shared/
│   └── ui/
│
├── services/
│   ├── auth/
│   ├── gears/
│   ├── rentals/
│   ├── reviews/
│   └── payments/
│
├── schemas/
├── types/
├── lib/
│
└── proxy.ts
```

---

# 🔌 Service Layer

Services are responsible for **API communication only**.

Examples:

```ts
getAllGear();

getGear();

createRental();

createReview();

checkout();

login();
```

Services should not contain UI logic.

### Example Flow

```text
Component
    │
    ▼
Action / Server Component
    │
    ▼
Service
    │
    ▼
API
```

This makes services reusable across multiple components.

---

# ⚡ Server Actions

Server Actions are used for server-side mutations and workflows.

### Current Use Cases

- Login
- Register
- Create Review
- Checkout
- Logout
- Rental mutations

Structure:

```text
src/actions/
├── auth/
├── rentals/
└── reviews/
```

---

# 🛡️ Proxy

The application uses `proxy.ts` for authentication and protected route handling.

### Responsibilities

- Route protection
- JWT validation
- Access token expiration handling
- Refresh token flow
- Role-based authorization

### Protected Routes

```text
/dashboard/customer

/dashboard/provider

/dashboard/admin
```

### Role-Based Routing

```text
ADMIN
   └── /dashboard/admin

PROVIDER
   └── /dashboard/provider

CUSTOMER
   └── /dashboard/customer
```

---

# 📦 API Response Format

All API errors follow a consistent structure.

### Error Response

```json
{
  "success": false,
  "message": "Something went wrong",
  "errorDetails": {}
}
```

---

# 📄 Pagination Response

Paginated API responses follow this structure:

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

### Pagination Fields

| Field       | Description    |
| ----------- | -------------- |
| `page`      | Current page   |
| `limit`     | Items per page |
| `total`     | Total records  |
| `totalPage` | Total pages    |

---

# 🛒 Rental & Checkout Flow

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
Payment Success
        │
        ▼
Success Page
        │
        ▼
Customer Dashboard
```

---

# ⭐ Review Flow

Only returned rentals can be reviewed.

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

# 🔎 Gear Search, Filter & Sorting

Gear search and filtering are handled through URL search parameters.

```text
Search / Filter / Sort UI
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
      Backend API
          │
          ▼
 Prisma Filtering / OrderBy
          │
          ▼
    Gear Results
```

### Example

```text
/gears?searchTerm=tent&categoryId=xxxxx&sortBy=pricePerDay&sortOrder=asc
```

This approach makes search and filtering:

- Shareable
- Bookmarkable
- Server-rendered
- Compatible with pagination

---

# 📱 Responsive UI

GearUp is designed to work across:

- Mobile
- Tablet
- Desktop
- Large desktop screens

The application includes responsive:

- Navbar
- Footer
- Dashboard sidebar
- Mobile sheet navigation
- Tables
- Forms
- Cards
- Filters
- Pagination

Large tables use horizontal scrolling on smaller screens where necessary.

---

# 🧩 UI Architecture

The project uses **Shadcn/UI + Base UI** components.

Common UI components include:

```text
Button
Dialog
Sheet
Dropdown Menu
Avatar
Skeleton
Input
Select
Table
Pagination
Toast
```

Icons are provided through:

```text
lucide-react
```

Brand icons such as social media logos can be provided through:

```text
simple-icons
```

---

# 🗃️ Core Features

### Customer

- User registration
- Login/logout
- Browse gears
- Search gears
- Filter gears
- Sort gears
- View gear details
- Rent gear
- Stripe checkout
- View rental history
- Return rental
- View payments
- Review returned gears
- Manage profile

### Provider

- Provider dashboard
- Create gear
- Edit gear
- Delete gear
- Manage inventory
- Manage rental orders
- View rental status
- View payment information
- Manage profile

### Admin

- Admin dashboard
- Manage users
- Manage categories
- Manage gears
- Manage rentals
- Manage payments
- Manage platform data

---

# ⚙️ Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

For production:

```env
NEXT_PUBLIC_API_URL=https://gearup-backend-eight.vercel.app/api
```

Add any additional environment variables required by authentication, Stripe, or other integrations.

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd gearup-frontend
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create:

```text
.env.local
```

Then add the required configuration.

Example:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 4. Start Development Server

```bash
npm run dev
```

The application will run at:

```text
http://localhost:3000
```

---

# 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Starts the production server.

### Lint

```bash
npm run lint
```

Runs ESLint.

---

# 🧠 Development Principles

## 1. Business Logic Stays in Backend

Business rules and database operations should remain in the backend.

```text
Frontend
   │
   ▼
Express.js
   │
   ▼
Prisma
   │
   ▼
PostgreSQL
```

---

## 2. Services Only Communicate With APIs

Frontend services should focus on API requests and responses.

---

## 3. Server Actions Handle Mutations

Server Actions are used where server-side mutation workflows are required.

---

## 4. UI Components Should Not Call APIs Directly

Avoid:

```text
Component → fetch(API)
```

Prefer:

```text
Component
    │
    ▼
Server Action / Server Component
    │
    ▼
Service
    │
    ▼
API
```

---

## 5. Centralized Authentication

Authentication is handled using:

```text
JWT
+
HTTP-only Cookies
+
proxy.ts
```

---

## 6. Strong TypeScript Typing

Use TypeScript types for:

- API responses
- Request payloads
- Component props
- Forms
- Server Actions
- Service functions

---

# ❗ Error Handling

Errors should be handled at the service/action layer and presented to the user through the UI.

Example:

```json
{
  "success": false,
  "message": "Rental could not be created",
  "errorDetails": {}
}
```

The frontend can display the `message` using Sonner:

```ts
toast.error(result.message);
```

---

# 🔄 Complete API Integration Flow

```text
                    GearUp Frontend
                           │
             ┌─────────────┴─────────────┐
             │                           │
      Server Components           Server Actions
             │                           │
             └─────────────┬─────────────┘
                           │
                           ▼
                     Service Layer
                           │
                           ▼
                  Express.js Backend
                           │
              ┌────────────┼────────────┐
              │            │            │
           Prisma         JWT         Stripe
              │            │            │
              ▼            ▼            ▼
         PostgreSQL   Authentication  Payments
```

---

# 🏛️ Architecture Overview

```text
┌─────────────────────────────────────────────┐
│                Next.js Frontend             │
│                                             │
│  UI Components                              │
│       │                                     │
│       ▼                                     │
│  Server Components / Server Actions         │
│       │                                     │
│       ▼                                     │
│  Service Layer                              │
└───────────────┬─────────────────────────────┘
                │
                │ HTTP API
                ▼
┌─────────────────────────────────────────────┐
│              Express.js Backend             │
│                                             │
│  Routes → Controllers → Services            │
│                     │                       │
│                     ▼                       │
│                   Prisma                    │
└───────────────────┬─────────────────────────┘
                    │
                    ▼
             PostgreSQL Database
```

---

# 🔒 Security

GearUp follows several security practices:

- JWT authentication
- HTTP-only cookies
- Protected dashboard routes
- Role-based authorization
- Server-side authentication checks
- Backend-side business logic
- API-level validation
- Strong TypeScript typing

---

# 📈 Future Improvements

Potential future improvements include:

- Advanced gear recommendations
- Provider analytics
- Customer rental analytics
- Notification system
- Wishlist
- Gear availability calendar
- Advanced review moderation
- Search optimization
- Caching
- Automated testing
- CI/CD pipeline

---

# 📄 License

This project is developed for the **GearUp Outdoor Gear Rental Marketplace**.

Add an appropriate open-source license here if the project is intended to be publicly distributed.

---

## 👨‍💻 Development Philosophy

GearUp follows a clean separation of concerns:

```text
UI
 ↓
Server Actions / Server Components
 ↓
Services
 ↓
Backend API
 ↓
Business Logic
 ↓
Prisma
 ↓
PostgreSQL
```

This architecture keeps the application **maintainable, reusable, scalable, and strongly typed**.
