import React from 'react';
import Company from '../components/Company';

const CompaniesList = ({ companies }) => {
  return (
    <div className="companies-list">
      <h3>Companies</h3>
      {!companies.length ? <div>There are currently no companies to review.</div> :
        companies.map(c => 
          <Company key={c.id} {...c} />
        )
      }
    </div>    
  )
}
export default CompaniesList;
