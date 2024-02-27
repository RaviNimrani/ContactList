import { useRef } from "react";
import Style from "../styles/addContact.module.css";
import { useContactValue } from "../contactContext";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const { addContact } = useContactValue();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    addContact(data);
    navigate("/");
  };
  return (
    <>
      <div className={Style.container}>
        <h1>Add To Contact</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" ref={nameRef} required /> <br />
          <input
            type="email"
            placeholder="Email"
            ref={emailRef}
            required
          />{" "}
          <br />
          <input type="tel" placeholder="Number" ref={phoneRef} required />{" "}
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
