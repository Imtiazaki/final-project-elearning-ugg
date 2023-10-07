'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matkul extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matkul.init({
    idMatkul: DataTypes.STRING,
    namaMatkul: DataTypes.STRING,
    nomorInduk: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    kelompok: DataTypes.STRING,
    hari: DataTypes.STRING,
    waktu_mulai: DataTypes.STRING,
    waktu_selesai: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matkul',
  });
  return Matkul;
};