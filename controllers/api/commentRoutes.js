const router = require('express').Router();
const { Comment, User } = require('../../models');
const auth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const allComments = await Comment.findAll({
        });
        res.status(200).json(allComments);
    } catch (err) {
        res.status(500).json(err);        
    }
});

router.get('/:id', async (req, res) => {
    try {
        const oneComment = await Comment.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ["user_name"]
                }],
        });
        res.status(200).json(oneComment);
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;