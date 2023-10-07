'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPertanyaan: {
        type: Sequelize.INTEGER
      },
      pertanyaan: {
        type: Sequelize.STRING
      },
      nomorInduk: {
        type: Sequelize.INTEGER
      },
      jawaban: {
        type: Sequelize.STRING
      },
      nilai: {
        type: Sequelize.INTEGER
      },
      idMatkul: {
        type: Sequelize.INTEGER
      },
      pertemuan: {
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
    await queryInterface.dropTable('Quizzes');
  }
};