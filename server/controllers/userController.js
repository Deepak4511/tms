import asyncHandler from "express-async-handler";

// POST Request to login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await user.findOne({ email });

  if (!user) {
    return res.status(401).json({
      status: "false",
      message: "Invalid email or password",
    });
  }

  if (user?.isActive) {
    return res.status(401).json({
      status: "false",
      message: "Your account is deactivated, Contact the administration",
    });
  }

  const isPasswordMatch = await user.matchPassword(password);

  if (user && isPasswordMatch) {
    createJWT(res, user._id);

    user.password = undefined;

    res.status(200).json(user);
  } else {
    return res.status(401).json({
      status: "false",
      message: "Invalid email or password",
    });
  }
});

// Register a new User

module.exports = {
  loginUser,
};
