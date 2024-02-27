import { useRef } from "react";
import Style from "../styles/editContact.module.css";
import { useContactValue } from "../contactContext";
import { Link, useNavigate, useParams } from "react-router-dom";

import { toast } from "react-toastify";

export default function EditContact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const param = useParams();
  const navigate = useNavigate();
  const { contactList, setContactList } = useContactValue();
  const presentContact = contactList.find(
    (contact) => contact.id === parseInt(param.id)
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const updated = {
      ...presentContact,
      name,
      email,
      phone,
    };

    // Updating the list
    const List = contactList.map((contact) => {
      if (contact.id === presentContact.id) {
        return updated;
      }
      return contact;
    });
    toast.success("Contact Updated !");
    console.log("updated");
    // Navagating to the home page, after the task is done
    navigate("/");
    // Setting the contact list
    setContactList(List);
  };
  return (
    <>
      <div className={Style.container}>
        <h1>Edit Contact</h1>
        {/* this is the form in which all the action will be performing */}
        <form onSubmit={handleSubmit}>
          {/* if presentContact is presnet then the value will be assinged as the default value */}
          <input
            type="text"
            defaultValue={presentContact?.name}
            placeholder="Name"
            ref={nameRef}
          />{" "}
          <br />
          <input
            type="email"
            defaultValue={presentContact?.email}
            placeholder="Email"
            ref={emailRef}
          />{" "}
          <br />
          <input
            type="tel"
            defaultValue={presentContact?.phone}
            placeholder="Number"
            ref={phoneRef}
          />{" "}
          <br />
          <div className={Style.buttonDiv}>
            <button type="submit" className={Style.updateButton}>
              Update Contact
            </button>
            <Link to="/">
              <button className={Style.cancle}>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
