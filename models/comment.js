
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connections');

class Comment extends Model { };

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
          },
          wishList_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'wishList',
              key: 'id'
            }
          },
          comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment
    