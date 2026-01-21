# ☕ Aura Brew — Coffee Ritual Experience

🔗 **Live demo:**  
https://lolasommer.github.io/react-coffee-house/

🔗 **Repository:**  
https://github.com/LolaSommer/react-coffee-house

---

## 🌙 About the Project

**Aura Brew** is a concept coffee house web application that combines **coffee, desserts, and a ritual-inspired atmosphere**.  
The project explores themes of balance, mindfulness, and connection with oneself through curated coffee experiences.

> *“Explore our coffee rituals, from grounding espresso to sacral cappuccino.  
Your aura is thirsty.”*

Aura Brew is designed as a **product-like application**, not just a visual landing page.  
It includes real user flows, stateful logic, reusable modals, form validation, and interactive animations.

---

## ✨ Features

### Header & Navigation
- Logo and navigation menu
- Login / Account button
- Cart icon with live item counter
- Smooth navigation between sections

---

### Hero Section
- Atmospheric headline
- Animated floating coffee cup using **GSAP**
- Breathing motion and subtle glow to emphasize the ritual concept

---

### Menu
- Two animated horizontal product ribbons:
  - Coffee
  - Desserts
- Clicking a product opens a **reusable modal**

#### Coffee Modal (Advanced Configuration)
- Large visual preview of the drink
- Country selection with flavor notes  
  (e.g. Colombia — apple, caramel, berries)
- Milk selection:
  - Lactose-free
  - Oat
  - Almond
  - Cow milk
  - **Pure Ritual** option (removes milk and switches to black coffee)
- Strength selection:
  - Decaf
  - Light
  - Medium
  - Strong
- Dynamic configuration and cart logic

#### Dessert Modal
- Recommended time to enjoy
- Best coffee pairing
- Milk compatibility
- Focused, fast UX for decision-making

---

### About the Café
- Café image and descriptive text
- Embedded brewing process video
- Custom play / pause controls (main and internal)

---

### Energy Exchange & Promotions
- Infinite horizontal promo ribbon (same logic as menu)
- Promotional cards with detailed modals and promo codes:
  - 25% off first order
  - Aura Points loyalty program
  - “3 coffees — dessert as a gift”
  - Join the team
  - Charity: clean water in Africa (10¢ per cup donated)
  - Group meditation with orders
  - “Anti-vibration Wednesday” (silent café hours with discounts)

---

### Events
- Event cards with detailed descriptions:
  - Custom coffee roasting and tasting
  - Sound meditation with singing bowls
  - Coffee grounding rituals
  - Coffee fortune telling as art therapy (with guest tasseographer)
- Planned feature:
  - Dedicated Events page with richer visuals and storytelling (in progress)

---

### Authentication & Account
- Login modal with phone number
- Verification step with 60-second countdown
- Ability to return and change phone number
- After login:
  - Personal account page
  - Profile data (name, phone, email, birthday)
  - Newsletter subscription
  - Order history
  - Personal offers
  - Saved address and payment details
  - Edit address and card via reusable modal
  - Logout

---

### Cart & Checkout
- Cart with:
  - Product preview
  - Quantity control
  - Remove items
  - Coffee configuration editing
- Upsell items:
  - Barista apron
  - Coffee beans pack
  - Birthday card  
    → opens a textarea to enter a personal message
- Delivery option:
  - Available from $25
  - Saved address preview when available
- Checkout flow:
  - Authentication modal
  - Delivery modal
  - Success modal
- Order confirmation adapts based on:
  - Delivery order
  - In-café order

---

### Payment
- Card payment with validation
- External payment options (Google Pay / PayPal)
- Option to save payment details
- Reusable validation logic

---

## 🧠 Technical Highlights
- Reusable modal system (open / close / reuse logic)
- Centralized validation core
- Custom hooks for logic separation
- Data-driven architecture
- LocalStorage persistence
- Responsive layout (mobile supported)
- Lighthouse score: **100 / 100**

---

## 🗂 Project Structure
src/
├─ animations/ # GSAP animations
├─ components/ # JSX + SCSS per component
├─ assets/ # Images and media
├─ data/ # Centralized data
├─ hooks/ # Custom React hooks
├─ styles/ # Global styles and variables
├─ utils/ # Helpers and validators
├─ validation/ # Validation schemas
└─ App.jsx # Application core logic

---

## 🚧 Project Status

**In progress**

Planned improvements:
- Dedicated Events page with advanced visuals
- Extended GSAP animations
- Additional scroll-based interactions

---

## 🛠 Tech Stack

- React
- Vite
- SCSS
- GSAP
- JavaScript (ES6+)

---

## 📌 Notes

This project focuses on **architecture, UX flows, and product thinking**, not just visuals.  
All logic, animations, and interactions are built manually without UI frameworks.

---



