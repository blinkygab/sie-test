import { ADD_PERSON } from './actionTypes';

export const addPerson = (payload) => ({
  type: ADD_PERSON,
  payload: {
    ...payload,
    id: Date.now(),
  }
});
