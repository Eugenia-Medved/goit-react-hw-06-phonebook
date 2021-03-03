import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import contacrsTypes from './contacts-types';

const addContact = createAction(contacrsTypes.ADD, (nam, tel) => {
  return {
    payload: {
      id: shortid.generate(),
      name: nam,
      number: tel,
    },
  };
});

const deleteContact = createAction(contacrsTypes.DELETE);

const changeFilter = createAction(contacrsTypes.CHANGE_FILTER);

const contactsActions = { addContact, deleteContact, changeFilter };
export default contactsActions;
