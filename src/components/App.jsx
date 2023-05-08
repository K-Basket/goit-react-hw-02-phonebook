import React, { Component } from 'react';
import { ContactForm } from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    console.log('data', data);
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitData={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {/* <Filter /> */}
        {/* <ContactList /> */}
      </>
    );
  }
}
