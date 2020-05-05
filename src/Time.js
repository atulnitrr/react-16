import React, { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h3>Unchangeable </h3>
      <h2>Current time is {time}</h2>
    </div>
  );
}
