# Dashboard Rental Backend Contract

## Purpose
This document is the source of truth for Dashboard Rental backend implementation.
It is maintained page-by-page from validated product and UI inputs.

## Capture Rules
- Record only confirmed behavior from stakeholder input, screenshots, and Figma walkthroughs.
- Add unresolved points under `Pending Clarifications` with business-friendly wording.
- Keep this file implementation-ready but understandable for non-technical stakeholders.

---

## 1. CustomerManagement

### 1.0 Design References
- **All customers overview page (CustomerManagement):** `https://www.figma.com/proto/yxSZTRxeArCgbg9CEDbuqi/L2B-Dashboard?node-id=534-16465&t=d7gTWIpwYC38jHsY-0&scaling=min-zoom&content-scaling=fixed&page-id=9%3A17&starting-point-node-id=534%3A16465`
- **Customer(Admin) individual page:** `https://www.figma.com/proto/yxSZTRxeArCgbg9CEDbuqi/L2B-Dashboard?node-id=532-6176&t=vA5YGzhHSnSswe51-0&scaling=min-zoom&content-scaling=fixed&page-id=9%3A17&starting-point-node-id=532%3A6176&show-proto-sidebar=1`

### 1.1 Scope Lock
- Current backend derivation scope for this document section is **Rental**.
- Material-side differences are captured as UI notes but not primary implementation target in current phase.

### 1.1A Dashboard Operator Hierarchy (Access Model Lock)
- **L1 (Admin/Owner):**
  - highest authority in dashboard.
  - can access cross-team controls and privileged override operations.
- **L2 (Manager):**
  - works under L1.
  - each team has exactly one L2 manager (for example Customer Management team, Voice Support team).
  - there can be multiple teams and therefore multiple L2 users.
- **L3 (Operations Worker):**
  - executes day-to-day operational actions under team scope.
  - can escalate requests/issues to upper levels as needed.
- **Backend implication lock:**
  - all write actions in dashboard APIs must be role-gated by hierarchy level and team scope (`L1/L2/L3`) instead of only app-customer roles.

### 1.2 All Customers Overview Page

#### A) Page Header Controls
- **Purpose:** control the aggregation context for all dashboard widgets/tables.
- **UI specification (locked):**
  - `Overview` title.
  - `Start Date` picker.
  - `End Date` picker.
  - period filter values: `Daily`, `Weekly`, `Monthly`, `Yearly`.
  - tab switcher: `Rental` / `Material` (current backend phase focuses on Rental outputs).
- **API Needed:** `Read`
- **Backend derivation notes:**
  - all data blocks on page must consume same filter envelope (`start_date`, `end_date`, `period`, `domain_tab`).
  - all responses should include period-comparison metadata used for `increment/decrement`.

#### B) Top KPI Info Cards
- **Purpose:** high-level operational summary.
- **UI specification (locked):**
  - cards: `Active Orders`, `Completed`, `Failed Orders`, `Tickets`.
  - each card shows: title, value/count, comparison delta, info icon context.
  - KPI values recalculate based on applied filters.
- **API Needed:** `Read`
- **Backend derivation notes:**
  - return normalized KPI payload objects (id/title/value/delta/delta_direction).
  - support zero-state and null-safe values when no data for selected period.

#### C) Earning Panel
- **Purpose:** payment mix + revenue summary.
- **UI specification (locked):**
  - pie/donut chart with payment modes:
    - `UPI`
    - `COD`
    - `Net Banking`
    - `Paylater`
  - side KPI cards:
    - `Total Order`
    - `Net Sale`
  - all values recalculate per selected filters.
- **API Needed:** `Read`
- **Backend derivation notes:**
  - chart payload should return per-mode value/percentage.
  - `Net Sale` should map to finance-approved net definition before backend freeze.

#### D) High Demand Area Panel
- **Purpose:** show geo demand concentration.
- **UI specification (locked):**
  - map panel with highlighted areas.
  - legends:
    1. `High Demand`
    2. `Less Demand`
    3. `Slightly Less Demand`
- **API Needed:** `Read`
- **Backend derivation notes:**
  - map + legend values must be aligned to same computed bins.
  - location response should support geospatial overlays (or area-level aggregates if map layer is client-rendered).

#### E) All Customers Side Summary Panel
- **Purpose:** customer segmentation summary.
- **UI specification (locked):**
  - segments:
    - `Total`
    - `Active`
    - `New`
    - `Repeat`
    - `Potential`
    - `At Risk`
    - `Dormat` (UI spelling retained)
    - `Restricted`
  - each row shows label + count/value + delta.
- **API Needed:** `Read`
- **Backend derivation notes:**
  - keep segment definitions centralized to avoid metric mismatch between dashboard blocks.

#### F) Bottom All Orders Table (Overview Page)
- **Purpose:** record-level order monitoring from summary page.
- **UI specification (locked):**
  - toolbar + searchable/filterable table.
  - columns:
    1. `Status`
    2. `Order ID`
    3. `Equipment`
    4. `Capacity`
    5. `Booking Date`
    6. `Starts On`
    7. `Ends On`
    8. `Extended`
    9. `1st Location`
    10. `2nd Location`
    11. `Customer ID`
    12. `Vendor ID`
    13. `Operator ID`
    14. `Ratings`
    15. `Payment`
    16. `Coupon`
    17. `Booking Details`
    18. `Manage`
  - toolbar status filter values:
    - `Completed`
    - `Started`
    - `Arrive`
    - `Extended`
- **API Needed:** `Read` (and `Write` for manage actions when finalized)
- **Backend derivation notes:**
  - server-side pagination/sort/filter/search required for scalable table behavior.
  - `Manage` and `Booking Details` action semantics should map to explicit write/read-detail contracts.
  - `Booking Details` column includes `View full`; clicking opens a side panel with full booking data for the selected order.
  - if `Vendor ID` is empty (no vendor accepted from vendor app), dashboard must support manual vendor assignment for that booking as an operations override.
  - vendor assignment trigger is from `Vendor ID` field action (`Assign/Change`) in booking detail context.

### 1.3 Customer Individual Page Family (Admin / Worker / Individual)

#### A) Common Layout Contract
- **Purpose:** single-customer drill-down for operations and profile updates.
- **UI specification (locked):**
  - same page layout skeleton across all three roles (`Admin`, `Worker`, `Individual`).
  - same lower-order table column set across all three role variants.
  - same chip taxonomy across all three role variants:
    1. `New User`
    2. `Active`
    3. `Serial Canceller`
    4. `Restricted` (must include reason visibility)
- **API Needed:** `Read` + `Write`
- **Backend derivation notes:**
  - one customer-detail read model + role-specific projection rules.
  - one editable command model with role-specific field edit guards.

#### B) Individual Page Header Variant Rules
- **Admin variant header (locked):**
  - profile image, joining date, wallet balance, `Edit`, active chip, customer ID, mobile, email, user type, company name.
- **Worker variant header (locked):**
  - customer ID, mobile, email, user type, company name.
  - no wallet balance.
- **Individual variant header (locked):**
  - customer ID, mobile, email, user type, `Edit`.
  - wallet balance is present.
  - company name is not present.
- **API Needed:** `Read`
- **Backend derivation notes:**
  - response should include conditional fields by role variant to avoid frontend guesswork.

#### C) Individual Page Overview + KPI Cards
- **UI specification (locked):**
  - `Overview` block with `Start Date`, `End Date`, period filter (`Daily`, `Weekly`, `Monthly`, `Yearly`).
  - cards shown:
    - `Active Orders`
    - `Total Orders`
    - `Total Sale`
    - `Failed Orders`
    - `Ticket`
  - `Active Orders` + `Total Orders` cards show split values (`Rental` and `Material`) in same card.
  - all values recalculate per filters.
- **API Needed:** `Read`
- **Backend derivation notes:**
  - return split-structure payload for dual-domain cards.

#### D) Individual Spend + Requested/Wishlist Matrix
- **UI specification (locked):**
  - `Spend` chart compares Rental and Material activity; shows period delta.
  - spend chart payload expectation includes time bucket on x-axis and per-domain series values.
  - `Requested / Wishlist` table columns:
    - `Category`, `Item`, `Type`, `Brand`, `Person`, `Site`, `Date`
  - requested/wishlist filter values:
    - `All`
    - `Rentals`
    - `Materials`
- **API Needed:** `Read`
- **Backend derivation notes:**
  - matrix payload should be independent from lower orders table payload for caching/reuse.

