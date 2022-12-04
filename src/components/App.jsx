import React from "react";
import { nanoid } from "nanoid";
import ContactsList from "./ContactsList/ContactsList";
import ContactForm  from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";



export class App extends React.Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (contactName, contactNumber) => {
    const checkName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );

    if (checkName) {
      alert(`${contactName} is already in your contacts.`);
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name: contactName,
        number: contactNumber,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  onInputChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const normalizedValue = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
    return (
      <div>
        <h1> Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2> Contacts</h2>
        <Filter onChange={this.onInputChange} />
        <ContactsList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
