import React from "react";
import { nanoid } from "nanoid";



export class App extends React.Component{
  state = {
    contacts: [
      { id: '',
       name: '', 
      }
    ],
    name: ''
  }

  addContact = addContact => {
    const { contacts } = this.state;
    addContact.id = nanoid();
    if (contacts.find(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already is contacts`);
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };



  render(){
    return(
      <div>
        <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button type="submit" onSubmit={this.addContact} >Add contact</button>

        
      </div>
      
    )
  }
};
