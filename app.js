/* ==========================================
   Zaika Web Application Controller (ES6 JS)
   ========================================== */

// Mock Database of Restaurants and Menus
const RESTAURANTS = [
    {
        id: "davinci",
        name: "Da Vinci Gourmet",
        cuisine: "Gourmet Italian & Fine Dining",
        rating: "4.9",
        time: "30-45 min",
        cost: "₹1,200 for two",
        distance: "2.4 km",
        isDineIn: true,
        image: "assets/rest_italian.png",
        menu: {
            "Appetizers": [
                { id: "it-1", name: "Truffle Garlic Bruschetta", price: 349, desc: "Grilled artisanal sourdough, roasted wild mushrooms, white truffle oil, shaved parmigiano." },
                { id: "it-2", name: "Caprese di Bufala", price: 399, desc: "Fresh buffalo mozzarella, vine-ripened heirloom tomatoes, organic basil pesto, 12-year aged balsamic." }
            ],
            "Mains": [
                { id: "it-3", name: "Wild Porcini Risotto", price: 599, desc: "Creamy Arborio rice, slow-cooked porcini broth, white wine, pecorino romano." },
                { id: "it-4", name: "Neapolitan Margherita Pizza", price: 499, desc: "San Marzano tomato base, fresh mozzarella pearls, fresh basil leaves, extra virgin olive oil." },
                { id: "it-5", name: "Handcrafted Spinach Ricotta Ravioli", price: 549, desc: "Fresh ravioli stuffed with spinach and ricotta, served in a creamy sage butter sauce." }
            ],
            "Desserts & Drinks": [
                { id: "it-6", name: "Zaika Espresso Tiramisu", price: 299, desc: "House-made espresso-soaked ladyfingers, rich mascarpone cream, dust of premium cocoa." },
                { id: "it-7", name: "San Pellegrino Sparkling", price: 149, desc: "Refreshing classic Italian sparkling mineral water." }
            ]
        }
    },
    {
        id: "tandoor",
        name: "Tandoor & Masala",
        cuisine: "Royal North Indian Spices",
        rating: "4.8",
        time: "25-35 min",
        cost: "₹900 for two",
        distance: "1.8 km",
        isDineIn: true,
        image: "assets/rest_indian.png",
        menu: {
            "Starters": [
                { id: "in-1", name: "Peshawari Paneer Tikka", price: 329, desc: "Fresh cottage cheese cubes marinated in mustard oil, yogurt, and hand-ground spices, clay oven charred." },
                { id: "in-2", name: "Dahi ke Kebab", price: 299, desc: "Velvety spiced hung curd patties deep-fried to a golden crust, served with mint chutney." }
            ],
            "Main Course": [
                { id: "in-3", name: "Royal Butter Chicken", price: 489, desc: "Charcoal-grilled tandoori chicken simmered in a creamy, buttery tomato-cashew gravy." },
                { id: "in-4", name: "Dal Makhani Bukharis", price: 349, desc: "Whole black lentils slow-cooked overnight with cream and butter on clay ovens." },
                { id: "in-5", name: "Subz Biryani Handi", price: 399, desc: "Aromatic long-grain basmati rice layered with seasonal vegetables and saffron, cooked under Dum." }
            ],
            "Sides & Desserts": [
                { id: "in-6", name: "Garlic Butter Naan", price: 89, desc: "Leavened clay oven bread topped with minced garlic and melted butter." },
                { id: "in-7", name: "Elachi Shahi Tukda", price: 199, desc: "Crispy fried bread soaked in cardamom rabri, garnished with almonds and pistachios." }
            ]
        }
    },
    {
        id: "zengarden",
        name: "Zen Garden Sushi",
        cuisine: "Authentic Pan-Asian & Sushi",
        rating: "4.7",
        time: "35-50 min",
        cost: "₹1,500 for two",
        distance: "3.2 km",
        isDineIn: true,
        image: "assets/rest_asian.png",
        menu: {
            "Dim Sum & Starters": [
                { id: "as-1", name: "Edamame Truffle Dumpling", price: 389, desc: "Steamed translucent dumplings filled with edamame paste and dynamic truffle drizzle." },
                { id: "as-2", name: "Crispy Spring Rolls", price: 249, desc: "Crispy golden wrappers stuffed with seasoned julienned vegetables, sweet chili dip." }
            ],
            "Specialty Sushi": [
                { id: "as-3", name: "Premium Dragon Roll", price: 649, desc: "Uramaki roll topped with avocado, unagi eel, crisp cucumber, and glazed spicy teriyaki sauce." },
                { id: "as-4", name: "Spicy Salmon Maki", price: 599, desc: "Fresh Atlantic salmon, chili mayo, sesame seeds, wrapped in premium nori seaweed." }
            ],
            "Wok & Ramen": [
                { id: "as-5", name: "Spicy Miso Ramen", price: 499, desc: "Rich miso broth, wheat noodles, bamboo shoots, soft egg, pak choi, scallions." },
                { id: "as-6", name: "Thai Green Curry (Veg)", price: 449, desc: "Creamy coconut milk curry with exotic vegetables and lemongrass, served with jasmine rice." }
            ]
        }
    },
    {
        id: "baguette",
        name: "Baguette & Cafe",
        cuisine: "Artisanal Bakeries & Cafes",
        rating: "4.6",
        time: "15-25 min",
        cost: "₹500 for two",
        distance: "0.9 km",
        isDineIn: false,
        image: "assets/rest_bistro.png",
        menu: {
            "Fresh Bakes": [
                { id: "cf-1", name: "Butter Croissant", price: 149, desc: "Flaky, layered French pastry baked fresh daily with pure butter." },
                { id: "cf-2", name: "Avocado Sourdough Toast", price: 299, desc: "Toasted sourdough, smashed Hass avocado, cherry tomatoes, pumpkin seeds, chili flakes." }
            ],
            "Artisanal Coffee": [
                { id: "cf-3", name: "Zaika Signature Cappuccino", price: 179, desc: "Freshly pulled double espresso shot, steamed milk, thick silky foam layer." },
                { id: "cf-4", name: "Iced Salted Caramel Latte", price: 199, desc: "Espresso, cold milk, salted caramel syrup, ice cubes, topped with cold foam." }
            ],
            "Dessert Delights": [
                { id: "cf-5", name: "Belgian Chocolate Tart", price: 229, desc: "Rich Belgian chocolate ganache in a crisp pastry shell, finished with sea salt." }
            ]
        }
    }
];

