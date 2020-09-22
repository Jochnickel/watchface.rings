let args = { white: 0, missing: 0, black: 0 }
try {
    args.white = parseInt(process.argv[2]);
    args.missing = parseInt(process.argv[3]);
    args.black = parseInt(process.argv[4]);
    if (!(isFinite(args.white) && isFinite(args.missing) && isFinite(args.black))) {
        throw new Error();
    }
} catch (e) {
    console.error("usage: white, missing, black. example:    node circle.ts 1 9 0")
    process.exit()
}

const BLACK = "black"
const WHITE = "white"
const HEIGHT = 400
const WIDTH = 400

const COLOR1 = WHITE
const COLOR2 = null
const COLOR3 = BLACK
const RADIUS = 190
const MAX = 100
const DOT_RADIUS = 6

function printDot(i, color) {
    if (null === color) return;
    console.log(
        '<circle cx="' + Math.floor((Math.sin(i * Math.PI * 2 / MAX)) * RADIUS + (WIDTH / 2) + 0.5) +
        '" cy="' + Math.floor((-Math.cos(i * Math.PI * 2 / MAX)) * RADIUS + (HEIGHT / 2) + 0.5) +
        '" r="' + (color === BLACK ? (DOT_RADIUS + 1) : DOT_RADIUS) + '" fill="' + color + '" />'
    )
}


console.log('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">')

for (let i = 0; i < 100;) {
    for (let w = 0; w < args.white && i < 100; w++) {
        printDot(i, COLOR1);
        i++;
    };
    for (let m = 0; m < args.missing && i < 100; m++) {
        printDot(i, COLOR2);
        i++;
    };
    for (let b = 0; b < args.black && i < 100; b++) {
        printDot(i, COLOR3);
        i++;
    };
}

console.log("</svg>")
