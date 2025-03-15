const UserModel = require("../models/userModel");

const registerUser = async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    return res.status(200).json({ message: newUser, success: true });
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  const { email, password: userPassword } = req.body;

  try {
    if (!email || !userPassword) {
      throw Error("fill all the creadentials");
    }

    const loggedInUser = await UserModel.findOne({ email });

    if (!loggedInUser) {
      throw Error("this email is not registered");
    }

    if (userPassword !== loggedInUser.password) {
      throw Error("Invalid creadentials");
    }

   

    const { password, ...other } = loggedInUser._doc;
    req.session.user = other;

    res.status(200).json({ message: other });
  } catch (error) {
    next(error);
  }
};

const logoutUser = async (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (!err) {
        res.clearCookie("thrift.sid");
        res.status(200).json({ message: "logged out" });
      } else {
        res.status(404).json({ message: "failed to logout" });
      }
    });
  } catch (error) {
    next(error);
  }
};





module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};