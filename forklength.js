const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

async function subit() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.updateMany(
    { "tyres.tyretype": "None-Marking S/E Tyres" },
    { $set: { "tyres.$.tyretype": "Non-Marking S/E Tyres" } },
    function(err) {
      if (err) console.log("find Many Failed");
    }
  );

  mongoose.disconnect();

  console.info("Done!");
}

subit();
