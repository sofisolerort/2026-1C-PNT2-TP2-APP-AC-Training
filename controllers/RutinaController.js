class RutinaController {
  constructor(rutinaService) {
    this.rutinaService = rutinaService;
  }

  getAllRutinas = async (req, res) => {
    try {
      const rutinas = await this.rutinaService.getAllRutinas();
      res.status(200).send({ success: true, message: rutinas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getRutinaById = async (req, res) => {
    try {
      const { id } = req.params;
      const rutina = await this.rutinaService.getRutinaById(id);
      res.status(200).send({ success: true, message: rutina });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  getMiRutina = async (req, res) => {
    try {
      const clienteId = req.user.id;
      const rutinas = await this.rutinaService.getRutinasByClienteId(clienteId);
      res.status(200).send({ success: true, message: rutinas });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  createRutina = async (req, res) => {
    try {
      const { nombre, descripcion, clienteId } = req.body;
      const trainerId = req.user.id;
      const rutina = await this.rutinaService.createRutina({
        nombre,
        descripcion,
        trainerId,
        clienteId,
      });
      res.status(200).send({ success: true, message: rutina });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  updateRutina = async (req, res) => {
    try {
      const { id } = req.params;
      const { nombre, descripcion, clienteId } = req.body;
      const result = await this.rutinaService.updateRutina({
        id,
        nombre,
        descripcion,
        clienteId,
      });
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };

  deleteRutina = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await this.rutinaService.deleteRutina(id);
      res.status(200).send({ success: true, message: result });
    } catch (error) {
      res.status(400).send({ success: false, message: error.message });
    }
  };
}

export default RutinaController;
