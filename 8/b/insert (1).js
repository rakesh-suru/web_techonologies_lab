const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function insertData() {
  await client.connect();
  const db = client.db("mydb");
  const col = db.collection("students");

  await col.insertOne({ name: "Rakesh", dept: "CSE" });
  console.log("Record Inserted");

  client.close();
}

insertData();
