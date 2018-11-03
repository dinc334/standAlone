"use strict";

module.exports = function(sequelize, DataTypes) {
  var LastActivity = sequelize.define('LastActivity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING,
      unique:  true,
      allowNull: false
    },
    transaction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    tableName: 'last-activity', timestamps : false
  });

  return LastActivity;
};
