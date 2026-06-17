import User from "./User.js";
import Role from "./Role.js";
import Rutina from "./Rutina.js";

// Relación User ↔ Role
Role.hasMany(User, {
  foreignKey: "roleId",
});
User.belongsTo(Role, {
  foreignKey: "roleId",
});

// Relación User (trainer) ↔ Rutina
User.hasMany(Rutina, {
  foreignKey: "trainerId",
  as: "rutinasCreadas",
});
Rutina.belongsTo(User, {
  foreignKey: "trainerId",
  as: "trainer",
});

// Relación User (cliente) ↔ Rutina
User.hasMany(Rutina, {
  foreignKey: "clienteId",
  as: "rutinasAsignadas",
});
Rutina.belongsTo(User, {
  foreignKey: "clienteId",
  as: "cliente",
});

export { User, Role, Rutina };
