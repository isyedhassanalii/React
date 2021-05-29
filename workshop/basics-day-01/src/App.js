import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Destructuring from "./Destructuring";
import ArrayMethods from "./ArrayMethods";
import State from "./State";
import Style from "./Style";

function App() {
  // const name = "Abc";
  // const age = 10;
  const [a, setA] = useState("hello");
  const [name, setName] = useState("jasdj");

  if (a === "hello") {
    setA("Sate changed");
  }
  return (
    <div className="">
      <span>
        {/* {name !== "" && age <= 9 ? "ok" : "There is nothing "} */}
        {a}
      </span>
      <div>
        {name}
        <span>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          {/* conditional rendering */}
          {name === "hello" ? (
            <Button fullname={name} />
          ) : (
            "you didn't write hello"
          )}
          {/* Now this is component and we use as many time we use */}
          <Button />

          <Destructuring name={name} />

          <Style />
          <State />
          <ArrayMethods />
        </span>
      </div>
    </div>
  );
}

export default App;
