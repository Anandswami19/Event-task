# 🎟 Event Booking System API

A backend RESTful API for managing events and bookings with user authentication and role-based access control.

Built using:

- Node.js
- Express.js
- MySQL
- JWT Authentication
- Rate Limiting
- Swagger Documentation

---

## 🚀 Features

### 🔐 User Management
- User Registration (Email must be unique)
- Secure Password Hashing using bcrypt
- Login with JWT Authentication
- Role-Based Access (Admin / User)
- Protected Routes using Middleware

### 🎟 Event Management
- Create Event (Admin Only)
- Update Event (Admin Only)
- Delete Event (Admin Only)
- List All Events
- Filter by Date Range
- Pagination Support

### 🎫 Booking System
- Book Event (Authenticated User)
- Real-time Seat Availability Check
- Automatic Seat Decrement
- Export Bookings as CSV

### 🛡 Security
- JWT Authentication
- Password Hashing
- Rate Limiting on Login
- Role-Based Authorization

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| Express.js | Backend Framework |
| MySQL | Relational Database |
| bcryptjs | Password Hashing |
| jsonwebtoken | JWT Authentication |
| express-rate-limit | Protect login endpoint |
| swagger-ui-express | API Documentation |
| csv-writer | Export bookings to CSV |

---

## 📁 Project Structure

```
event-booking-system/
│
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── eventController.js
│   └── bookingController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── rateLimiter.js
├── routes/
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   └── bookingRoutes.js
├── utils/
│   └── csvExport.js
├── app.js
├── server.js
├── .env
└── package.json
```

---

## 🗄 Database Schema

### Users Table

| Column | Type |
|--------|------|
| id | INT (PK) |
| name | VARCHAR |
| email | VARCHAR (Unique) |
| password | VARCHAR |
| role | ENUM(admin,user) |

### Events Table

| Column | Type |
|--------|------|
| id | INT (PK) |
| name | VARCHAR |
| date | DATE |
| capacity | INT |
| availableSeats | INT |

### Bookings Table

| Column | Type |
|--------|------|
| id | INT (PK) |
| user_id | INT (FK) |
| event_id | INT (FK) |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <repository_url>
cd event-booking-system
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create `.env` file:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=event_booking
JWT_SECRET=supersecretkey
```

### 4️⃣ Setup Database

```sql
CREATE DATABASE event_booking;
```

Import provided SQL schema.

### 5️⃣ Run Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register user |
| POST | /api/auth/login | Login & get JWT |

### 🎟 Event Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/events | Create event (Admin) |
| GET | /api/events | Get all events |
| PUT | /api/events/:id | Update event (Admin) |
| DELETE | /api/events/:id | Delete event (Admin) |

### 🎫 Booking Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/bookings/:id | Book event |
| GET | /api/bookings/export | Export bookings CSV |

---

## 🔐 Authentication

Protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

---

## 📊 Filtering & Pagination

### Filter by Date
```
GET /api/events?start=2026-01-01&end=2026-12-31
```

### Pagination
```
GET /api/events?page=1&limit=10
```

---

## 🧪 API Testing

- Postman Collection included
- Swagger UI available at:

```
http://localhost:5000/api-docs
```

---

## ⚡ Improvements (Future Scope)

- Transaction-safe booking (to prevent race conditions)
- Refresh Token Implementation
- Logging with Winston
- Docker Deployment
- CI/CD Integration

---

## 👨‍💻 Author

Anand Swami  
Software Developer (Node.js | Laravel | MySQL)

---

## 📜 License

This project is licensed under the ISC License.
