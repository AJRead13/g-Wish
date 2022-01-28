const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connections');

class Game extends Model { };

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        gameName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gameImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        wishList_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "wishList",
                key: "id"
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
    
)

module.exports = Game