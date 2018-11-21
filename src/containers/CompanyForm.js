import React from 'react';
import { connect } from 'react-redux';
import { addCompany } from '../actions/company';

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleField = this.handleField.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleField(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleKeyDown(e) {
    // handle ENTER KEY
    if (e.which === 13) {
      this.handleSubmit();
    }
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
          <div className="form-group">
            <label htmlFor="companyName">Name</label>
            <input className="form-control" id="companyName" onChange={this.handleField} placeholder="Enter company name" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyAddress">Address</label>
            <input className="form-control" id="companyAddress" onChange={this.handleField} placeholder="Enter address" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyRevenue">Revenue</label>
            <input className="form-control" id="companyRevenue" onChange={this.handleField} placeholder="Enter revenue" type="text" required />
          </div>
          <div className="form-group">
            <label htmlFor="companyPhone">Phone</label>
            <input className="form-control" id="companyPhone" onChange={this.handleField} onKeyDown={this.handleKeyDown}  placeholder="Enter phone" type="text" required />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

export default connect()(CompanyForm);
