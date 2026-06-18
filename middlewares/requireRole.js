export const requireRole = (...allowedRoleIds) => {
  return (req, res, next) => {
    try {
      const userRoleId = req.user.roleId;

      if (!allowedRoleIds.includes(userRoleId)) {
        return res.status(403).send({
          success: false,
          message: "No tenés permisos para realizar esta acción",
        });
      }

      next();
    } catch (error) {
      res.status(403).send({
        success: false,
        message: "Error verificando permisos",
      });
    }
  };
};
