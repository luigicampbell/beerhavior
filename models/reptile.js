'use strict';
module.exports = (sequelize, DataTypes) => {
  var reptile = sequelize.define('reptile', {
    name: DataTypes.
  }, {});
  reptile.associate = function(models) {
    // associations can be defined here
  };
  return reptile;
};