import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const FarmLifting = sequelize.define(
    "farm_lifting",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        lifting_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
            onDelete: "CASCADE",
            onUpdate: "CASCADE"
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
        chicks_count: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        chicks_weight: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        rate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        paid_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },
        balance_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0
        },

    },
    {
        timestamps: true,
        underscored: true,
    }
);

export default FarmLifting;