import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      { id: Math.ceil(Math.random() * 100), ...contact },
    ]);
  };
  const deleteContactHandler = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };

  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) setContacts(savedContacts);
  }, []);

  return (
    <main className="App">
      <h1>ContactApp</h1>

      <Routes>
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
