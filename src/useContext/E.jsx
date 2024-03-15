import React, { useContext } from "react";
import { Usercontext } from "./A";

function E() {
  const { name, setName } = useContext(Usercontext);

  return (
    <div>
      <button onClick={() => setName("Jaykumar")}>Change E</button>
      <h1>Hi i am E Component : {name}</h1>
    </div>
  );
}

export default E;
