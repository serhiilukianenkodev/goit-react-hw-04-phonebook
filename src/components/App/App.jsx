import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { HeadingPrimary } from 'components/App/AppStyled';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const LS_CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = JSON.parse(localStorage.getItem(LS_CONTACTS_KEY));
    return savedContacts?.length > 0 ? savedContacts : defaultContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const hasContact = ({ name }) => contacts.find(item => item.name === name);

  const addContact = data => {
    if (hasContact(data)) return alert(`${data.name} is already in contacts`);

    setContacts(prevContacts => {
      const id = nanoid();
      const contact = { ...data, id };
      return [...prevContacts, contact];
    });
  };

  const onFilterChange = ({ target }) => {
    setFilter(target.value);
  };

  const getFiltered = () => {
    if (!filter) return [...contacts];

    const normilizedFilter = filter.toUpperCase();

    return [...contacts].filter(({ name }) =>
      name.toUpperCase().includes(normilizedFilter)
    );
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      [...prevContacts].filter(contact => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <HeadingPrimary>Contacts</HeadingPrimary>
      <Filter onFilterChange={onFilterChange} value={filter} />
      <ContactList list={getFiltered()} removeContact={removeContact} />
      <GlobalStyle />
    </div>
  );
};
