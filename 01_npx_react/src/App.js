import { useState } from "react";
function App() {
  let [counter, setCount] = useState(15);

  function addValue() {
    if (counter < 20) setCount(++counter);
  }
  function removeValue() {
    if (counter > 0) {
      setCount(--counter);
    }
  }
  return (
    <>
      <h1>Counter</h1>
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
