import express from "express";
import { isAdminRoute, protectedRoute } from "../middlewares/authMiddleware.js";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// router.get("/get-admin", protectedRoute, isAdminRoute, getTeamList);
// router.get("/notifications", protectedRoute, getNotificationList);

// router.put("/profile", protectedRoute, updateUserProfile);
// router.put("/read-noti", protectedRoute, markNotificationRead);
// router.put("change-password", protectedRoute, changeUserPassword);

// // ADMIN ONLY ROUTES

// router
//   .route("/:id")
//   .put(protectedRoute, isAdminRoute, activateUserProfile)
//   .delete(protectedRoute, isAdminRoute, deleteUserProfile);

export default router;
