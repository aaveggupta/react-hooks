import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [resourceType, setResourceType] = useState("posts");

  // function inside below useEffect will render everytime when the screen renders
  useEffect(() => {
    console.log("Renders Everytime");
  });

  // function inside below useEffect will render if resourceType changes,
  useEffect(() => {
    console.log(`Renders when resourcetype changes - ${resourceType}`);

    // it will run when old resourceType unmounts and new comes
    // mostly use to cleanup prev states
    // every single time this useEffect gets ran whatever is in the return gets ran first to clean up whatever we did last time
    return () => {
      console.log(`${resourceType} unmounted`);
    };
  }, [resourceType]);

  // function inside below useEffect will render only when page loaded
  useEffect(() => {
    console.log("Renders only in the load of page");
  }, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
