const { Model, DataTypes } = require('sequilize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableNames: true,
    underscored: true,
    modelname: 'Post'
  }
);

module.exports = Post;