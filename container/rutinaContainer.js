import { Rutina, User } from "../Models/index.js";
import RutinaService from "../services/RutinaService.js";
import RutinaController from "../controllers/RutinaController.js";

const rutinaService = new RutinaService(Rutina, User);
const rutinaController = new RutinaController(rutinaService);

export default rutinaController;
