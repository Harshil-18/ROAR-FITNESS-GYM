const jwt = require("jsonwebtoken");

// Dummy login (for now)
const login = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login error",
      error: error.message,
    });
  }
};

module.exports = { login };