import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);
const databaseName = "todos";
const collectionName = "todolists";
export default async function getCollection() {
  if (!client.db()) {
    console.log("Connecting to MongoDB...");
    await client.connect();
  }

  console.log("Connected to MongoDB, returning collection");
  return client.db(databaseName).collection(collectionName);
}


