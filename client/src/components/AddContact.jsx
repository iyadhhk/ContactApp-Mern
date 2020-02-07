import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addContact } from '../actions/contactActions';
import { Input, Card, Button } from 'antd';

class AddContact extends Component {
  state = {
    name: '',
    tel: '',
    email: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className='m-auto'>
        <Card title='Create new contact' style={{ width: 300 }}>
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
              onClick={() => this.props.addContact({ ...this.state })}>
              ADD contact
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
