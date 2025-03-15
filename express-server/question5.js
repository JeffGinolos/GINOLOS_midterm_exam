const express = require("express");
const { Sequelize } = require("sequelize");
const User = require("./users");

// Initialize Sequelize (ensure database credentials are correct)
const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql", // Change this based on your database type (sqlite, postgres, etc.)
});

const app = express();
app.use(express.json());

// Ensure database connection
sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Database connection error:", err));

// Sync the model with the database
sequelize.sync()
  .then(() => console.log("Database synced successfully."))
  .catch((err) => console.error("Error syncing database:", err));

// Route to fetch all users
app.get("/users", async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));
