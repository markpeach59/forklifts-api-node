const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBE15",
    capacity: 1500,
    engType: "Electric",
    basePrice: 10290
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.deleteMany({ model: "KBE15" }, function(err) {
    if (err) console.log("Delete Many Failed");
  });

  for (let forkliftItem of data) {
    const forky = new Forkliftdetail(forkliftItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
