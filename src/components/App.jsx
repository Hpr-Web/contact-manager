import { useEffect, useState } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [contact, setContact] = useState(() => {
    const storedContactDataString = localStorage.getItem('contacts');
    return storedContactDataString ? JSON.parse(storedContactDataString) : [];
  });


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);


  function onAddClick(newContact) {
    const contactWithUnique = { ...newContact, unique: uuidv4() }
    setContact(pre => {
      return [...pre, contactWithUnique]
    })
  }

  function onDeleteButtonClick(unique) {
    setContact(prevContacts => {
      const updatedContacts = prevContacts.filter(contact => contact.unique !== unique);
      return updatedContacts;
    });
  }


  return (
    <>
      <div className='top'>
        <Header />
        <ContactForm onAddContact={onAddClick} />
        <ContactCard data={contact} onDeleteButtonClick={onDeleteButtonClick} />
      </div>
    </>
  )
}

export default App
