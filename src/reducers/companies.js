import {
  ADD_COMPANY
} from '../actions/actionTypes';

const companies = (state = [], action) => {
  switch (action.type) {
    case ADD_COMPANY:
      const company = action.payload;
      return [
        ...state,
        {
          id: company.id,
          name: company.companyName,
          address: company.companyAddress,
          revenue: company.companyRevenue,
          phone: company.companyPhone
        }
      ]
    default:
      return state;
  }
}

export default companies;
