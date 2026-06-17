import { Router } from "express";
import userController from "../container/userContainer.js";
import { authMiddleware } from "../middlewares/auth.js";

const userRoutes = Router();

// Rutas PÚBLICAS (no requieren login)
userRoutes.post("/", userController.createUser);
userRoutes.post("/login", userController.login);

// Rutas PROTEGIDAS (requieren estar logueado)
userRoutes.get("/", authMiddleware, userController.getAllUsers);
userRoutes.get("/me", authMiddleware, userController.me);
userRoutes.get("/:id", authMiddleware, userController.getUserById);

export default userRoutes;
