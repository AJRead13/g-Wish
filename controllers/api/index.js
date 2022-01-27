const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const wishListRoutes = require('./wishListRoutes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/wishlists', wishListRoutes);

module.exports = router;
