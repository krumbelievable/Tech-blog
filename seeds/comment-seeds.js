const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 3,
    comment_text: 'I should buy now!',
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: 'Buying his car made my hair fall out.',
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: 'He can blow my whistle anytime',
  },
  {
    user_id: 4,
    post_id: 5,
    comment_text: 'Please someone answer this.',
  },
  {
    user_id: 5,
    post_id: 4,
    comment_text: 'Finally a use to all of my rodents',
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
