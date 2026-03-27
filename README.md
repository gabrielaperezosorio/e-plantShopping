# 🌿 Paradise Nursery Shopping Application

This is a React + Redux shopping cart application built for a final project. The app simulates an online plant store where users can browse plants, add them to a cart, and manage their selections.

---

## 🚀 Features

- Browse a variety of houseplants
- Organized into multiple categories
- Add plants to cart
- Increase and decrease item quantities
- Remove items from cart
- Real-time cart updates
- Dynamic cart total calculation
- "Add to Cart" button disables after selection
- Continue shopping functionality
- Checkout button (future feature)

---

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux
- JavaScript
- CSS

---

## 📦 State Management

Redux is used to manage the cart state globally:

- `addItem` → Adds a product to the cart
- `removeItem` → Removes a product from the cart
- `updateQuantity` → Updates the quantity of an item

---

## 🖥️ Components

- `ProductList.jsx` → Displays all products and allows adding to cart
- `CartItem.jsx` → Displays cart items and manages quantity & removal
- `CartSlice.jsx` → Redux logic for cart state
- `App.jsx` → Main app layout
- `AboutUs.jsx` → Company information

---

## ▶️ How to Run

1. Install dependencies:
