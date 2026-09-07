// import './App.css'

import Comp1 from "./components/Comp1"
import Comp2ConstantState from "./components/Comp2ConstantState"
import Comp3Props from "./components/Comp3Props"

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Comp1/>
      <Comp2ConstantState/>
      <Comp3Props name="Sami"/>
    </>
  )
}

export default App
