import User from "../models/user.js";
import { createJWT } from "../utils/index.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, passowrd, isAdmin, role, title } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res
        .status(400)
        .json({ status: false, message: "User Already Exists" });
    }

    const user = await User.create({
      name,
      email,
      passowrd,
      isAdmin,
      role,
      title,
    });

    if (user) {
      isAdmin ? createJWT(res, user._id) : null;
      user.password = undefined;
      res.status(201).json(user);
    } else {
      return res
        .status(400)
        .json({ status: false, message: "Invalid User Data" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid user data" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid email or password" });
    }

    if (!user?.isActive) {
      return res.status(401).json({
        status: false,
        message: "User Account has been deactivated, contact the administrator",
      });
    }

    const isMatch = await user.matchPassword(password);

    if (user && isMatch) {
      createJWT(res, user._id);

      user.password = undefined;

      res.status(200).json(user);
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Invalid email or password" });
    }
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid user data" });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: "Logput Successful" });
  } catch (error) {
    return res
      .status(400)
      .json({ status: false, message: "Invalid user data" });
  }
};

// export const registerUser = async (req, res) => {
//   try {
//   } catch (error) {
//     return res
//       .status(400)
//       .json({ status: false, message: "Invalid user data" });
//   }
// };
