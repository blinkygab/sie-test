import {
  ADD_PERSON
} from '../actions/actionTypes';

const persons = (state = [], action) => {
  
  switch (action.type) {
    case ADD_PERSON:
      const { id, person } = action.payload;
      return [
        ...state,
        {
          id,
          name: `${person.name.first} ${person.name.last}`,
          address: `${person.location.street}, ${person.location.city} ${person.location.state} ${person.location.postcode}`,
          company: parseInt(action.payload.company),
          thumb: person.picture.thumb
        }
      ]
    default:
      return state;
  }
}

export default persons;
