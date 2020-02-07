import React, { Component } from 'react';
import './ContactList.css';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../actions/contactActions';
import { Spin } from 'antd';

class ContactList extends Component {
  // componentDidMount() {
  //   if (!this.props.loading) this.props.getContacts();
  // }
  render() {
    if (this.props.loading)
      return (
        <div className='spinner'>
          <Spin size='large' tip='Loading...' />
        </div>
      );
    else {
      return (
        <div className='list'>
          {this.props.contacts.map(e => (
            <Contact key={e._id} contact={e} />
          ))}
        </div>
      );
    }
  }
}
const mapState = state => ({
  contacts: state.contacts,
  loading: state.loading,
});

export default connect(mapState, { getContacts })(ContactList);
