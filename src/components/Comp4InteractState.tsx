import { useState } from "react";

// CLICK INTERACTION
function Comp4InteractState() {
  const [name, seName] = useState("");

  return (
    <>
      <h2>{name}</h2>
      <button onClick={() => seName("hi")}>
        Change Value
      </button>
    </>
  );
}