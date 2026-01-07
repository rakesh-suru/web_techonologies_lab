const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://localhost:27017");

async function findData() {
  await client.connect();
  const db = client.db("mydb");
  const col = db.collection("students");

  const result = await col.find({}).toArray();
  console.log(result);

  client.close();
}

findData();
