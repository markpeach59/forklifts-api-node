const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

async function subit() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG15", "KBG18", "KBG20"] } },
    { $set: { powertrain: "GCT21K LP Gas Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG25", "KBG30", "KBG35"] } },
    { $set: { powertrain: "GCT25K LP Gas  Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBG40", "KBG50"] } },
    { $set: { powertrain: "PSI LP Gas Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD15", "KBD18", "KBD20"] } },
    { $set: { powertrain: "ISUZU C240 Diesel Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD25", "KBD30", "KBD35"] } },
    { $set: { powertrain: "Mitsubishi S4S Diesel Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD40", "KBD50S"] } },
    { $set: { powertrain: "Kohler Diesel Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD50", "KBD60", "KBD70"] } },
    { $set: { powertrain: "Doosan Diesel Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  await Forkliftdetail.updateMany(
    { model: { $in: ["KBD100"] } },
    { $set: { powertrain: "Doosan Diesel Engine" } },
    function (err) {
      if (err) console.log("find Many Failed");
    }
  );

  mongoose.disconnect();

  console.info("Done!");
}

subit();
