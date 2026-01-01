import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const FeedDeliveries = sequelize.define(
    "feed_deliveries",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        feed_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "feeds",
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

        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0
        },
        delivery_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
    },
    {
        timestamps: true,
        underscored: true,
    }
)

export default FeedDeliveries;