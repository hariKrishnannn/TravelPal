# 🌍 TravelPal API

TravelPal is a Node.js and Express backend for managing **travel destinations, hotels, reviews, and user authentication**.  
It demonstrates advanced API features such as **geolocation search, role-based access control, file uploads, and secure authentication**.  

---

## ✨ Features

### 🗺️ Destinations
- CRUD operations (Create, Read, Update, Delete) with authentication & authorization  
- Upload destination photos  
- Geolocation search (find destinations within a radius of a zipcode)  
- Average hotel cost & traveler ratings per destination  

### 🏨 Hotels
- CRUD operations for hotels linked to destinations  
- Pagination, filtering, and advanced querying (e.g., by price, amenities, rating)  

### ⭐ Reviews
- CRUD operations for traveler reviews on destinations and hotels  
- Average ratings per destination  

### 👥 Users & Authentication
- JWT & cookie-based authentication  
- User roles: **Admin, Travel Agent, Traveler**  
- Secure password handling (hashing, reset tokens, reset by email)  
- Role-based access control (only owners/admins can edit/delete)  

### 🔒 Security
- Data sanitization (NoSQL injection, XSS)  
- Rate limiting  
- Helmet, CORS, etc.  

### 📖 Documentation
- Postman collections for API documentation  

---

## Installation
```bash
npm install
```

## Usage
### Development
```bash
npm run dev
```

### Production
```bash
npm run start
```

### Environment Variables
Create a `config/config.env` file and add:
```env
NODE_ENV=development
PORT=5000
```


## Scripts
- `npm run dev` → Run in development with nodemon
- `npm run start` → Run in production with cross-env


## 🛠 Tech Stack
- Node.js  
- Express  
- MongoDB

## 🔧 Dev Tools
- dotenv (environment variables)  
- nodemon (development auto-restart)  
- cross-env (cross-platform env variables)  


## License
This project is licensed under the MIT License.
