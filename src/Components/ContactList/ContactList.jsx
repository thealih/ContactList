/* eslint-disable react/prop-types */
import "./contactList.css";
import userImage from "../../assets/images/user-profile-icon-free-vector.jpg";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
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
