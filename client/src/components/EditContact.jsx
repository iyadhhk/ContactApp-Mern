import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editContact, getContacts } from '../actions/contactActions';
class EditContact extends Component {
  state = {
    name: '',
    tel: '',
    email: '',
  };
  componentDidMount() {
    const myContact = this.props.contacts.filter(
      contact => contact._id === this.props.match.params.id
    )[0];
    this.setState({ ...myContact });
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log('hello', this.state);
    return (
      <div>
        <h1>this is add page</h1>
        <h3>name</h3>
        <input
          name='name'
          type='text'
          onChange={this.handleChange}
          value={this.state.name}
        />
        <h3>tel</h3>
        <input
          name='tel'
          type='text'
          onChange={this.handleChange}
          value={this.state.tel}
        />
        <h3>email</h3>
        <input
          name='email'
          type='text'
          onChange={this.handleChange}
          value={this.state.email}
        />
        <Link to={'/contacts'}>
          <button
            onClick={() =>
              this.props.editContact(this.props.match.params.id, { ...this.state })
            }>
            Edit contact
          </button>
        </Link>
      </div>
    );
  }
}
const mapState = state => ({
  contacts: state.contacts,
});
export default connect(mapState, { editContact, getContacts })(EditContact);