#### E) Individual Page Bottom Orders Toolbar + Table
- **UI specification (locked):**
  - bottom tabs:
    - `Rental Orders`
    - `Material Orders`
  - table columns (common for all three roles):
    1. `Status`
    2. `Order Id`
    3. `Equipment`
    4. `Capacity`
    5. `Booking Date`
    6. `Starts On`
    7. `End On`
    8. `Extended`
    9. `1st Location`
    10. `2nd Location`
    11. `Customer Id`
    12. `Vendor Id`
    13. `Operator Id`
    14. `Ratings`
    15. `Payment`
    16. `Coupon`
    17. `Booking Details`
    18. `Manage`
- **API Needed:** `Read` (and `Write` for manage actions when finalized)
- **Backend derivation notes:**
  - tab-specific dataset retrieval with shared column contract.
  - `Booking Details` action opens side panel for selected booking with full-order operational fields.
  - side panel must support operator updates for allowed fields (for example vendor assignment, ticket raised, save/reset) based on role permissions.
  - vendor assignment in side panel follows a multi-step selection flow:
    1. choose vendor from vendor list modal.
    2. choose brand for selected vendor.
    3. choose machine/vehicle (by vehicle number) for selected brand.
  - vendor list must be filtered by booking equipment type; example: if booking type is `Mobile crane`, show only vendors with mobile-crane inventory.
  - selected vendor + brand + vehicle mapping should be written atomically to avoid partial assignment states.

### 1.4 Editable Sideboards (Role-Specific)

#### A) Customer(Admin) Editable Sideboard
- **UI specification (locked):**
  - trigger: clicking `Edit` on Admin individual header opens right-side sideboard.
  - sideboard header: `Customer profile`, wallet balance pill, top-right search.
  - sections:
    - `Personal Info`
    - `Company Info`
    - `Team Details`
    - `Project Details`
    - `Payment Details`
  - `Personal Info` fields:
    - profile image/avatar, role selector context (`Admin`, `Worker`, `Individual`), `Name`, `Contact no`, `Referral no`, `Email ID`, `Customer ID`.
  - `Company Info` fields:
    - `Company name`, `GST no`, `Pan no`, `PKYC...`, `Aadhar card`.
    - KYC states visible in UI context include `Approve`, `Rejected`, `Pending`, `On hold`.
  - `Team Details` table context:
    - `Name/ID`, associated site count/value, row actions `Remove` and `Assign`, top-right list/filter control.
  - `Project Details` table context:
    - `Site name`, `Address`, `Team me...`, `Receiver...`, section action `Add new project`.
  - `Payment Details` context:
    - bank label/name, masked account details, row action `Remove`, section action `Add payment method`.
  - footer actions:
    - `Reset changes`
    - `Save changes`
  - notable actions:
    - `Add new project`
    - `Add payment method`
    - `Remove` / `Assign` row actions where visible.
- **API Needed:** `Both`
- **Backend derivation notes:**
  - requires modular write operations: profile update, team assignment update, project update, payment-method update, KYC status updates.

#### B) Customer(Worker) Editable Sideboard
- **UI specification (locked):**
  - trigger: clicking `Edit` on Worker individual header opens right-side sideboard.
  - no wallet balance pill.
  - sections:
    - `Personal Info`
    - `Company Info`
    - `Site details`
  - `Personal Info` fields:
    - profile image/avatar, worker role context, `Name`, `Contact no`, `Referral no`, `Email ID`, `Customer ID`.
  - `Company Info` fields:
    - `Company name`, `GST no`, `Pan no`, `Aadhar card` with KYC status/action visibility.
  - `Site details` table:
    - columns `Site name`, `Address`, `Manage`.
    - row action `Remove`.
    - top-right site filter/list (`All Site`, `Site A`, `Site B`, `Site C` in current UI).
  - no `Team Details`, `Project Details`, `Payment Details`.
  - no add-project/add-payment actions.
  - footer actions remain `Reset changes` + `Save changes`.
- **API Needed:** `Both`
- **Backend derivation notes:**
  - write scope narrower than Admin; enforce role-based field restrictions.

#### C) Customer(Individual) Editable Sideboard
- **UI specification (locked):**
  - trigger: clicking `Edit` on Individual header opens right-side sideboard.
  - sideboard header: `Customer profile` with top-right search.
  - sideboard sections effectively match Worker editable layout:
    - `Personal Info`
    - `Company Info`
    - `Site details`
  - `Personal Info` fields:
    - profile image/avatar, individual role context, `Name`, `Contact no`, `Referral no`, `Email ID`, `Customer ID`.
  - `Company Info` fields:
    - `Company name`, `GST no`, `Pan no`, `Aadhar card` with KYC status/action visibility.
  - `Site details` table:
    - columns `Site name`, `Address`, `Manage`.
    - row action `Remove`.
    - top-right site filter/list (`All Site`, `Site A`, `Site B`, `Site C` in current UI).
  - no wallet balance pill in sideboard header.
  - no team/project/payment sections.
  - footer actions remain `Reset changes` + `Save changes`.
- **Difference lock:**
  - relative to Worker editable sideboard, primary difference is entity role context (`Individual` vs `Worker`).
- **API Needed:** `Both`
- **Backend derivation notes:**
  - same command shape can be reused with role-context policy checks.

#### D) Dashboard Support Actions (On Behalf Of Customer)
- **Purpose:** allow L2B help-center/dashboard operators to complete blocked customer operations in case of app-side technical issues.
- **UI specification (locked from latest input):**
  - add project for Admin customer.
  - add project details / update project details.
  - add receiver details and remove receiver details.
  - add multiple team members for a specific site.
  - remove team member from site.
  - assign a member to more than one site.
  - assign vendor directly to a booking when `Vendor ID` is empty and no vendor has accepted from vendor app.
  - while assigning vendor, operator selects vendor first, then brand, then exact machine by vehicle number.
  - vendor options are constrained by booked equipment category/type.
  - remove payment card (confirmation modal flow visible in UI screenshot).
  - view wallet balance.
  - view wallet transaction history.
  - add money to wallet.
- **API Needed:** `Both`
- **Backend implications:**
  - expose dashboard-scoped endpoints for on-behalf operations, while reusing existing domain services where possible.
  - every write action must persist `acted_by` (help-center user), `acted_for` (target customer), timestamp, and action reason/ticket reference.
  - enforce strict RBAC mapped to dashboard hierarchy (`L1`/`L2`/`L3`) with explicit scope checks before performing customer-company mutations.
  - apply team-boundary authorization for `L2` and `L3`; `L1` can operate across teams.
  - on failure, return actionable error metadata so support team can retry/escalate without ambiguous states.
- **Pending decisions:**
  - whether receiver policy in dashboard flow is locked to `max 2` receivers per site/order context.
  - whether wallet add-money from dashboard is immediate ledger credit or approval-based operation.
  - whether remove-card should hard-delete token mapping or soft-disable for audit/compliance.
  - explicit guardrails for manual vendor assignment (allowed statuses, allowed actor roles, reassignment policy, and notification side effects).
  - whether reassignment is allowed after machine is already assigned and what audit/notification path should be enforced in that case.

### 1.5 Pending Decisions (Backend Blocking)
- Exact formula implementation for each KPI and segment bucket versioning/audit strategy.
- Final manage-action command list for table rows (what exact updates are allowed from dashboard).
- Final correction/rollback policy for dashboard edits across profile/team/site/project/payment operations.

### 1.6 CustomerManagement Endpoint Inventory (Required vs Existing)
This section lists the API surface needed for CustomerManagement dashboard operations and maps it against APIs already available in current backend implementation.

