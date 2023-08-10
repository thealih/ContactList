import userImage from "../../../assets/images/user-profile-icon-free-vector.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Contact = ({ contact, onDelete }) => {
  // eslint-disable-next-line react/prop-types

  // eslint-disable-next-line react/prop-types
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={userImage} alt="user" />
        <Link to="/">
          <div className="user">
            <p style={{ textAlign: "left" }}>name : {name}</p>
            <p> email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="editBtn"> Edit</button>
        </Link>

        <button onClick={() => onDelete(id)}>delete</button>
      </div>
    </div>
  );
};

export default Contact;
