# TravelPal – Learning Notes

These are my personal notes while building the TravelPal project.  
They summarize what I learned, issues faced, and improvements I plan to add.

## 📌 What I Learned

- Setting up an Express.js server with `dotenv` and `nodemon`.
- Using `app.use()` to mount routers for modular route handling.
- Creating modular routes with `express.Router()` for destinations.
- Implementing controllers to separate business logic from routes.
- Understanding basic CRUD operations for API endpoints.
- Sending JSON responses with `res.status().json()`.
- Using custom middlewares and also 3rd party midddleware like morgan for logging purpose.
- morgan hooks into the response lifecycle, so it logs after the controller runs, because it attaches a listener to res.on('finish').
- Connecting the app to MongoDB using mongoose.
- Using environment variables (process.env.MONGO_URI) to store sensitive data like DB credentials.
- Handling unhandled promise rejections gracefully to prevent app crashes.

## 🛠️ Challenges I Faced

- Configuring `cross-env` for different environments on Windows.
- Managing route conflicts and keeping project structure clean.