'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('last-activity', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      address: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      transaction: {
        type: Sequelize.STRING,
        allowNull: false
      },
      timestamp: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('last-activity');
  }
};
