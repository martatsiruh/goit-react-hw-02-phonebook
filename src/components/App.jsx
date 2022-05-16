import React from 'react'
import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './App.module.css';

import Header from './Header/Header';
import Logo from './Header/Logo/Logo';
import Container from './Container/Container';
import Section from './Section/Section';

import ContactsList from './ContactsList/ContactsList';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFormSubmit = ({ name, number }) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const normalazeName = name.toLowerCase();
    const hasName = contacts.find(contact =>
      contact.name.toLowerCase().includes(normalazeName)
    );

    hasName
      ? alert(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter, contacts } = this.state;

    const normalazeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazeFilter)
    );

    return (
      <>
        <Section>
        <Header>
            <Logo />
        </Header>

      <main>
      
        <Container>
          <h1 className={styles.title}>Find contacts by name</h1>
          <Phonebook onSubmit={this.onFormSubmit} />
          </Container>
          
        <Container>
          <h2 className={styles.title}>Contacts</h2>
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={visibleContacts}
            onDeleteContact={this.deleteContact}
        />
        </Container>

        </main>  
        </Section>
    </>
    );
  }
}

export default App;






/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
*/