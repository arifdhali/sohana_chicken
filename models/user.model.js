import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const User = sequelize.define(
    "users",
    {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            defaultValue: null,
            allowNull: true,
        },
    
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "roles",
                key: "id",
            },
            onDelete: "RESTRICT",
            onUpdate: "CASCADE",
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false,
        }
    }, {
    timestamps: true,
    underscored: true,
}
)


export default User;