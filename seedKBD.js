const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "KBD15",
    capacity: 1500,
    engType: "Diesel",
    basePrice: 11303,
    imgName: "KBD15.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 0 },
          { mastlength: 3300, closedheight: 2152, price: 225 },
          { mastlength: 4000, closedheight: 2552, price: 395 },
          { mastlength: 4500, closedheight: 2802, price: 640 },
          { mastlength: 5000, closedheight: 3052, price: 760 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 501 },
          { mastlength: 4000, closedheight: 2552, price: 895 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2102, price: 1200 },
          { mastlength: 4500, closedheight: 2152, price: 1350 },
          { mastlength: 4700, closedheight: 2217, price: 1410 },
          { mastlength: 4800, closedheight: 2252, price: 1490 },
          { mastlength: 5000, closedheight: 2395, price: 1620 },
          { mastlength: 5500, closedheight: 2629, price: 1710 },
          { mastlength: 6000, closedheight: 2862, price: 1988 }
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
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBD18",
    capacity: 1750,
    engType: "Diesel",
    basePrice: 11589,
    imgName: "KBD18.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 0 },
          { mastlength: 3300, closedheight: 2152, price: 225 },
          { mastlength: 4000, closedheight: 2552, price: 395 },
          { mastlength: 4500, closedheight: 2802, price: 640 },
          { mastlength: 5000, closedheight: 3052, price: 760 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 501 },
          { mastlength: 4000, closedheight: 2552, price: 895 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2102, price: 1200 },
          { mastlength: 4500, closedheight: 2152, price: 1350 },
          { mastlength: 4700, closedheight: 2217, price: 1410 },
          { mastlength: 4800, closedheight: 2252, price: 1490 },
          { mastlength: 5000, closedheight: 2395, price: 1620 },
          { mastlength: 5500, closedheight: 2629, price: 1710 },
          { mastlength: 6000, closedheight: 2862, price: 1988 }
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
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBD20",
    capacity: 2000,
    engType: "Diesel",
    basePrice: 11920,
    imgName: "KBD20.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 0 },
          { mastlength: 3300, closedheight: 2152, price: 225 },
          { mastlength: 4000, closedheight: 2552, price: 395 },
          { mastlength: 4500, closedheight: 2802, price: 640 },
          { mastlength: 5000, closedheight: 3052, price: 760 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2002, price: 501 },
          { mastlength: 4000, closedheight: 2552, price: 895 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2102, price: 1200 },
          { mastlength: 4500, closedheight: 2152, price: 1350 },
          { mastlength: 4700, closedheight: 2217, price: 1410 },
          { mastlength: 4800, closedheight: 2252, price: 1490 },
          { mastlength: 5000, closedheight: 2395, price: 1620 },
          { mastlength: 5500, closedheight: 2629, price: 1710 },
          { mastlength: 6000, closedheight: 2862, price: 1988 }
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
    seat: [{ seattype: "Full Comfort", price: 181 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 819 },
      { cabinoption: "Full Steel Cabin", price: 1296 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 172 }]
  },
  {
    model: "KBD25",
    capacity: 2500,
    engType: "Diesel",
    basePrice: 12236,
    imgName: "KBD25.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 0 },
          { mastlength: 3300, closedheight: 2230, price: 295 },
          { mastlength: 4000, closedheight: 2630, price: 410 },
          { mastlength: 4500, closedheight: 2880, price: 688 },
          { mastlength: 5000, closedheight: 3130, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 609 },
          { mastlength: 4000, closedheight: 2630, price: 979 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2130, price: 1341 },
          { mastlength: 4500, closedheight: 2180, price: 1491 },
          { mastlength: 4700, closedheight: 2245, price: 1552 },
          { mastlength: 4800, closedheight: 2280, price: 1632 },
          { mastlength: 5000, closedheight: 2428, price: 1789 },
          { mastlength: 5500, closedheight: 2657, price: 1892 },
          { mastlength: 6000, closedheight: 2890, price: 2200 }
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
    forkpositioner: [{ forkpositionertype: "", price: 910 }],
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
    model: "KBD30",
    capacity: 3000,
    engType: "Diesel",
    basePrice: 12980,
    imgName: "KBD30.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 0 },
          { mastlength: 3300, closedheight: 2230, price: 305 },
          { mastlength: 4000, closedheight: 2630, price: 410 },
          { mastlength: 4500, closedheight: 2880, price: 688 },
          { mastlength: 5000, closedheight: 3130, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 629 },
          { mastlength: 4000, closedheight: 2630, price: 999 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2130, price: 150 },
          { mastlength: 4500, closedheight: 2180, price: 1700 },
          { mastlength: 4700, closedheight: 2245, price: 1790 },
          { mastlength: 4800, closedheight: 2280, price: 1820 },
          { mastlength: 5000, closedheight: 2423, price: 2100 },
          { mastlength: 5500, closedheight: 2657, price: 2300 },
          { mastlength: 6000, closedheight: 2880, price: 2450 }
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
    forkpositioner: [{ forkpositionertype: "", price: 1100 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking White Tyres", price: 903 },
      { tyretype: "Dual Drive Solid Tyres", price: 1180 }
    ],
    seat: [{ seattype: "Full Comfort", price: 190 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 980 },
      { cabinoption: "Full Steel Cabin", price: 1510 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 181 }]
  },
  {
    model: "KBD35",
    capacity: 3500,
    engType: "Diesel",
    basePrice: 13495,
    imgName: "KBD35.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 0 },
          { mastlength: 3300, closedheight: 2230, price: 305 },
          { mastlength: 4000, closedheight: 2630, price: 410 },
          { mastlength: 4500, closedheight: 2880, price: 688 },
          { mastlength: 5000, closedheight: 3130, price: 988 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2080, price: 629 },
          { mastlength: 4000, closedheight: 2630, price: 999 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2130, price: 150 },
          { mastlength: 4500, closedheight: 2180, price: 1700 },
          { mastlength: 4700, closedheight: 2245, price: 1790 },
          { mastlength: 4800, closedheight: 2280, price: 1820 },
          { mastlength: 5000, closedheight: 2423, price: 2100 },
          { mastlength: 5500, closedheight: 2657, price: 2300 },
          { mastlength: 6000, closedheight: 2880, price: 2450 }
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
    forkpositioner: [{ forkpositionertype: "", price: 1100 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 510 },
      { tyretype: "None-Marking White Tyres", price: 903 },
      { tyretype: "Dual Drive Solid Tyres", price: 1180 }
    ],
    seat: [{ seattype: "Full Comfort", price: 190 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 980 },
      { cabinoption: "Full Steel Cabin", price: 1510 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 181 }]
  },
  {
    model: "KBD40",
    capacity: 4000,
    engType: "Diesel",
    basePrice: 22550,
    imgName: "KBD40.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2390, price: 0 },
          { mastlength: 3300, closedheight: 2540, price: 390 },
          { mastlength: 4000, closedheight: 2940, price: 810 },
          { mastlength: 4500, closedheight: 3190, price: 1011 },
          { mastlength: 5000, closedheight: 3440, price: 1620 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2390, price: 1010 },
          { mastlength: 4000, closedheight: 2890, price: 1800 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2245, price: 1390 },
          { mastlength: 4350, closedheight: 2350, price: 1920 },
          { mastlength: 4500, closedheight: 2441, price: 2130 },
          { mastlength: 4700, closedheight: 2507, price: 2310 },
          { mastlength: 5000, closedheight: 2540, price: 2608 },
          { mastlength: 5500, closedheight: 2765, price: 2966 },
          { mastlength: 6000, closedheight: 3005, price: 3200 }
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
    sideshift: [{ sideshifttype: "Hook On", price: 890 }],
    forkpositioner: [{ forkpositionertype: "", price: 1700 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 980 },
      { tyretype: "Dual Drive Solid Tyres", price: 2200 },
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
    model: "KBD50S",
    capacity: 5000,
    engType: "Diesel",
    basePrice: 23680,
    imgName: "KBD50S.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2390, price: 0 },
          { mastlength: 3300, closedheight: 2540, price: 390 },
          { mastlength: 4000, closedheight: 2940, price: 810 },
          { mastlength: 4500, closedheight: 3190, price: 1011 },
          { mastlength: 5000, closedheight: 3440, price: 1620 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2390, price: 1010 },
          { mastlength: 4000, closedheight: 2890, price: 1800 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2245, price: 1390 },
          { mastlength: 4350, closedheight: 2350, price: 1920 },
          { mastlength: 4500, closedheight: 2441, price: 2130 },
          { mastlength: 4700, closedheight: 2507, price: 2310 },
          { mastlength: 5000, closedheight: 2540, price: 2608 },
          { mastlength: 5500, closedheight: 2765, price: 2966 },
          { mastlength: 6000, closedheight: 3005, price: 3200 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 0 },
      { forklength: 1200, price: 180 },
      { forklength: 1370, price: 266 },
      { forklength: 1500, price: 410 },
      { forklength: 1800, price: 480 },
      { forklength: 2120, price: 560 }
    ],
    valves: [
      { valvetype: "3rd", price: 397 },
      { valvetype: "3rd + 4th", price: 996 }
    ],
    sideshift: [{ sideshifttype: "Hook On", price: 890 }],
    forkpositioner: [{ forkpositionertype: "", price: 1700 }],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 980 },
      { tyretype: "Dual Drive Solid Tyres", price: 2200 },
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
    model: "KBD50",
    capacity: 5000,
    engType: "Diesel",
    basePrice: 32303,
    imgName: "KBD50.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 0 },
          { mastlength: 3300, closedheight: 2650, price: 410 },
          { mastlength: 4000, closedheight: 3050, price: 890 },
          { mastlength: 4500, closedheight: 3300, price: 1100 },
          { mastlength: 5000, closedheight: 3550, price: 1800 },
          { mastlength: 6000, closedheight: 4300, price: 2073 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 1200 },
          { mastlength: 3500, closedheight: 2710, price: 1566 },
          { mastlength: 4000, closedheight: 3050, price: 1976 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500, closedheight: 2655, price: 2710 },
          { mastlength: 4700, closedheight: 2760, price: 2996 },
          { mastlength: 5000, closedheight: 2825, price: 3216 },
          { mastlength: 5400, closedheight: 2960, price: 3300 },
          { mastlength: 6000, closedheight: 3160, price: 3995 }
        ]
      }
    ],
    forks: [
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 290 },
      { forklength: 1500, price: 470 },
      { forklength: 1800, price: 580 },
      { forklength: 2120, price: 897 },
      { forklength: 2420, price: 988 }
    ],
    valves: [
      { valvetype: "3rd", price: 510 },
      { valvetype: "3rd + 4th", price: 1100 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 890 },
      { sideshifttype: "Integral", price: 1700 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 1392 },
      { tyretype: "None Marking Tyres", price: 2437 }
    ],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 1897 },
      { cabinoption: "Full Steel Cabin", price: 2480 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 494 }],
    aircon: [{ aircontype: "Air Con", price: 1484 }]
  },
  {
    model: "KBD60",
    capacity: 6000,
    engType: "Diesel",
    basePrice: 34805,
    imgName: "KBD60.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 0 },
          { mastlength: 3300, closedheight: 2650, price: 410 },
          { mastlength: 4000, closedheight: 3050, price: 890 },
          { mastlength: 4500, closedheight: 3300, price: 1100 },
          { mastlength: 5000, closedheight: 3550, price: 1800 },
          { mastlength: 6000, closedheight: 4300, price: 2073 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 1200 },
          { mastlength: 3500, closedheight: 2710, price: 1566 },
          { mastlength: 4000, closedheight: 3050, price: 1976 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500, closedheight: 2655, price: 2710 },
          { mastlength: 4700, closedheight: 2760, price: 2996 },
          { mastlength: 5000, closedheight: 2825, price: 3216 },
          { mastlength: 5400, closedheight: 2960, price: 3300 },
          { mastlength: 6000, closedheight: 3160, price: 3995 }
        ]
      }
    ],
    forks: [
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 290 },
      { forklength: 1500, price: 470 },
      { forklength: 1800, price: 580 },
      { forklength: 2120, price: 897 },
      { forklength: 2420, price: 988 }
    ],
    valves: [
      { valvetype: "3rd", price: 510 },
      { valvetype: "3rd + 4th", price: 1100 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 890 },
      { sideshifttype: "Integral", price: 1700 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 1392 },
      { tyretype: "None Marking Tyres", price: 2437 }
    ],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 1897 },
      { cabinoption: "Full Steel Cabin", price: 2480 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 494 }],
    aircon: [{ aircontype: "Air Con", price: 1484 }]
  },
  {
    model: "KBD70",
    capacity: 7000,
    engType: "Diesel",
    basePrice: 36608,
    imgName: "KBD70.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 0 },
          { mastlength: 3300, closedheight: 2650, price: 410 },
          { mastlength: 4000, closedheight: 3050, price: 890 },
          { mastlength: 4500, closedheight: 3300, price: 1100 },
          { mastlength: 5000, closedheight: 3550, price: 1800 },
          { mastlength: 6000, closedheight: 4300, price: 2073 }
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2500, price: 1200 },
          { mastlength: 3500, closedheight: 2710, price: 1566 },
          { mastlength: 4000, closedheight: 3050, price: 1976 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500, closedheight: 2655, price: 2710 },
          { mastlength: 4700, closedheight: 2760, price: 2996 },
          { mastlength: 5000, closedheight: 2825, price: 3216 },
          { mastlength: 5400, closedheight: 2960, price: 3300 },
          { mastlength: 6000, closedheight: 3160, price: 3995 }
        ]
      }
    ],
    forks: [
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 290 },
      { forklength: 1500, price: 470 },
      { forklength: 1800, price: 580 },
      { forklength: 2120, price: 897 },
      { forklength: 2420, price: 988 }
    ],
    valves: [
      { valvetype: "3rd", price: 510 },
      { valvetype: "3rd + 4th", price: 1100 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 890 },
      { sideshifttype: "Integral", price: 1700 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 1392 },
      { tyretype: "None Marking Tyres", price: 2437 }
    ],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 1897 },
      { cabinoption: "Full Steel Cabin", price: 2480 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 494 }],
    aircon: [{ aircontype: "Air Con", price: 1484 }]
  },
  {
    model: "KBD100",
    capacity: 10000,
    engType: "Diesel",
    basePrice: 51889,
    imgName: "KBD100.jpg",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, price: 0 },
          { mastlength: 3300, price: 600 },
          { mastlength: 4000, price: 2500 },
          { mastlength: 4500, price: 3300 },
          { mastlength: 5000, price: 4100 },
          { mastlength: 6000, price: 5200 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500, price: 3900 },
          { mastlength: 4700, price: 4100 },
          { mastlength: 5000, price: 5200 },
          { mastlength: 5400, price: 5400 },
          { mastlength: 6000, price: 5800 }
        ]
      }
    ],
    forks: [
      { forklength: 1520, price: 0 },
      { forklength: 1670, price: 893 },
      { forklength: 1820, price: 997 },
      { forklength: 2120, price: 1280 },
      { forklength: 2440, price: 1350 }
    ],
    valves: [
      { valvetype: "3rd", price: 590 },
      { valvetype: "3rd + 4th", price: 1209 }
    ],

    tyres: [{ tyretype: "S/E Solid Tyres", price: 2589 }],
    seat: [
      { seattype: "Full Comfort", price: 210 },
      { seattype: "Full Lumbar", price: 695 },
      { seattype: "Lumbar with Headrest", price: 835 }
    ],
    cabin: [
      { cabinoption: "Half Cabin", price: 2210 },
      { cabinoption: "Full Steel Cabin", price: 2690 }
    ],
    heater: [{ heatertype: "Heater/Demister", price: 494 }],
    aircon: [{ aircontype: "Air Con", price: 1530 }]
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
