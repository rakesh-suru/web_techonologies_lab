import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <div>
      <h3>Fruit List</h3>
      <ul>
        {fruits.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      <h3>Form</h3>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button onClick={() => { alert("Hello " + name); setName(""); }}>
        Submit
      </button>
    </div>
  );
}

export default App;
