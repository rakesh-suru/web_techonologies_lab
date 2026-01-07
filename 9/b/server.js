const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Rakesh" },
    { id: 2, name: "Suresh" }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
