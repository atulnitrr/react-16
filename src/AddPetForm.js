import React, { useState } from "react";

export default function AddPetForm({ pets, setPets }) {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPets((prev) => [...prev, { name, age, id: Date.now() }]);

    setAge("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add a new pet</legend>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          age="age"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add pet</button>
      </fieldset>
    </form>
  );
}
