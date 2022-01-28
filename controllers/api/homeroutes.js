const router = require('express').Router();
const WishList = require('../../models/wishlist');
const User = require('../../models/user')
// const { Wishlist, User } = require('../models');
const withAuth = require('../utils/auth');
const Game = require('./gameRoutes');

router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll({
      // include: [
      //   {
      //     model: User,
      //     attributes: ['name'],
      //   },
      // ],
    });

    const games = gameData.map((games) => games.get({ plain: true }));
    res.render('homepage', { games, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/wishlist', async (req, res) => {
  try {
    const wishlistData = await WishList.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const wishlist = wishlistData.get({ plain: true });

    res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
