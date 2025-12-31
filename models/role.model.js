import { DataTypes } from "sequelize";
import sequelize from "../config/Db.js";

const Role = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.ENUM("admin", "user", "moderator"),
      allowNull: false,
      unique: true,
      defaultValue: "user",
    },
    permissions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

export default Role;
