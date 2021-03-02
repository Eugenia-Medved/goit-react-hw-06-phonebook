import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';
import Alert from 'components/Alert/Alert';

class App extends Component {
  state = {
    message: false,
    showAlert: false,
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);

  //   if (parsedContacts) {
  //     return this.setState({ contacts: parsedContacts });
  //   }
  //   this.setState({ contacts: contactsReserv });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  // addNumber = (nam, tel) => {
  // if (this.state.contacts.find(contact => contact.name === nam)) {
  //   this.setState({ message: `${nam} is already in contacts!!!`, showAlert: true });
  //   setTimeout(() => {
  //     this.setState({ showAlert: false });
  //   }, 1000);
  //   return;
  // }
  // const contact = {
  //   id: shortid.generate(),
  //   name: nam,
  //   number: tel,
  // };

  // this.setState(({ contacts }) => ({
  //   contacts: [contact, ...contacts],
  // }));
  // };

  render() {
    const { message, showAlert } = this.state;

    return (
      <>
        <CSSTransition in={showAlert} timeout={500} classNames="Alert" unmountOnExit>
          <Alert message={message} />
        </CSSTransition>
        <Container>
          <CSSTransition in={true} appear={true} timeout={250} classNames="Logo" unmountOnExit>
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
        </Container>
        <Container title="Contacts">
          <Filter />
          <ContactList />
        </Container>
      </>
    );
  }
}

export default App;
