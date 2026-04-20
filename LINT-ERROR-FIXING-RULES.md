# L2B Project — Strict Linting & Architecture Rules

### Overview
This document defines the strict boundaries for resolving lint errors and warnings within the Link2Build (L2B) application. The core objective is to achieve a clean codebase without compromising the established MVVM (Model-View-ViewModel) architecture or application behavior.

---

### Rule 1: Zero Boundary Bleeding (The Golden Rule)
* **The Rule:** We will never move context, UI elements, or framework-specific lifecycle components into the **ViewModel** just to satisfy a lint warning. 
* **Why:** The ViewModel must remain completely ignorant of the View. It should only expose state and handle events. If a linter demands passing UI context into a ViewModel, the fix must be rejected or re-architected.

### Rule 2: No Logic Alteration for the Sake of Syntax
* **The Rule:** A lint fix must be purely cosmetic or structural. If a suggested fix changes the way State flows, alters asynchronous data fetching, or modifies actual business logic, we do not apply it.
* **Why:** Auto-fixes can sometimes change execution order (especially with reactive streams, coroutines, or state management). The app's behavior must remain 100% identical before and after the fix.

### Rule 3: Ban "Global Auto-Fix"
* **The Rule:** We will fix errors file-by-file, component-by-component. We will absolutely not run global `--fix` commands across the entire project.
* **Why:** Global auto-fixes lack context and are the primary cause of architectural degradation. We require surgical precision, not a sledgehammer.

### Rule 4: Strategic Suppression is Allowed
* **The Rule:** If the linter flags code that is architecturally correct for our MVVM pattern, we will explicitly suppress that specific warning (using `@Suppress`, `@SuppressLint`, or `// eslint-disable`) rather than breaking the architecture to please the linter.
* **Why:** The developer is the architect; the linter is just a tool. We define the standard.

### Rule 5: State Mutability Remains Protected
* **The Rule:** If a linter suggests making a variable mutable (`var` instead of `val`, or exposing a raw, mutable state object directly to the View), we will ignore or reject it.
* **Why:** In MVVM, ViewModels must expose strictly immutable state to the View. The View should never be able to directly edit the state. We will not compromise state safety for a green checkmark.

### Rule 6: Defer Rule-Breaking Fixes
* **The Rule:** If resolving a specific lint error requires violating any of the rules above (Rules 1-5), we will skip that error for now and push it to the very end of the queue.
* **Why:** This ensures we maintain momentum on safe fixes. Once the bulk of the codebase is clean, we can dedicate focused architectural reviews to these complex, edge-case errors without risking the entire system's integrity.