'use strict';
const api = require('express').Router()
const Student = require('../../db/models').Student;
const Campus = require('../../db/models').Campus

api.get('/', (req, res, next) => {
  Student.findAll()
    .then(foundStudents => {
      res.send(foundStudents)
    })
    .catch(next)
});

api.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
    .then(foundStudent => {
      res.send(foundStudent)
    })
    .catch(next)
});

api.post('/', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => {
      return createdStudent.setCampus(+req.params.id)
    })
    .then(newStudent => {
      res.status(201).json(newStudent)
    })
    .catch(next)
});


api.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where: {
      id: req.params.studentId
    },
    returning: true
  })
  .then(data => data[1])
  .then(updatedStudent => {
    res.send(updatedStudent)
  })
  .catch(next)
});

api.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {
      id: req.params.studentId
    }
  })
    .then(deletedStudent => {
      console.log('Deleted!')
    })
    .catch(next)
});


module.exports = api
