import { useState } from "react";

function Comp2ConstantState() {
  const [name, seName] = useState("");

  return <h2>{name}</h2>;
}