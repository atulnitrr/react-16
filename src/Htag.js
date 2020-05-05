import React from "react";

export default function Htag(props) {
  return (
    <div>
      <h1>Hello in h1 tag</h1>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
}
