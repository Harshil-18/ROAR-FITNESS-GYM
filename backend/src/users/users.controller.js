const User = require("../../models/user-model");
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
    const { id } = req.query;

    if (id) {
      const user = await User.findByPk(id);
      if (!user) {
        return errorResponse(res, "User not found", null, 404);
      }
      return successResponse(res, "User information get successfully", user, 200);
    }

    const result = await User.findAll();
    return successResponse(res, "User information get successfully", result, 200);
  } catch (error) {
    return errorResponse(res, "Error fetching users", error.message);
  }
};

module.exports = { createUser, getUser };