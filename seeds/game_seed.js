const { Game } = require('../models');

const gameData = [
    {
        gameName: 'tomb raider',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2021-02-15',
        wishList_id: 1
    },
    {
        gameName: 'halo infinte',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2021-02-20',
        wishList_id: 2
    },
    {
        gameName: 'warzone',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2021-02-25',
        wishList_id: 3
    },
    {
        gameName: 'minecraft',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2021-03-15',
        wishList_id: 4
    },
    {
        gameName: 'lego star wars',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2021-03-20',
        wishList_id: 5
    },
]

const seedGmaes = () => Game.bulkCreate(gameData);

module.exports = seedGames;