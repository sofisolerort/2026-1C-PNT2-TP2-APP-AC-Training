import express from "express";
import morgan from "morgan";
import sequelize from "./connection/sequelize.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

await sequelize.sync({ force: false });

app.listen(3000, () => {
  console.log(`🚀 Server corriendo en http://localhost:3000`);
});
