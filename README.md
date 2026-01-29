# ☕ Aura Brew — Coffee Ritual Experience

🔗 **Live Demo:**  
https://lolasommer.github.io/react-coffee-house/

🔗 **Repository:**  
https://github.com/LolaSommer/react-coffee-house

---

## 🌙 About the Project

Aura Brew is a product-oriented React SPA that simulates a real coffee house experience with complex user flows, dynamic product configuration, reusable modal logic, and centralized validation.

The project focuses on frontend architecture, state management, UX-driven flows, accessibility, and performance optimization rather than static visuals. All logic and interactions are implemented manually without UI frameworks.

---

## ✨ Features

### Header & Navigation
- Logo and navigation menu
- Login / Account button
- Cart icon with live item counter
- Smooth navigation between sections

### Hero Section
- Atmospheric headline
- Animated floating coffee cup
- Breathing motion and subtle glow to emphasize the ritual concept

### Menu
- Two animated horizontal product ribbons:
  - Coffee
  - Desserts
- Reusable product modal system

### Coffee Modal (Advanced Configuration)
- Large visual preview
- Country selection with flavor notes  
  *(e.g. Colombia — apple, caramel, berries)*
- Milk options:
  - Lactose-free
  - Oat
  - Almond
  - Cow milk
- **Pure Ritual** option (switches to black coffee)
- Strength selection:
  - Decaf
  - Light
  - Medium
  - Strong
- Dynamic price calculation and cart integration

### Dessert Modal
- Recommended time to enjoy
- Best coffee pairing
- Milk compatibility notes
- Fast, focused decision UX

### About the Café
- Café image and descriptive text
- Embedded brewing process video
- Custom play / pause controls

### Energy Exchange & Promotions
- Infinite horizontal promo ribbon
- Promotional cards with detailed modals:
  - 25% off first order
  - Aura Points loyalty program
  - “3 coffees — dessert as a gift”
  - Join the team
  - Charity: clean water in Africa
  - Group meditation with orders
  - “Anti-vibration Wednesday” (silent café hours)

### Events
- Event cards with detailed descriptions:
  - Custom coffee roasting and tasting
  - Sound meditation with singing bowls
  - Coffee grounding rituals
  - Coffee fortune telling as art therapy

---

## 🎞 Animations & Interactions (Completed)

Animations are used selectively to enhance UX and atmosphere without overloading the interface or harming performance.

### GSAP-driven animations
- Hero section:
  - Breathing motion and subtle floating of the coffee cup
  - Soft glow effect
- Events section:
  - Light on / off transition
- Interactive elements:
  - Falling paper bag with coffee beans scatter
  - Sound bowl interaction with click-triggered glowing wave effect
- Menu:
  - Smooth entrance animations for product cards

### Non-GSAP animations
- Steam effect above the cup:
  - Implemented using PNG assets and CSS keyframes
  - GSAP intentionally avoided here for simplicity and performance

Animations are intentionally limited to support product logic and usability rather than visual spectacle.

---

## 🔐 Authentication & Account

- Login via phone number
- Verification step with 60-second countdown
- Ability to return and change phone number

After login:
- Personal account page
- Profile data (name, phone, email, birthday)
- Newsletter subscription
- Order history
- Personal offers
- Saved address and payment details
- Reusable modals for editing address and payment info
- Logout

---

## 🛒 Cart & Checkout

- Cart features:
  - Product preview
  - Quantity control
  - Item removal
  - Coffee configuration editing
- Upsell items:
  - Barista apron
  - Coffee beans pack
  - Birthday card with custom message
- Delivery option available from €25
- Saved address preview
- Checkout flow:
  - Authentication modal
  - Delivery modal
  - Success modal
- Order confirmation adapts based on:
  - Delivery order
  - In-café order
- Payment:
  - Card payment with validation
  - External payment options (Google Pay / PayPal)
  - Option to save payment details

---

## 🧠 Technical Highlights

- Reusable modal system
- Centralized and reusable validation logic
- Custom React hooks for logic separation
- Data-driven architecture
- LocalStorage persistence
- Responsive layout (mobile supported)
- Accessibility-first approach
- Lighthouse score: **100 / 100 / 100 / 100**

---

## 🧠 What This Project Demonstrates

- Product-oriented frontend thinking
- Complex modal orchestration with reusable logic
- Stateful product configuration
- Centralized form validation
- UX-driven cart and checkout flows
- Accessibility and focus management
- Performance optimization on production
- Clean component structure and separation of concerns

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

## 🛠 Tech Stack

- React
- Vite
- SCSS
- GSAP
- JavaScript (ES6+)

No UI libraries or component frameworks were used.

---

## 🚧 Project Status

Frontend architecture is stabilized and feature-complete.

Planned:
- Minor UI refinements
- Code quality improvements based on review feedback

Next step:
- Backend exploration to extend product logic (authentication, orders, data persistence)

---

This project was built as my first React application after approximately **1.5 months of working with React** and **6 months of frontend experience overall**.





