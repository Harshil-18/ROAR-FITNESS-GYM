const User = require("../../models/user-model");
const { Op } = require("sequelize");
const { successResponse, errorResponse } = require("../../utils/response.handler");

// Create User
const createUser = async (req, res) => {
  try {
    const { name, email, contact, query, feedback, ratings } = req.body;

    const user = await User.create({
      name,
      email,
      contact,
      query,
      feedback,
      ratings,
    });

    return successResponse(res, "User created successfully", user, 201);

  } catch (error) {
    return errorResponse(res, "Error creating user", error.message);
  }
};

const getUser = async (req, res) => {
  try {
    const { id, hasRatings } = req.query;

    if (id) {
      const user = await User.findByPk(id);
      if (!user) {
        return errorResponse(res, "User not found", null, 404);
      }
      return successResponse(res, "User information get successfully", user, 200);
    }

    const where = {};

    if (hasRatings === "true") {
      where.ratings = {
        [Op.and]: [{ [Op.not]: null }, { [Op.ne]: "" }],
      };
    }

    const result = await User.findAll({ where });
    return successResponse(res, "User information get successfully", result, 200);
  } catch (error) {
    return errorResponse(res, "Error fetching users", error.message);
  }
};

module.exports = { createUser, getUser };