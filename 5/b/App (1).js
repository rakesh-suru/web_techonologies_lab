import React from "react";

function Welcome() {
 const user = "Alice";
 return <h2>Hello, {user}! Welcome to React JSX Demo 🚀</h2>;
}

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Welcome />
      <p>This is rendered using JSX (JavaScript + XML).</p>
    </div>
  );
}

export default App;