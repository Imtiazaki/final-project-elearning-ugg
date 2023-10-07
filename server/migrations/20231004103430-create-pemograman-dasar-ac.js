'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PemogramanDasarAcs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomorInduk: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      nilaiUjian: {
        type: Sequelize.INTEGER
      },
      nilaiTugas: {
        type: Sequelize.INTEGER
      },
      nilaiUjianAkhir: {
        type: Sequelize.INTEGER
      },
      grade: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PemogramanDasarAcs');
  }
};