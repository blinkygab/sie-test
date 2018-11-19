import { ADD_COMPANY } from './actionTypes';

export const addCompany = (payload) => ({
  type: ADD_COMPANY,
  payload: {
    ...payload,
    id: Date.now(),
  }
});
