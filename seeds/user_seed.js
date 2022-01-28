const { User } = require('../models');

const userData = [
    {
        username: "John1",
        email: "test10@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "John2",
        email: "test20@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "John3",
        email: "test30@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "John4",
        email: "test40@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "John5",
        email: "test50@gmail.com",
        password: "p@ssword5"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;