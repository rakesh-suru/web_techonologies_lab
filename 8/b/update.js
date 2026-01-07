const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function updateData() {
  await client.connect();
  const db = client.db("mydb");
  const col = db.collection("students");

  await col.updateOne(
    { name: "Rakesh" },
    { $set: { dept: "AI" } }
  );

  console.log("Record Updated");
  client.close();
}

updateData();
