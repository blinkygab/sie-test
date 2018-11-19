import React from 'react';
import { connect } from 'react-redux';
import Company from '../components/Company';

class CompanyDetails extends React.Component {

  render() {
    const { companies, persons } = this.props;
    const { companyId } = this.props.match.params;

    // TODO: fix falsy check
    const company = companies && companies.find(c => c.id == companyId);
    const employees = persons.filter(p => p.company == companyId);

    return (
      (!company) ? null :
        <div className="company-details">
          <h3>{company.name}</h3>
          <Company {...company} {...this.props} /><br />
          {employees.map(e => 
            <Company key={e.id} {...e} {...this.props} />
          )}
        </div>      
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies,
  persons: state.persons
});

export default connect(mapStateToProps)(CompanyDetails);
