import React from 'react';
import Person from '../components/Person';

const CompanyDetails = ({ companies, persons, match }) => {
  const { companyId } = match.params;
  // TODO: fix falsy check
  const company = companies && companies.find(c => c.id == companyId);
  const employees = persons.filter(p => p.companyId == companyId);
  const { address, revenue, phone } = company;

  return (
    (!company) ? null :
      <div className="company-details">
        <h3>{company.name}</h3>
        <div className="card company">
          <div className="card-body">
            <div>
              <strong>Address</strong><br />
              {address}
            </div>
            <div>
              <strong>Revenue</strong><br />
              {revenue}
            </div>
            <div>
              <strong>Phone</strong><br />
              {phone}
            </div>
            <div>
              <strong>Total Employees</strong><br />
              { employees.length }
            </div>
          </div>
        </div>
        
        {(!employees.length) ? null :
          <div className="card company">
            <div className="card-body">
              <h4>Employees</h4>
              {employees.map(person => 
                <Person key={person.id} {...person} />
              )}
            </div>
          </div>
        }
      </div>      
  )
}

export default CompanyDetails;