import React from "react";

import Htag from "./Htag";
import Ptag from "./Ptag";
import Footer from "./Footer";
import Pet from "./Pet";

export default function Test() {
  return (
    <div>
      <Htag name="ddd" age="23"></Htag>
      <Ptag name="ddd" age="23"></Ptag>
      <ul>
        <Pet name="cat" age="23"></Pet>
        <Pet name="dog" age="12"></Pet>
        <Pet name="mouse" age="10"></Pet>
      </ul>
      <Footer name="ddd" age="23">
        {" "}
      </Footer>
    </div>
  );
}
