import express from "express";
import { isAdminRoute, protectedRoute } from "../middlewares/authMiddleware.js";
import { createTask } from "../controllers/taskController.js";
const router = express.Router();

router.post("/create", protectedRoute, isAdminRoute, createTask);
// router.post("/duplicate/:id", protectedRoute, isAdminRoute, duplicateTask);
// router.post("/activity/:id", protectedRoute, postTaskActivity);

export default router;
