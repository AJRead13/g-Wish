const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const wishListRoutes = require('./wishListRoutes');
const gameRoutes = require('./gameRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/wishlists', wishListRoutes);
router.use('./games', gameRoutes)

module.exports = router;
