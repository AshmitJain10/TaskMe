import express from "express";
const router = express.Router();

router.post("/create", protectedRoute, isAdminRoute, createTask);
router.post("/duplicate/:id", protectedRoute, isAdminRoute, duplicateTask);
router.post("/activity/:id", protectedRoute, postTaskActivity);

export default router;
