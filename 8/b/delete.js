const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function deleteData() {
  await client.connect();
  const db = client.db("mydb");
  const col = db.collection("students");

  await col.deleteOne({ name: "Rakesh" });
  console.log("Record Deleted");

  client.close();
}

deleteData();
