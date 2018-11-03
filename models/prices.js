"use strict";

module.exports = function(sequelize, DataTypes) {
  var Prices = sequelize.define('Prices', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    btc_price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    usd_price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    volume: {
      type: DataTypes.INTEGER,
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'prices', timestamps : false
  });

  return Prices;
};
