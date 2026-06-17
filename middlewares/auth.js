import { verifyToken } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "No autorizado: falta el token",
      });
    }

    const decoded = verifyToken(token);
    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Token inválido o expirado",
    });
  }
};
