# Architecture Audit Gaps — L2B Dashboard

**Date:** 2026-07-31  
**Scope:** MVVM + feature-sliced architecture review  
**Out of scope:** Real API integration (mocks are expected until backends land)

---

## Verdict

Feature-sliced **MVVM is mostly followed on list/overview screens**. Gaps concentrate in **detail/profile routes**, **half-wired headers**, **page pollution**, **Query vs Zustand inconsistency**, and **naming drift**.

---

## Intended architecture

| Layer | Role |
|-------|------|
| App Router `page` | Thin shell: `DashboardPageShell` + `Suspense` + feature `Screen` |
| Screen | Calls ViewModel, maps columns, passes props down |
| ViewModel | URL (`useSearchParams`) + store/query data + filter actions |
| Zustand store | Feature data + `isLoading` (+ mock fetch) — *or* TanStack Query for server data per `state-plan.md` |
| `api/mockData` | Typed mock payloads |
| Components | Presentational / props-driven |

Canonical folder shape: `types` · `api` · `states` · `viewModel` · `components` · `screen`.

---

## Feature compliance

| Feature | api/mock | store | viewModel | screen | Overall |
|---------|----------|-------|-----------|--------|---------|
| customermanagement (list) | Y | Y (`state/`) | Y | Y | Strong list; weak detail |
| vendormanagement | Y | Y (`state/`) | Y (+ Query) | Y | Strong hybrid; page pollution |
| ordersandoperation | Y | Y (`states/`) | Y | Y | Good |
| inventorymanagement | Y | Y | Y | Y | Best controlled-header example |
| marketingandpromotion | Y | Y | Y | Y | Good |
| paymentandfinance | Y | Y | Y | Y | Screen→api leak |
| growthandbehaviour | Y | Y | Y | Y | Good |
| tickets (list) | Y | Y | Y | Y | List OK; detail orphan |
| agentsprofile | N | N | N | Partial | Not on MVVM |

---

## Gaps and smells

### 1. Pages holding logic / dead bulk

- `src/app/(dashboard)/vendormanagement/page.tsx` — large unused mocks/`useState`; historically rendered individual instead of a clean list shell.
- Prefer: Suspense + `VendorScreen` on list route; detail only on `[id]`.

### 2. Screens bypassing ViewModel

- `src/features/customermanagement/screen/CustomerIndividualScreen.tsx` — local loading timer + hardcoded profile; no ViewModel.
- `src/features/tickets/screen/TicketIndividualScreen.tsx` — inline mocks; no store/VM.
- `src/features/agentsprofile/screen/L1profileLayout.tsx`, `L2profileLayout.tsx` — hardcoded data + local filters.
- `src/features/agentsprofile/screen/AgentScreen.tsx` — ViewModel import commented out.
- `src/features/paymentandfinance/screen/PFScreen.tsx` — imports mock chart config from `api/` (Screen→api).
- Leftovers: `Demo.tsx`, unused/legacy `ProfileScreen.tsx`.

### 3. Dumb components still owning filter state

Blueprint: filters live in URL via ViewModel; components stay controlled.

- `CustomerHeader.tsx` — local tab/date/filter; `CustomerScreen` often renders header without URL props.
- `VendorHeader.tsx` — accepts URL callbacks **and** keeps parallel local state.
- Individual toolbars/sections under customer individual still use local filter/`useState`.
- Contrast (good): `InventoryHeader.tsx` — controlled props + local calendar popup only.

### 4. TanStack Query vs Zustand inconsistency

- `QueryProvider` exists, but **only** `useVendorViewModel` uses `useQuery`.
- Other features: Zustand `fetch*Data()` + `setTimeout` mock.
- Vendor spreads store **and** Query results — dual sources for loading/data.
- `state-plan.md` targets Query for server state + Zustand for ephemeral UI; code is only partially there.

### 5. Filtering / derived state in wrong layer

- Only customer list VM consistently filters from URL.
- Vendor individual filters in Screen, not VM.
- Many VMs expose URL params but do not filter table data.
- `DataTableWidget` defaults filter options to **ticket statuses** (domain smell in shared).

### 6. Shared / cross-cutting domain leakage

- `src/shared/components/FloatingPanel/TicketPanel.tsx` — ticket-domain UI in shared.
- Feature `components/profile/mockdata/*` under customer & vendor — mocks outside `api/`.

### 7. Client vs server confusion

- Most dashboard pages correctly stay Server Components wrapping client Screens.
- Exceptions: some pages forced `"use client"` without need (e.g. tickets/vendor list historically).

### 8. Naming and structure drift

- `state/` (customer, vendor) vs `states/` (everyone else) — blueprint says `states`.
- `mockdata.ts` vs `mockData.ts`.
- App routes: `ordersandoperations` / `marketingandpromotions` vs feature folders without trailing `s`.

### 9. Incomplete / duplicate surfaces

- Overall vs individual trees for customer & tickets; individual often unwired.
- Duplicate ticket widgets under `overall` and `individual`.

---

## What’s done well (keep cloning these)

- Clear `features/*` + `shared` + `design-system` split.
- Thin Suspense pages on most modules.
- Components generally do not import Zustand stores.
- URL-as-filter source of truth in most ViewModels.
- Inventory header as the clean controlled presentational pattern.
- Customer list as the best end-to-end MVVM flow.
- Shimmer floorplans as dumb views driven by Screen/`isLoading`.
- Vendor Query loading pattern (cold `isPending`, `keepPreviousData`, subtle refresh) as a template when APIs land.

---

## Priority fix list

1. Slim `vendormanagement/page.tsx` — remove dead mocks; list = `VendorScreen`, detail = `[id]`.
2. Pick one server-state story until APIs land (Zustand-fetch *or* Query in ViewModels); update `state-plan.md` to match.
3. Wire or quarantine incomplete surfaces — agentsprofile, `CustomerIndividualScreen`, `TicketIndividualScreen`; isolate/delete `Demo.tsx`.
4. Finish controlled headers — especially `CustomerHeader` / `VendorHeader` like Inventory.
5. Move Screen→api imports into store/VM — keep Screens props-only.
6. Normalize `state` vs `states` and mock file casing.
7. Push filtering into ViewModels consistently (or document Screen `useMemo` as the rule).
8. Stop domain defaults in shared — make `DataTableWidget` filter options required/neutral; consider moving `TicketPanel` under `features/tickets`.

---

## Notes

- Real API wiring is intentionally deferred; gaps above are structural, not “missing fetch calls.”
- Revisit this file after each major architecture cleanup pass.
