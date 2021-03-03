import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';

class App extends Component {
  render() {
    return (
      <>
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
        <ToastContainer position="top-right" />
      </>
    );
  }
}

export default App;
