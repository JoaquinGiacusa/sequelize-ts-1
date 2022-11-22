import { Sequelize } from "sequelize-typescript";
import config from "../config/config.json";

const sequelize = new Sequelize(
  config.local.database,
  config.local.username,
  config.local.password,
  {
    host: config.local.host,
    dialect: "mysql",
  }
);

export default sequelize;
