import "./App.css";
import Component1 from "./components/Component1";

const DATA = [
  {
    text: "Component-1",
    color: "#d61ca5",
    borderRadius: "1rem 0 0 1rem",
  },
  {
    text: "Component-2",
    color: "green",
    borderRadius: "0",
  },
  {
    text: "Component-3",
    color: "#60e679",
    borderRadius: "0 1rem 1rem 0",
  },
];

function App() {
  return (
    <div className="App">
      <div className="App-container">
        {DATA.map((card) => (
          <Component1
            text={card.text}
            color={card.color}
            borderRadius={card.borderRadius}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
