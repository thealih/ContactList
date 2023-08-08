import { useState } from "react";
import "./addContact.css";

// eslint-disable-next-line react/prop-types
const AddContact = ({ addContactHandler, history }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    if (!contact.name || !contact.email) {
      alert("all fildes are mandatory !");
      return;
    }
    e.preventDefault();
    addContactHandler(contact);
    setContact({ name: "", email: "" });
    // eslint-disable-next-line react/prop-types
    history.push("/");
  };

  return (
    <form action="" onSubmit={submitForm}>
      <div className="formControl">
        <label htmlFor="">name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className="formControl">
        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button>Add Contact</button>
    </form>
  );
};

export default AddContact;
