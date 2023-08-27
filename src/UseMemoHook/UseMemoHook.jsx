import React, { useEffect, useMemo, useState } from "react";
import "./UseMemoHook.css";

// This is a slow function to replicate the behaviour of complex function in prod code
const slowFunction = (num) => {
  for (let i = 0; i <= 1000000000; ++i);
  return num * 2;
};

const UseMemoHook = () => {
  const [number, setNumber] = useState(0);

  // Whenever anything on the page gets rendered, this will call slowFunction due which u will face some lag in rendering the things
  // const doubleNumber = slowFunction(number);

  // But if you see we are passing number in slow function, so we want to execute the function only when number changes not one anything on page changes
  // To acheive this behaviour we can use useMemo hook, which can store the memoize answer in some memory and we can also tell it when it has to call again by passing dependency array
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const [dark, setDark] = useState(false);

  // For arrays and objects even if the content inside them is exactly same, still the ref are diff for them
  // this we called as refrential equality
  // to avoid this wrap this in useMemo so it won't rerender again and again
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  // if themeStlye is not wrapped in useMemo it will rerender again and again even if the content of theme style are same the reason we discussed above
  useEffect(() => {
    console.log("theme changed");
  }, [themeStyle]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <button onClick={() => setDark((prevVal) => !prevVal)}>
        Change theme
      </button>
      <div style={themeStyle}>{doubleNumber}</div>
    </div>
  );
};

export default UseMemoHook;
