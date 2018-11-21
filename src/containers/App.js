import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Companies from '../containers/Companies';
import CompanyForm from '../containers/CompanyForm';
import PersonForm from '../containers/PersonForm';
import CompanyDetails from '../containers/CompanyDetails';

class App extends React.Component {
  render() {
    const { companies } = this.props;
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <main className="main col-sm">
              {!companies ? null : <Route path="/" exact component={Companies} />}
              <Route path="/details/:companyId" component={CompanyDetails} />
            </main>
            <section className="forms-section col-sm">
              <Route component={CompanyForm} />
              <Route component={PersonForm} />
            </section>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  companies: state.companies
});

export default connect(mapStateToProps)(App);
