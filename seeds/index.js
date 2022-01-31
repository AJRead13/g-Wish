const seedWishList = require('./wishList_seed');
const seedUsers = require('./user_seed');
const seedComments = require('./comment_seed');
const seedGames = require('./game_seed')

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedWishList();
  console.log('\n----- WISH LISTS SEEDED -----\n');

  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');

  // await seedComments();
  // console.log('\n----- COMMENTS SEEDED -----\n');



  process.exit(0);
};

seedAll();