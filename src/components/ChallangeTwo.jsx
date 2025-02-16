import { useState } from "react";

function ChallangeTwo() {
  const [userName, setUserName] = useState({
    name: "10",
    surname: "10",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setUserName((prevValue) => {
      console.log("prevValue: ", prevValue);
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={userName.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="surname"
        placeholder="Enter your surname"
        value={userName.surname}
        onChange={handleChange}
      />
      <h2>Your name: {userName.name}</h2>
      <h2>Your surname: {userName.surname}</h2>
    </div>
  );
}

export default ChallangeTwo;
