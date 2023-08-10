/* eslint-disable no-unused-vars */
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import { Routes, Route } from "react-router-dom";
import ContactDetail from "./Components/ContactDetail/ContactDetail";

import EditContact from "./Components/EditContact/EditContact";
function App() {
  return (
    <main className="App">
      <h1>ContactApp</h1>
      <Routes>
        <Route path="/edit/:id" element={<EditContact />}></Route>
        <Route path="/user/" element={<ContactDetail />}></Route>
        <Route path="/add" element={<AddContact />}></Route>
        <Route exact path="/" element={<ContactList />}></Route>
      </Routes>
    </main>
  );
}

export default App;
