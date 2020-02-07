import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getContacts } from './actions/contactActions';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { Switch, Redirect, Route, Link } from 'react-router-dom';
import { Typography, Button } from 'antd';
const { Title } = Typography;

function App(props) {
  return (
    <div className='App'>
      <Title type='secondary'>Contact App</Title>
      <Link to={'/contacts'}>
        <Button className='m-right' onClick={() => props.getContacts()} type='primary'>
          Contact List
        </Button>
      </Link>
      <Link to={'/add_contact'}>
        <Button>Add Contact</Button>
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