// App State
let appState = {
    activeTab: "home",
    selectedRestaurant: null,
    cart: [],
    reservations: [],
    orders: [],
    searchQuery: "",
    selectedVenueFilter: "all", // all, dinein, takeaway
    theme: "midnight",
    accent: "gold"
};

// DOM Cache
const dom = {
    body: document.body,
    navHomeTab: document.getElementById("nav-home-tab"),
    navBookingsTab: document.getElementById("nav-bookings-tab"),
    tabHome: document.getElementById("tab-home"),
    tabBookings: document.getElementById("tab-bookings"),
    btnCustomizerToggle: document.getElementById("btn-customizer-toggle"),
    btnCustomizerClose: document.getElementById("btn-customizer-close"),
    customizerSidebar: document.getElementById("customizer-sidebar"),
    themeButtons: document.querySelectorAll(".theme-btn"),
    accentButtons: document.querySelectorAll(".accent-btn"),
    
    // Search
    filterAll: document.getElementById("filter-all"),
    filterDineIn: document.getElementById("filter-dinein"),
    filterTakeaway: document.getElementById("filter-takeaway"),
    searchQuery: document.getElementById("search-query"),
    searchLocation: document.getElementById("search-location"),
    restaurantsContainer: document.getElementById("restaurants-container"),
    listCountText: document.getElementById("list-count-text"),
    
    // Modal
    restaurantDetailsModal: document.getElementById("restaurant-details-modal"),
    btnCloseDetails: document.getElementById("btn-close-details"),
    modalBackdrop: document.getElementById("modal-backdrop-trigger"),
    modalRestBanner: document.getElementById("modal-restaurant-banner"),
    modalRestName: document.getElementById("modal-restaurant-name"),
    modalRestCuisine: document.getElementById("modal-restaurant-cuisine"),
    modalRestRating: document.getElementById("modal-restaurant-rating"),
    menuCategoriesBar: document.getElementById("menu-categories-bar"),
    menuItemsContainer: document.getElementById("menu-items-container"),
    
    // Modal Actions
    tabBtnReserve: document.getElementById("tab-btn-reserve"),
    tabBtnOrder: document.getElementById("tab-btn-order"),
    panelReserve: document.getElementById("panel-reserve"),
    panelOrder: document.getElementById("panel-order"),
    bookingForm: document.getElementById("booking-form-element"),
    bookingDate: document.getElementById("booking-date"),
    bookingTime: document.getElementById("booking-time"),
    
    // Cart
    cartItemsList: document.getElementById("cart-items-list"),
    cartSubtotal: document.getElementById("cart-subtotal"),
    cartTax: document.getElementById("cart-tax"),
    cartTotal: document.getElementById("cart-total"),
    btnCheckoutOrder: document.getElementById("btn-checkout-order"),
    cartCount: document.getElementById("cart-count"),
    navCartTrigger: document.getElementById("nav-cart-trigger"),
    
    // Dashboards
    activeBookingsList: document.getElementById("active-bookings-list"),
    activeOrdersList: document.getElementById("active-orders-list"),
    toastWrapper: document.getElementById("toast-wrapper")
};

