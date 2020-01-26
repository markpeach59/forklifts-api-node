const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBE15J",
    capacity: 1500,
    engType: "Electric",
    basePrice: 10290,
    imgName: "KBE15.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1995, price: 0 },
          { mastlength: 3300, closedheight: 2145, price: 155 },
          { mastlength: 3500, closedheight: 2245, price: 250 },
          { mastlength: 4000, closedheight: 2545, price: 500 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1995, price: 550 },
          { mastlength: 3500, closedheight: 2245, price: 750 },
          { mastlength: 4000, closedheight: 2545, price: 900 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2005, price: 1400 },
          { mastlength: 4500, closedheight: 2105, price: 1510 },
          { mastlength: 4700, closedheight: 2175, price: 1660 },
          { mastlength: 5000, closedheight: 2305, price: 1800 },
          { mastlength: 5500, closedheight: 2455, price: 1910 },
          { mastlength: 6000, closedheight: 2655, price: 2300 }
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
      { sideshifttype: "Integral", price: 850 }
    ],
    sideleverhydraulic: [{ sideleverhydraulictype: "", price: 508 }],
    coldstoreprot: [{ coldstoreprottype: "", price: 2280 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 440 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 910 }
    ],
    batteries: [
      {
        batterytype: "440 A/H",
        price: 2690,
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
            price: 1428
          }
        ]
      },
      {
        batterytype: "520 A/H",
        price: 3160,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 490
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1428
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
    model: "KBE18J",
    capacity: 1750,
    engType: "Electric",
    basePrice: 10700,
    imgName: "KBE18.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1995, price: 0 },
          { mastlength: 3300, closedheight: 2145, price: 155 },
          { mastlength: 3500, closedheight: 2245, price: 250 },
          { mastlength: 4000, closedheight: 2545, price: 500 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1995, price: 550 },
          { mastlength: 3500, closedheight: 2245, price: 750 },
          { mastlength: 4000, closedheight: 2545, price: 900 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2005, price: 1400 },
          { mastlength: 4500, closedheight: 2105, price: 1510 },
          { mastlength: 4700, closedheight: 2175, price: 1660 },
          { mastlength: 5000, closedheight: 2305, price: 1800 },
          { mastlength: 5500, closedheight: 2455, price: 1910 },
          { mastlength: 6000, closedheight: 2655, price: 2300 }
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
    sideleverhydraulic: [{ sideleverhydraulictype: "", price: 508 }],
    coldstoreprot: [{ coldstoreprottype: "", price: 2280 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 440 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 910 }
    ],
    batteries: [
      {
        batterytype: "440 A/H",
        price: 2690,
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
            price: 1428
          }
        ]
      },
      {
        batterytype: "520 A/H",
        price: 3160,
        chargers: [
          {
            chargertype: "12 Hour 48V 80",
            price: 490
          },
          {
            chargertype: "8 Hour 48V 100",
            price: 510
          },
          {
            chargertype: "Fronius",
            price: 1428
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 795 },
      { cabinoption: "Full Steel Cabin", price: 1496 }
    ]
  },
  {
    model: "KBE20J",
    capacity: 2000,
    engType: "Electric",
    basePrice: 11700,
    imgName: "KBE20.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, price: 0 },
          { mastlength: 3300, closedheight: 2200, price: 150 },
          { mastlength: 3500, closedheight: 2300, price: 250 },
          { mastlength: 4000, closedheight: 2600, price: 480 },
          { mastlength: 4500, closedheight: 2850, price: 720 },
          { mastlength: 5000, closedheight: 3100, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, price: 600 },
          { mastlength: 3500, closedheight: 2300, price: 860 },
          { mastlength: 4000, closedheight: 2600, price: 980 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2100, price: 1480 },
          { mastlength: 4500, closedheight: 2150, price: 1510 },
          { mastlength: 4700, closedheight: 2215, price: 1700 },

          { mastlength: 5000, closedheight: 2393, price: 1900 },
          { mastlength: 5500, closedheight: 2627, price: 2090 },
          { mastlength: 6000, closedheight: 2860, price: 2450 },
          { mastlength: 6500, closedheight: 3095, price: 2690 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 92 },
      { forklength: 1370, price: 140 },
      { forklength: 1520, price: 291 },
      { forklength: 1800, price: 351 }
    ],
    valves: [
      { valvetype: "3rd", price: 256 },
      { valvetype: "3rd + 4th", price: 512 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 390 },
      { sideshifttype: "Integral", price: 880 }
    ],
    coldstoreprot: [{ coldstoreprottype: "", price: 1898 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 970 }
    ],
    batteries: [
      {
        batterytype: "48V 625 A/H",
        price: 2900,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 100",
            price: 604
          },
          {
            chargertype: "8 Hour 3 Phase 48V 120",
            price: 666
          }
        ]
      },
      {
        batterytype: "48V 700 A/H",
        price: 3300,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 120",
            price: 666
          },
          {
            chargertype: "8 Hour 3 Phase 48V 140",
            price: 986
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 810 },
      { cabinoption: "Full Steel Cabin", price: 1586 }
    ]
  },
  {
    model: "KBE25J",
    capacity: 2500,
    engType: "Electric",
    basePrice: 12100,
    imgName: "KBE25J.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, price: 0 },
          { mastlength: 3300, closedheight: 2200, price: 150 },
          { mastlength: 3500, closedheight: 2300, price: 250 },
          { mastlength: 4000, closedheight: 2600, price: 480 },
          { mastlength: 4500, closedheight: 2850, price: 720 },
          { mastlength: 5000, closedheight: 3100, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, price: 600 },
          { mastlength: 3500, closedheight: 2300, price: 860 },
          { mastlength: 4000, closedheight: 2600, price: 980 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2100, price: 1480 },
          { mastlength: 4500, closedheight: 2150, price: 1510 },
          { mastlength: 4700, closedheight: 2215, price: 1700 },

          { mastlength: 5000, closedheight: 2393, price: 1900 },
          { mastlength: 5500, closedheight: 2627, price: 2090 },
          { mastlength: 6000, closedheight: 2860, price: 2450 },
          { mastlength: 6500, closedheight: 3095, price: 2690 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 96 },
      { forklength: 1370, price: 160 },
      { forklength: 1520, price: 291 },
      { forklength: 1800, price: 354 }
    ],
    valves: [
      { valvetype: "3rd", price: 256 },
      { valvetype: "3rd + 4th", price: 512 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 390 },
      { sideshifttype: "Integral", price: 880 }
    ],
    coldstoreprot: [{ coldstoreprottype: "", price: 1898 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 970 }
    ],
    batteries: [
      {
        batterytype: "48V 625 A/H",
        price: 2900,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 100",
            price: 604
          },
          {
            chargertype: "8 Hour 3 Phase 48V 120",
            price: 666
          }
        ]
      },
      {
        batterytype: "48V 700 A/H",
        price: 3300,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 48V 120",
            price: 666
          },
          {
            chargertype: "8 Hour 3 Phase 48V 140",
            price: 986
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 810 },
      { cabinoption: "Full Steel Cabin", price: 1586 }
    ]
  },
  {
    model: "KBE30J",
    capacity: 3000,
    engType: "Electric",
    basePrice: 15340,
    imgName: "KBE30J.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 200 },
          { mastlength: 3500, closedheight: 2290, price: 270 },
          { mastlength: 4000, closedheight: 2590, price: 480 },
          { mastlength: 4500, closedheight: 2840, price: 680 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 700 },
          { mastlength: 3500, closedheight: 2290, price: 910 },
          { mastlength: 4000, closedheight: 2590, price: 110 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2090, price: 1600 },
          { mastlength: 4500, closedheight: 2140, price: 1700 },
          { mastlength: 4700, closedheight: 2205, price: 1800 },

          { mastlength: 5000, closedheight: 2383, price: 1950 },
          { mastlength: 5500, closedheight: 2617, price: 2100 },
          { mastlength: 6000, closedheight: 2850, price: 2300 },
          { mastlength: 6500, closedheight: 3035, price: 2800 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1220, price: 110 },
      { forklength: 1370, price: 175 },
      { forklength: 1520, price: 299 },
      { forklength: 1800, price: 396 }
    ],
    valves: [
      { valvetype: "3rd", price: 266 },
      { valvetype: "3rd + 4th", price: 522 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 411 },
      { sideshifttype: "Integral", price: 936 }
    ],
    coldstoreprot: [{ coldstoreprottype: "", price: 2240 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 970 }
    ],
    batteries: [
      {
        batterytype: "80V 560 A/H",
        price: 4490,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 80V 80",
            price: 748
          },
          {
            chargertype: "8 Hour 3 Phase 80V 100",
            price: 988
          }
        ]
      },
      {
        batterytype: "80V 620 A/H",
        price: 4695,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 80V 90",
            price: 758
          },
          {
            chargertype: "8 Hour 3 Phase 80V 110",
            price: 1078
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 890 },
      { cabinoption: "Full Steel Cabin", price: 1690 }
    ]
  },
  {
    model: "KBE35J",
    capacity: 3500,
    engType: "Electric",
    basePrice: 16390,
    imgName: "KBE35J.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 200 },
          { mastlength: 3500, closedheight: 2290, price: 270 },
          { mastlength: 4000, closedheight: 2590, price: 480 },
          { mastlength: 4500, closedheight: 2840, price: 680 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 700 },
          { mastlength: 3500, closedheight: 2290, price: 910 },
          { mastlength: 4000, closedheight: 2590, price: 110 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2090, price: 1600 },
          { mastlength: 4500, closedheight: 2140, price: 1700 },
          { mastlength: 4700, closedheight: 2205, price: 1800 },

          { mastlength: 5000, closedheight: 2383, price: 1950 },
          { mastlength: 5500, closedheight: 2617, price: 2100 },
          { mastlength: 6000, closedheight: 2850, price: 2300 },
          { mastlength: 6500, closedheight: 3035, price: 2800 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1220, price: 110 },
      { forklength: 1370, price: 175 },
      { forklength: 1520, price: 299 },
      { forklength: 1800, price: 396 }
    ],
    valves: [
      { valvetype: "3rd", price: 266 },
      { valvetype: "3rd + 4th", price: 522 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 411 },
      { sideshifttype: "Integral", price: 936 }
    ],
    coldstoreprot: [{ coldstoreprottype: "", price: 2240 }],
    reargrab: [{ reargrabtype: "", price: 130 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking S/E Solid Tyres", price: 970 }
    ],
    batteries: [
      {
        batterytype: "80V 560 A/H",
        price: 4490,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 80V 80",
            price: 748
          },
          {
            chargertype: "8 Hour 3 Phase 80V 100",
            price: 988
          }
        ]
      },
      {
        batterytype: "80V 620 A/H",
        price: 4695,
        chargers: [
          {
            chargertype: "12 Hour 3 Phase 80V 90",
            price: 758
          },
          {
            chargertype: "8 Hour 3 Phase 80V 110",
            price: 1078
          }
        ]
      }
    ],
    bfs: [{ bfstype: "", price: 228 }],
    trolley: [{ trolleytype: "", price: 110 }],
    blinkey: [{ blinkeytype: "", price: 35 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 890 },
      { cabinoption: "Full Steel Cabin", price: 1690 }
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
