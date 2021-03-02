import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-action';
import s from './ContactList.module.css';
import PhoneList from './fade.module.css';

function ContactList({ contacts, onDeleteNumber }) {
  return (
    <TransitionGroup component="ol" className={s.list}>
      {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={250} classNames={PhoneList}>
          <li key={contact.id} className={s.item}>
            <span>
              {contact.name}:{contact.number}
            </span>
            <button className={s.button} type="button" onClick={() => onDeleteNumber(contact.id)}>
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

const getVisibleTodos = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
  contacts: getVisibleTodos(contacts, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteNumber: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
