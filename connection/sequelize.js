import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: false,
        trustServerCertificate: true,
      },
    },
    logging: false,
  },
);

try {
  await sequelize.authenticate();
  console.log("Conexión a SQL Server establecida correctamente.");
} catch (error) {
  console.error("No se pudo conectar a la base:", error);
}

export default sequelize;
