const { Model, DataTypes } = require('sequilize');
const sequelize = require('../config/config');

class Comments extends Model {}

Comments.init(
  {
    body:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableNames: true,
    underscored: true,
    modelname: 'Comment'
  }
);

module.exports = Comment