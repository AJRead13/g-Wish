const { WishList } = require('../models');

const wishListData = [
    {
        name: "WishList 1",
        body: "This is the body",
        user_id: "1"        
    },
    {
        name: "WishList 2",
        body: "This is the body",
        user_id: "2"        
    },
    {
        name: "WishList 3",
        body: "This is the body",
        user_id: "3"        
    },
    {
        name: "WishList 4",
        body: "This is the body",
        user_id: "4"        
    },
    {
        name: "WishList 5",
        body: "This is the body",
        user_id: "5"        
    },
]


const seedWishList = () => WishList.bulkCreate(wishListData);

module.exports = seedWishList;
