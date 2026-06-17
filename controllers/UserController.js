class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).send({ success: true, message: users });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {
      const { name, email, password, roleId } = req.body;
      const user = await this.userService.createUser({
        name,
        email,
        password,
        roleId,
      });
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await this.userService.login({ email, password });
      res.cookie("token", token);
      res.status(200).send({ success: true, message: "Login exitoso" });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  me = async (req, res) => {
    try {
      const user = req.user;
      res.status(200).send({ success: true, message: user });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default UserController;
