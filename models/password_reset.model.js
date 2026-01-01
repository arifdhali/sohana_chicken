// models/PasswordReset.js
import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const PasswordReset = sequelize.define(
    "password_resets",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
            onDelete: "CASCADE"
        },
        otp: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "00000"
        },
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expires_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        used: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: true,
        underscored: true
    }
);
export default PasswordReset;