#### A) Required Endpoint Set (Dashboard Rental / CustomerManagement)
1. `GET /api/v1/dashboard/rental/customers/overview/kpis`
2. `GET /api/v1/dashboard/rental/customers/overview/earnings`
3. `GET /api/v1/dashboard/rental/customers/overview/demand-map`
4. `GET /api/v1/dashboard/rental/customers/overview/segments`
5. `GET /api/v1/dashboard/rental/customers/overview/orders`
6. `GET /api/v1/dashboard/rental/customers/{customer_id}/profile`
7. `PATCH /api/v1/dashboard/rental/customers/{customer_id}/profile`
8. `GET /api/v1/dashboard/rental/customers/{customer_id}/overview/kpis`
9. `GET /api/v1/dashboard/rental/customers/{customer_id}/spend`
10. `GET /api/v1/dashboard/rental/customers/{customer_id}/requested-wishlist`
11. `GET /api/v1/dashboard/rental/customers/{customer_id}/orders`
12. `GET /api/v1/dashboard/rental/customers/{customer_id}/orders/{booking_id}/details`
13. `PATCH /api/v1/dashboard/rental/customers/{customer_id}/orders/{booking_id}/assign-vendor`
14. `GET /api/v1/dashboard/rental/customers/{customer_id}/orders/{booking_id}/assignable-vendors`
15. `GET /api/v1/dashboard/rental/customers/{customer_id}/orders/{booking_id}/assignable-vendors/{vendor_id}/brands`
16. `GET /api/v1/dashboard/rental/customers/{customer_id}/orders/{booking_id}/assignable-vendors/{vendor_id}/brands/{brand_id}/machines`
17. `POST /api/v1/dashboard/rental/customers/{customer_id}/projects`
18. `PATCH /api/v1/dashboard/rental/customers/{customer_id}/projects/{project_id}`
19. `GET /api/v1/dashboard/rental/customers/{customer_id}/projects/{project_id}/team`
20. `POST /api/v1/dashboard/rental/customers/{customer_id}/projects/{project_id}/team-members`
21. `DELETE /api/v1/dashboard/rental/customers/{customer_id}/projects/{project_id}/team-members/{member_id}`
22. `PATCH /api/v1/dashboard/rental/customers/{customer_id}/projects/{project_id}/team-members/{member_id}/receiver`
23. `GET /api/v1/dashboard/rental/customers/{customer_id}/wallet`
24. `GET /api/v1/dashboard/rental/customers/{customer_id}/wallet/transactions`
25. `POST /api/v1/dashboard/rental/customers/{customer_id}/wallet/topups`
26. `GET /api/v1/dashboard/rental/customers/{customer_id}/payment-methods`
27. `DELETE /api/v1/dashboard/rental/customers/{customer_id}/payment-methods/{payment_method_id}`
28. `POST /api/v1/dashboard/rental/approval-requests`
29. `GET /api/v1/dashboard/rental/approval-requests`
30. `PATCH /api/v1/dashboard/rental/approval-requests/{request_id}/approve`
31. `PATCH /api/v1/dashboard/rental/approval-requests/{request_id}/reject`

#### B) APIs Already Present In Current Backend (Reusable Building Blocks)
The following APIs already exist today in app backend and can be reused/refactored at service level:
- `POST /api/v1/projects`
- `PUT /api/v1/projects/{project_id}`
- `GET /api/v1/projects/{project_id}`
- `GET /api/v1/projects/{project_id}/team`
- `POST /api/v1/projects/{project_id}/team`
- `DELETE /api/v1/projects/{project_id}/team/{member_id}`
- `GET /api/v1/payments/wallet`
- `POST /api/v1/payments/wallet/topup`
- `GET /api/v1/rentals/bookings`
- `GET /api/v1/rentals/bookings/{booking_id}`
- `GET /api/v1/profile`
- `PUT /api/v1/profile`
- `GET /api/v1/company/{company_id}/members`

#### C) Coverage Count Snapshot
- **Total required endpoints for CustomerManagement dashboard (current contract):** `31`
- **Already present in current backend (app-facing primitives):** `13`
- **New dashboard endpoints still required:** `18`

#### D) Important Implementation Note
- Even for already-present endpoints, direct dashboard reuse is limited because dashboard needs:
  - on-behalf operations (`acted_by` vs `acted_for`),
  - hierarchy approval flow (`L3 -> L2 -> L1`),
  - team-boundary authorization checks,
  - dashboard audit trail fields.
- Therefore existing APIs should be treated as **service-layer building blocks**, while dashboard should expose dedicated endpoint contracts.

---

## 2. VendorManagement
### 2.0 Scope and Intent
- **Purpose:** provide dashboard control-plane for vendor onboarding/operations assignment and live execution visibility for rental bookings.
- **Implementation reference lock:** API conventions for this section are derived from existing rental/vendor implementation style under:
  - `src/features/vendor/router.py`
  - `src/features/rental/booking/router.py`
  - `src/features/rental/tracking/router.py`

### 2.0A Vendor Ecosystem Actor Taxonomy (Locked)
- **Vendor With Company (Admin):**
  - vendor entity with company context.
  - can have multiple machines and linked operators under the vendor company.
- **Vendor Without Company (Owner-Operator):**
  - independent vendor without company structure.
  - typically owns one or two machines.
  - the same person acts as operator for owned machines.
- **Operator Linked With Vendor Company:**
  - operator works under a vendor-with-company account.
  - assignment and execution are scoped by parent vendor.
- **Individual Operator (Direct Registration):**
  - operator registers directly in vendor app.
  - carries driving/compliance documents (license and related documents).
  - may be attached to assignment flow as operator identity depending on machine/vendor mapping.
- **Backend implication lock:**
  - all VendorManagement APIs must carry actor classification fields so dashboard can filter, assign, and audit by vendor/operator type.
- **Status-chip lock across all vendor actor screens (global):**
  - apply the same 5-chip taxonomy to every vendor-side individual profile screen (existing and upcoming):
    - `New User`
    - `Active`
    - `Serial Canceller`
    - `Restricted`
    - `Dormant`
  - `Restricted` must always carry/display restriction reason message (same behavior as CustomerManagement).

