import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const addContactHandler = (e) => {
    e.preventDefault();
    console.log();
  };
  return (
    <form action="" onSubmit={addContactHandler}>
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
