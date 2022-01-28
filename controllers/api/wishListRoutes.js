const router = require('express').Router();
const { WishList, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) =>{
try {
    const allWishLists = await WishList.findAll({
        include: [
            {
                model: User,
                attributes: ['user_name'],
            },
        ],
    });res.status(200).json(allWishLists);
    
} catch (error) {
    res.status(500).json(error)
}
})


router.post('/', withAuth, async (req, res) => {
  try {
    const newWishList = await WishList.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWishList);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const wishlistData = await WishList.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!wishlistData) {
      res.status(404).json({ message: 'No Wish List found with this id!' });
      return;
    }

    res.status(200).json(wishlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
