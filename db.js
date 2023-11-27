"use strict"; // enable modern Javascript modifications

/**********************************************************
 * MongoDB
 **********************************************************/

const { MongoClient } = require("mongodb");

// load environment variables from a .env file into process
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function run() {
  try {
    await client.connect();

    // database and collection code goes here
    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    // find without arguments will return a cursor (i.e., iterator)
    // to all documents in the collection
    const cursor = coll.find();
    console.log("all planets");
    await printAll(cursor);
  } finally {
    // ensure that the client will close when we finish or error
    await client.close();
  }
}

run().catch(console.dir);

async function printAll(cursor) {
  // the methods on a cursor are similar to those on Java iterators

  while (await cursor.hasNext()) {
    console.log(await cursor.next());
  }
}
