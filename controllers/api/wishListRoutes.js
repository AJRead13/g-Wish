const router = require('express').Router();
const { WishList, User } = require('../../models');
const withAuth = require('../../utils/auth');

// api/wishlists

router.post('/', async (req, res) => {
  try {
    const newWishList = await WishList.create({
      // ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newWishList);
    res.status(200).json(newWishList);

  } catch (err) {
    console.log("400 error");
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const updatedWishList = await WishList.update({
      ...req.body,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.session.id,
      },
    });

    res.status(200).json(updatedWishList);
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
