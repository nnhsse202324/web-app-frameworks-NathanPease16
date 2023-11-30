"use strict";

const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const client = new MongoClient(process.env.MONGO_URI);

async function getPlanets() {
  try {
    await client.connect();

    const db = client.db("sample_guides");
    const coll = db.collection("planets");

    const cursor = coll.find({
      mainAtmosphere: "H2",
      orderFromSun: { $gt: 3 },
    });

    const planetsArr = await cursor.toArray();
    planetsArr.sort((a, b) => {
      return a.orderFromSun - b.orderFromSun;
    });

    const planetsMap = planetsArr.map(
      (item) =>
        `<b>${item.name}</b>: <br/>Main Atmosphere: ${item.mainAtmosphere}<br/> Mean Surface Temperature (Degrees C): ${item.surfaceTemperatureC.mean}<br/>`
    );

    console.log("<ul>");
    for (const planet of planetsMap) {
      console.log("<li>" + planet + "</li>");
    }
    console.log("</ul>");
  } finally {
    client.close();
  }
}

getPlanets();