// Initialize App
function init() {
    loadSettings();
    loadDashboardData();
    setupEventListeners();
    renderRestaurants();
    setDefaultDateAndMin();
    
    // Periodically update dashboard UI to simulate live progress
    setInterval(() => {
        if (appState.activeTab === "bookings") {
            updateDashboardUI();
        }
    }, 4000);
}

// Set Minimum Dates for Reservations
function setDefaultDateAndMin() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = yyyy + '-' + mm + '-' + dd;
    
    dom.bookingDate.setAttribute("min", formattedToday);
    dom.bookingDate.value = formattedToday;
    
    // Time slot defaults to current hour + 1 hour
    let hours = today.getHours() + 1;
    let minutes = today.getMinutes();
    if (hours > 23) hours = 20; // Default evening cap
    if (hours < 10) hours = 10; // Opening
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    dom.bookingTime.value = `${hours}:${minutes}`;
}

// Load Settings from LocalStorage
function loadSettings() {
    const savedTheme = localStorage.getItem("zaika-theme");
    const savedAccent = localStorage.getItem("zaika-accent");
    
    if (savedTheme) {
        appState.theme = savedTheme;
        dom.body.setAttribute("data-theme", savedTheme);
        dom.themeButtons.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-theme") === savedTheme);
        });
    }
    
    if (savedAccent) {
        appState.accent = savedAccent;
        dom.body.setAttribute("data-accent", savedAccent);
        dom.accentButtons.forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-accent") === savedAccent);
        });
    }
}

// Save Settings to LocalStorage
function saveSetting(key, value) {
    localStorage.setItem(`zaika-${key}`, value);
}

// Load Reservations & Orders from LocalStorage
function loadDashboardData() {
    const storedBookings = localStorage.getItem("zaika-reservations");
    const storedOrders = localStorage.getItem("zaika-orders");
    
    if (storedBookings) {
        appState.reservations = JSON.parse(storedBookings);
    }
    if (storedOrders) {
        appState.orders = JSON.parse(storedOrders);
    }
    
    updateDashboardUI();
}

// Save Booking to Database
function saveReservationToDB(booking) {
    appState.reservations.unshift(booking);
    localStorage.setItem("zaika-reservations", JSON.stringify(appState.reservations));
    updateDashboardUI();
}

// Save Order to Database
function saveOrderToDB(order) {
    appState.orders.unshift(order);
    localStorage.setItem("zaika-orders", JSON.stringify(appState.orders));
    updateDashboardUI();
}

