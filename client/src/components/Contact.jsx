import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contactActions';
function Contact(props) {
  return (
    <div className='card'>
      <p>
        Contact name : <span className='value'>{props.contact.name}</span>
      </p>
      <p>
        Contact phone : <span className='value'>{props.contact.tel}</span>
      </p>
      <p>
        Contact email : <span className='value'>{props.contact.email}</span>
      </p>
      <div>
        <button onClick={() => props.deleteContact(props.contact._id)}>Delete</button>
        <Link to={'/modify_contact/' + props.contact._id}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default connect(null, { deleteContact })(Contact);
