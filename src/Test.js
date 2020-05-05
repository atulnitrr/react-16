import React, { useState, useEffect } from "react";

import Htag from "./Htag";
import Ptag from "./Ptag";
import Footer from "./Footer";
import Pet from "./Pet";
import Time from "./Time";
import AddPet from "./AddPetForm";
import LikeArea from "./test/LikeArea";

export default function Test() {
  const [pets, setPets] = useState([]);

  // wnhen load
  useEffect(() => {
    if (localStorage.getItem("pets")) {
      setPets(JSON.parse(localStorage.getItem("pets")));
    }
  }, []);

  // when pets sate change
  useEffect(() => {
    localStorage.setItem("pets", JSON.stringify(pets));
  }, [pets]);

  return (
    <div>
      <Time></Time>
      <LikeArea></LikeArea>
      <Htag name="ddd" age="23"></Htag>
      <Ptag name="ddd" age="23"></Ptag>
      <AddPet pets={pets} setPets={setPets}></AddPet>
      <ul>
        {pets.map((pet) => {
          return (
            <Pet
              setPets={setPets}
              name={pet.name}
              age={pet.age}
              key={pet.id}
              id={pet.id}
            ></Pet>
          );
        })}
      </ul>
      <Footer name="ddd" age="23">
        {" "}
      </Footer>
    </div>
  );
}
