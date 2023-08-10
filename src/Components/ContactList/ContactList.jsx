/* eslint-disable react/prop-types */
import "./contactList.css";

import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import getContacts from "../../services/getContactsService";
import { useState } from "react";
import deleteOneContacts from "../../services/deleteContactService";
import { useEffect } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
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
    } catch (error) {
      console.log(error);
    }
  }, []);
  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContacts(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            // const { name, email, id } = contact;
            return (
              <Contact
                contact={contact}
                onDelete={deleteContactHandler}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loading ...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