// Setup Interaction Events
function setupEventListeners() {
    // Navigation Tabs
    dom.navHomeTab.addEventListener("click", (e) => { e.preventDefault(); switchTab("home"); });
    dom.navBookingsTab.addEventListener("click", (e) => { e.preventDefault(); switchTab("bookings"); });
    
    // Customizer Panel toggle
    dom.btnCustomizerToggle.addEventListener("click", () => dom.customizerSidebar.classList.toggle("active"));
    dom.btnCustomizerClose.addEventListener("click", () => dom.customizerSidebar.classList.remove("active"));
    
    // Theme Pickers
    dom.themeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.getAttribute("data-theme");
            appState.theme = theme;
            dom.body.setAttribute("data-theme", theme);
            dom.themeButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            saveSetting("theme", theme);
            showToast(`<i class="fa-solid fa-circle-half-stroke"></i> Theme set to ${btn.innerText.trim()}`);
        });
    });

    // Accent Pickers
    dom.accentButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const accent = btn.getAttribute("data-accent");
            appState.accent = accent;
            dom.body.setAttribute("data-accent", accent);
            dom.accentButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            saveSetting("accent", accent);
            showToast(`<i class="fa-solid fa-palette"></i> Colors customized successfully`);
        });
    });

    // Venue type search filter
    dom.filterAll.addEventListener("click", () => selectVenueFilter("all"));
    dom.filterDineIn.addEventListener("click", () => selectVenueFilter("dinein"));
    dom.filterTakeaway.addEventListener("click", () => selectVenueFilter("takeaway"));

    // Real-time Search inputs
    dom.searchQuery.addEventListener("input", (e) => {
        appState.searchQuery = e.target.value.toLowerCase();
        renderRestaurants();
    });

    // Modal Events
    dom.btnCloseDetails.addEventListener("click", closeModal);
    dom.modalBackdrop.addEventListener("click", closeModal);
    
    // Modal Action Center tabs (Reserve vs. Order)
    dom.tabBtnReserve.addEventListener("click", () => switchModalPanel("reserve"));
    dom.tabBtnOrder.addEventListener("click", () => switchModalPanel("order"));
    
    // Cart trigger from Navigation
    dom.navCartTrigger.addEventListener("click", () => {
        if (appState.selectedRestaurant) {
            openModal(appState.selectedRestaurant.id);
            switchModalPanel("order");
        } else {
            // Open first restaurant as fallback
            openModal(RESTAURANTS[0].id);
            switchModalPanel("order");
            showToast(`<i class="fa-solid fa-circle-info"></i> Opened ${RESTAURANTS[0].name} Menu`);
        }
    });

    // Booking Form Submit
    dom.bookingForm.addEventListener("submit", handleBookingSubmit);
    
    // Checkout Order Submit
    dom.btnCheckoutOrder.addEventListener("click", handleCheckoutSubmit);
}

// Navigation Tab switcher
function switchTab(tabId) {
    appState.activeTab = tabId;
    
    if (tabId === "home") {
        dom.navHomeTab.classList.add("active");
        dom.navBookingsTab.classList.remove("active");
        dom.tabHome.classList.add("active");
        dom.tabBookings.classList.remove("active");
    } else {
        dom.navHomeTab.classList.remove("active");
        dom.navBookingsTab.classList.add("active");
        dom.tabHome.classList.remove("active");
        dom.tabBookings.classList.add("active");
        updateDashboardUI(); // Draw progress loaders fresh
    }
}

// Select category filters (dinein/takeaway)
function selectVenueFilter(type) {
    appState.selectedVenueFilter = type;
    dom.filterAll.classList.toggle("active", type === "all");
    dom.filterDineIn.classList.toggle("active", type === "dinein");
    dom.filterTakeaway.classList.toggle("active", type === "takeaway");
    renderRestaurants();
}

// Render restaurants grid
function renderRestaurants() {
    dom.restaurantsContainer.innerHTML = "";
    
    const filtered = RESTAURANTS.filter(r => {
        // Search Query Matching
        const matchesQuery = r.name.toLowerCase().includes(appState.searchQuery) ||
                             r.cuisine.toLowerCase().includes(appState.searchQuery);
        
        // Option Filter Matching
        let matchesFilter = true;
        if (appState.selectedVenueFilter === "dinein") {
            matchesFilter = r.isDineIn === true;
        } else if (appState.selectedVenueFilter === "takeaway") {
            matchesFilter = r.isDineIn === false;
        }
        
        return matchesQuery && matchesFilter;
    });

    dom.listCountText.innerText = `Showing ${filtered.length} restaurant${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        dom.restaurantsContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; min-height: 250px;">
                <i class="fa-solid fa-utensils"></i>
                <p>No restaurants found matching your criteria.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(r => {
        const card = document.createElement("div");
        card.className = "restaurant-card";
        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${r.image}" class="card-img" alt="${r.name}" onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80'" />
                ${r.isDineIn ? '<span class="badge-dinein"><i class="fa-solid fa-chair"></i> Dine-In & Takeaway</span>' : '<span class="badge-dinein" style="color:#ff4757"><i class="fa-solid fa-motorcycle"></i> Takeaway Only</span>'}
                <span class="card-rating"><i class="fa-solid fa-star"></i> ${r.rating}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${r.name}</h3>
                <p class="card-cuisine">${r.cuisine}</p>
                <div class="card-meta">
                    <div class="meta-item"><i class="fa-solid fa-clock"></i> <span>${r.time}</span></div>
                    <div class="meta-item"><i class="fa-solid fa-wallet"></i> <span>${r.cost}</span></div>
                    <div class="meta-item"><i class="fa-solid fa-location-arrow"></i> <span>${r.distance}</span></div>
                </div>
            </div>
        `;
        card.addEventListener("click", () => openModal(r.id));
        dom.restaurantsContainer.appendChild(card);
    });
}

