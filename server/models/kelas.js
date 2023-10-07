'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kelas.init({
    pertemuan: DataTypes.INTEGER,
    idMatkul: DataTypes.INTEGER,
    absensi: DataTypes.BOOLEAN,
    quiz: DataTypes.BOOLEAN,
    forum: DataTypes.BOOLEAN,
    link: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Kelas',
  });
  return Kelas;
};