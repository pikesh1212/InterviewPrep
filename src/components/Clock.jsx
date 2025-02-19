import React, { useState, useEffect } from "react";
const reactVersion = require("react/package.json").version;
const Clock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format the current date and time
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentDateTime.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;

  const day = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{day}</p>
      <p>{timeString}</p>
      <p>{reactVersion}</p>
    </div>
  );
};

export default Clock;
