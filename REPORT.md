# L2B Admin Dashboard — Frontend Architecture & API Integration Report

**Date:** March 25, 2026
**Subject:** Frontend Architecture Finalization and API Integration Next Steps

---

## Executive Summary

The core UI development and architectural foundation for the **L2B Admin Dashboard** are successfully established. The application is built on a highly scalable, enterprise-grade **MVVM (Model-View-ViewModel)** architecture that:

- Completely decouples UI from business logic
- Ensures efficient state management via **Zustand**
- Makes all complex dashboard states (tabs, date ranges, filters) shareable via **URL parameters**

The frontend is now in a strong, stable position and is ready to begin mapping to live backend services.

---

## 1. Architecture Overview

### 1.1 MVVM Pattern

```mermaid
graph TD
    subgraph View["🖼️ View Layer"]
        V1[Payment & Finance Pages]
        V2[Order & Operations Pages]
        V3[Inventory Pages]
        V4[Customer Management Pages]
        V5[Vendor Management Pages]
        V6[Growth & Behaviour Pages]
        V7[Marketing & Promotions Pages]
        V8[Tickets Pages]
    end

    subgraph ViewModel["⚙️ ViewModel Layer (Zustand)"]
        VM1[Finance ViewModel]
        VM2[Orders ViewModel]
        VM3[Inventory ViewModel]
        VM4[Customer ViewModel]
        VM5[Vendor ViewModel]
        VM6[Growth ViewModel]
        VM7[Marketing ViewModel]
        VM8[Tickets ViewModel]
        URL[URL State Sync]
    end

    subgraph Model["🗄️ Model Layer"]
        M1[API Service Layer]
        M2[Mock Data Layer]
        M3[Data Transformers]
    end

    View -->|User Actions| ViewModel
    ViewModel -->|Reactive State| View
    ViewModel -->|Data Requests| Model
    Model -->|Normalized Data| ViewModel
    URL -.->|Shareable State| ViewModel
```

### 1.2 State Management Flow

```mermaid
flowchart LR
    U([User Interaction]) --> A[UI Component]
    A --> B{Zustand Store}
    B --> C[URL Params Sync]
    B --> D[API Call Trigger]
    D --> E{Backend Ready?}
    E -- Yes --> F[Live API]
    E -- No --> G[Mock Data]
    F --> H[Data Transformer]
    G --> H
    H --> B
    B --> I[Re-render View]
    C --> J[Shareable URL]
```

---

## 2. Frontend Milestones Achieved

All modules below are **fully built, styled, and wired** to the MVVM architecture using mock data — 100% ready for API integration.

```mermaid
gantt
    title L2B Admin Dashboard — Module Completion Status
    dateFormat  YYYY-MM-DD
    section Payment & Finance
        Dashboard Pages          :done, 2026-01-01, 2026-02-01
        Analytical Charts        :done, 2026-01-15, 2026-02-10
        Data Tables              :done, 2026-01-20, 2026-02-15
    section Order & Operations
        Tracking Pages           :done, 2026-01-10, 2026-02-05
        Operational Pages        :done, 2026-01-20, 2026-02-10
    section Inventory Management
        Catalog Screens          :done, 2026-01-25, 2026-02-20
        SKU Management           :done, 2026-02-01, 2026-02-25
    section Customer Management
        Dashboard                :done, 2026-02-01, 2026-02-20
        Detail Screens           :done, 2026-02-05, 2026-02-25
        Editable Profile         :done, 2026-02-10, 2026-03-01
    section Vendor Management
        Dashboard                :done, 2026-02-10, 2026-03-01
        Detail Screens           :done, 2026-02-15, 2026-03-05
        Editable Profile         :done, 2026-02-20, 2026-03-10
    section Growth & Behaviour
        Metrics Screen           :done, 2026-02-15, 2026-03-05
        User Funnels             :done, 2026-02-20, 2026-03-10
        Geographic Maps          :done, 2026-02-25, 2026-03-15
    section Marketing & Promotions
        Campaign Tracking        :done, 2026-03-01, 2026-03-15
    section Tickets
        Support & Ticketing      :done, 2026-03-05, 2026-03-20
    section Floating Components
        Reusable Floaters        :active, 2026-03-15, 2026-03-30
```

### 2.1 Module Summary

