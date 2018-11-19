import React from 'react';
import { connect } from 'react-redux';
import Company from '../components/Company';

class Companies extends React.Component {

  render() {
    const { companies } = this.props;

    return (
      <div className="companies-list">
        <h3>Companies</h3>

        {!companies.length ? <div>There are currently no companies to review.</div> :
          companies.map(c =>
            <Company key={c.id} {...c} {...this.props} />
          )
        }
      </div>    
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
});

export default connect(mapStateToProps)(Companies);
