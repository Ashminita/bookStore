# 📚 BookStore Website (MERN Stack)

A fully responsive BookStore website built using the **MERN Stack (MongoDB, Express, React, Node.js)**. The application allows users to browse available books, log in or register, add books to their cart, and explore course-related materials. Admin users can also manage book-related data via the backend.

---

## 🔍 Features

- 🖼️ Banner, Cards, and Course UI components for an engaging experience
- 🔐 User Authentication (Login, Signup, Logout) using JWT
- 📚 Explore books and courses
- 🛒 Add books to cart
- 📦 Backend integration with MongoDB for storing book and user data
- ⚙️ Admin features to manage books
- 🧾 Component-based React frontend with reusable UI blocks

---

## ⚙️ Tech Stack

- **Frontend:** React, JSX, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Version Control:** Git, GitHub

---

## 👩‍💻 My Contributions

- Developed the complete frontend in React
- Created protected routes and implemented JWT-based login/signup
- Designed MongoDB schema for books and users
- Built RESTful APIs using Express.js
- Integrated frontend with backend APIs using Axios

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Ashminita/bookStore.git
cd bookStore
```
### 2. Backend Setup
```bash
cd Backend
npm install
```

Create a .env file inside the Backend folder with the following:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```
Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm run dev
```
