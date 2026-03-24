# L2B Dashboard - Feature Implementation Blueprint

**ROLE ASSIGNMENT:** Act as a Senior Frontend Developer and Software Architect. Review our previous chat history to understand the codebase context, specifically how we implemented `vendormanagement` and `inventorymanagement`.

**THE MISSION:**
We are building a new feature screen. Currently, the components are hardcoded, relying on local `useState`, and are not wired together. You need to refactor this feature strictly using our established MVVM + Next.js URL State + Zustand architecture.

---

### 📂 1. REQUIRED FOLDER STRUCTURE
Do not skip any of these folders. Ensure the feature directory contains:
* `/types` - Strict TypeScript interfaces for all API data and component props.
* `/api` - Mock data arrays/objects (must be strictly typed using the `/types`).
* `/states` - Zustand store (`use[Feature]Store.ts`) to manage global data and `isLoading` states.
* `/viewModel` - The custom hook (`use[Feature]ViewModel.ts`) that marries Zustand data with Next.js `useSearchParams`.
* `/components` - Dumb UI components that only accept data via props.
* `/screen` - The Grand Central Station (`[Feature]Screen.tsx`) that calls the ViewModel and passes props down.

---

### 🚦 2. STRICT ORDER OF EXECUTION
You must provide the code in this exact order to prevent TypeScript errors:

1. **Types (`index.ts`):** Define the exact shape of the data. No implicit `any`.
2. **API (`mockData.ts`):** Extract hardcoded data from the UI into this file and apply the Types.
3. **State (`use[Feature]Store.ts`):** Build the Zustand store to hold the mock data and loading states.
4. **ViewModel (`use[Feature]ViewModel.ts`):** - Pull data from Zustand.
   - Setup `useSearchParams` for tabs, date ranges, search queries, and filters.
   - Create the `setUrlFilter` router push function.
5. **Screen & Components:**
   - Strip out all local `useState` used for filtering/tabs.
   - Wire the UI to accept ViewModel data via props.
   - Ensure Dropdowns, Search Bars, and Tab Switchers push to the URL.
6. **Page Router (`page.tsx`):** Wrap the Screen component in a React `<Suspense>` boundary to prevent Next.js static build crashes.

---

### ⚠️ 3. CRITICAL CHECKLIST (Do not skip)
- [ ] Did you remember to extract state from EVERY child component provided in the prompt and wire them all to the ViewModel?
- [ ] Are URL spaces handled properly (e.g., replacing `+` with spaces for exact string matching)?
- [ ] Are we passing down `searchQuery` and `currentFilter` to properly filter the table data via `useMemo` in the Screen?
- [ ] No local `fs` or unused imports remaining?

**PROMPT:** "I am providing the code for the `[Insert Feature Name Here]` screen. Please execute Step 1 through 6 of this blueprint."