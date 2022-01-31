const router = require('express').Router();
// const WishList = require('../models/wishList');
// const User = require('../models/user')
// const { Wishlist, User } = require('../models');
const withAuth = require('../utils/auth');
// const Game = require('../models/game');
const { Game, User, WishList } = require('../models')

// get all games / homepage
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      // include: [
      //    {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    const games = gameData.map((games) => games.get({ plain: true }));
    return res.render('homepage', { games, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all wishlists / All Wishlists page
router.get('/wishlists', async (req, res) =>{
  try {
      const allWishLists = await WishList.findAll({
          include: [
              {
                  model: User,
                  attributes: ['username'],
              },
          ],
      });
      const wishlists = allWishLists.map((wishlists) => wishlists.get({ plain: true }));

      return res.render('allWishlists', {
        ...wishlists,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  })

// req.session.id
// Get one wishlist / Your Wishlist page
router.get('/wishlist/:id', async (req, res) => {
  try {
    const wishlistData = await WishList.findByPk(req.params.id, {
      include: [
        {
          model: Game,
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    return res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Possibly need this too
// Get one wishlist / Takes you to wishlist page of other user
router.get('/wishlists/:id', async (req, res) => {
  try {
    const wishlistData = await WishList.findByPk(req.params.id, {
      include: [
        {
          model: Game,
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    return res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
