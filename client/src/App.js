import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getContacts } from './actions/contactActions';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { Switch, Redirect, Route, Link } from 'react-router-dom';

function App(props) {
  return (
    <div className='App'>
      <h1>Contact App</h1>
      <Link to={'/contacts'}>
        <button onClick={() => props.getContacts()}>Contact List</button>
      </Link>
      <Link to={'/add_contact'}>
        <button>Add Contact</button>
      </Link>
      <Switch>
        <Redirect exact from='/' to='/contacts' />
        <Route exact path='/contacts' component={ContactList} />
        <Route exact path='/add_contact' component={AddContact} />
        <Route exact path='/modify_contact/:id' component={EditContact} />
      </Switch>
    </div>
  );
}

export default connect(null, { getContacts })(App);
