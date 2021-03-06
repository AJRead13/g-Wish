const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class WishList extends Model { };

WishList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        // username: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // body: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'wishList'
    },
    
);

module.exports = WishList;