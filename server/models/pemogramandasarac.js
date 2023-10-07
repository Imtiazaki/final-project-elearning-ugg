'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PemogramanDasarAc extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PemogramanDasarAc.init({
    nomorInduk: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    role: DataTypes.STRING,
    nilaiUjian: DataTypes.INTEGER,
    nilaiTugas: DataTypes.INTEGER,
    nilaiUjianAkhir: DataTypes.INTEGER,
    grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PemogramanDasarAc',
  });
  return PemogramanDasarAc;
};