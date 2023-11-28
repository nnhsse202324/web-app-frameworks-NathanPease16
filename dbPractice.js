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

    const cursor = coll.find();

    const planets = [];
    while (await cursor.hasNext()) {
      const planet = await cursor.next();
      if (planet.hasRings && planet.surfaceTemperatureC.mean > -150)
        planets.push(planet);
    }

    const planetsFormat = planets.map(
      (planet) =>
        `<b>${planet.name}</b>:<br/>Main Atmosphere: ${planet.mainAtmosphere}<br/>Mean Temperature: ${planet.surfaceTemperatureC.mean}<br/>`
    );

    console.log("<ul>");
    for (const planet of planetsFormat) {
      console.log("\t<li>" + planet + "</li>");
    }
    console.log("</ul>");
  } finally {
    await client.close();
  }
}

getPlanets();
