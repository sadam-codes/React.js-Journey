import { useState } from "react";
import React from "react";

function Counter() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    counter < 10 ? setCounter(counter + 1) : counter;
  };
  const removeValue = () => {
    counter > 0 ? setCounter(counter - 1) : counter;

    // interview question
    // counter > 0 ? setCounter((prevCounter) => prevCounter - 1) : counter;
    // counter > 0 ? setCounter((prevCounter) => prevCounter - 1) : counter;
  };
  return (
    <div>
      <h1 className="bg-black text-white">Welcome to Counter website</h1>
      <h1>{counter}</h1>

      <button onClick={addValue}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </div>
  );
}

export default Counter;
