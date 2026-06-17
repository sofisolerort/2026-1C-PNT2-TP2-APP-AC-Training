class RutinaService {
  constructor(rutina, user) {
    this.rutina = rutina;
    this.user = user;
  }

  getAllRutinas = async () => {
    const rutinas = await this.rutina.findAll({
      include: [
        {
          model: this.user,
          as: "trainer",
          attributes: ["id", "name", "email"],
        },
        {
          model: this.user,
          as: "cliente",
          attributes: ["id", "name", "email"],
        },
      ],
    });
    return rutinas;
  };

  getRutinaById = async (id) => {
    const rutina = await this.rutina.findOne({
      where: { id },
      include: [
        {
          model: this.user,
          as: "trainer",
          attributes: ["id", "name", "email"],
        },
        {
          model: this.user,
          as: "cliente",
          attributes: ["id", "name", "email"],
        },
      ],
    });
    if (!rutina) throw new Error("Rutina no encontrada");
    return rutina;
  };

  getRutinasByClienteId = async (clienteId) => {
    const rutinas = await this.rutina.findAll({
      where: { clienteId },
      include: [
        {
          model: this.user,
          as: "trainer",
          attributes: ["id", "name", "email"],
        },
      ],
    });
    return rutinas;
  };

  createRutina = async ({ nombre, descripcion, trainerId, clienteId }) => {
    const rutina = await this.rutina.create({
      nombre,
      descripcion,
      trainerId,
      clienteId,
    });
    return rutina;
  };

  updateRutina = async ({ id, nombre, descripcion, clienteId }) => {
    const rutina = await this.rutina.findOne({ where: { id } });
    if (!rutina) throw new Error("Rutina no encontrada");

    await this.rutina.update(
      { nombre, descripcion, clienteId },
      { where: { id } },
    );
    return { message: "Rutina actualizada correctamente" };
  };

  deleteRutina = async (id) => {
    const rutina = await this.rutina.findOne({ where: { id } });
    if (!rutina) throw new Error("Rutina no encontrada");

    await this.rutina.destroy({ where: { id } });
    return { message: "Rutina eliminada correctamente" };
  };
}

export default RutinaService;
