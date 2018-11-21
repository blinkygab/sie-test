import {
  ADD_PERSON
} from '../actions/actionTypes';

const persons = (state = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      const { id, name, address, companyId, thumb } = action.payload;
      return [
        ...state,
        {
          id,
          name,
          address,
          companyId,
          thumb
        }
      ]
    default:
      return state;
  }
}

export default persons;
