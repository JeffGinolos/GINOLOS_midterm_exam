const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("your_database", "your_username", "your_password", {
    host: "localhost",
    dialect: "mysql"
});

// Test the connection
sequelize.authenticate()
    .then(() => console.log("Database connected..."))
    .catch(err => console.log("Error: " + err));

module.exports = sequelize;
