import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  // let counter = 15;

  const addvalue = () => {
    setCounter((tytyt) => tytyt + 1);
    setCounter((tytyt) => tytyt + 1);
    setCounter((tytyt) => tytyt + 1);
    setCounter((tytyt) => tytyt + 1);
  };

  const removeVal = () => {
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>classic a react app</h1>
      <h2>Counter Value {counter}</h2>
      <button onClick={addvalue}> Add Counter</button> {"    "}
      <button onClick={removeVal}> Remove Counter</button>
      <p> footer: </p>
    </>
  );
}

export default App;
``;
