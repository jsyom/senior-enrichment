'use strict';
import axios from 'axios';

export const FETCH_STUDENT = 'FETCH_STUDENT';
export const FETCH_SINGLE_STUDENT = 'FETCH_SINGLE_STUDENT'
export const CREATE_STUDENT = 'CREATE_STUDENT';
export const FETCH_CAMPUS = 'FETCH_CAMPUS';
export const CREATE_CAMPUS = 'CREATE_CAMPUS';
export const FETCH_SINGLE_CAMPUS = 'FETCH_SINGLE_CAMPUS';
export const DELETE_STUDENT = 'DELETE_STUDENT';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';


export function fetchStudent () {
  const request = axios.get('/api/students')
  return {
    type: FETCH_STUDENT,
    payload: request
  }
}

export function createStudent (props) {
  const id =  console.log("~~~~~~~~", this.props)
  const request = axios.post(`/api/campuses/${props.campus}/students`, props)
  return {
    type: CREATE_STUDENT,
    payload: request
  }
}

export function fetchCampus () {
  const request = axios.get('/api/campuses')
  return {
    type: FETCH_CAMPUS,
    payload: request
  }
}

export function createCampus (props) {
  const request = axios.post('/api/campuses', props)
  return {
    type: CREATE_CAMPUS,
    payload: request
  }
}

export function fetchSingleCampus (id) {
  const request = axios.get(`/api/campuses/${id}`)
  return {
    type: FETCH_SINGLE_CAMPUS,
    payload: request
  }
}

export function fetchSingleStudent(id) {
  const request = axios.get(`/api/students/${id}`)
  return {
    type: FETCH_SINGLE_STUDENT,
    payload: request
  }
}

export function deleteStudent(id){
  request = axios.delete(`/api/students/${id}`)
  return {
    type: DELETE_STUDENT,
    request
  };
}

export function deleteCampus(id){
  request = axios.delete(`/api/campuses/${id}`)
  return {
    type: DELETE_CAMPUS,
    request
  }
}
