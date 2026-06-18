import { Router } from "express";
import rutinaController from "../container/rutinaContainer.js";
import { authMiddleware } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";

const rutinaRoutes = Router();

// Cualquier logueado puede pedir su rutina (clientes)
rutinaRoutes.get("/mi-rutina", authMiddleware, rutinaController.getMiRutina);

// Rutas solo para TRAINER (roleId = 1)
rutinaRoutes.get(
  "/",
  authMiddleware,
  requireRole(1),
  rutinaController.getAllRutinas,
);
rutinaRoutes.get(
  "/:id",
  authMiddleware,
  requireRole(1),
  rutinaController.getRutinaById,
);
rutinaRoutes.post(
  "/",
  authMiddleware,
  requireRole(1),
  rutinaController.createRutina,
);
rutinaRoutes.put(
  "/:id",
  authMiddleware,
  requireRole(1),
  rutinaController.updateRutina,
);
rutinaRoutes.delete(
  "/:id",
  authMiddleware,
  requireRole(1),
  rutinaController.deleteRutina,
);

export default rutinaRoutes;
