import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_CONTACTS,
  CONTACTS_LOADING,
} from '../actions/types';
let initialState = {
  contacts: [],
  loading: false,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload, loading: false };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._id !== action.payload),
      };
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts], loading: false };
    case EDIT_CONTACT:
      state.contacts.map(contact =>
        contact._id === action.payload.id
          ? ({ ...contact } = { ...action.payload.contact })
          : contact
      );
      return { ...state, loading: false };
    case CONTACTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
