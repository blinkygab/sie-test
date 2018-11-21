import React from 'react';
import { connect } from 'react-redux';
import CompaniesList from '../components/CompaniesList';

const mapStateToProps = state => ({
  companies: state.companies
});

export default connect(mapStateToProps)(CompaniesList);
