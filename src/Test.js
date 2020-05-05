import React from "react";

import Htag from "./Htag";
import Ptag from "./Ptag";
import Footer from "./Footer";
import Pet from "./Pet";
import Time from "./Time";
import LikeArea from "./test/LikeArea";

const pets = [
  { name: "cat", age: "12", id: "1" },
  { name: "dog", age: "12", id: "2" },
  { name: "fox", age: "12", id: "3" },
  { name: "roger", age: "10", id: "4" },
];
export default function Test() {
  return (
    <div>
      <Time></Time>
      <LikeArea></LikeArea>
      <Htag name="ddd" age="23"></Htag>
      <Ptag name="ddd" age="23"></Ptag>
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
