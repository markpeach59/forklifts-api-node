const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBET15",
    capacity: 1500,
    engType: "Electric",
    basePrice: 11700,
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 155 },
          { mastlength: 3500, price: 250 },
          { mastlength: 4000, price: 500 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 550 },
          { mastlength: 3500, price: 750 },
          { mastlength: 4000, price: 900 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 1400 },
          { mastlength: 4500, price: 1510 },
          { mastlength: 4700, price: 1660 },
          { mastlength: 4800, price: 1490 },
          { mastlength: 5000, price: 1800 },
          { mastlength: 5500, price: 1910 },
          { mastlength: 6000, price: 2300 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, inCost: 0 },
      { forklength: 1200, price: 92 },
      { forklength: 1370, price: 140 },
      { forklength: 1500, price: 261 },
      { forklength: 1670, price: 339 }
    ],
    valves: [
      { valvetype: "3rd", price: 256 },
      { valvetype: "3rd + 4th", price: 512 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 360 },
      { sideshifttype: "Integral", price: 512 }
    ],
    tyres: [{ tyretype: "None-Marking S/E Tyres", price: 298 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 795 },
      { cabinoption: "Full Steel Cabin", price: 1410 }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.deleteMany({ model: "KBET15" }, function(err) {
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
