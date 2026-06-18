import { Router } from "express";
import userController from "../container/userContainer.js";
import { authMiddleware } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";

const userRoutes = Router();

// Rutas PÚBLICAS (no requieren login)
userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

// Ruta para cualquier logueado (ver datos propios)
userRoutes.get("/me", authMiddleware, userController.me);

// Rutas solo para TRAINER (roleId = 1)
userRoutes.get("/", authMiddleware, requireRole(1), userController.getAllUsers);
userRoutes.get(
  "/:id",
  authMiddleware,
  requireRole(1),
  userController.getUserById,
);

export default userRoutes;
