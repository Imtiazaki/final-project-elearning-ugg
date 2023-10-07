'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Kelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pertemuan: {
        type: Sequelize.INTEGER
      },
      idMatkul: {
        type: Sequelize.INTEGER
      },
      absensi: {
        type: Sequelize.BOOLEAN
      },
      quiz: {
        type: Sequelize.BOOLEAN
      },
      forum: {
        type: Sequelize.BOOLEAN
      },
      link: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Kelas');
  }
};