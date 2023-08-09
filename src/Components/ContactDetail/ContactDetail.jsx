import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ContactDetail = () => {
  return (
    <div>
      <p>user name is: contact.name </p>
      <p>user email is : contact.email</p>
      <Link to="/">go to contact list</Link>
    </div>
  );
};

export default ContactDetail;
