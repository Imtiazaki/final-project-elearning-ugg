'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Forums', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idForum: {
        type: Sequelize.INTEGER
      },
      nomorInduk: {
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      komentar: {
        type: Sequelize.STRING
      },
      profile: {
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
    await queryInterface.dropTable('Forums');
  }
};