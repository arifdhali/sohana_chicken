import { DataTypes } from "sequelize";
import sequelize from "../config/Db.js";


const Chicks_delivered = sequelize.define(
    "chicks_delivered",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        delivery_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        farm_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "farms",
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        weight: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        timestamps: true,
        underscored: true,
    }
);


export default Chicks_delivered;