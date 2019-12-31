const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBD15",
    capacity: 1500,
    engType: "Diesel",
    basePrice: 11303,
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 225 },
          { mastlength: 4000, price: 395 },
          { mastlength: 4500, price: 640 },
          { mastlength: 5000, price: 760 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 501 },

          { mastlength: 4000, price: 895 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 1200 },
          { mastlength: 4500, price: 1350 },
          { mastlength: 4700, price: 1410 },
          { mastlength: 4800, price: 1490 },
          { mastlength: 5000, price: 1620 },
          { mastlength: 5500, price: 1710 },
          { mastlength: 6000, price: 1988 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 95 },
      { forklength: 1370, price: 169 },
      { forklength: 1500, price: 265 },
      { forklength: 1670, price: 311 }
    ],
    valves: [
      { valvetype: "3rd", price: 330 },
      { valvetype: "3rd + 4th", price: 730 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 350 },
      { sideshifttype: "Integral", price: 800 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 410 },
      { tyretype: "None-Marking White Tyres", price: 748 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Forkliftdetail.deleteMany({ model: "KBD15" }, function(err) {
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
