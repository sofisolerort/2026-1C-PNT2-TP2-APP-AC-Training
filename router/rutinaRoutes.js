import { Router } from "express";
import rutinaController from "../container/rutinaContainer.js";
import { authMiddleware } from "../middlewares/auth.js";

const rutinaRoutes = Router();

// Todas las rutas de rutinas requieren login
rutinaRoutes.get("/", authMiddleware, rutinaController.getAllRutinas);
rutinaRoutes.get("/mi-rutina", authMiddleware, rutinaController.getMiRutina);
rutinaRoutes.get("/:id", authMiddleware, rutinaController.getRutinaById);
rutinaRoutes.post("/", authMiddleware, rutinaController.createRutina);
rutinaRoutes.put("/:id", authMiddleware, rutinaController.updateRutina);
rutinaRoutes.delete("/:id", authMiddleware, rutinaController.deleteRutina);

export default rutinaRoutes;
