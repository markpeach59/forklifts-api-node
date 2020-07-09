const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

async function subit() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD15", "KBD18", "KBD20"] } },
    {
      $set: {
        engines: { enginetype: "ISUZU C240 Diesel Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD25", "KBD30", "KBD35"] } },
    {
      $set: {
        engines: { enginetype: "Mitsubishi S4S Diesel Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD40", "KBD50S"] } },
    {
      $set: {
        engines: { enginetype: "Kholer Diesel Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD50", "KBD60", "KBD70", "KBD100"] } },
    {
      $set: {
        engines: { enginetype: "Doosan Diesel Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG15", "KBG18", "KBG20"] } },
    {
      $set: {
        engines: { enginetype: "GCT21K LP Gas Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG25", "KBG30", "KBG35"] } },
    {
      $set: {
        engines: { enginetype: "GCT25K LP Gas Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG40", "KBG50"] } },
    {
      $set: {
        engines: { enginetype: "PSI LP Gas Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD15", "KBD18", "KBD20"] } },
    {
      $addToSet: {
        engines: { enginetype: "ISUZU C240 Euro 5 Diesel Engine", price: 0 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD25", "KBD30", "KBD35"] } },
    {
      $addToSet: {
        engines: { enginetype: "Doosan EU5 Diesel Engine", price: 1896 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD40", "KBD50S"] } },
    {
      $addToSet: {
        engines: { enginetype: "Kohler EU5 Diesel Engine", price: 1678 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD50", "KBD60", "KBD70"] } },
    {
      $addToSet: {
        engines: { enginetype: "Doosan EU5 Diesel Engine", price: 6700 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD100"] } },
    {
      $addToSet: {
        engines: { enginetype: "Doosan EU5 Diesel Engine", price: 7100 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG15", "KBG18", "KBG20"] } },
    {
      $addToSet: {
        engines: { enginetype: "Deutz EU5 Diesel Engine", price: 2100 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG25", "KBG30", "KBG35"] } },
    {
      $addToSet: {
        engines: { enginetype: "Doosan EU5 Diesel Engine", price: 2600 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG40", "KBG50"] } },
    {
      $addToSet: {
        engines: { enginetype: "Doosan EU5 Diesel Engine", price: 1590 },
      },
    },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  mongoose.disconnect();

  console.info("Done!");
}

subit();
