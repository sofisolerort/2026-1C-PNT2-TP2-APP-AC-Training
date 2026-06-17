import { generateToken, verifyToken } from "../utils/jwt.js";

class UserService {
  constructor(user, role) {
    this.user = user;
    this.role = role;
  }

  getAllUsers = async () => {
    const users = await this.user.findAll({
      attributes: ["id", "name", "email", "roleId"],
      include: [
        {
          model: this.role,
          attributes: ["name"],
        },
      ],
    });
    return users;
  };

  getUserById = async (id) => {
    const user = await this.user.findOne({
      where: { id },
      attributes: ["id", "name", "email", "roleId"],
    });
    return user;
  };

  createUser = async ({ name, email, password, roleId }) => {
    const user = await this.user.create({
      name,
      email,
      password,
      roleId,
    });
    return user;
  };

  login = async ({ email, password }) => {
    const user = await this.user.findOne({
      where: { email },
      attributes: ["id", "name", "password", "roleId"],
    });
    if (!user) throw new Error("Usuario no encontrado");

    const validPassword = await user.validatePassword(password);
    if (!validPassword) throw new Error("Contraseña inválida");

    const payload = {
      id: user.id,
      name: user.name,
      roleId: user.roleId,
    };

    const token = generateToken(payload);
    return token;
  };

  me = async (token) => {
    const user = verifyToken(token);
    return user;
  };
}

export default UserService;
