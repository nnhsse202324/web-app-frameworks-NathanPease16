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
    let cursor = coll.find();
    console.log("all planets");
    await printAll(cursor);

    // If you want all the elements referenced by the cursor as an array,
    //  use the toArray function
    cursor = coll.find();
    const planets = await cursor.toArray();
    console.log("all planets as array: ");
    console.log(planets);

    // Find with a query object will return a cursor to all documents that
    //  match the query
    cursor = coll.find({ hasRings: true });
    console.log("Planets with rings: ");
    await printAll(cursor);

    // There can be multiple properties in the query object and all must
    //  match (i.e., and)
    cursor = coll.find({ hasRings: false, mainAtmosphere: "Ar" });
    console.log("Planets without rings and with Argon in the atmosphere");
    await printAll(cursor);

    // Operators can be specified (e.g., $lt, $gt, $lte, $gte, $eq, $ne, $in, $nin)
    cursor = coll.find({ "surfaceTemperatureC.mean": { $lt: 15 } });
    console.log(
      "Planets with an average surface temperature below 15 degrees celsius:"
    );
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
