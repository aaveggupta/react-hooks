import React, { useEffect, useRef, useState } from "react";
import "./UseRefHook.css";

const UseRefHook = () => {
  const [name, setName] = useState("");

  // You have to tell how many time your screen is rendered

  // 1st way that people thing is use useState hook and update it whenever something on screen gets changes
  // major drawback with this is that it will go in infine loop because if something in useState changes the page gets rerenders

  // const [renderCnt, setRenderCnt] = useState(0);

  // useEffect(() => {
  //   setRenderCnt((prevVal) => prevVal + 1);
  // });

  // 2nd way is use useRef, the best thing about it is that the page won't re-render even if it got changes
  const renderCount = useRef(1); // this return an object and one of the field is current which tracks current record -- { current: 1}

  useEffect(() => {
    renderCount.current += 1;
  });

  // The most common reason why people use refs to reference elements inside your html
  // Each element in html has ref attribute

  // But don't use to change value, it won't change the state always use react state or valid props

  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>My name is {name}</h3>
      <button onClick={focus}>Focus</button>
      <h2>I renders {renderCount.current} times</h2>
    </div>
  );
};

export default UseRefHook;
