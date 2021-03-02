import shortid from 'shortid';

const addContact = (nam, tel) => ({
  type: 'contacts/add',
  payload: {
    id: shortid.generate(),
    name: nam,
    number: tel,
  },
});

const deleteContact = todoId => ({
  type: 'contacts/delete',
  payload: todoId,
});

const changeFilter = value => ({
  type: 'contacts/filter',
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, changeFilter };
