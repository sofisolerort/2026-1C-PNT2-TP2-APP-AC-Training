import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import sequelize from "./connection/sequelize.js";
import "./Models/index.js";
import router from "./router/router.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

await sequelize.sync({ force: false });

app.use(router);

app.listen(3000, () => {
  console.log(`🚀 Server corriendo en http://localhost:3000`);
});
