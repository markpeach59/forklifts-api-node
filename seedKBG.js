const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBG15",
    capacity: 1500,
    engType: "LPG",
    basePrice: 11977,
    imgName: "KBG15.jpg",
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
          { mastlength: 4000, price: 896 }
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
      { sideshifttype: "Hook On", price: 360 },
      { sideshifttype: "Integral", price: 512 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 410 },
      { tyretype: "None-Marking White Tyres", price: 748 }
    ],
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBG18",
    capacity: 1750,
    engType: "LPG",
    basePrice: 12388,
    imgName: "KBG18.jpg",
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
          { mastlength: 4000, price: 896 }
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
      { sideshifttype: "Hook On", price: 360 },
      { sideshifttype: "Integral", price: 512 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 410 },
      { tyretype: "None-Marking White Tyres", price: 748 }
    ],
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBG20",
    capacity: 2000,
    engType: "LPG",
    basePrice: 12897,
    imgName: "KBG20.jpg",
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
          { mastlength: 4000, price: 896 }
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
      { sideshifttype: "Hook On", price: 360 },
      { sideshifttype: "Integral", price: 512 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 410 },
      { tyretype: "None-Marking White Tyres", price: 748 }
    ],
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBG25",
    capacity: 2500,
    engType: "LPG",
    basePrice: 12895,
    imgName: "KBG25.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 295 },
          { mastlength: 4000, price: 410 },
          { mastlength: 4500, price: 688 },
          { mastlength: 5000, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 609 },
          { mastlength: 4000, price: 979 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 1341 },
          { mastlength: 4500, price: 1491 },
          { mastlength: 4700, price: 1552 },
          { mastlength: 4800, price: 1632 },
          { mastlength: 5000, price: 1789 },
          { mastlength: 5500, price: 1892 },
          { mastlength: 6000, price: 2200 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 98 },
      { forklength: 1370, price: 174 },
      { forklength: 1500, price: 295 },
      { forklength: 1670, price: 330 }
    ],
    valves: [
      { valvetype: "3rd", price: 336 },
      { valvetype: "3rd + 4th", price: 896 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 375 },
      { sideshifttype: "Integral", price: 880 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 480 },
      { tyretype: "None-Marking White Tyres", price: 836 }
    ],
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 910 },
      { cabinoption: "Full Steel Cabin", price: 1400 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 180 }]
  },
  {
    model: "KBG30",
    capacity: 3000,
    engType: "LPG",
    basePrice: 13633,
    imgName: "KBG30.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 305 },
          { mastlength: 4000, price: 410 },
          { mastlength: 4500, price: 688 },
          { mastlength: 5000, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 629 },
          { mastlength: 4000, price: 999 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 1580 },
          { mastlength: 4500, price: 1700 },
          { mastlength: 4700, price: 1790 },
          { mastlength: 4800, price: 1820 },
          { mastlength: 5000, price: 2100 },
          { mastlength: 5500, price: 2300 },
          { mastlength: 6000, price: 2450 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 110 },
      { forklength: 1370, price: 194 },
      { forklength: 1500, price: 305 },
      { forklength: 1670, price: 345 },
      { forklength: 1800, price: 380 }
    ],
    valves: [
      { valvetype: "3rd", price: 336 },
      { valvetype: "3rd + 4th", price: 989 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 428 },
      { sideshifttype: "Integral", price: 987 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking White Tyres", price: 903 },
      { tyretype: "Dual Drive Tyres", price: 1803 }
    ],
    seat: [{ seattype: "Full Comfort", price: 190 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 980 },
      { cabinoption: "Full Steel Cabin", price: 1510 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 181 }]
  },
  {
    model: "KBG35",
    capacity: 3500,
    engType: "LPG",
    basePrice: 14283,
    imgName: "KBG35.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 305 },
          { mastlength: 4000, price: 410 },
          { mastlength: 4500, price: 688 },
          { mastlength: 5000, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 629 },
          { mastlength: 4000, price: 999 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 1580 },
          { mastlength: 4500, price: 1700 },
          { mastlength: 4700, price: 1790 },
          { mastlength: 4800, price: 1820 },
          { mastlength: 5000, price: 2100 },
          { mastlength: 5500, price: 2300 },
          { mastlength: 6000, price: 2450 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 110 },
      { forklength: 1370, price: 194 },
      { forklength: 1500, price: 305 },
      { forklength: 1670, price: 345 },
      { forklength: 1800, price: 380 }
    ],
    valves: [
      { valvetype: "3rd", price: 336 },
      { valvetype: "3rd + 4th", price: 989 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 428 },
      { sideshifttype: "Integral", price: 987 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking White Tyres", price: 903 },
      { tyretype: "Dual Drive Tyres", price: 1803 }
    ],
    seat: [{ seattype: "Full Comfort", price: 190 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 980 },
      { cabinoption: "Full Steel Cabin", price: 1510 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 181 }]
  },
  {
    model: "KBG40",
    capacity: 4000,
    engType: "LPG",
    basePrice: 22918,
    imgName: "KBG40.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 390 },
          { mastlength: 4000, price: 810 },
          { mastlength: 4500, price: 1011 },
          { mastlength: 5000, price: 1620 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 1010 },
          { mastlength: 4000, price: 1800 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, price: 1390 },
          { mastlength: 4350, price: 1920 },
          { mastlength: 4500, price: 2130 },
          { mastlength: 4700, price: 2310 },
          { mastlength: 5000, price: 2608 },
          { mastlength: 5400, price: 2966 },
          { mastlength: 6000, price: 3200 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 150 },
      { forklength: 1370, price: 266 },
      { forklength: 1500, price: 410 },
      { forklength: 1800, price: 480 },
      { forklength: 2120, price: 560 }
    ],
    valves: [
      { valvetype: "3rd", price: 397 },
      { valvetype: "3rd + 4th", price: 996 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 890 },
      { sideshifttype: "Sideshifting Fork Positioner", price: 1700 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 980 },
      { tyretype: "Dual Drive Tyres", price: 2200 },
      { tyretype: "Dual Drive Pneumatic Tyres", price: 1190 }
    ],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 1480 },
      { cabinoption: "Full Steel Cabin", price: 2277 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 320 }],
    aircon: [{ aircontype: "Air Con", price: 1400 }]
  },
  {
    model: "KBG50",
    capacity: 5000,
    engType: "LPG",
    basePrice: 24100,
    imgName: "KBG50.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 390 },
          { mastlength: 4000, price: 810 },
          { mastlength: 4500, price: 1011 },
          { mastlength: 5000, price: 1620 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 1010 },
          { mastlength: 4000, price: 1800 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, price: 1390 },
          { mastlength: 4350, price: 1920 },
          { mastlength: 4500, price: 2130 },
          { mastlength: 4700, price: 2310 },
          { mastlength: 5000, price: 2608 },
          { mastlength: 5400, price: 2966 },
          { mastlength: 6000, price: 3200 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, inCost: 0 },
      { forklength: 1200, price: 150 },
      { forklength: 1370, price: 266 },
      { forklength: 1500, price: 410 },
      { forklength: 1800, price: 480 },
      { forklength: 2120, price: 560 }
    ],
    valves: [
      { valvetype: "3rd", price: 397 },
      { valvetype: "3rd + 4th", price: 996 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 890 },
      { sideshifttype: "Sideshifting Fork Positioner", price: 1700 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 980 },
      { tyretype: "Dual Drive Tyres", price: 2200 },
      { tyretype: "Dual Drive Pneumatic Tyres", price: 1190 }
    ],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 1480 },
      { cabinoption: "Full Steel Cabin", price: 2277 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 320 }],
    aircon: [{ aircontype: "Air Con", price: 1400 }]
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
