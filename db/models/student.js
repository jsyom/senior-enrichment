'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Student = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
},{
  defaultScope: {
    attributes: {
      include: ['campusId'],
    },
  },
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('campus')
      }]
    })
  }
})

module.exports = Student;
