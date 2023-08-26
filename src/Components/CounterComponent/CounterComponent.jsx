import React, { useState } from "react";
import "./CounterComponent.css";

// 1. You can only use hook inside functional component
// 2. Hooks always execute in same order
// 3. React hooks can't be put inside if, loops, functions etc - must be on top level

const CounterComponent = () => {
  // useState return array
  // Index-0 has current state
  // Index-2 is a function (which allow to update state)

  // Incorrect Way (If you directly gave something in useState bracket it will render everytime, of its a complex function it affects performace)
  const [count, setCount] = useState(0);

  // Correct Way (if we pass in useState that function will only render one time - thats much better and much performant)
  const [countCorrect, setCountCorrect] = useState(() => {
    return 0;
  });

  // Incorrect way (because in this function we are decreasing setCount 3 times)
  // but it decrease only 1 time because count is same for 1 (because the value is same when we render the function)
  const decrementCountIncorrect = () => {
    setCount(count - 1);
    setCount(count - 1);
    setCount(count - 1);
  };

  // Correct way (because we are decreasing setCount 3 time and it will work correctly)
  // because at every line we are using prev update value of count
  const descrementCountCorrect = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  const incrementCountCorrect = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="counter-component">
      <button onClick={descrementCountCorrect}>-</button>
      <h1>{count}</h1>
      <button onClick={incrementCountCorrect}>+</button>
    </div>
  );
};

export default CounterComponent;
