const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBET15",
    capacity: 1500,
    engType: "Electric",
    basePrice: 11700,
    imgName: "KBET15.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2005, price: 0 },
          { mastlength: 3300, closedheight: 2145, price: 155 },
          { mastlength: 3500, closedheight: 2245, price: 250 },
          { mastlength: 4000, closedheight: 2545, price: 500 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2005, price: 550 },
          { mastlength: 3500, closedheight: 2245, price: 750 },
          { mastlength: 4000, closedheight: 2545, price: 900 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2065, price: 1400 },
          { mastlength: 4500, closedheight: 2115, price: 1510 },
          { mastlength: 4700, closedheight: 2185, price: 1660 },
          { mastlength: 5000, closedheight: 2315, price: 1800 },
          { mastlength: 5500, closedheight: 2465, price: 1910 },
          { mastlength: 6000, closedheight: 2665, price: 2300 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
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
    coldstoreprot: [{ coldstoreprottype: "", price: 1662 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [{ tyretype: "None-Marking S/E Tyres", price: 298 }],
    seat: [{ seattype: "Full Comfort", price: 191 }],
    batteries: [
      {
        batterytype: "495 A/H",
        price: 2620,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 486
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1400
          }
        ]
      },
      {
        batterytype: "525 A/H",
        price: 2746,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 486
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1400
          }
        ]
      }
    ],

    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 795 },
      { cabinoption: "Full Steel Cabin", price: 1410 }
    ]
  },
  {
    model: "KBET18",
    capacity: 1750,
    engType: "Electric",
    basePrice: 12100,
    imgName: "KBET18.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2005, price: 0 },
          { mastlength: 3300, closedheight: 2145, price: 155 },
          { mastlength: 3500, closedheight: 2245, price: 250 },
          { mastlength: 4000, closedheight: 2545, price: 500 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2005, price: 550 },
          { mastlength: 3500, closedheight: 2245, price: 750 },
          { mastlength: 4000, closedheight: 2545, price: 900 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2065, price: 1400 },
          { mastlength: 4500, closedheight: 2115, price: 1510 },
          { mastlength: 4700, closedheight: 2185, price: 1660 },
          { mastlength: 5000, closedheight: 2315, price: 1800 },
          { mastlength: 5500, closedheight: 2465, price: 1910 },
          { mastlength: 6000, closedheight: 2665, price: 2300 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
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
    coldstoreprot: [{ coldstoreprottype: "", price: 1662 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [{ tyretype: "None-Marking S/E Tyres", price: 298 }],
    batteries: [
      {
        batterytype: "495 A/H",
        price: 2620,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 486
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1400
          }
        ]
      },
      {
        batterytype: "525 A/H",
        price: 2746,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 486
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1400
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 795 },
      { cabinoption: "Full Steel Cabin", price: 1410 }
    ]
  },
  {
    model: "KBET20",
    capacity: 2000,
    engType: "Electric",
    basePrice: 13050,
    imgName: "KBET20.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2007, price: 0 },
          { mastlength: 3300, closedheight: 2157, price: 185 },
          { mastlength: 3500, closedheight: 2257, price: 270 },
          { mastlength: 4000, closedheight: 2557, price: 540 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2007, price: 680 },
          { mastlength: 3500, closedheight: 2257, price: 8850 },
          { mastlength: 4000, closedheight: 2557, price: 1040 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2125, price: 1580 },
          { mastlength: 4500, closedheight: 2175, price: 1690 },
          { mastlength: 4700, closedheight: 2418, price: 1840 },
          { mastlength: 5000, closedheight: 2418, price: 1960 },
          { mastlength: 5500, closedheight: 2652, price: 2080 },
          { mastlength: 6000, closedheight: 2885, price: 2360 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 92 },
      { forklength: 1370, price: 140 },
      { forklength: 1500, price: 261 },
      { forklength: 1670, price: 339 }
    ],
    valves: [
      { valvetype: "3rd", price: 260 },
      { valvetype: "3rd + 4th", price: 520 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 380 },
      { sideshifttype: "Integral", price: 925 }
    ],
    coldstoreprot: [{ coldstoreprottype: "", price: 2040 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [{ tyretype: "None-Marking S/E Tyres", price: 298 }],
    batteries: [
      {
        batterytype: "625 A/H",
        price: 2781,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 90",
            price: 646
          },
          {
            chargertype: "8 Hour 3 Phase 48V 120",
            price: 666
          },
          {
            chargertype: "Fronius",
            price: 1520
          }
        ]
      },
      {
        batterytype: "700 A/H",
        price: 3179,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 100",
            price: 680
          },
          {
            chargertype: "8 Hour 3 Phase 48V 140",
            price: 698
          },
          {
            chargertype: "Fronius",
            price: 1520
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 795 },
      { cabinoption: "Full Steel Cabin", price: 1410 }
    ]
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
