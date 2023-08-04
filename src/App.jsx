import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <main className="App">
      <h1>ContactApp</h1>
      <AddContact />
      <section>Contact List</section>
    </main>
  );
}

export default App;
