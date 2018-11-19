import React from 'react';
import { connect } from 'react-redux';
import { addPerson } from '../actions/person';

const USERS_API = 'https://randomuser.me/api/?nat=us&inc=name,location,picture';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      person: null
    }
  }

  componentDidMount() {
    this.fetchRandomUser();
  }

  fetchRandomUser() {
    fetch(USERS_API)
      .then(response => response.json())
      .then(data => this.setState({ person: data.results[0] }))
      .catch(e => this.setState({ person: {"name":{"title":"mr","first":"salvador","last":"wells"},"location":{"street":"3222 nowlin rd","city":"jersey city","state":"connecticut","postcode":23545,"coordinates":{"latitude":"88.2617","longitude":"-154.7046"},"timezone":{"offset":"-11:00","description":"Midway Island, Samoa"}},"picture":{"large":"https://randomuser.me/api/portraits/men/17.jpg","medium":"https://randomuser.me/api/portraits/med/men/17.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/17.jpg"}} }));
  }

  handleDropdown(e) {
    this.setState({ company: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(addPerson(this.state));
    this.fetchRandomUser();
  }

  render() {
    const { companies } = this.props;
    const { person } = this.state;
    
    if (!companies.length) return null;

    return (
      <div className="person-form">
        <h3>Add Person</h3>
        {!person ? null : (
          <div className="person-form-info clear-float">
            <img src={person.picture.thumbnail} className="person-form-thumb float-left" alt={person.name.first} />
            {person.name.first} {person.name.last}<br />
            {person.location.street}
          </div>
        )}
        <form onSubmit={this.handleSubmit} className="float-none">
          <div className="form-group">
            <label htmlFor="personCompany">Company</label>
            <select onChange={this.handleDropdown} className="form-control" id="personCompany">
              <option>Please Select</option>
              {companies.map(c =>
                <option key={c.id} value={c.id}>{c.name}</option>
              )}
            </select>
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
});

export default connect(mapStateToProps)(PersonForm);
