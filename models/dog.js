'use strict';
var Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  var Dog = sequelize.define('Dog', {
    name: {
      type: Sequelize.STRING
  },
    color: {
      type: Sequelize.STRING
  }
);
  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};
