import React, { Component } from 'react';
import Notiflix from 'notiflix';
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
      this.state.contacts.some(
        el => el.name.toLowerCase() === data.name.toLowerCase()
      ) ||
      this.state.contacts.some(
        el => el.number.toLowerCase() === data.number.toLowerCase()
      ) ||
      data.name === ''
    ) {
      console.log(`${data.name} is already in contacts`);
      Notiflix.Notify.failure(`${data.name} is already in contacts`);
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
