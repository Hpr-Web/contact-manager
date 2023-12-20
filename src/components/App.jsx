import { useEffect, useState } from 'react';
import Header from './Header';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

function App() {
  const [contact, setContact] = useState(() => {
    const storedContactDataString = localStorage.getItem('contacts');
    return storedContactDataString ? JSON.parse(storedContactDataString) : [];
  });


  useEffect(() => {
    console.log("Saving data to local storage:", contact);
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);


  function onAddClick(newContact) {
    setContact(pre => {
      return [...pre, newContact]
    })
  }

  function onDeleteButtonClick(unique) {
    const updatedContact = contact.filter((contact, index) => {
      return index !== unique;
    });
    setContact(updatedContact);
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


const data = [
  { name: "Mohan", email: "mohan@gmail.com" },
  { name: "Sohan", email: "sohan@gmail.com" },
  { name: "Rohan", email: "rohan@gmail.com" },
  { name: "Vinodh", email: "vinodh@gmail.com" },
]
const modifiedData = [...data]
export default App
