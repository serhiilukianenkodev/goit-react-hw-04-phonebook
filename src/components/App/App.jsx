import { useState, useEffect } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { HeadingPrimary } from 'components/App/AppStyled';

const LS_CONTACTS_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_CONTACTS_KEY)) ?? []
  );
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
