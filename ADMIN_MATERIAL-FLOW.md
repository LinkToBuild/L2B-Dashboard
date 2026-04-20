# Epic: Material Ordering — Admin Flow

## 1. Product Variant Selection (Bottom Sheet Modal)
* **Context:** The Admin is on the Home Screen and taps a generic product card (e.g., "Clay Bricks").
* **UI Elements:** A bottom sheet displaying a list of Material Types (radio buttons) with a count of available options. Upon selecting a type, a dropdown appears for selecting specific dimensions/specifications. Buttons for "Change site" and "Done" are present.
* **User Action:**
    1. Admin taps a product card on the Home Screen.
    2. Admin selects a specific Material Type (e.g., "Red Clay Bricks") via a radio button.
    3. Admin selects a specific dimension/variant from the resulting dropdown.
    4. Admin taps "Done" to proceed.
* **Business Logic / Constraints:**
    * The data populating this modal must be hierarchical: Parent Product -> Material Type -> Specific Variant (SKU).
    * The available types and variants must be filtered by the Admin's active geographic location (established on the Home Screen) to ensure they are actually orderable in their area.
    * The "Done" button should remain disabled until a valid variant is selected from the dropdown.
    * The "Change site" button implies the selected location dictates the available inventory and potentially pricing. Changing the site here might necessitate a re-fetch of the available types and variants.

## 2. Product Detail Page (PDP) & Brand Selection
* **Context:** Admin clicks "Done" on the variant selection modal and lands on the full Product Detail Page for the specific variant.
* **UI Elements:**
    * **PDP Main View:** Product image, Bestseller tag, variant title, brand logos, MRP and discounted price, ratings/reviews, a "Select Brands" section, disabled "Add To Cart" / "Buy Now" buttons, a "Pair it with" cross-sell section, and detailed descriptions.
    * **Brand Modal:** A bottom sheet listing specific brands/vendors selling this variant, showing live inventory counts (e.g., "20 Stock left") or "Stock Out" with a "Notify" button. A quantity selector appears when a brand is selected.
* **User Action:**
    1. Admin reviews product details on the PDP.
    2. Admin clicks the "Select Brands" dropdown area.
    3. Admin selects an in-stock brand from the modal (e.g., "SVB Bricks").
    4. Admin adjusts the desired quantity using the `+` / `-` controls.
    5. Admin clicks "Done" on the modal.
    6. Admin clicks the now-active "Buy Now" button on the PDP, moving the item to the Cart.
    * *(Alternative)*: Admin clicks "Notify" on an out-of-stock brand to receive restock alerts.
    * *(Alternative)*: Admin clicks "Add to cart" in the "Pair it with" section to bundle cross-sell items.
* **Business Logic / Constraints:**
    * **Inventory Aggregation:** The API must fetch only the vendors/brands that service the Admin's active geographic site and carry this exact variant.
    * **Real-time Stock:** Inventory numbers must be accurate. If an item is "Stock Out", it cannot be selected.
    * **Button State:** "Buy Now" and "Add To Cart" must remain disabled until a specific brand and a quantity greater than zero are selected.
    * **Cross-sell Logic:** The "Pair it with" API needs to dynamically return related SKUs based on the primary product.
    * **Restock Notifications:** Clicking "Notify" requires writing a record to a `restock_subscriptions` table linking the User ID, SKU/Brand ID, and Site Location.

## 3. Organizational Cart & Filtering
* **Context:** Admin navigates to "My Cart" to review selected items before checkout.
* **UI Elements:** * A horizontal scrollable filter bar: "All", "Person" (Worker), "Site", "Your Wishlist", "Urgency".
    * Global "Buy Now" button with aggregated Sub Total.
    * Cart Item Cards displaying: Product details, edit/delete controls, Site location, Requestor name (e.g., "Requested: Shruti"), and Delivery ETA.
* **User Action:**
    1. Admin reviews the consolidated list of cart items.
    2. Admin taps filters (e.g., "Person" or "Site") to isolate specific requests.
    3. Admin edits quantities or deletes items as needed.
    4. Admin clicks the global "Buy Now" button to initiate checkout.
* **Business Logic / Constraints:**
    * **Shared Cart Data:** The `GET /cart` API for an Admin must fetch items they added directly PLUS items requested by their workers (`status = PENDING_APPROVAL`).
    * **Real-time Subtotal:** The subtotal must recalculate dynamically if quantities are edited or items are deleted.
    * **Filter Metadata:** Cart items in the DB must store metadata relationships: `site_id`, `requested_by_user_id`, and `urgency_flag` to support the UI filters.

## 4. Delivery Scheduling (Checkout Initiation)
* **Context:** Admin clicks "Buy Now" from the Cart and must determine logistics before final payment.
* **UI Elements:** "Schedule Booking" bottom sheet with options for "Fast Delivery" (shows extra cost, e.g., ₹100 Extra), "Normal Delivery", and "Schedule Delivery" (opens a calendar UI). A dynamic warning message about stock limitations may appear.
* **User Action:**
    1. Admin selects a delivery tier (Fast, Normal, or Scheduled date).
    2. Admin selects a specific date if "Schedule Delivery" is chosen.
    3. Admin clicks "Done" to lock the schedule and proceed to the payment/summary screen.
* **Business Logic / Constraints:**
    * **Inventory Warning:** The system runs a pre-checkout inventory check. If stock is low for the requested dates, a warning message is injected into the modal ("Our stock of XYZ cement is currently limited...").
    * **Dynamic Pricing:** Selecting "Fast Delivery" must inject an extra fee (e.g., ₹100) into the final checkout calculation.
    * **Site-Specific Grouping:** Because the modal includes a "Change site" button, the backend must be prepared to split the cart into multiple distinct `Orders` if the cart contains items destined for different sites.