import React from "react";
import { useState } from "react";

function Chalange() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handleSurnameChange = (e) => setSurname(e.target.value);

  return (
    <div>
        <input type="text" placeholder="Enter your name" onChange={handleNameChange} />
        <input type="text" placeholder="Enter your surname" onChange={handleSurnameChange} />
        <h1>Your name: {name}</h1>
        <h1>Your surname: {surname}</h1>

    </div>
);
}

export default Chalange;
