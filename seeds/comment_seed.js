const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This game list is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing list!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to you"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "I can't wait for these games"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Great choices"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Interesting choices!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Good idea! I want these games too."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;