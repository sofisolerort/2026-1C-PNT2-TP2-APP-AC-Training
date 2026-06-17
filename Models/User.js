import { DataTypes, Model } from "sequelize";
import sequelize from "../connection/sequelize.js";
import bcrypt from "bcrypt";

class User extends Model {
  validatePassword = async (password) => {
    return await bcrypt.compare(password, this.password);
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    roleId: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
  },
  {
    sequelize,
    modelName: "User",
  },
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
});

export default User;
