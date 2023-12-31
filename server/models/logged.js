'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logged extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Logged.init({
    nomorInduk: DataTypes.INTEGER,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Logged',
  });
  return Logged;
};