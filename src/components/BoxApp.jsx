import { useState } from "react";
import "../App.css";


function BoxApp() {
  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    setCount(count + 1);
  };
  const handleChild = (event) => {
    if (event.target.style.backgroundColor == "red") {
      event.target.style.backgroundColor = "green";
    } else {
      event.target.style.backgroundColor = "red";
    }
  };
  const childDiv = () => {
    return <div className="childDiv" onClick={handleChild}></div>;
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>My React App</h1>
            <div className="parentDiv" onClick={handleClick}></div>
            <div className="childContainer">
              {count > 0 && [...Array(count)].map((_, i) => childDiv())}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxApp;
