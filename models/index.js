const User = require('./user');
const WishList = require('./wishList');
const Comment = require('./comment');
const Game = require('./game')
// const sequelize = require('../config/connections');

User.hasOne(WishList, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

WishList.belongsTo(User, {
    foreignKey: 'user_id'
});

WishList.hasMany(Comment, {
    foreignKey: 'wishList_id'
});

WishList.hasMany(Game, {
    foreignKey: 'wishList_id'
});

Game.belongsTo(WishList, {
    foreignKey: 'game_id'
});

Comment.belongsTo(WishList, {
    foreignKey: 'wishList_id'
});

Game.hasMany(WishList, {
    foreignKey: 'game_id'
});


module.exports = {User, WishList, Comment, Game};