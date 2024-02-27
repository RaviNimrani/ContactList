import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contactContext = createContext();

export function useContactValue() {
  const value = useContext(contactContext);
  return value;
}

export default function CustomContactContext({ children }) {
  const [contactList, setContactList] = useState([]);

  const List = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users/");
    let contact = await data.json();
    // console.log(contact);
    setContactList(contact);
  };

  useEffect(() => {
    List();
  }, []);

  const deleteContact = (id) => {
    const index = contactList.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      let newContactList = [...contactList];
      newContactList.splice(index, 1);
      //   Displyed the toast messages
      toast.success("Contact Deleted");
      console.log("Success");

      setContactList(newContactList);
    }
  };

  const addContact = (data) => {
    const check = contactList.find(
      (contact) => contact.phone === parseInt(data.phone) && data.phone
    );

    if (check) {
      // return toast.warning("Data not Changed !");
      console.log("not changed");
      return;
    }

    const List = [...contactList];
    List.push({
      id: contactList[contactList.length - 1].id + 1,
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    toast.success("Contact Added ");
    console.log("addded");
    setContactList(List);
  };

  return (
    <>
      <contactContext.Provider
        value={{ contactList, deleteContact, addContact, setContactList }}
      >
        <ToastContainer />
        {children}
      </contactContext.Provider>
    </>
  );
}
