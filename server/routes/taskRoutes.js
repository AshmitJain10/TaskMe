import express from "express";
import { isAdminRoute, protectedRoute } from "../middlewares/authMiddleware.js";
import {
  createTask,
  dashboardStatistics,
  duplicateTask,
  getTask,
  getTasks,
  postTaskActivity,
} from "../controllers/taskController.js";
const router = express.Router();

router.post("/create", protectedRoute, isAdminRoute, createTask);
router.post("/duplicate/:id", protectedRoute, isAdminRoute, duplicateTask);
router.post("/activity/:id", protectedRoute, postTaskActivity);

router.get("/dashboard", protectedRoute, dashboardStatistics);
router.get("/", protectedRoute, getTasks);
router.get("/:id", protectedRoute, getTask);

export default router;
