import { DataTypes } from "sequelize";
import sequelize from "../config/Db.js";

const Feed = sequelize.define(
    "feeds",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        feed_type: {
            type: DataTypes.ENUM("small", "medium", "large"),
            allowNull: false,
            defaultValue: "small"
        },
        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        timestamps: true,
        underscored: true,
    }
);

export default Feed;