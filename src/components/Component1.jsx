import React from "react";
import "./Component1.css";

const Component1 = (prop) => {
  return (
    <div
      className="component1"
      style={{ background: prop.color, borderRadius: prop.borderRadius }}
    >
      <h1>{prop.text}</h1>
    </div>
  );
};

export default Component1;
