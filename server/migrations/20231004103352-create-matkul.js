'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Matkuls', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idMatkul: {
        type: Sequelize.STRING
      },
      namaMatkul: {
        type: Sequelize.STRING
      },
      nomorInduk: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      kelompok: {
        type: Sequelize.STRING
      },
      hari: {
        type: Sequelize.STRING
      },
      waktu_mulai: {
        type: Sequelize.STRING
      },
      waktu_selesai: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Matkuls');
  }
};