import { User, Role } from "../Models/index.js";
import UserService from "../services/UserService.js";
import UserController from "../controllers/UserController.js";

const userService = new UserService(User, Role);
const userController = new UserController(userService);

export default userController;
