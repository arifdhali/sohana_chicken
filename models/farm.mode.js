
import { DataTypes } from "sequelize";
import sequelize from "../config/Db.js";



const Farms = sequelize.define(
    "farms",
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
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availablity_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    },
    {
        timestamps: true,
        underscored: true,
    }
);

export default Farms;