import propTypes from 'prop-types';


export default function ContactList({ contacts, onDeleteContact }) {
  return (
    
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <span>
              {contact.name}: {contact.number}
            </span>

            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};