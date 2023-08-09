/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import getContacts from "./services/getContactsService";
import deleteOneContacts from "./services/deleteContactService";
import addOneContacts from "./services/addContactService";
function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addOneContacts(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };
  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContacts(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    // if (savedContacts) setContacts(savedContacts);
    const fetchContacts = async () => {
      const { data } = await getContacts();
      // eslint-disable-next-line no-undef
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {}
  }, []);

  return (
    <main className="App">
      <h1>ContactApp</h1>
      <Routes>
        <Route path="/user/" element={<ContactDetail />}></Route>
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        ></Route>
        <Route
          exact
          path="/"
          element={
            <ContactList contacts={contacts} onDelete={deleteContactHandler} />
          }
        ></Route>
      </Routes>

      {/* <AddContact addContactHandler={addContactHandler} /> */}
      {/* <ContactList contacts={contacts} onDelete={deleteContactHandler} /> */}
    </main>
  );
}

export default App;
