const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "EP12-WS",
    capacity: 1200,
    engType: "Warehouse",
    basePrice: 1250,

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 0 }
    ]
  },
  {
    model: "EP15-WS",
    capacity: 1500,
    engType: "Warehouse",
    basePrice: 1490,

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 0 }
    ]
  },
  {
    model: "EP16",
    capacity: 1600,
    engType: "Warehouse",
    basePrice: 3390,

    forks2d: [
      { forklength: "540 X 800", price: 370 },
      { forklength: "540 X 1000", price: 390 },
      { forklength: "685 X 1220 (Single)", price: 97 },
      { forklength: "685 X 1220 (Twin)", price: 108 }
    ],

    batteries: [
      {
        batterytype: "24V 160 A/H",
        price: 733,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 395
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 417
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "EP20-111",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 4882,

    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 210 }
    ],

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
            price: 518
          }
        ]
      },

      {
        batterytype: "24V 270 A/H",
        price: 1080,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 518
          }
        ],
        bfs: [{ bfstype: "", price: 88 }],
        sideextractionbattery: [{ sideextractionbatterytype: "", price: 602 }]
      },
      {
        batterytype: "24V 360 A/H",
        price: 1190,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 518
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "EP20-120",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 5280,

    forks2d: [
      { forklength: "685 X 1150", price: 110 },
      { forklength: "540 X 2400", price: 490 },
      { forklength: "685 X 2400", price: 565 }
    ],

    batteries: [
      {
        batterytype: "24V 480 A/H",
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
      },

      {
        batterytype: "24V 360 A/H",
        price: 1490,
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
    model: "EP20T",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 3997,

    forks2d: [
      { forklength: "560 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 210 }
    ],

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
            price: 518
          }
        ]
      },

      {
        batterytype: "24V 270 A/H",
        price: 1080,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 518
          }
        ]
      },
      {
        batterytype: "24V 360 A/H",
        price: 1190,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 477
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 518
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }]
  },
  {
    model: "EP20-No4",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 3780,

    forks2d: [
      { forklength: "540 X 1000", price: 390 },
      { forklength: "685 X 1220 (Twin)", price: 398 },
      { forklength: "685 X 1220 (Twin)", price: 210 },
      { forklength: "685 X 1220 (Single)", price: 97 },
      { forklength: "540 X 1600 (Single)", price: 611 },
      { forklength: "540 X 2400 (Twin)", price: 621 }
    ],

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
            price: 518
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }],
    sideextractionbattery: [{ sideextractionbatterytype: "", price: 602 }]
  },
  {
    model: "EP25-No2",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 3979,

    forks2d: [
      { forklength: "540 X 1500", price: 390 },
      { forklength: "685 X 1220", price: 197 }
    ],

    batteries: [
      {
        batterytype: "24V 350 A/H",
        price: 1190,
        chargers: [
          {
            chargertype: "12 Hour Single Phase",
            price: 495
          },
          {
            chargertype: "8 Hour Single Phase",
            price: 523
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 88 }],
    sideextractionbattery: [{ sideextractionbatterytype: "", price: 602 }]
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
