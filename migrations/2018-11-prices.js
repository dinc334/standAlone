'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('prices', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      btc_price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      usd_price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      volume: {
        type: Sequelize.DOUBLE,
      },
      timestamp: {
        type: Sequelize.BIGINT,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('prices');
  }
};
