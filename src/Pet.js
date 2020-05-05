import React from "react";

export default function Pet({ name, age, id, setPets }) {
  const handleDelete = () => {
    console.log("hanler");
    setPets((prev) => prev.filter((p) => p.id !== id));
  };
  return (
    <li>
      My name is {name} age {age} <button onClick={handleDelete}>Delete</button>
    </li>
  );
}
