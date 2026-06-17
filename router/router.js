import { Router } from "express";
import userRoutes from "./userRoutes.js";
import rutinaRoutes from "./rutinaRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/rutinas", rutinaRoutes);

export default router;