// Open Details Modal
function openModal(restaurantId) {
    const restaurant = RESTAURANTS.find(r => r.id === restaurantId);
    if (!restaurant) return;
    
    appState.selectedRestaurant = restaurant;
    
    // Populate details
    dom.modalRestName.innerText = restaurant.name;
    dom.modalRestCuisine.innerHTML = `<i class="fa-solid fa-utensils"></i> ${restaurant.cuisine} &bull; Premium Dining`;
    dom.modalRestRating.innerHTML = `<i class="fa-solid fa-star"></i> ${restaurant.rating}`;
    dom.modalRestBanner.style.backgroundImage = `url('${restaurant.image}')`;
    
    // Check if dinein is supported by this venue
    if (!restaurant.isDineIn) {
        dom.tabBtnReserve.style.display = "none";
        switchModalPanel("order");
    } else {
        dom.tabBtnReserve.style.display = "flex";
        switchModalPanel("reserve");
    }

    // Render Menu Categories and Items
    renderCategories(restaurant.menu);
    
    dom.restaurantDetailsModal.classList.add("active");
    dom.body.style.overflow = "hidden"; // Disable background scrolling
}

// Close Details Modal
function closeModal() {
    dom.restaurantDetailsModal.classList.remove("active");
    dom.body.style.overflow = "auto";
}

// Switch tabs inside modal panel (Reserve vs. Order)
function switchModalPanel(panel) {
    if (panel === "reserve") {
        dom.tabBtnReserve.classList.add("active");
        dom.tabBtnOrder.classList.remove("active");
        dom.panelReserve.classList.add("active");
        dom.panelOrder.classList.remove("active");
    } else {
        dom.tabBtnReserve.classList.remove("active");
        dom.tabBtnOrder.classList.add("active");
        dom.panelReserve.classList.remove("active");
        dom.panelOrder.classList.add("active");
        updateCartUI();
    }
}

// Render Menu Categories
function renderCategories(menu) {
    dom.menuCategoriesBar.innerHTML = "";
    const categories = Object.keys(menu);
    
    categories.forEach((cat, idx) => {
        const btn = document.createElement("button");
        btn.className = `category-tab ${idx === 0 ? 'active' : ''}`;
        btn.innerText = cat;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".category-tab").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderMenuItems(menu[cat]);
        });
        dom.menuCategoriesBar.appendChild(btn);
    });

    // Initial load first category
    if (categories.length > 0) {
        renderMenuItems(menu[categories[0]]);
    }
}

// Render Menu Items
function renderMenuItems(items) {
    dom.menuItemsContainer.innerHTML = "";
    
    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-item-card";
        card.innerHTML = `
            <div class="menu-item-desc">
                <div class="item-header">
                    <span class="item-title">${item.name}</span>
                    <span class="item-price">&#8377;${item.price}</span>
                </div>
                <p class="item-detail">${item.desc}</p>
                <button class="btn-add-cart" data-id="${item.id}"><i class="fa-solid fa-plus"></i> Add to Order</button>
            </div>
        `;
        
        card.querySelector(".btn-add-cart").addEventListener("click", (e) => {
            e.stopPropagation();
            addItemToCart(item);
        });
        
        dom.menuItemsContainer.appendChild(card);
    });
}

// Add Item to Shopping Cart
function addItemToCart(item) {
    const existing = appState.cart.find(c => c.id === item.id);
    
    if (existing) {
        existing.quantity++;
    } else {
        appState.cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: 1
        });
    }
    
    updateCartUI();
    showToast(`<i class="fa-solid fa-cart-shopping"></i> Added ${item.name} to cart`);
}