| Module | Pages Built | Charts | Tables | Status |
|---|---|---|---|---|
| Payment & Finance | ✅ | ✅ | ✅ | Mock Ready |
| Order & Operations | ✅ | ✅ | ✅ | Mock Ready |
| Inventory Management | ✅ | ✅ | ✅ | Mock Ready |
| Customer Management | ✅ | ✅ | ✅ | Mock Ready |
| Vendor Management | ✅ | ✅ | ✅ | Mock Ready |
| Growth & Behaviour | ✅ | ✅ | ✅ | Mock Ready |
| Marketing & Promotions | ✅ | ✅ | ✅ | Mock Ready |
| Tickets | ✅ | ✅ | ✅ | Mock Ready |
| **Floating Components** | 🔄 | — | — | **In Progress** |

---

## 3. Current UI Focus

### 3.1 Floating Screen Components

Finalizing reusable floating components to ensure they are **standardized across the application**.

```mermaid
graph LR
    subgraph Floaters["Floating Component System"]
        F1[Modal Dialogs]
        F2[Confirmation Sheets]
        F3[Filter Drawers]
        F4[Toast Notifications]
        F5[Context Menus]
        F6[Date Range Pickers]
    end

    subgraph Usage["Consumer Modules"]
        U1[Finance]
        U2[Orders]
        U3[Inventory]
        U4[Customers]
        U5[Vendors]
    end

    Floaters -->|Reused Across| Usage
```

---

## 4. Backend API Readiness & Integration Plan

### 4.1 Current Integration Landscape

```mermaid
flowchart TB
    subgraph FE["Frontend (Ready)"]
        direction LR
        FE1[Orders UI]
        FE2[Worker Requests UI]
        FE3[Tower Cranes UI]
        FE4[Inventory UI]
        FE5[Finance UI]
        FE6[Growth UI]
        FE7[Marketing UI]
    end

    subgraph BE["Backend API"]
        direction LR
        BE1["✅ GET /rentals/bookings"]
        BE2["✅ PATCH /rentals/worker-requests/:id/approve"]
        BE3["✅ GET /rentals/tower-crane-requests"]
        BE4["✅ GET /inventory/categories & SKUs"]
        BE5["⛔ Auth: uuid4 Stub (Blocker)"]
        BE6["🚧 Finance Aggregation Endpoints (TBD)"]
        BE7["🚧 Growth Funnel Endpoints (TBD)"]
        BE8["🚧 Marketing Metrics Endpoints (TBD)"]
    end

    FE1 -->|Ready to Wire| BE1
    FE2 -->|Ready to Wire| BE2
    FE3 -->|Ready to Wire| BE3
    FE4 -->|Ready to Wire| BE4
    FE5 -.->|Blocked| BE5
    FE5 -.->|Pending| BE6
    FE6 -.->|Pending| BE7
    FE7 -.->|Pending| BE8
```

### 4.2 Section A — Ready for Immediate Integration

Once authentication is activated, the following can be integrated immediately:

```mermaid
sequenceDiagram
    participant Admin as Admin Dashboard
    participant Auth as JWT Auth (to enable)
    participant API as Backend API

    Admin->>Auth: Login Request
    Auth-->>Admin: JWT Token
    Admin->>API: GET /rentals/bookings (Bearer Token)
    API-->>Admin: Booking Data

    Admin->>API: PATCH /rentals/worker-requests/{id}/approve
    API-->>Admin: Approval Confirmation

    Admin->>API: GET /rentals/tower-crane-requests
    API-->>Admin: Crane Request List

    Admin->>API: GET /inventory/categories
    API-->>Admin: Catalog & SKU Data
```

| Endpoint | Method | Feature | Status |
|---|---|---|---|
| `/rentals/bookings` | `GET` | Orders & Tracking | ✅ Ready |
| `/rentals/worker-requests/{id}/approve` | `PATCH` | Worker Approval Flow | ✅ Ready |
| `/rentals/tower-crane-requests` | `GET` | Tower Crane Review | ✅ Ready |
| `/inventory/categories` | `GET` | Catalog & SKUs | ✅ Ready |

---

## 5. Action Items for Backend Team

### 5.1 Critical Blocker — Activate JWT Authentication

> ⚠️ **Priority: CRITICAL** — Blocks all secure admin data scoping

The backend rental, vendor, and payment endpoints currently use a **stubbed authentication method** (`uuid.uuid4()`). To enable secure admin login and correct data scoping, the backend team must:

```mermaid
flowchart LR
    A["Current State\nuuid.uuid4() stub"] -->|Uncomment get_current_user| B["Target State\nJWT Auth Active"]
    B --> C[rentals/router.py]
    B --> D[vendors/router.py]
    B --> E[payments/router.py]
```

