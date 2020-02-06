import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_CONTACTS,
  CONTACTS_LOADING,
} from './types';
import axios from 'axios';

export const getContacts = () => dispatch => {
  dispatch(setContactsLoading());
  axios.get('/contacts').then(res =>
    dispatch({
      type: GET_CONTACTS,
      payload: res.data,
    })
  );
};
export const setContactsLoading = () => ({
  type: CONTACTS_LOADING,
});

export const addContact = contact => dispatch => {
  dispatch(setContactsLoading());
  axios.post('/contacts', contact).then(res => dispatch(getContacts()));
};
export const editContact = (id, contact) => dispatch => {
  dispatch(setContactsLoading());
  axios.put(`/contacts/${id}`, contact).then(res => dispatch(getContacts()));
};
export const deleteContact = id => dispatch => {
  axios.delete(`/contacts/${id}`).then(res =>
    dispatch({
      type: DELETE_CONTACT,
      payload: id,
    })
  );
};
