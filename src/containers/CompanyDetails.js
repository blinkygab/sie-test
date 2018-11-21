import React from 'react';
import { connect } from 'react-redux';
import CompanyDetails from '../components/CompanyDetails';

const mapStateToProps = state => ({
  companies: state.companies,
  persons: state.persons
});

export default connect(mapStateToProps)(CompanyDetails);
