import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectedRoute = async (req, res, next) => {
  try {
    let token = req.cookies?.token;

    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const resp = await User.findById(decodedToken.userId).select(
        "isAdmin email"
      );

      req.user = {
        email: resp.email,
        isAdmin: resp.isAdmin,
        userId: decodedToken.userId,
      };
      next();
    } else {
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. Try Login Again!!" });
    }
  } catch (error) {
    console.log(error);
    return res.this
      .status(401)
      .json({ status: false, message: "Not authorized. Try login Again." });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not Authorized as Admin. Try Login as Admin.",
    });
  }
};

export { isAdminRoute, protectedRoute };
