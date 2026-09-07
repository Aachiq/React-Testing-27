import { useState } from "react";

// CLICK INTERACTION
export default function Comp4InteractState() {
  const [name, seName] = useState("Name");

  return (
    <>
      <h2>{name}</h2>
      <button onClick={() => seName("Karim")}>
        Change Value
      </button>
    </>
  );
}