import { useState } from "react"

function App() {
  //Why below dosent work is mentioned in the docs-Onenote lec5
  // let counter = 0
  // let addcounter = () => {
  //   counter = counter + 1;
  // }
  let [counter, setCount] = useState(0)
  let addCounter = () => {
    if (counter == "Negatives not allowed") {
      setCount(0)
    }
    else if (counter < 20) {
      // counter = counter + 1; //can directly calculate below or calculate here and pass counter below
    setCount(counter+1)
    
    } else {
      counter = "Value greater than 20"
      setCount(counter)
    }
    
  }
  let subCounter = () => {
    if (counter == "Value greater than 20") (
      setCount(20)
    )
    else if (counter > 0) {
      setCount(counter-1)
    } else {
      setCount("Negatives not allowed")
    }
    
  }
  return (
    <>
      <h1>Counter</h1>
      <h5>Counter contains positive values from 0-20</h5>
      <h3>Counter Value {counter}</h3>
      <button onClick={addCounter}>Increement Counter</button>
      <button onClick={subCounter}>Decreement Counter</button>
    </>
  )
}

export default App
