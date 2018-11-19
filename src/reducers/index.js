import { combineReducers } from 'redux';
import companies from './companies';
import persons from './persons';

export default combineReducers({
  companies,
  persons
})
