import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log('data', data); // --temp

    if (
      this.state.contacts.some(el => el.name === data.name) ||
      this.state.contacts.some(el => el.number === data.number)
    ) {
      console.log('Этот контакт есть в базе');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    console.log(this.state.contacts);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={this.state.contacts} />
      </>
    );
  }
}
