const { Post } = require('../models');

const postData = [
  {
    title: 'Elon Musk',
    post_content: 'What a stinker.',
    user_id: 1,
  },
  {
    title: 'Snowden',
    post_content: 'Man is still a whistleblowing machine!',
    user_id: 2,
  },
  {
    title: 'Amazon stocks plummet',
    post_content:
      'I hope Bezos is not wasting all his money on his trips to space.',
    user_id: 3,
  },
  {
    title: 'Real mice to control computers?',
    post_content: 'Has science gone too far?',
    user_id: 4,
  },
  {
    title: 'How often should I empty my trash folder?',
    post_content:
      'Can i just leave files there or should i be dumping it randomly?',
    user_id: 5,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
