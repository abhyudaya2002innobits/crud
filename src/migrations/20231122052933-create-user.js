'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    console.log("migration 1")
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DataTypes.UUID,
      },
      UserName: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false, // Set allowNull to false to enforce non-null constraint
      },
      email: {
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
    // await queryInterface.dropTable('Users');
  }
};
