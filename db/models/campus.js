'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  image: {
   type: Sequelize.STRING,
    isUrl: true
   }
})

module.exports = Campus;
