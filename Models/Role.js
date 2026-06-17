import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";

class Role extends Model {}

Role.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: "Role",
  },
);

export default Role;
