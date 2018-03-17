'use strict';
module.exports = (sequelize, DataTypes) => {
  var fish = sequelize.define('fish', {
    name: DataTypes.
  }, {});
  fish.associate = function(models) {
    // associations can be defined here
  };
  return fish;
};