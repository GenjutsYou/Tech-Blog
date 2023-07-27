const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {individualHooks: true});
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);

    console.log('seed complete!');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
