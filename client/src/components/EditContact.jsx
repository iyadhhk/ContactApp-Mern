import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editContact, getContacts } from '../actions/contactActions';
import { Input, Card, Button } from 'antd';

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
    return (
      <div className='m-auto'>
        <Card title='Edit contact' style={{ width: 300 }}>
          <h3>Name</h3>
          <Input
            name='name'
            type='text'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <h3>Phone</h3>
          <Input
            name='tel'
            type='text'
            onChange={this.handleChange}
            value={this.state.tel}
          />
          <h3>Email</h3>
          <Input
            name='email'
            type='text'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Link to={'/contacts'}>
            <Button
              className='m-top'
              type='primary'
              onClick={() =>
                this.props.editContact(this.props.match.params.id, { ...this.state })
              }>
              Edit contact
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
}
const mapState = state => ({
  contacts: state.contacts,
});
export default connect(mapState, { editContact, getContacts })(EditContact);
