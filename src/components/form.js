import React, { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [contacts, setContacts] = useState([]);

  function addToContact(event) {
    event.preventDefault();

    if (name === "" || number === "") {
      alert("Fill Required Details");
      return;
    }

    const newContact = {
      id: contacts.length + 1,
      name,
      number,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setNumber("");
  }

  async function deleteContact(id) {
    const newContact = contacts.filter((contact) => contact.id !== id);
    setContacts(newContact);
  }

  return (
    <div>
      <form onSubmit={addToContact}>
        <label>Add Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        ></input>
        <label>Add Number</label>
        <input
          type="tel"
          value={number}
          onChange={(event) => {
            setNumber(event.target.value);
          }}
        ></input>

        <button type="submit">Add to Contact</button>
      </form>

      <ul>
        {contacts.map((iterator, index) => {
          return (
            <li key={iterator.id}>
              <p>{iterator.name}</p>
              <p>{iterator.number}</p>
              <button
                type="button"
                onClick={() => {
                  deleteContact(iterator.id);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
