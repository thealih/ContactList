/* eslint-disable react/prop-types */
import "./contactList.css";

import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="listWrapper">
      <div className="contactList">
        <div className="listHeader">
          <h2>Contacts</h2>
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
        {contacts.map((contact) => {
          // const { name, email, id } = contact;
          return (
            <Contact contact={contact} onDelete={onDelete} key={contact.id} />
          );
        })}
      </div>
    </section>
  );
};

export default ContactList;
