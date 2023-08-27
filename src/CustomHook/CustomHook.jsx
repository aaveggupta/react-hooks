import React from "react";
import "./CustomHook.css";
import useLocalStorage from "../hooks/useLocalStorage";

const CustomHook = () => {
  const [name, setName] = useLocalStorage("name", "");

  // when we refresh the page, then name becomes empty again - because we are not persisting it and to do that we have to store it in local storage
  // lets do that by creating a custom hook -> make sure that hook name must start with use

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CustomHook;
