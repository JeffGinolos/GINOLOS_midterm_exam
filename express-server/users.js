const { Sequelize, DataTypes } = require("sequelize");

// Initialize Sequelize (make sure the database credentials are correct)
const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql", // or 'sqlite', 'postgres', etc.
});

// Define the User model
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;
