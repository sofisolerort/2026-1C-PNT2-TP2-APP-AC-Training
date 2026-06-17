import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Rutina extends Model {}

Rutina.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trainerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Rutina",
  },
);

export default Rutina;
