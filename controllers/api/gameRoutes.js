const router = require('express').Router();
const Game= require('../../models/game');
const withAuth = require('../../utils/auth');

// api/games

router.get('/', async (req, res) => {
    try {
      const gameData = await Game.findAll({
    
      });res.status(200).json(gameData)
  
    //   const wishLists = wishlistData.map((wishLists) => wishLists.get({ plain: true }));
  
  
    //   res.render('homepage', { 
    //     wishLists, 
    //     logged_in: req.session.logged_in 
    //   });
    } catch (err) {
      res.status(500).json(err);
    }
  });







module.exports = router;