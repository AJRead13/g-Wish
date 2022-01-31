const router = require('express').Router();
const WishList = require('../models/wishList');
const User = require('../models/user')
// const { Wishlist, User } = require('../models');
const withAuth = require('../utils/auth');
const Game = require('../models/game');

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
    res.render('homepage', { games, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/wishlists', async (req, res) =>{
  try {
      const allWishLists = await WishList.findAll({
          include: [
              {
                  model: Game
              },
          ],
      });res.status(200).json(allWishLists);
      const wishlist = wishlistData.map((wishLists) => wishLists.get({ plain: true }));
      // const wishlist = allWishLists.get({ plain: true });

    res.render('wishlist', {
      ...wishlist,
      // logged_in: req.session.logged_in
    });
  } catch (error) {
      res.status(500).json(error)
  }
  });

router.get('/wishlist/:id', async (req, res) => {
  try {
    const wishlistData = await WishList.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Game,
      //   },
      // ],
    });
    console.log("test");
    const wishlist = wishlistData.get({ plain: true });
console.log("wishlist", wishlist);
    res.render('wishlist', {
      ...wishlist,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/wishlist');
    return;
  }

  res.render('login');
  return;
});

module.exports = router;
