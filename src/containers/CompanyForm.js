import React from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../actions/company';
import Field from '../components/Field';

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleField(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addCompany(this.state));
    this.clearForm();
  }

  clearForm() {
    document.querySelector('.company-form > form').reset();
  }

  render() {
    const { pathname } = this.props.location;
    if (pathname.indexOf('/details/') === 0) return null;

    return (
      <div className="company-form">
        <h3>Add Company</h3>
        <form onSubmit={this.handleSubmit}>
          <Field id="companyName" 
            onChange={this.handleField} 
            label="Name" 
            placeholder="Enter company name" 
            type="text" 
            required="required" />

          <Field id="companyAddress" 
            onChange={this.handleField} 
            label="Address" 
            placeholder="Enter company address" 
            type="text" 
            required="required" />

          <Field id="companyRevenue" 
            onChange={this.handleField} 
            label="Revenue" 
            placeholder="Enter company revenue" 
            type="number" 
            required="required" />

          <Field id="companyPhone" 
            onChange={this.handleField} 
            label="Phone" 
            placeholder="Enter company phone" 
            type="phone" 
            required="required" />

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default connect()(CompanyForm);
