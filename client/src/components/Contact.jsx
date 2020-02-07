import React from 'react';
import './Contact.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../actions/contactActions';
import { Card, Button } from 'antd';

class Contact extends React.Component {
  state = {
    loading: false,
  };
  loadChange = () => {
    this.setState({ loading: true });
  };
  render() {
    return (
      <div className='m-right m-bottom'>
        <Card style={{ width: 300 }}>
          <p className='title'>
            Contact name : <span className='value'>{this.props.contact.name}</span>
          </p>
          <p className='title'>
            Contact phone : <span className='value'>{this.props.contact.tel}</span>
          </p>
          <p className='title'>
            Contact email : <span className='value'>{this.props.contact.email}</span>
          </p>
          <div>
            {this.state.loading ? (
              <Button className='m-right' type='danger' loading>
                Deleting...
              </Button>
            ) : (
              <Button
                className='m-right'
                onClick={() => {
                  this.props.deleteContact(this.props.contact._id);
                  this.loadChange();
                }}
                type='danger'>
                Delete
              </Button>
            )}

            <Link to={'/modify_contact/' + this.props.contact._id}>
              <Button>Edit</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}
const mapState = state => ({
  loading: state.loading,
});

export default connect(mapState, { deleteContact })(Contact);
