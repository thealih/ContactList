/* eslint-disable react/prop-types */
import "./contactList.css";
import userImage from "../../assets/images/user-profile-icon-free-vector.jpg";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      <div>
        <h2>Contacts</h2>
        <Link to="/add">
          <button>Add</button>
        </Link>
      </div>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="item">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={userImage} alt="user" />
              <div>
                <p style={{ textAlign: "left" }}>name : {name}</p>
                <p> email : {email}</p>
              </div>
            </div>
            <div>
              <button onClick={() => onDelete(id)}>delete</button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ContactList;