**Action Required:**
- Uncomment `get_current_user` across all router files:
  - `rentals/router.py`
  - `vendors/router.py`
  - `payments/router.py`

---

### 5.2 New Dashboard Analytics Endpoints Required

The existing API covers **transactional flows** for User and Vendor mobile apps. To power the Admin Dashboard, **new aggregated analytics endpoints** are needed.

```mermaid
graph TD
    subgraph Required["New Aggregated Endpoints Needed"]
        subgraph Finance["💰 Finance Endpoints"]
            F1[Gross Revenue over time]
            F2[Net Revenue over time]
            F3[Commission Breakdown]
            F4[Average Order Value — AOV]
        end

        subgraph Growth["📈 Growth Endpoints"]
            G1[Funnel Drop-off Rates]
            G2[Location-based Session Counts]
        end

        subgraph Marketing["📣 Marketing Endpoints"]
            M1[Campaign Impressions]
            M2[Campaign Clicks & CTR]
            M3[Customer Acquisition Cost — CAC]
        end
    end

    FE[Admin Dashboard Frontend] -->|Consumes| Required
```

#### Proposed Payload Structure

**Finance — Aggregated Revenue**
```json
{
  "period": "2026-03",
  "gross_revenue": 980000,
  "net_revenue": 712000,
  "commission": 268000,
  "aov": 4350,
  "trend": [
    { "date": "2026-03-01", "gross": 32000, "net": 23000 }
  ]
}
```

**Growth — Funnel Drop-off**
```json
{
  "funnel": [
    { "stage": "Landing", "users": 12000 },
    { "stage": "Product View", "users": 8400 },
    { "stage": "Add to Cart", "users": 5200 },
    { "stage": "Checkout", "users": 3100 },
    { "stage": "Confirmed", "users": 2600 }
  ],
  "geo_sessions": [
    { "location": "Mumbai", "lat": 19.076, "lng": 72.877, "sessions": 4200 }
  ]
}
```

**Marketing — Campaign Metrics**
```json
{
  "campaign_id": "CAMP-042",
  "name": "Monsoon Promo",
  "impressions": 120000,
  "clicks": 8400,
  "ctr": 0.07,
  "cac": 320
}
```

---

## 6. Integration Roadmap

```mermaid
timeline
    title L2B Admin Dashboard — Integration Timeline
    section Phase 1 · Auth Activation
        Week 1 : Backend enables JWT auth
               : Uncomment get_current_user in all routers
               : Frontend login flow wired to real token
    section Phase 2 · Transactional Integration
        Week 2 : Orders & Tracking live
               : Worker Requests approval live
               : Tower Crane requests live
               : Inventory catalog live
    section Phase 3 · Analytics Endpoints
        Week 3 : Sync with backend on payload schemas
               : Finance aggregation endpoints built
               : Growth funnel endpoints built
    section Phase 4 · Full Integration
        Week 4 : Marketing metrics endpoints built
               : All dashboard modules on live data
               : E2E testing & UAT
```

---

## 7. Summary of Open Items

```mermaid
graph LR
    subgraph Blockers["🔴 Critical Blockers"]
        B1[JWT Auth — Activate get_current_user]
    end

    subgraph InProgress["🟡 In Progress"]
        I1[Floating Screen Components — UI]
        I2[Analytics Endpoint Schema Sync]
    end

    subgraph Pending["🔵 Pending Backend"]
        P1[Finance Aggregation Endpoints]
        P2[Growth Funnel Endpoints]
        P3[Marketing Metrics Endpoints]
    end

    subgraph Done["🟢 Complete"]
        D1[All 8 Frontend Modules]
        D2[MVVM Architecture]
        D3[Zustand State Management]
        D4[URL State Sharing]
    end
```

| # | Item | Owner | Priority | Status |
|---|---|---|---|---|
| 1 | Activate JWT Auth (`get_current_user`) | Backend | 🔴 Critical | Blocked |
| 2 | Finalize Floating Components | Frontend | 🟡 Medium | In Progress |
| 3 | Analytics Endpoint Schema Sync | Both | 🟡 Medium | Pending Sync |
| 4 | Finance Aggregation Endpoints | Backend | 🔵 High | Not Started |
| 5 | Growth Funnel Endpoints | Backend | 🔵 High | Not Started |
| 6 | Marketing Metrics Endpoints | Backend | 🔵 Medium | Not Started |
| 7 | Wire transactional endpoints post-auth | Frontend | 🟢 Ready | Queued |

---

*Document generated: March 25, 2026 · L2B Engineering Team*