### 2.1 Vendor Overall Screen (Locked From Latest UI Input)
- **Design Reference:** [Figma preview](https://www.figma.com/proto/yxSZTRxeArCgbg9CEDbuqi/L2B-Dashboard?node-id=563-15880&t=fHxJxF2lRNdmPJIi-0&scaling=min-zoom&content-scaling=fixed&page-id=9%3A17&starting-point-node-id=532%3A6176&show-proto-sidebar=1)
- **Purpose:** L2B team can monitor complete vendor fleet health, equipment coverage, and vendor-linked order operations from one page.
- **UI specification (locked):**
  - top controls include date range, Rental/Material switch (Rental focus for this phase), and quick control icons.
  - overview KPI cards include:
    - `Active Orders`
    - `Completed`
    - `Failed Orders`
    - `Ticket`
    - `Fulfillment Rate`
    - `Ontime Delivery`
    - `Match Rate`
    - `Commission`
  - right-side vendor summary panel (`All Vendors`) includes segmented stats:
    - `Total`
    - `Active`
    - `Inactive`
    - `New`
    - `Churn Rate`
    - `Dormant`
    - `Restricted`
  - `Equipment Overview` block contains machine table (machine name, type, capacity, number-of-machines style fields) and equipment-type filter dropdown (example values in UI: Crane, Backhoe loader, Truck, Tipper, Borewell, Manpower, Concrete Mixer).
  - `All Orders` table is present with status chips and order-level vendor-linked columns (same operational pattern as CustomerManagement table view).
- **API Needed:** `Read` + `Write`
- **Backend implications:**
  - page needs multi-source aggregation: vendors, equipment inventory, bookings/orders, SLA/performance metrics.
  - API output must support card deltas, segmented side-summary, equipment table pagination/filtering, and order-table server-side query controls.
  - write surface in this page ties to manage actions from order context (for example assignment/reassignment/escalation paths).

### 2.1A Vendor With Company — Individual Screen (Locked From Latest UI Input)
- **Purpose:** detailed operational profile for one company-vendor account with bookings, earnings, machine mix, and order table controls.
- **UI specification (locked):**
  - header includes:
    - profile image + vendor name
    - joining date
    - `Vendor ID`
    - `Vendor Type` (example shown: `Rental Admin`)
    - mobile number
    - email
    - number of machines
    - `Edit` action
  - status chips for this screen follow customer chip base + one extra:
    - `New User`
    - `Active`
    - `Serial Canceller`
    - `Restricted`
    - `Dormant`
  - `Restricted` chip behavior lock:
    - must carry/display restriction reason message, same as CustomerManagement contract.
  - top overview cards include:
    - `Active Bookings`
    - `Total Bookings`
    - `Total Earnings`
    - `Failed Bookings`
    - `Ticket` (shown with value and target style e.g. `x / 1000`)
  - `Bookings & Earnings` analytics block includes:
    - machine distribution donut (`Total Machines` + machine-type split)
    - booking trend chart
    - earnings trend chart
  - `Detailed Bookings` table includes operational booking columns and controls:
    - status chips, order id, equipment/capacity, dates, locations, customer/vendor/operator ids, ratings/payment/coupon, booking details, manage action.
    - table search box and status-filter chips (`Completed`, `Started`, `Arrived`, `Extended`) are visible.
- **API Needed:** `Both`
- **Backend implications:**
  - requires vendor-scoped read model for profile + KPIs + analytics + detailed bookings.
  - `Edit` and `Manage` flows require role-gated write APIs with `L1/L2/L3` controls and approval hooks where policy requires.
  - chip derivation must be deterministic and auditable (`Dormant` rule in addition to existing 4-chip base).

### 2.1B Vendor With Company — Edit Side Page (Locked From Latest UI Input)
- **Purpose:** allow dashboard team to update company-vendor profile, operator mapping, machine assignment duties, compliance references, and payment account links.
- **UI specification (locked):**
  - page header:
    - title `Admin Vendor Profile`
    - wallet balance pill
    - top-right search input
  - `Personal info` section includes:
    - profile image/avatar
    - vendor tag context
    - fields shown for edit/view: `Name`, `Contact no`, `Referral no`, `Email ID`, `Vendor ID`
  - `Company info` section includes:
    - company-name/classification style fields (example shown: Sole proprietorship, LLP, Others)
    - `GST no`
    - `PAN no`
    - `Aadhar card`
    - compliance state markers (`Approve`/`Approved` style indicators in UI context)
  - `Operator \| Driver` section:
    - shows count of linked operators/drivers
    - table columns:
      - `Name \| ID`
      - `No. of Machine`
      - `DL no`
    - `No. of Machine` column has `View` action per operator/driver row
  - `Machine details` section:
    - table columns:
      - `Status`
      - `Machine`
      - `Brand`
      - `Capacity`
      - `Assigned` (dropdown to reassign machine duty to another operator/driver)
      - `Documents` (`View` action)
    - machine-level lifecycle actions are available from status/action controls:
      - `Enable`
      - `Disable`
      - `Remove`
    - assignment dropdown supports moving machine duty to another operator.
  - `Payment details` section:
    - linked account card row (example: bank account)
    - row action `Remove`
    - section action `Add Payment method`
  - `Add new payment method` modal includes fields:
    - `Account no`
    - `IFSC Code`
    - `Bank branch name`
    - `Mobile no`
    - `UPI id`
    - `Cancelled check` (upload)
    - footer actions: `Cancel`, `Update`
  - `Earning & Incentive` wallet panel behavior (same pattern as CustomerManagement):
    - shows `Wallet Balance`
    - shows `Incentive`
    - actions include `Add Money` (and transfer control visible in UI)
    - `Transaction History` list shown below with credit/debit style entries
  - footer actions:
    - `Reset changes`
    - `Save changes`
- **Operator/Driver machine-duty modal (from `View` in No. of Machine):**
  - modal title: `Assigned Machines`
  - columns:
    - `Machine`
    - `Brand`
    - `Capacity`
    - `Assigned` (priority band: `Primary`, `Secondary`, `Tertiary`)
    - `Manage` (`Remove`)
  - bottom `Select` action allows selecting additional machines for the operator/driver and assigning priority.
  - `Remove` in manage column detaches machine duty from selected operator/driver.
- **Machine document modal (from `Machine details -> Documents -> View`):**
  - modal title: `Document Details`
  - columns shown:
    - `Document`
    - `Doc/policy no`
    - `Valid Thru`
    - `Photo`
    - `Manage`
  - manage actions in modal:
    - verification states: `Approve`, `Rejected`, `Pending`, `On hold`
    - machine lifecycle controls: `Enable`, `Disable`, `Remove`
  - behavior lock:
    - if machine documents are not eligible/valid, dashboard team can mark document state accordingly (`Rejected`/`On hold`) and machine can be disabled from operations.
- **API Needed:** `Both`
- **Backend implications:**
  - requires operator/driver roster read API with DL metadata and machine-count summary.
  - requires machine-assignment read API scoped to selected operator.
  - requires write APIs for assignment create/update/remove with priority ordering support.
  - requires document-review APIs per machine document with verification state transitions.
  - requires machine lifecycle command APIs (`enable`/`disable`/`remove`) with audit metadata.
  - requires vendor profile/company/compliance/payment update commands with audit fields (`acted_by`, `acted_for`, reason/ticket).
  - wallet, incentive, add-money, transaction-history, and remove-card operations follow CustomerManagement backend contract style (same audit + approval semantics).
  - add-payment-method flow requires payment-account create/update API with bank/UPI payload validation and cancelled-check file reference handling.

### 2.1C Vendor With Company — Operator Under Vendor (Locked From Latest UI Input)
- **Purpose:** operational profile for a specific operator linked under vendor-with-company context.
- **UI specification (locked):**
  - header includes:
    - profile image + operator name
    - joining date
    - `Operator ID`
    - `Operator Type` (example shown: `Vendor Op`)
    - mobile number
    - email
    - number of skills
    - `Edit` action
  - status chips for this screen are locked to 5 types:
    - `New User`
    - `Active`
    - `Serial Canceller`
    - `Restricted`
    - `Dormant`
  - `Restricted` chip behavior lock:
    - must carry/display restriction reason message, same as CustomerManagement contract.
  - `Overview` KPI cards (same structural pattern as vendor profile screen):
    - `Active Bookings`
    - `Total Bookings`
    - `Total Earnings`
    - `Failed Bookings`
    - `Ticket`
  - `Bookings & Earnings` block:
    - booking distribution donut (total bookings + split)
    - booking trend chart
    - earnings trend chart
  - `Detailed Bookings` table:
    - same operational booking columns/pattern used in other dashboard booking tables, with search and status-filter controls.
- **API Needed:** `Both`
- **Backend implications:**
  - requires operator-scoped read model for profile, KPI cards, analytics, and detailed-bookings rows.
  - write actions (`Edit`, `Manage`) must be role-gated under `L1/L2/L3` hierarchy and team boundaries.
  - operator profile payload should keep linkage context (`vendor_id`, operator linkage type, active assignment summary).

### 2.1D Vendor With Company — Operator Under Vendor Edit Side Page (Locked From Latest UI Input)
- **Purpose:** allow dashboard team to edit operator profile, linked company details, skill records, assigned-machine duties, and payment details for operator-under-vendor context.
- **UI specification (locked):**
  - page header:
    - title `Vendor Operator Profile`
    - wallet balance pill
    - top-right search
  - left status chip remains visible in profile context (example: `Active`).
  - `Personal info` section (editable):
    - profile image/avatar
    - operator tag
    - `Name`
    - `Contact no`
    - `Referral no`
    - `Email ID`
    - `Operator ID`
  - `Company info` section (editable):
    - `Company name`
    - linked `Vendor ID`
    - `GST no`
    - `PAN no`
    - `Aadhar card`
    - compliance state indicators shown in row context
  - `Skill details` section:
    - table with columns:
      - `Machine`
      - `Capacity`
      - `DL`
    - row `View` action available for skill/DL doc visibility.
  - `Assigned Machines` section:
    - table with columns:
      - `Status`
      - `Machine`
      - `Brand`
      - `Capacity`
      - `Assigned`
      - `Documents`
    - `Assigned` column supports priority mapping updates (example visible: primary/secondary/tertiary style).
    - `Documents` has `View` action.
  - `Payment details` section:
    - linked account row
    - row action `Remove`
    - section action `Add Payment method`
  - footer actions:
    - `Restrict`
    - `Reset changes`
    - `Save changes`
  - lock note:
    - as per latest input, this screen is treated as fully editable (subject to role/approval policy constraints).
- **API Needed:** `Both`
- **Backend implications:**
  - requires operator edit-profile read/write APIs.
  - requires skill-row update APIs (machine/capacity/DL linkage + doc refs).
  - requires assigned-machine priority update/remove APIs and document-view/review endpoints.
  - requires payment-method add/remove for operator context.
  - requires `Restrict` action command with reason and audit trail, with approval gating by `L1/L2/L3` policy.

### 2.1E Individual Operator — Individual Screen (Locked From Latest UI Input)
- **Purpose:** operational overview screen for directly registered L2B operator (not necessarily tied to vendor-company profile page context).
- **UI specification (locked):**
  - header includes:
    - profile image + operator name
    - joining date
    - `Operator ID`
    - `Operator Type` (example shown: `L2B Operator`)
    - mobile number
    - email
    - number of skills
    - `Edit` action
  - status chips for this screen are locked to 5 types:
    - `New User`
    - `Active`
    - `Serial Canceller`
    - `Restricted`
    - `Dormant`
  - `Restricted` chip behavior lock:
    - must carry/display restriction reason message, same as CustomerManagement contract.
  - `Overview` KPI cards:
    - `Active Bookings`
    - `Total Bookings`
    - `Total Earnings`
    - `Failed Bookings`
    - `Ticket`
  - `Bookings & Earnings` block:
    - booking distribution donut with category split
    - booking trend chart
    - earnings trend chart
  - `Detailed Bookings` table:
    - booking rows with same operational column pattern used in vendor/customer detailed-booking tables.
    - search and filter controls visible in table toolbar.
- **API Needed:** `Read` + `Write`
- **Backend implications:**
  - requires individual-operator-scoped read model separate from vendor-linked operator projection.
  - must support operator-type discriminator in API payload (`individual_operator` vs `company_operator`).
  - `Edit`/manage actions follow dashboard hierarchy controls (`L1/L2/L3`) and approval policy where required.

### 2.1F Vendor Without Company (Owner-Operator) — Individual Screen (Locked From Latest UI Input)
- **Purpose:** operational profile for independent vendor (owner-operator) who is not under a vendor-company structure.
- **UI specification (locked):**
  - header includes:
    - profile image + vendor name
    - joining date
    - `Vendor ID`
    - `Vendor Type` (example shown: `Ind Vendor`)
    - mobile number
    - email
    - number of machines
    - `Edit` action
  - status chips follow global vendor 5-chip lock:
    - `New User`
    - `Active`
    - `Serial Canceller`
    - `Restricted` (with reason message)
    - `Dormant`
  - `Overview` KPI cards:
    - `Active Bookings`
    - `Total Bookings`
    - `Total Earnings`
    - `Failed Bookings`
    - `Ticket`
  - `Bookings & Earnings` section:
    - machine/booking donut distribution
    - booking trend chart
    - earnings trend chart
  - `Detailed Bookings` table:
    - same operational table pattern (status, ids, equipment/capacity, dates, locations, booking details/manage controls) with search/filter controls.
- **API Needed:** `Both`
- **Backend implications:**
  - can reuse vendor-individual read models with actor-type discriminator set to independent vendor.
  - should not require company-linked joins for mandatory fields; company-dependent attributes stay nullable/not-applicable.
  - `Edit`/manage operations remain role-gated via dashboard hierarchy and approval policy.

### 2.2 Core Vendor Operations Already Present (App Backend)
- `POST /api/v1/vendor/bookings/{booking_id}/accept`
- `PATCH /api/v1/vendor/equipment/{equipment_id}/location`
- `POST /api/v1/vendor/bookings/{booking_id}/verify-start-otp`
- `POST /api/v1/vendor/bookings/{booking_id}/verify-end-otp`
- `PATCH /api/v1/vendor/extensions/{extension_id}/approve`
- `PATCH /api/v1/vendor/extensions/{extension_id}/reject`
- `GET /api/v1/rentals/bookings/{booking_id}`
- `GET /api/v1/rentals/bookings/{booking_id}/tracking`

### 2.3 Dashboard Required Capabilities (VendorManagement)
- Vendor listing with search/filter/sort.
- Vendor assignment support for unassigned bookings (including brand + machine/vehicle selection).
- Vendor performance and live-ops visibility (acceptance, assignment, in-progress execution cues).
- Vendor-side action override/escalation by dashboard operators under `L1/L2/L3` controls.
- Reassignment handling with full audit metadata.
- Fleet/equipment visibility by machine category/type and capacity buckets.

### 2.4 API Derivation Blocks

#### A) Vendor Directory and Availability
- **Purpose:** fetch assignable vendors for booking/equipment context.
- **Data Contract (UI needs):**
  - vendor identity (`vendor_id`, name, code), rating, brand inventory summary, equipment availability signal.
  - machine-level availability (vehicle number) scoped by brand.
  - actor taxonomy fields: `vendor_type` (`company_vendor` / `independent_vendor`), `operator_type` (`company_operator` / `individual_operator`), and linkage references.
- **Filter Inputs:**
  - `equipment_type` (required), city/zone, vendor status, rating band, availability status.
  - actor filters (`vendor_type`, `operator_type`, company-linked vs independent).
- **Behavior Rules:**
  - vendor list is constrained by booking equipment type (as already locked in CustomerManagement).
  - machine options shown only after vendor + brand selection.
- **Action Surface:** open vendor picker, brand picker, machine picker.
- **Backend Implications:** read-model aggregation from vendor inventory + booking context.
- **API Needed:** `Read`

#### B) Vendor Assignment and Reassignment
- **Purpose:** assign vendor/machine to booking when unassigned or when reassignment is approved.
- **Data Contract (UI needs):**
  - input: `booking_id`, `vendor_id`, `brand_id`, `machine_id` (vehicle number), optional reason.
  - output: assignment snapshot + actor/audit metadata.
- **Filter Inputs:** booking status, operator role (`L1/L2/L3`), approval state.
- **Behavior Rules:**
  - write is atomic for vendor + brand + machine mapping.
  - blocked/approval-required flows must return explicit status (`requires_l2_approval`, `requires_l1_approval`).
- **Action Surface:** assign now, request approval, approve/reject escalation.
- **Backend Implications:** write-model with approval + audit hooks.
- **API Needed:** `Both`

#### C) Vendor Execution Monitoring
- **Purpose:** track operational progress after assignment.
- **Data Contract (UI needs):**
  - acceptance timestamp, current operator, GPS freshness, booking status progression.
- **Filter Inputs:** date range, status, vendor, region/team scope.
- **Behavior Rules:**
  - status stream should align with existing booking/tracking lifecycle in rental module.
- **Action Surface:** view details, escalate issues, trigger reassignment path.
- **Backend Implications:** read aggregation over vendor + booking + tracking data.
- **API Needed:** `Read`

#### D) Vendor Overall Aggregations (Page Widgets + Tables)
- **Purpose:** power top KPI cards, right-side summary, equipment overview table, and all-orders table in vendor overall screen.
- **Data Contract (UI needs):**
  - KPI metrics with comparison deltas.
  - vendor segment counts with comparison deltas.
  - equipment overview rows with machine type/capacity/fleet counts.
  - order rows with status and vendor-related operational fields.
- **Filter Inputs:**
  - date range, period bucket, equipment type, status chips, search.
- **Behavior Rules:**
  - all widgets follow same filter envelope for consistency.
  - equipment type filter affects equipment block and can optionally narrow order block.
- **Action Surface:** filter/sort/search, order-level manage actions.
- **Backend Implications:** consolidated read models + table query APIs.
- **API Needed:** `Read` (plus `Write` only for order-level manage actions)

#### E) Vendor Individual Screen Aggregations and Actions
- **Purpose:** power vendor profile header, vendor-level KPI cards, bookings/earnings analytics, and detailed-bookings table.
- **Data Contract (UI needs):**
  - header profile payload (`vendor_id`, vendor_type, contact fields, machine_count, join_date, status_chip).
  - KPI payload (`active_bookings`, `total_bookings`, `total_earnings`, `failed_bookings`, `ticket`).
  - analytics payload (machine-mix donut + booking trend + earnings trend).
  - detailed bookings rows with search/filter/pagination.
- **Filter Inputs:**
  - vendor id (required), date range, period bucket, status chip filter, search.
- **Behavior Rules:**
  - all widgets recalculate on same filter envelope.
  - table filters/chips apply server-side.
- **Action Surface:**
  - `Edit` vendor profile, booking `Manage`, booking `View full`.
- **Backend Implications:** vendor-specific read projections + controlled write commands.
- **API Needed:** `Both`

### 2.5 VendorManagement Endpoint Inventory (Required vs Existing)

#### A) Required Endpoint Set (Dashboard Rental / VendorManagement)
1. `GET /api/v1/dashboard/rental/vendors`
2. `GET /api/v1/dashboard/rental/vendors/{vendor_id}`
3. `GET /api/v1/dashboard/rental/vendors/overview/kpis`
4. `GET /api/v1/dashboard/rental/vendors/overview/segments`
5. `GET /api/v1/dashboard/rental/vendors/equipment-overview`
6. `GET /api/v1/dashboard/rental/vendors/orders`
7. `GET /api/v1/dashboard/rental/bookings/{booking_id}/assignable-vendors`
8. `GET /api/v1/dashboard/rental/bookings/{booking_id}/assignable-vendors/{vendor_id}/brands`
9. `GET /api/v1/dashboard/rental/bookings/{booking_id}/assignable-vendors/{vendor_id}/brands/{brand_id}/machines`
10. `PATCH /api/v1/dashboard/rental/bookings/{booking_id}/assign-vendor`
11. `PATCH /api/v1/dashboard/rental/bookings/{booking_id}/reassign-vendor`
12. `GET /api/v1/dashboard/rental/vendors/ops-tracking`
13. `POST /api/v1/dashboard/rental/vendor-approval-requests`
14. `PATCH /api/v1/dashboard/rental/vendor-approval-requests/{request_id}/approve`
15. `PATCH /api/v1/dashboard/rental/vendor-approval-requests/{request_id}/reject`
16. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/overview`
17. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/analytics`
18. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/bookings`
19. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/edit-profile`
20. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/profile`
21. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators`
22. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/assigned-machines`
23. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/assigned-machines`
24. `DELETE /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/assigned-machines/{machine_assignment_id}`
25. `DELETE /api/v1/dashboard/rental/vendors/{vendor_id}/payment-methods/{payment_method_id}`
26. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/machines`
27. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/machines/{machine_id}/assigned-operator`
28. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/machines/{machine_id}/documents`
29. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/machines/{machine_id}/documents/{document_id}/review`
30. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/machines/{machine_id}/status`
31. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/wallet`
32. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/wallet/transactions`
33. `POST /api/v1/dashboard/rental/vendors/{vendor_id}/wallet/topups`
34. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/wallet/incentives`
35. `POST /api/v1/dashboard/rental/vendors/{vendor_id}/payment-methods`
36. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/payment-methods/{payment_method_id}`
37. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/overview`
38. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/analytics`
39. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/bookings`
40. `GET /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/edit-profile`
41. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/profile`
42. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/skills`
43. `PATCH /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/restriction`
44. `POST /api/v1/dashboard/rental/vendors/{vendor_id}/operators/{operator_id}/payment-methods`
45. `GET /api/v1/dashboard/rental/operators/{operator_id}/overview`
46. `GET /api/v1/dashboard/rental/operators/{operator_id}/analytics`
47. `GET /api/v1/dashboard/rental/operators/{operator_id}/bookings`

#### B) APIs Already Present In Current Backend (Reusable Building Blocks)
- `POST /api/v1/vendor/bookings/{booking_id}/accept`
- `PATCH /api/v1/vendor/equipment/{equipment_id}/location`
- `POST /api/v1/vendor/bookings/{booking_id}/verify-start-otp`
- `POST /api/v1/vendor/bookings/{booking_id}/verify-end-otp`
- `PATCH /api/v1/vendor/extensions/{extension_id}/approve`
- `PATCH /api/v1/vendor/extensions/{extension_id}/reject`
- `GET /api/v1/rentals/bookings/{booking_id}`
- `GET /api/v1/rentals/bookings/{booking_id}/tracking`

#### C) Coverage Count Snapshot
- **Total required endpoints for VendorManagement dashboard (current contract):** `47`
- **Already present in current backend (app-facing primitives):** `8`
- **New dashboard endpoints still required:** `47` (dashboard-specific surface is net-new; existing endpoints are reusable service primitives)
- **Endpoint note for owner-operator screen:** no additional net-new endpoints added; current vendor-individual endpoint set is reused with `vendor_type=independent_vendor`.

### 2.6 Third-Party Vendor App Dependency Note
- Vendor-facing application is developed by a third party.
- Existing third-party APIs are not fully known/locked from our side.
- Dashboard backend should therefore define a stable internal contract and integrate via:
  - direct DB/event signals where available, and/or
  - adapter layer for third-party vendor APIs once endpoint specs are shared.
- Integration uncertainty should not block dashboard contract finalization; unresolved third-party dependencies are tracked in pending decisions.

### 2.7 Pending Decisions (VendorManagement)
- Final field-level payload mapping for each `All Orders` column in VendorManagement screen.
- Exact reassignment guardrails by status and by hierarchy (`L3 -> L2 -> L1`).
- Whether vendor assignment uses dedicated dashboard approvals or shared generic approval module.
- SLA windows for assignment/reassignment resolution and escalation timers.
- Third-party vendor-app integration contract (auth method, sync cadence, retry semantics, source-of-truth boundaries).
- Final capability matrix by actor type (which actions are allowed for company-vendor admin, linked operator, independent vendor, individual operator).
- Document verification policy for direct individual operators (mandatory docs, expiry checks, suspension triggers).
- Exact allowed transitions for machine document review states and whether transitions require higher-level approval (`L2`/`L1`) in some cases.
- Whether wallet `Transfer` action in vendor panel is in-scope for V1 and, if yes, transfer target + approval policy.
- Payment-method verification policy for vendor accounts (immediate activation vs pending verification) and required validation for cancelled-check upload.
- Whether operator-under-vendor screen uses same 5-chip taxonomy as vendor profile or a reduced chip set.
- Restrict-action policy for operator edit screen (mandatory reason, duration model, reversible/unlock workflow, and required approval level).
- Whether individual-operator screen should share identical chip taxonomy and manage actions with operator-under-vendor screen, or have a reduced control set.
- Any owner-operator-specific edit constraints (for example max machine count policy) beyond standard vendor profile permissions.

## 3. InventoryManagement
### 3.0 Scope and Intent
- **Purpose:** provide rental-side fleet/inventory visibility for equipment availability, utilization, and commercial efficiency signals.
- **Implementation reference lock:** align API conventions with existing rental module patterns under:
  - `src/features/rental/catalog/router.py`
  - `src/features/rental/slot/router.py`
  - `src/features/vendor/router.py`

### 3.1 InventoryManagement Overall Screen (Locked From Latest UI Input)
- **Design Reference:** latest inventory page screenshots shared in current thread.
- **UI specification (locked):**
  - top header controls include:
    - date range controls
    - Rental/Material switch (Rental focus in current phase)
    - quick filter/action icons
  - top KPI cards include:
    - `Total Equipment`
    - `To be assigned`
    - `Booked`
    - `Active`
    - `Equipment Utilization`
  - main inventory block title: `All Equipment`
  - utility actions in inventory toolbar:
    - `View CSV`
    - `Upload CSV`
    - search input
    - filter control
  - `All Equipment` table columns (visible in screenshot):
    - `Name`
    - `Capacity`
    - `Brand`
    - `Analysis` (badge style: `High Value` / `Medium Value` / `Low Value`)
    - `Quantity`
    - `Cost /hour/km`
    - `Fuel`
    - `Operator Fee`
    - `No. of vendor`
    - `Search Rate`
  - table supports vertical and horizontal scrolling for wide dataset.
- **API Needed:** `Read` + `Write`
- **Backend implications:**
  - requires aggregated KPI read model from fleet + booking assignment state.
  - requires server-side searchable/filterable/sortable inventory table projection.
  - requires CSV export and CSV ingestion APIs with validation/error reporting.
  - analysis badge value should be backend-derived and deterministic for consistency.

### 3.2 API Derivation Blocks

#### A) Inventory KPI Aggregations
- **Purpose:** power top inventory KPI strip.
- **Data Contract (UI needs):**
  - values and deltas for:
    - `Total Equipment`
    - `To be assigned`
    - `Booked`
    - `Active`
    - `Equipment Utilization`
- **Filter Inputs:**
  - date range, domain tab, optional category/type filters.
- **Behavior Rules:**
  - all KPI cards follow shared filter envelope.
- **Action Surface:** filter switch/date-range update.
- **Backend Implications:** consolidated aggregation read model.
- **API Needed:** `Read`

#### B) All Equipment Table Projection
- **Purpose:** list equipment-level inventory/commercial metrics for operations decisions.
- **Data Contract (UI needs):**
  - columns:
    - `name`, `capacity`, `brand`, `analysis`, `quantity`, `cost_per_hour_or_km`,
      `fuel`, `operator_fee`, `vendor_count`, `search_rate`
  - analysis badge enum mapping:
    - `high_value`, `medium_value`, `low_value`
- **Filter Inputs:**
  - search text, equipment type/category, analysis badge, availability state, optional cost/rate ranges.
- **Behavior Rules:**
  - table is server-side paginated with stable sorting.
  - search/filter state must round-trip in response metadata.
- **Action Surface:** search/filter/sort/paginate.
- **Backend Implications:** read projection from inventory master + utilization metrics.
- **API Needed:** `Read`

#### C) CSV Export and Upload Operations
- **Purpose:** bulk visibility and bulk update workflow for inventory team.
- **Data Contract (UI needs):**
  - export endpoint returns downloadable CSV based on active filters.
  - upload endpoint accepts CSV and returns import summary:
    - total rows
    - accepted rows
    - rejected rows
    - row-level errors
- **Filter Inputs:** current screen filters for export; file payload for upload.
- **Behavior Rules:**
  - upload must be idempotent-safe for repeated attempts.
  - invalid rows should not block valid row processing (partial success model).
- **Action Surface:** `View CSV`, `Upload CSV`.
- **Backend Implications:** write pipeline with validation + audit.
- **API Needed:** `Both`

### 3.3 InventoryManagement Endpoint Inventory (Required vs Existing)

#### A) Required Endpoint Set (Dashboard Rental / InventoryManagement)
1. `GET /api/v1/dashboard/rental/inventory/overview/kpis`
2. `GET /api/v1/dashboard/rental/inventory/equipment`
3. `GET /api/v1/dashboard/rental/inventory/equipment/export-csv`
4. `POST /api/v1/dashboard/rental/inventory/equipment/import-csv`

#### B) APIs Already Present In Current Backend (Reusable Building Blocks)
- `GET /api/v1/rentals/categories`
- `GET /api/v1/rentals/subcategories/{slug}/skus`
- `GET /api/v1/rentals/skus/{slug}`
- `GET /api/v1/rentals/skus/{slug}/available-dates`
- `GET /api/v1/rentals/skus/{slug}/slots`

#### C) Coverage Count Snapshot
- **Total required endpoints for InventoryManagement dashboard (current contract):** `4`
- **Already present in current backend (app-facing primitives):** `5`
- **New dashboard endpoints still required:** `4` (dashboard aggregation + CSV operations are net-new; existing APIs are reusable primitives)

### 3.4 Pending Decisions (InventoryManagement)
- Exact formula for `Equipment Utilization` (time basis and denominator definition).
- Final rules for `Analysis` badge classification (`High/Medium/Low Value`).
- Upload CSV schema contract (mandatory columns, units, allowed enum values).
- Approval requirements for bulk inventory upload by `L1/L2/L3`.

## 4. OrdersAndOperations
### 4.0 Scope and Intent
- **Purpose:** provide a single operations-control page for monitoring rental-order throughput, execution quality, supply-demand mismatch, and order-level interventions.
- **Implementation reference lock:** follow existing rental booking/tracking lifecycle conventions from:
  - `src/features/rental/booking/router.py`
  - `src/features/rental/tracking/router.py`
  - `src/features/vendor/router.py`

### 4.1 OrdersAndOperations Overall Screen (Locked From Latest UI Input)
- **Design Reference:** UI screenshot input (latest chunk) with `Order & Operation Metrics`, `Supply Demand Gap (Rental)`, and `All Orders (Rental)` sections.
- **UI specification (locked):**
  - top header controls use same factor pattern as other dashboard pages:
    - date range controls,
    - Rental/Material switch (Rental focus in current phase),
    - quick filter/action icons.
  - top metric strip contains:
    - one line-chart metric block,
    - two associated metric cards in this cluster,
    - one indicator/gauge-style block,
    - two associated metric cards in this cluster.
  - `Supply Demand Gap (Rental)` visual:
    - bar-visual comparison for demand vs availability across categories/time buckets.
    - hover behavior shows per-point demand/availability values.
  - bottom `All Orders (Rental)` table:
    - rental-order operational rows with status chips and booking timeline/location columns.
    - table has search and filter controls.
- **API Needed:** `Read` + `Write`
- **Backend implications:**
  - requires aggregated operations metrics read model for line-chart/indicator/cards.
  - requires supply-vs-demand aggregation API with hover-point payload support.
  - requires server-side paginated/sortable/filterable orders table API.
  - order-level manage actions from this table should reuse booking command workflows with dashboard audit metadata.

### 4.2 API Derivation Blocks

#### A) Operations Metric Aggregations
- **Purpose:** power top operations metric strip (line-chart cluster + indicator cluster).
- **Data Contract (UI needs):**
  - trend series payload for line chart,
  - supporting metric cards for line-chart block,
  - indicator value payload,
  - supporting metric cards for indicator block.
- **Filter Inputs:**
  - date range, period bucket, domain tab (`Rental`/`Material`), optional operation status.
- **Behavior Rules:**
  - all top metrics must use shared filter envelope for consistency.
- **Action Surface:** filter/time-range switching.
- **Backend Implications:** consolidated read-model aggregation.
- **API Needed:** `Read`

#### B) Supply Demand Gap Visual
- **Purpose:** show mismatch trend between order demand and machine availability.
- **Data Contract (UI needs):**
  - x-axis buckets,
  - `demand` and `availability` values per bucket,
  - hover payload for selected point.
- **Filter Inputs:**
  - date range, category/equipment filter, domain tab.
- **Behavior Rules:**
  - hover payload values must match chart points exactly.
- **Action Surface:** hover inspection, category filter.
- **Backend Implications:** read aggregation from booking demand + inventory availability.
- **API Needed:** `Read`

#### C) All Orders (Rental) Operational Table
- **Purpose:** enable operational intervention at order-row level.
- **Data Contract (UI needs):**
  - status + order-id + equipment/capacity + booking/start/end timeline + location fields + booking/manage actions.
- **Filter Inputs:**
  - search, status chips, date range, optional equipment/site/vendor filters.
- **Behavior Rules:**
  - table is server-side paginated and filterable.
  - row actions must return deterministic error states for blocked transitions.
- **Action Surface:**
  - open booking details (`View full` style),
  - order manage action (role-gated).
- **Backend Implications:** read table projection + write command handlers.
- **API Needed:** `Both`

### 4.3 OrdersAndOperations Endpoint Inventory (Required vs Existing)

#### A) Required Endpoint Set (Dashboard Rental / OrdersAndOperations)
1. `GET /api/v1/dashboard/rental/orders-ops/metrics`
2. `GET /api/v1/dashboard/rental/orders-ops/metrics/trend`
3. `GET /api/v1/dashboard/rental/orders-ops/supply-demand-gap`
4. `GET /api/v1/dashboard/rental/orders-ops/orders`
5. `GET /api/v1/dashboard/rental/orders-ops/orders/{booking_id}/details`
6. `PATCH /api/v1/dashboard/rental/orders-ops/orders/{booking_id}/manage`

#### B) APIs Already Present In Current Backend (Reusable Building Blocks)
- `GET /api/v1/rentals/bookings`
- `GET /api/v1/rentals/bookings/{booking_id}`
- `GET /api/v1/rentals/bookings/{booking_id}/tracking`

#### C) Coverage Count Snapshot
- **Total required endpoints for OrdersAndOperations dashboard (current contract):** `6`
- **Already present in current backend (app-facing primitives):** `3`
- **New dashboard endpoints still required:** `6` (dashboard facade + aggregation surface are net-new; existing APIs are reusable primitives)

### 4.4 Pending Decisions (OrdersAndOperations)
- Exact metric names/formulas for top cards and indicator cluster.
- Final category dimension for supply-demand visual (equipment category vs SKU vs capacity-band).
- Final row-level manage actions allowed from this page and approval requirements by `L1/L2/L3`.
- Error/SLA thresholds for flagging operational anomalies.
- OTP verification and vendor-accept actions are out of current dashboard scope unless explicit UI actions are added later.

## 5. TicketsConcerns
### 5.0 Intake Template (Fill from UI/Figma)
- **Design Reference:** `<figma link or screen name>`
- **Purpose:** `<what ops/business decision this page supports>`
- **Data Contract (UI needs):**
  - `<ticket fields, status, assignee, priority, timeline>`
- **Filter Inputs:**
  - `<date/period/search/status/priority/owner filters>`
- **Behavior Rules:**
  - `<SLA timers, reopen policy, escalation routing>`
- **Action Surface:**
  - `<assign/reply/close/reopen/escalate actions>`
- **Backend Implications:**
  - `<read model / write model / validation / authorization / audit>`
- **API Needed:** `Read/Write/Both` (to finalize after UI walkthrough)
- **Pending Decisions:**
  - `<SLA matrix/escalation windows/reopen limits>`

## 6. PaymentAndFinance
### 6.0 Intake Template (Fill from UI/Figma)
- **Design Reference:** `<figma link or screen name>`
- **Purpose:** `<what ops/business decision this page supports>`
- **Data Contract (UI needs):**
  - `<settlement, payment modes, refunds, disputes, net-sale fields>`
- **Filter Inputs:**
  - `<date/period/mode/status/vendor/site filters>`
- **Behavior Rules:**
  - `<settlement cycle, fee/tax display, exception handling>`
- **Action Surface:**
  - `<reconcile/approve/refund/retry/export actions>`
- **Backend Implications:**
  - `<read model / write model / validation / authorization / audit>`
- **API Needed:** `Read/Write/Both` (to finalize after UI walkthrough)
- **Pending Decisions:**
  - `<refund policy/settlement cutoffs/finance approval gates>`

## 7. MarketingAndPromotions
### 7.0 Intake Template (Fill from UI/Figma)
- **Design Reference:** `<figma link or screen name>`
- **Purpose:** `<what ops/business decision this page supports>`
- **Data Contract (UI needs):**
  - `<campaign/coupon/offer performance fields>`
- **Filter Inputs:**
  - `<date/period/campaign/channel/segment filters>`
- **Behavior Rules:**
  - `<eligibility logic, stacking, expiry, attribution>`
- **Action Surface:**
  - `<create/edit/pause/activate/archive actions>`
- **Backend Implications:**
  - `<read model / write model / validation / authorization / audit>`
- **API Needed:** `Read/Write/Both` (to finalize after UI walkthrough)
- **Pending Decisions:**
  - `<stacking policy/eligibility precedence/attribution model>`

## 8. GrowthAndBehaviour
### 8.0 Intake Template (Fill from UI/Figma)
- **Design Reference:** `<figma link or screen name>`
- **Purpose:** `<what ops/business decision this page supports>`
- **Data Contract (UI needs):**
  - `<cohorts, retention, churn, funnel fields>`
- **Filter Inputs:**
  - `<date/period/segment/geo/role filters>`
- **Behavior Rules:**
  - `<cohort bucketing, baseline periods, trend calculations>`
- **Action Surface:**
  - `<segment export/flagging/follow-up triggers>`
- **Backend Implications:**
  - `<read model / write model / validation / authorization / audit>`
- **API Needed:** `Read/Write/Both` (to finalize after UI walkthrough)
- **Pending Decisions:**
  - `<cohort definitions/churn thresholds/model ownership>`

---

## Change Log
- 2026-04-07: Initialized master dashboard rental backend contract.
- 2026-04-07: Added CustomerManagement page intent, header controls, date/filter rules, and Rental/Material tab behavior from first confirmed input.
- 2026-04-07: Added CustomerManagement top info-card contract (`Active Orders`, `Completed`, `Failed Orders`, `Tickets`) and documented card payload expectations.
- 2026-04-07: Added CustomerManagement `Earning` section contract with payment-mode chart (`UPI`, `COD`, `Net Banking`, `Paylater`) and section cards (`Total Order`, `Net Sale`).
- 2026-04-07: Added CustomerManagement `High Demand Area` map contract and right-side `All Customers` segmentation panel details (`Total`, `Active`, `New`, `Repeat`, `Potential`, `At Risk`, `Dormat`, `Restricted`).
- 2026-04-07: Added CustomerManagement orders table toolbar + Rental table column contract and captured note that Material tab may use a different column set.
- 2026-04-07: Locked Rental-phase focus, documented that KPI values recalculate based on applied filters, and captured table toolbar filter values (`Completed`, `Started`, `Arrive`, `Extended`).
- 2026-04-07: Added CustomerManagement individual customer page (Admin view) header contract with role context (`Admin`, `Individual`, `Worker`) and Admin-specific company-name visibility note.
- 2026-04-07: Added customer status chip contract for individual page (`New User`, `Active`, `Serial Canceller`, `Restricted`) and locked `Restricted` reason visibility.
- 2026-04-07: Added individual-page `Overview` controls, detailed card payload expectations, `Spend` matrix chart behavior, `Requested/Wishlist` table + filter contract, and bottom orders toolbar/table contract.
- 2026-04-07: Added dedicated Figma reference link for Customer (Admin) Individual Page.
- 2026-04-07: Added Customer (Worker) individual screen variant contract: same layout as Admin, header field differences, no wallet balance, and same 4-chip behavior.
- 2026-04-07: Added Customer (Individual) individual screen variant contract: same layout as Admin, includes wallet balance and edit action, excludes company name, same 4-chip behavior.
- 2026-04-07: Locked individual-screen bottom table columns as common across all 3 roles (`Admin`, `Worker`, `Individual`).
- 2026-04-07: Added Customer(Admin) editable sideboard contract with section-wise capture: Personal Info, Company Info, Team Details, Project Details, Payment Details, and save/reset footer actions.
- 2026-04-07: Added Customer(Worker) editable sideboard contract and explicitly documented differences from Admin editable screen (`Site details` instead of `Team details`, no project/payment sections, no wallet pill).
- 2026-04-07: Added Customer(Individual) editable sideboard contract and documented differences vs Admin and Worker editable screens.
- 2026-04-07: Converted CustomerManagement into backend-derivation-ready structure with per-block `API Needed` classification and preserved detailed UI field contracts for role-wise sideboards.
- 2026-04-07: Added backend-derivation intake templates for sections 2-8 (Vendor, Inventory, Orders, Tickets, Finance, Marketing, Growth) to accelerate API contract capture from upcoming UI walkthroughs.
- 2026-04-07: Added CustomerManagement support-operator action contract for on-behalf flows (project/team/receiver/payment-card/wallet operations) with audit + RBAC implications.
- 2026-04-07: Locked booking-details drawer behavior (`View full` -> side panel) and captured manual vendor-assignment flow when `Vendor ID` is empty.
- 2026-04-07: Added detailed vendor-assignment interaction contract: vendor selection -> brand selection -> machine selection (vehicle number), filtered by booked equipment type.
- 2026-04-07: Added dashboard operator hierarchy contract (`L1`/`L2`/`L3`) and linked support-action RBAC to hierarchy + team-boundary authorization.
- 2026-04-07: Added CustomerManagement endpoint inventory with required API list, existing backend coverage, and gap count (`31` required / `13` existing / `18` new).
- 2026-04-07: Replaced VendorManagement template with backend-derivation contract, mapped existing rental/vendor APIs, and added VendorManagement endpoint inventory (`11` required dashboard endpoints + `8` reusable existing primitives).
- 2026-04-07: Added Vendor Overall screen contract (KPI cards, vendor summary panel, equipment overview, orders table), expanded VendorManagement API inventory to `15` required endpoints, and documented third-party vendor-app dependency constraints.
- 2026-04-07: Added Vendor With Company individual-screen contract (header fields, 5-chip taxonomy, KPI cards, bookings/earnings analytics, detailed-bookings table) and expanded VendorManagement endpoint inventory to `18`.
- 2026-04-07: Added Vendor With Company edit-side-page contract (personal/company/operator-driver/machine/payment sections + assigned-machines modal) and expanded VendorManagement endpoint inventory to `25`.
- 2026-04-07: Expanded Vendor With Company machine-details contract with exact table columns, document-review modal states (`Approve/Rejected/Pending/On hold`), lifecycle controls (`Enable/Disable/Remove`), and endpoint inventory expansion to `30`.
- 2026-04-07: Locked Vendor-with-company wallet/payment parity with CustomerManagement (remove card, wallet balance, incentive, add money, transaction history) and expanded VendorManagement endpoint inventory to `34`.
- 2026-04-07: Added Vendor-with-company `Add new payment method` modal contract (bank/UPI fields + cancelled-check upload) and expanded VendorManagement endpoint inventory to `36`.
- 2026-04-07: Added `Operator under vendor` individual-screen contract (header, KPI cards, bookings/earnings, detailed bookings) and expanded VendorManagement endpoint inventory to `39`.
- 2026-04-07: Added `Operator under vendor` edit-side-page contract (personal/company/skill/assigned-machines/payment sections + restrict action) and expanded VendorManagement endpoint inventory to `44`.
- 2026-04-07: Added `Individual operator` individual-screen contract (`L2B Operator`) and expanded VendorManagement endpoint inventory to `47`.
- 2026-04-07: Locked 5-chip taxonomy for operator-under-vendor and individual-operator screens (`New User`, `Active`, `Serial Canceller`, `Restricted`, `Dormant`) and enforced restricted-reason visibility.
- 2026-04-07: Added global vendor-actor chip lock so all vendor types (including future screens) follow same 5-chip taxonomy with restricted-reason visibility.
- 2026-04-07: Added Vendor Without Company (Owner-Operator) individual-screen contract (`Ind Vendor`) and mapped it to reuse existing vendor-individual endpoint set.
- 2026-04-07: Replaced OrdersAndOperations template with locked overall-screen contract (metrics strip, supply-demand-gap visual, all-orders table) and added endpoint inventory (`6` required endpoints + `6` reusable primitives).
- 2026-04-07: Updated OrdersAndOperations scope to remove OTP verification/vendor-accept action usage (not present in current dashboard UI); retained tracking read usage and adjusted reusable primitive count to `3`.
- 2026-04-07: Replaced InventoryManagement template with locked rental-side screen contract (KPI strip, all-equipment table, CSV actions), added API derivation blocks and endpoint inventory (`4` required dashboard endpoints + `5` reusable primitives).
