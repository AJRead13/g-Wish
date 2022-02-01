const { WishList } = require('../models');

const wishListData = [
    {
        username: "WishList 1",
        body: "This is the body",
        user_id: "1"        
    },
    {
        username: "WishList 2",
        body: "This is the body",
        user_id: "2"        
    },
    {
        username: "WishList 3",
        body: "This is the body",
        user_id: "3"        
    },
    {
        username: "WishList 4",
        body: "This is the body",
        user_id: "4"        
    },
    {
        username: "WishList 5",
        body: "This is the body",
        user_id: "5"        
    },
]


const seedWishList = () => WishList.bulkCreate(wishListData);

module.exports = seedWishList;