// Adjust Item Quantity in Cart
function changeCartQuantity(itemId, change) {
    const index = appState.cart.findIndex(c => c.id === itemId);
    if (index === -1) return;
    
    appState.cart[index].quantity += change;
    
    if (appState.cart[index].quantity <= 0) {
        appState.cart.splice(index, 1);
    }
    
    updateCartUI();
}

// Update Cart User Interface values
function updateCartUI() {
    dom.cartItemsList.innerHTML = "";
    
    let subtotal = 0;
    let count = 0;
    
    if (appState.cart.length === 0) {
        dom.cartItemsList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-cart-plus"></i>
                <p>Your cart is empty. Add delicacies from the menu.</p>
            </div>
        `;
        dom.btnCheckoutOrder.disabled = true;
    } else {
        dom.btnCheckoutOrder.disabled = false;
        
        appState.cart.forEach(item => {
            subtotal += item.price * item.quantity;
            count += item.quantity;
            
            const row = document.createElement("div");
            row.className = "cart-item-row";
            row.innerHTML = `
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <span>&#8377;${item.price} &times; ${item.quantity}</span>
                </div>
                <div class="cart-item-qty">
                    <button class="btn-qty btn-minus" data-id="${item.id}">&minus;</button>
                    <span>${item.quantity}</span>
                    <button class="btn-qty btn-plus" data-id="${item.id}">&plus;</button>
                </div>
            `;
            
            row.querySelector(".btn-minus").addEventListener("click", () => changeCartQuantity(item.id, -1));
            row.querySelector(".btn-plus").addEventListener("click", () => changeCartQuantity(item.id, 1));
            dom.cartItemsList.appendChild(row);
        });
    }

    // Totals calculations
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    dom.cartCount.innerText = count;
    dom.cartSubtotal.innerHTML = `&#8377;${subtotal.toLocaleString('en-IN')}`;
    dom.cartTax.innerHTML = `&#8377;${tax.toLocaleString('en-IN')}`;
    dom.cartTotal.innerHTML = `&#8377;${total.toLocaleString('en-IN')}`;
}

// Handle Reservation Form Submit
function handleBookingSubmit(e) {
    e.preventDefault();
    
    if (!appState.selectedRestaurant) return;
    
    const guests = document.getElementById("booking-guests").value;
    const date = dom.bookingDate.value;
    const time = dom.bookingTime.value;
    const name = document.getElementById("booking-name").value;
    const phone = document.getElementById("booking-phone").value;
    
    const bookingId = "BK-" + Math.floor(1000 + Math.random() * 9000);
    
    const newBooking = {
        id: bookingId,
        restaurantName: appState.selectedRestaurant.name,
        restaurantId: appState.selectedRestaurant.id,
        guests: guests,
        date: date,
        time: time,
        customerName: name,
        customerPhone: phone,
        status: "Confirmed",
        timestamp: new Date().toISOString()
    };
    
    saveReservationToDB(newBooking);
    
    showToast(`<i class="fa-solid fa-circle-check"></i> Reservation ${bookingId} confirmed!`);
    dom.bookingForm.reset();
    setDefaultDateAndMin();
    
    // Close modal and redirect to dashboard
    closeModal();
    setTimeout(() => {
        switchTab("bookings");
    }, 400);
}

// Handle Order Checkout Submit
function handleCheckoutSubmit() {
    if (appState.cart.length === 0 || !appState.selectedRestaurant) return;
    
    const orderType = document.querySelector('input[name="orderType"]:checked').value;
    const orderId = "OD-" + Math.floor(10000 + Math.random() * 90000);
    
    // Calculate total price
    let subtotal = 0;
    appState.cart.forEach(item => { subtotal += item.price * item.quantity; });
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;

    const newOrder = {
        id: orderId,
        restaurantName: appState.selectedRestaurant.name,
        restaurantId: appState.selectedRestaurant.id,
        items: [...appState.cart],
        type: orderType === "dinein" ? "Dine-In Serving" : "Self Takeaway",
        totalAmount: total,
        status: "Received",
        timestamp: new Date().toISOString()
    };
    
    saveOrderToDB(newOrder);
    
    showToast(`<i class="fa-solid fa-truck-ramp-box"></i> Order ${orderId} placed successfully!`);
    
    // Clear cart
    appState.cart = [];
    updateCartUI();
    
    // Close modal and redirect to dashboard
    closeModal();
    setTimeout(() => {
        switchTab("bookings");
    }, 400);
}

// Update Bookings & Orders List UI in Dashboard
function updateDashboardUI() {
    // 1. Render Table Bookings
    dom.activeBookingsList.innerHTML = "";
    if (appState.reservations.length === 0) {
        dom.activeBookingsList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-calendar-minus"></i>
                <p>No active reservations yet. Book a table to get started.</p>
            </div>
        `;
    } else {
        appState.reservations.forEach(res => {
            const item = document.createElement("div");
            item.className = "dash-item";
            item.innerHTML = `
                <div class="dash-item-header">
                    <span class="dash-item-title">${res.restaurantName}</span>
                    <span class="dash-item-badge">${res.id}</span>
                </div>
                <div class="dash-item-details">
                    <div><i class="fa-solid fa-user-group"></i> Table Size: ${res.guests} Persons</div>
                    <div><i class="fa-solid fa-calendar"></i> Date & Time: ${res.date} at ${res.time}</div>
                    <div style="margin-top:4px;"><i class="fa-solid fa-signature"></i> Guest Name: ${res.customerName}</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; margin-bottom:8px;">
                    <span style="color:var(--accent); font-weight:700;"><i class="fa-solid fa-circle-check"></i> Status: Booked</span>
                    <span style="color:var(--text-muted)">Reservation Confirmed</span>
                </div>
                <div class="tracker-bar-container">
                    <div class="tracker-bar-fill" style="--progress-width: 100%;"></div>
                </div>
            `;
            dom.activeBookingsList.appendChild(item);
        });
    }

    // 2. Render Food Orders
    dom.activeOrdersList.innerHTML = "";
    if (appState.orders.length === 0) {
        dom.activeOrdersList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>No active orders. Add items to your cart and check out.</p>
            </div>
        `;
    } else {
        appState.orders.forEach(order => {
            const item = document.createElement("div");
            item.className = "dash-item";
            
            // Build items text summary
            const itemsSummary = order.items.map(i => `${i.name} (${i.quantity})`).join(", ");
            
            // Calculate elapsed time in seconds to simulate live progress
            const elapsedSeconds = Math.floor((new Date() - new Date(order.timestamp)) / 1000);
            
            let progress = "35%";
            let statusText = "Kitchen Preparing";
            let statusIcon = "fa-spinner fa-spin";
            let trackingText = "Tracking Live";
            
            if (elapsedSeconds >= 60) {
                progress = "100%";
                statusText = order.type === "Dine-In Serving" ? "Served & Completed" : "Ready for Pickup";
                statusIcon = "fa-circle-check";
                trackingText = "Order Completed";
            } else if (elapsedSeconds >= 40) {
                progress = "85%";
                statusText = order.type === "Dine-In Serving" ? "Serving at Table" : "Packaging Order";
                statusIcon = "fa-box-open";
                trackingText = "Almost Ready";
            } else if (elapsedSeconds >= 20) {
                progress = "65%";
                statusText = "Chef Preparing Delicacy";
                statusIcon = "fa-fire-burner";
                trackingText = "In the Kitchen";
            }
            
            item.innerHTML = `
                <div class="dash-item-header">
                    <span class="dash-item-title">${order.restaurantName}</span>
                    <span class="dash-item-badge">${order.id}</span>
                </div>
                <div class="dash-item-details">
                    <div><i class="fa-solid fa-pizza-slice"></i> Items: ${itemsSummary}</div>
                    <div><i class="fa-solid fa-credit-card"></i> Paid Amount: &#8377;${order.totalAmount.toLocaleString('en-IN')} (${order.type})</div>
                </div>
                <div style="display:flex; justify-content:space-between; align-items:center; font-size:12px; margin-bottom:8px;">
                    <span style="color:var(--accent); font-weight:700;"><i class="fa-solid ${statusIcon}"></i> ${statusText}</span>
                    <span style="color:var(--text-muted)">${trackingText}</span>
                </div>
                <div class="tracker-bar-container">
                    <div class="tracker-bar-fill" style="--progress-width: ${progress};"></div>
                </div>
            `;
            dom.activeOrdersList.appendChild(item);
        });
    }
}

// Display Toast Notifications
function showToast(messageHtml) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = messageHtml;
    dom.toastWrapper.appendChild(toast);
    
    // Automatically remove toast element after animations complete
    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// Load Application
window.addEventListener("DOMContentLoaded", init);
