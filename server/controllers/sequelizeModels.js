// const { sequelize } = require('../../db');
// const { DataTypes } = require('sequelize');

// const User = sequelize.define('User', {
//   username: { type: DataTypes.STRING, unique: true, allowNull: false },
//   email: { type: DataTypes.STRING, unique: true, allowNull: false },
//   password_hash: { type: DataTypes.STRING, allowNull: false },
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
// });

// const Category = sequelize.define('Category', {
//   name: { type: DataTypes.STRING, unique: true, allowNull: false }
// });

// const Recipe = sequelize.define('Recipe', {
//   title: { type: DataTypes.STRING, allowNull: false },
//   description: { type: DataTypes.TEXT },
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
// });

// const Comment = sequelize.define('Comment', {
//   comment_text: { type: DataTypes.TEXT, allowNull: false },
//   created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
// });

// const Rating = sequelize.define('Rating', {
//   rating: { type: DataTypes.INTEGER, allowNull: false }
// });

// // Relationships
// User.hasMany(Recipe, { foreignKey: 'user_id' });
// Recipe.belongsTo(User, { foreignKey: 'user_id' });

// Recipe.hasMany(Comment, { foreignKey: 'recipe_id' });
// Comment.belongsTo(Recipe, { foreignKey: 'recipe_id' });

// Recipe.hasMany(Rating, { foreignKey: 'recipe_id' });
// Rating.belongsTo(Recipe, { foreignKey: 'recipe_id' });

// Category.hasMany(Recipe, { foreignKey: 'category_id' });
// Recipe.belongsTo(Category, { foreignKey: 'category_id' });

// User.belongsToMany(User, { as: 'Followers', through: 'Followers', foreignKey: 'follower_id', otherKey: 'followed_id' });

// module.exports = {
//   User,
//   Category,
//   Recipe,
//   Comment,
//   Rating
// };
