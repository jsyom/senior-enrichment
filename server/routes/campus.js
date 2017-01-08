const api = require('express').Router()
const Campus = require('../../db/models').Campus;
const Student = require('../../db/models').Student;

api.get('/', (req, res, next) => {
  Campus.findAll()
    .then(foundCampuses => {
      res.send(foundCampuses)
    })
    .catch(next)
});

api.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(foundCampus => {
      res.send(foundCampus)
    })
    .catch(next)
});


api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(newCreatedCampus => {
      res.status(201).json(newCreatedCampus)
    })
    .catch(next)
});

api.post('/:campusId/students', (req, res, next) => {
  Student.create(req.body)
    .then(createdStudent => {
      return createdStudent.setCampus(+req.params.campusId)
    })
    .then(newStudent => {
      res.status(201).json(newStudent)
    })
    .catch(next)
});

api.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: {
      id: req.params.campusId
    },
    returning: true
  })
  .then(data => data[1])
  .then(updatedCampus => {
    res.send(updatedCampus)
  })
  .catch(next)
});



api.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {
      id: req.params.campusId
    }
  })
    .then(destroyedCampus => {
      if (!destroyedCampus) {
        res.send('Did Not Destory')
      } else {
        res.send('DESTROYED!!!')
      }
    })
    .catch(next)
});

module.exports = api;
