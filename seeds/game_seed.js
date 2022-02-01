const { Game } = require('../models');

const gameData = [
    {
        gameName: 'tomb raider',
        gameImage: 'https://image.api.playstation.com/vulcan/img/cfn/11307GuAHH7iQiOD4izIk0LfwiEqxk8YuSh6_6z4bBNpNiakl7J0slnPcDaZ3MTFoT0bCw0D0iLyFrXhc8Au0FGTv80hw0wU.png',
        releaseDate: '2021-02-15',
        wishList_id: 1
    },
    {
        gameName: 'halo infinte',
        gameImage: 'https://cdn.vox-cdn.com/thumbor/G5Dm3cxi5ZEYtA6w1dEN5nubZ1U=/0x0:2240x1260/920x613/filters:focal(941x451:1299x809):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70383897/Halo_Infinite_audio_log_collectibles_guide.0.jpg',
        releaseDate: '2021-02-20',
        wishList_id: 2
    },
    {
        gameName: 'warzone',
        gameImage: 'https://cdn.charlieintel.com/wp-content/uploads/2022/01/26093844/Call-of-Duty-Warzone-2.jpg.webp',
        releaseDate: '2021-02-25',
        wishList_id: 3
    },
    {
        gameName: 'minecraft',
        gameImage: 'https://is3-ssl.mzstatic.com/image/thumb/Purple116/v4/d8/74/95/d87495c8-df3f-4e62-1982-f3fac9bd8601/AppIcon-0-0-1x_U007emarketing-0-0-0-9-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png',
        releaseDate: '2021-03-15',
        wishList_id: 4
    },
    {
        gameName: 'lego star wars',
        gameImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/920210/capsule_616x353.jpg?t=1643148138',
        releaseDate: '2021-03-20',
        wishList_id: 5
    },
    {
        gameName: 'monster hunter rise',
        gameImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/capsule_616x353.jpg?t=1643623908',
        releaseDate: '2022-01-12',
        wishList_id: 1
    },
    {
        gameName: 'The Anacrusis',
        gameImage: 'https://s3.gaming-cdn.com/images/products/9074/orig/the-anacrusis-early-access-pc-game-steam-cover.jpg',
        releaseDate: '2022-01-13',
        wishList_id: 2
    },
    {
        gameName: 'God of War',
        gameImage: 'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
        releaseDate: '2022-01-14',
        wishList_id: 3
    },
    {
        gameName: 'Nobody Saves the World',
        gameImage: 'https://img.xboxachievements.com/images/2022/01/18/icon/92bb0c9e32eaa1ab4c634ee5c0e3549a-l.png',
        releaseDate: '2022-01-18',
        wishList_id: 4
    },
    {
        gameName: 'Rainbow Six Extraction',
        gameImage: 'https://image.api.playstation.com/vulcan/ap/rnd/202105/1919/TQPQtelumFuvM4njKGjgJHQP.png',
        releaseDate: '2022-01-20',
        wishList_id: 5
    },
    {
        gameName: 'Windjammers 2',
        gameImage: 'https://images.nintendolife.com/0c26979b9a413/windjammers-2-cover.cover_large.jpg',
        releaseDate: '2022-01-20',
        wishList_id: 1
    },
    {
        gameName: 'Pupperazzi',
        gameImage: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1028350/capsule_616x353.jpg?t=1643127286',
        releaseDate: '2022-01-20',
        wishList_id: 2
    },
    {
        gameName: 'Not For Broadcast',
        gameImage: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Not_For_Broadcast_Key_Art.png',
        releaseDate: '2022-01-25',
        wishList_id: 3
    },
    {
        gameName: 'Pokemon Legends: Arceus',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-01-28',
        wishList_id: 4
    },
    {
        gameName: 'Uncharted: Legacy of Theives Collection',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-01-28',
        wishList_id: 5
    },
    {
        gameName: 'Life is Strange Remastered Collection',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-01',
        wishList_id: 1
    },
    {
        gameName: 'The Waylanders',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-02',
        wishList_id: 2
    },
    {
        gameName: 'Dyling Light 2 Stay Human',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-04',
        wishList_id: 3
    },
    {
        gameName: 'Sifu',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-08',
        wishList_id: 4
    },
    {
        gameName: 'OlliOlli World',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-08',
        wishList_id: 5
    },
    {
        gameName: 'Crossfire X',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-10',
        wishList_id: 1
    },
    {
        gameName: 'Know By Heart',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-10',
        wishList_id: 2
    },
    {
        gameName: 'Lost Ark',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-11',
        wishList_id: 3
    },
    {
        gameName: 'Dynasty Warriors 9 Empires',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-15',
        wishList_id: 4
    },
    {
        gameName: 'King of Fighters XV',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-17',
        wishList_id: 5
    },
    //
    {
        gameName: 'Total War: Warhammer III',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-17',
        wishList_id: 1
    },
    {
        gameName: 'Horizon Forbidden West',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-18',
        wishList_id: 2
    },
    {
        gameName: 'Destiny 2: The Witch Queen',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-22',
        wishList_id: 3
    },
    {
        gameName: 'Monark',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-22',
        wishList_id: 4
    },
    {
        gameName: 'Sol Cresta',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-22',
        wishList_id: 5
    },
    {
        gameName: 'Martha is Dead',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-24',
        wishList_id: 1
    },
    {
        gameName: 'Elden Ring',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-25',
        wishList_id: 2
    },
    {
        gameName: 'GRID Legends',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-02-25',
        wishList_id: 3
    },
    {
        gameName: 'Elex II',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-01',
        wishList_id: 4
    },
    {
        gameName: 'Babylons Fall',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-02',
        wishList_id: 5
    },
    {
        gameName: 'Gran Turismo 7',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-04',
        wishList_id: 1
    },
    {
        gameName: 'Triangle Strategy',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-04',
        wishList_id: 2
    },
    {
        gameName: 'Spellforce III Reforced',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-08',
        wishList_id: 3
    },
    {
        gameName: 'Chocobo GP',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-10',
        wishList_id: 4
    },
    {
        gameName: 'Assassins Creed Valhalla: Dawn of Ragnarok DLC',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-10',
        wishList_id: 5
    },
    {
        gameName: 'Distant Worlds',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-10',
        wishList_id: 1
    },
    {
        gameName: 'Tunic',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-16',
        wishList_id: 2
    },
    {
        gameName: 'The Settlers',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-17',
        wishList_id: 3
    },
    {
        gameName: 'Persona 4 Arena Ultimax',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-17',
        wishList_id: 4
    },
    {
        gameName: 'Stranger of Paradise Final Fantasy Origin',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-18',
        wishList_id: 5
    },
    {
        gameName: 'Rune Factory 5',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-22',
        wishList_id: 1
    },
    {
        gameName: 'Kirby and the Forgotten Land',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-25',
        wishList_id: 2
    },
    {
        gameName: 'Tiny Tina"s Wonderlands',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-25',
        wishList_id: 3
    },
    {
        gameName: 'Weird West',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-31',
        wishList_id: 4
    },
    {
        gameName: 'Starship Troopers: Terran Command',
        gameImage: 'https://picsum.photos/200',
        releaseDate: '2022-03-31',
        wishList_id: 5
    },
    //

]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;