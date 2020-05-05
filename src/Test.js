import React, { useState } from "react";

import Htag from "./Htag";
import Ptag from "./Ptag";
import Footer from "./Footer";
import Pet from "./Pet";
import Time from "./Time";
import AddPet from "./AddPetForm";
import LikeArea from "./test/LikeArea";

export default function Test() {
  const [pets, setPets] = useState([
    { name: "cat", age: "12", id: "1" },
    { name: "dog", age: "12", id: "2" },
    { name: "fox", age: "12", id: "3" },
    { name: "roger", age: "10", id: "4" },
  ]);
  return (
    <div>
      <Time></Time>
      <LikeArea></LikeArea>
      <Htag name="ddd" age="23"></Htag>
      <Ptag name="ddd" age="23"></Ptag>
      <AddPet pets={pets} setPets={setPets}></AddPet>
      <ul>
        {pets.map((pet) => {
          return <Pet name={pet.name} age={pet.age} key={pet.id}></Pet>;
        })}
      </ul>
      <Footer name="ddd" age="23">
        {" "}
      </Footer>
    </div>
  );
}
