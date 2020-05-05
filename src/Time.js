import React, { useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleString());
  setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 1000);

  return (
    <div>
      <h3>Unchangeable </h3>
      <h2>Current time is {time}</h2>
    </div>
  );
}
