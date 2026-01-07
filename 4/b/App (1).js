// App.js
import React from "react";

function Welcome(props) {
  return <h2>Hello, {props.name}!</h2>;
}

function ClickButton() {
  function handleClick() {
    alert("Button Clicked!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Welcome name="Rakesh" />
      <ClickButton />
    </div>
  );
}

export default App;
