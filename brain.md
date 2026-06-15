# Zaika - Technical Architecture & Interview Guide

This document serves as the technical documentation and interview guide for the **Zaika** web application. It outlines the core design decisions, system architecture, performance optimizations, and comparisons with the legacy HTRO project. Use this guide to excel in technical interviews regarding frontend development, performance, and UI/UX modernization.

---

## 🚀 1. Technology Stack & Rationale

Zaika is built using a **Vanilla Web Architecture**: **HTML5**, **Vanilla CSS3**, and **Modern ES6+ JavaScript**.

### Why Vanilla instead of a framework (like React or Next.js)?
1. **Zero Build-Time Friction & Environment Immunity**:
   * *Interview Context*: In strict enterprise environments, security policies like **Windows Defender Application Control (WDAC)** or **AppLocker** often restrict running compiler scripts, bundlers (like Webpack/Vite), or executing binaries (like `App_Code.dll` or dynamic node modules) from local temporary paths (`%TEMP%` or `%APPDATA%`).
   * *Solution*: A pure HTML/CSS/JS stack runs directly inside the client's web browser, making it completely immune to local execution policy blocks, ensuring 100% portability.
2. **Minimal Overhead & Performance**:
   * Eliminates the virtual DOM diffing overhead, heavy node modules dependencies, and bundle-size inflation.
   * Instant load times (First Contentful Paint under 200ms) because the browser parses the source files directly without compilation.
3. **Advanced CSS Capability**:
   * Uses modern native CSS custom properties (variables) for theme switching, rendering frameworks like Tailwind or Sass unnecessary for style updates.

---

## 🏛️ 2. Architectural Design & State Management

Zaika follows a **Single Page Application (SPA)** model with a centralized client-side state machine.

### Key Architectural Pillars:
* **Centralized App State (`appState`)**:
  * A single, clean source of truth containing:
    ```javascript
    let appState = {
        activeTab: "home",
        selectedRestaurant: null,
        cart: [],
        reservations: [],
        orders: [],
        searchQuery: "",
        selectedVenueFilter: "all",
        theme: "midnight",
        accent: "gold"
    };
    ```
* **DOM Caching (`dom`)**:
  * Element selectors are queried once during startup and stored inside a structured `dom` object. This avoids expensive repeated `document.getElementById` calls during user interaction, minimizing DOM lookup overhead.
* **Persistent Local Storage**:
  * Customizer configurations (theme, accent color) and transaction logs (active reservations and food orders) are persisted in the browser's `localStorage`. This maintains state consistency on browser reloads.

---

## 🎨 3. Design System & Aesthetics (Glassmorphism)

Zaika's visual design is built on **Modern Glassmorphism** (frosted glass) combined with dynamic kinetic physics.

### Implementation Details:
1. **Frosted Glass Styling**:
   * Achieved using translucent background colors (`rgba(...)`) paired with `backdrop-filter: blur(16px)` to blur elements behind the container.
   * Fine border highlights (`border: 1px solid rgba(255, 255, 255, 0.15)`) simulate light refraction on glass edges.
2. **Kinetic Blobs**:
   * Large radial gradients drift slowly in the background using CSS `@keyframes` animations, creating organic movement, depth, and color transitions.
3. **Dynamic Customizer**:
   * **Themes**: Supports **Light** (soft frosted white), **Dark** (Obsidian violet-black), and **Midnight** (deep teal-marine).
   * **Accent Colors**: Switches primary brand indicators (Gold, Crimson, Emerald, Cyan) in real-time.
   * *Mechanism*: Updates body variables (e.g. `data-theme` or `data-accent`) via JavaScript. CSS styles are bound to these selector attributes, triggering instant, smooth GPU-accelerated transitions across all page elements.

---

## ⚙️ 4. Core Workflow Implementation

### A. Restaurant Search & Filter System (O(N) Complexity)
* When a user inputs text or selects a category (Dine-In vs. Takeaway), a JavaScript listener updates the state.
* The system performs an in-memory `Array.prototype.filter()` on the restaurant array. Since the dataset is client-side, search queries resolve instantaneously.

### B. High-Precision Cart System
* **Quantity Consolidation**: When adding an item, JavaScript checks if the ID already exists in the cart array. If yes, it increments the quantity; if no, it pushes the item with `quantity: 1`.
* **Tax Calculations**: Computes subtotals, applies an 18% tax rate (GST/Service Tax), and updates totals using localized number formatting (`toLocaleString('en-IN')`).

### C. Booking & Progress Dashboard Tracker
* Placed orders and reservations generate unique tracking IDs (e.g., `BK-XXXX`, `OD-XXXXX`).
* The system renders progress bars where the width is controlled dynamically via CSS variables:
  ```html
  <div class="tracker-bar-fill" style="--progress-width: 35%;"></div>
  ```
  ```css
  @keyframes fillProgress { to { width: var(--progress-width); } }
  ```
  This creates smooth progress bar growth when the dashboard is loaded.

---

## 🔄 5. Comparison: Legacy HTRO vs. Modern Zaika

During an interview, highlighting how you debugged and refactored a legacy application shows strong engineering skills.

| Feature / Bug | Legacy HTRO WebForms | Modern Zaika SPA |
| :--- | :--- | :--- |
| **UX & Visuals** | Standard ASP.NET template, static layouts, plain styling. | High-end glassmorphic theme with interactive customizations and custom graphics. |
| **Logic & Code Quality** | Messy syntax artifacts (like labels masquerading as URLs `http://localhost:...` on line 28 of `Orders.aspx.cs`). | Clean, modular ES6 JavaScript following clean code principles. |
| **Pricing Precision** | Parsed as `int` (`int.TryParse`), forcing whole numbers. | Parsed as `decimal` throughout the workflow, matching the database schema. |
| **Confirmation Bug** | `lblConfirmation.Visible = True` bound to an uninitialized property that defaulted to `false` (hiding confirmations). | Instant animated toast notifications using clean DOM injections. |
| **Navigation Links** | Unclickable "Home" navigation and "Back to home" links pointing incorrectly to Login paths. | Dynamic SPA tab transitions and functional, fully clickable menus. |
| **Data Architecture** | Direct connection to SQL Server (throwing exceptions for NULL records). | Mock client-side database synced with persistent browser storage, filtering invalid rows. |
