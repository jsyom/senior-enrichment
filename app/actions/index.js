'use strict';
import axios from 'axios';

export const CREATE_STUDENT = 'CREATE_STUDENT';
export const FETCH_STUDENT = 'FETCH_STUDENT';
export const CREATE_CAMPUS = 'CREATE_CAMPUS';
export const FETCH_CAMPUS = 'FETCH_CAMPUS';

export function fetchStudent () {
  const request = axios.get('/api/students')
  return {
    type: FETCH_STUDENT,
    payload: request
  }
}

export function createStudent () {
  const request = axios.post('/api/students')
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
