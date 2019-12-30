const mongoose = require("mongoose");
const config = require("config");

const { Forklift } = require("./models/forklift");

const data = [
  {
    range: "KBET",
    models: [
      {
        model: "KBET15",
        capacity: 1500,
        engType: "Electric",
        basePrice: 11700
      },
      {
        model: "KBET18",
        capacity: 1800,
        engType: "Electric",
        basePrice: 12100
      },
      {
        model: "KBET20",
        capacity: 2000,
        engType: "Electric",
        basePrice: 13050
      }
    ]
  },
  {
    range: "KBE",
    models: [
      {
        model: "KBE15",
        capacity: 1500,
        engType: "Electric",
        basePrice: 10290
      },
      {
        model: "KBE18",
        capacity: 1750,
        engType: "Electric",
        basePrice: 10700
      },
      {
        model: "KBE20J",
        capacity: 2000,
        engType: "Electric",
        basePrice: 11700
      },
      {
        model: "KBE25J",
        capacity: 2500,
        engType: "Electric",
        basePrice: 12100
      },
      {
        model: "KBE30J",
        capacity: 3000,
        engType: "Electric",
        basePrice: 15340
      },
      {
        model: "KBE35J",
        capacity: 3500,
        engType: "Electric",
        basePrice: 16390
      }
    ]
  },
  {
    range: "KBD",
    models: [
      {
        model: "KBD15",
        capacity: 1500,
        engType: "Diesel",
        basePrice: 11303
      },
      {
        model: "KBD18",
        capacity: 1800,
        engType: "Diesel",
        basePrice: 11589
      },
      {
        model: "KBD20",
        capacity: 2000,
        engType: "Diesel",
        basePrice: 11920
      },
      {
        model: "KBD25",
        capacity: 2500,
        engType: "Diesel",
        basePrice: 12236
      },
      {
        model: "KBD30",
        capacity: 3000,
        engType: "Diesel",
        basePrice: 12980
      },
      {
        model: "KBD35",
        capacity: 3500,
        engType: "Diesel",
        basePrice: 13495
      },
      {
        model: "KBD25",
        capacity: 2500,
        engType: "Diesel",
        basePrice: 12236
      },
      {
        model: "KBD40",
        capacity: 4000,
        engType: "Diesel",
        basePrice: 22550
      },
      {
        model: "KBD50S",
        capacity: 5000,
        engType: "Diesel",
        basePrice: 23680
      },
      {
        model: "KBD50 (BIG)",
        capacity: 5000,
        engType: "Diesel",
        basePrice: 23680
      },
      {
        model: "KBD60",
        capacity: 6000,
        engType: "Diesel",
        basePrice: 12236
      },
      {
        model: "KBD70",
        capacity: 7000,
        engType: "Diesel",
        basePrice: 12236
      },
      {
        model: "KBD100",
        capacity: 10000,
        engType: "Diesel",
        basePrice: 12236
      }
    ]
  },
  {
    range: "KBG",
    models: [
      {
        model: "KBG15",
        capacity: 1500,
        engType: "LPG",
        basePrice: 11977
      },
      {
        model: "KBG18",
        capacity: 1750,
        engType: "LPG",
        basePrice: 12388
      },
      {
        model: "KBG20",
        capacity: 2000,
        engType: "LPG",
        basePrice: 12897
      },
      {
        model: "KBG25",
        capacity: 2500,
        engType: "LPG",
        basePrice: 12895
      },
      {
        model: "KBG30",
        capacity: 3000,
        engType: "LPG",
        basePrice: 13633
      },
      {
        model: "KBG35",
        capacity: 3500,
        engType: "LPG",
        basePrice: 14283
      },
      {
        model: "KBG40",
        capacity: 4000,
        engType: "LPG",
        basePrice: 22918
      },
      {
        model: "KBG50",
        capacity: 5000,
        engType: "LPG",
        basePrice: 24100
      }
    ]
  },
  {
    range: "EP",
    models: [
      {
        model: "EP12-WS",
        capacity: 1200,
        engType: "Warehouse",
        basePrice: 1250
      },
      {
        model: "EP15-WS",
        capacity: 1500,
        engType: "Warehouse",
        basePrice: 1495
      },
      {
        model: "EP16",
        capacity: 1600,
        engType: "Warehouse",
        basePrice: 3390
      },
      {
        model: "EP20-No4",
        capacity: 2000,
        engType: "Warehouse",
        basePrice: 3780
      },
      {
        model: "EP20T",
        capacity: 2000,
        engType: "Warehouse",
        basePrice: 3997
      },
      {
        model: "EP20-111",
        capacity: 2000,
        engType: "Warehouse",
        basePrice: 4882
      },
      {
        model: "EP20-120",
        capacity: 2000,
        engType: "Warehouse",
        basePrice: 5280
      },
      {
        model: "EP25-No2",
        capacity: 2500,
        engType: "Warehouse",
        basePrice: 3979
      }
    ]
  },
  {
    range: "ES",
    models: [
      {
        model: "Es10-No1",
        capacity: 1200,
        engType: "Warehouse",
        basePrice: 2700
      },
      {
        model: "ES12-No2S",
        capacity: 1500,
        engType: "Warehouse",
        basePrice: 4216
      },
      {
        model: "ES12-No3",
        capacity: 1200,
        engType: "Warehouse",
        basePrice: 4246
      },
      {
        model: "ES15-No1",
        capacity: 1500,
        engType: "Warehouse",
        basePrice: 5400
      },
      {
        model: "ES15-No2",
        capacity: 1500,
        engType: "Warehouse",
        basePrice: 5611
      },
      {
        model: "ES16-No2",
        capacity: 1600,
        engType: "Warehouse",
        basePrice: 5717
      }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Forklift.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });

  for (let rangeItem of data) {
    const forky = new Forklift(rangeItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
