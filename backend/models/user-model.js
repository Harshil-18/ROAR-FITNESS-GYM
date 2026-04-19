const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },

    contact: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    query: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    feedback: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    ratings: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Users",
    timestamps: true, 
  }
);

module.exports = User;