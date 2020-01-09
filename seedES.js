const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "ES10-No1",
    capacity: 1000,
    engType: "Warehouse",
    basePrice: 2700,
    masts: [
      {
        masttype: "Single Stage Mast",
        mastsizes: [{ mastlength: 1600, price: 0 }]
      },
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2900, price: 190 },
          { mastlength: 3500, price: 505 }
        ]
      }
    ],
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 109 }
    ],

    batteries: [
      {
        batterytype: "2 x 12V 85 A/H",
        price: 330,
        chargers: [
          {
            chargertype: "Charger to Suit",
            price: 110
          }
        ]
      }
    ]
  },
  {
    model: "ES12-No2",
    capacity: 1200,
    engType: "Warehouse",
    basePrice: 4216,

    masts: [
      {
        masttype: "Single Stage Mast",
        mastsizes: [{ mastlength: 1600, price: 0 }]
      },
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2600, price: 184 },
          { mastlength: 2900, price: 324 },
          { mastlength: 3200, price: 464 },
          { mastlength: 3600, price: 550 }
        ]
      },
      {
        masttype: "2 Stage Free Lift Mast",
        mastsizes: [
          { mastlength: 2900, price: 574 },
          { mastlength: 3200, price: 669 }
        ]
      }
    ],

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 210 }
    ],
    platform: [{ platformtype: "", price: 144 }],
    armguard: [{ armguardtype: "", price: 180 }],
    loadbackrest: [{ loadbackresttype: "", price: 134 }],
    steering: [{ steeringtype: "Electronic", price: 397 }],

    batteries: [
      {
        batterytype: "24V 210 A/H",
        price: 976,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          }
        ]
      },
      {
        batterytype: "24V 240 A/H",
        price: 1060,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "ES12-No3",
    capacity: 1200,
    engType: "Warehouse",
    basePrice: 4246,

    masts: [
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2900, price: 0 },
          { mastlength: 3200, price: 27 },
          { mastlength: 3600, price: 59 }
        ]
      },
      {
        masttype: "2 Stage Free Lift Mast",
        mastsizes: [
          { mastlength: 2900, price: 449 },
          { mastlength: 3200, price: 509 },
          { mastlength: 3600, price: 741 }
        ]
      }
    ],

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 109 }
    ],
    loadbackrest: [{ loadbackresttype: "", price: 134 }],

    batteries: [
      {
        batterytype: "24V 180 A/H",
        price: 959,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 377
          }
        ]
      }
    ]
  },
  {
    model: "ES15-No1",
    capacity: 1500,
    engType: "Warehouse",
    basePrice: 5400,

    masts: [
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2900, price: 0 },
          { mastlength: 3400, price: 305 }
        ]
      },
      {
        masttype: "2 Stage Free Lift Mast",
        mastsizes: [
          { mastlength: 2900, price: 557 },
          { mastlength: 3400, price: 860 }
        ]
      }
    ],

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 210 }
    ],

    platform: [{ platformtype: "", price: 144 }],
    armguard: [{ armguardtype: "", price: 180 }],
    loadbackrest: [{ loadbackresttype: "", price: 134 }],
    steering: [{ steeringtype: "Electronic", price: 410 }],
    batteries: [
      {
        batterytype: "24V 210 A/H",
        price: 976,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 510
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "ES15-No2",
    capacity: 1500,
    engType: "Warehouse",
    basePrice: 5611,

    masts: [
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2900, price: 0 },
          { mastlength: 3600, price: 140 },
          { mastlength: 4000, price: 376 }
        ]
      },
      {
        masttype: "2 Stage Free Lift Mast",
        mastsizes: [
          { mastlength: 2900, price: 220 },
          { mastlength: 3600, price: 470 }
        ]
      },
      {
        masttype: "3 Stage Mast",
        mastsizes: [
          { mastlength: 4300, price: 560 },
          { mastlength: 4600, price: 1030 },
          { mastlength: 5000, price: 1288 },
          { mastlength: 5500, price: 1479 },
          { mastlength: 6000, price: 2399 }
        ]
      }
    ],

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 149 }
    ],

    platform: [{ platformtype: "", price: 152 }],
    armguard: [{ armguardtype: "", price: 188 }],
    loadbackrest: [{ loadbackresttype: "", price: 144 }],
    steering: [{ steeringtype: "Electronic", price: 410 }],

    batteries: [
      {
        batterytype: "24V 270 A/H",
        price: 1050,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 496
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 523
          }
        ]
      },
      {
        batterytype: "24V 350 A/H",
        price: 1190,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 496
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 523
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "ES16-No2",
    capacity: 1600,
    engType: "Warehouse",
    basePrice: 5717,

    masts: [
      {
        masttype: "2 Stage Mast",
        mastsizes: [
          { mastlength: 2900, price: 0 },
          { mastlength: 3200, price: 226 },
          { mastlength: 3600, price: 373 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 2900, price: 281 },
          { mastlength: 3200, price: 322 },
          { mastlength: 3600, price: 494 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4300, price: 1242 },
          { mastlength: 4600, price: 1383 }
        ]
      }
    ],

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 149 }
    ],

    loadbackrest: [{ loadbackresttype: "", price: 144 }],

    batteries: [
      {
        batterytype: "24V 270 A/H",
        price: 1050,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 496
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 523
          }
        ]
      }
    ],
    sideextractionbattery: [{ sideextractionbatterytype: "", price: 139 }]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  for (let forkliftItem of data) {
    const forky = new Forkliftdetail(forkliftItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
