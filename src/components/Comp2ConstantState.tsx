import { useState } from "react";

export default function Comp2ConstantState() {
  const [name] = useState("Ali");

  return (
    <div style={{padding: 3, marginTop: 4, background: 'lightgrey'}}>
      <h2>{name}</h2>
    </div>
  );
}