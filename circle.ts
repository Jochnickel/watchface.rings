let args = { white: 0, missing: 0, black: 0, radius: 190, max: 100, color: "white", passive: "black", color2: "white", color2_until: 20, color3: "white", color3_until: 10 };
try {
    args.white = parseInt(process.argv[2]);
    args.missing = parseInt(process.argv[3]);
    args.black = parseInt(process.argv[4]);
    args.radius = parseInt(process.argv[5]);
    args.max = parseInt(process.argv[6]);
    args.color = process.argv[7];
    args.passive = process.argv[8];
    args.color2 = process.argv[9];
    args.color2_until = parseInt(process.argv[10]);
    args.color3 = process.argv[11];
    args.color3_until = parseInt(process.argv[12]);
    if (!(isFinite(args.white) && isFinite(args.missing) && isFinite(args.black))) {
        throw new Error();
    }
} catch (e) {
    console.error("usage: white, missing, black, [radius, max, color, passive_color, color2, color2_until, color3, color3_until ]. example:    node circle.ts 1 9 0");
    process.exit();
}

const BLACK = "black"
const WHITE = "white"
const HEIGHT = 400
const WIDTH = 400

const COLOR1 = args.color || WHITE
const COLOR2 = args.color2 || COLOR1
const COLOR3 = args.color3 || COLOR1
const COLOR2_UNTIL = args.color2_until || -1
const COLOR3_UNTIL = args.color3_until || -1
const COLOR_PASSIVE = args.passive || BLACK
const RADIUS = args.radius || 190
const MAX = args.max || 100
const DOT_RADIUS = 6

function printDot(i, color) {
    if (null === color) return;
    console.log(
        '<circle cx="' + Math.floor((Math.sin(i * Math.PI * 2 / MAX)) * RADIUS + (WIDTH / 2) + 0.5) +
        '" cy="' + Math.floor((-Math.cos(i * Math.PI * 2 / MAX)) * RADIUS + (HEIGHT / 2) + 0.5) +
        '" r="' + (color === BLACK ? (DOT_RADIUS + 1) : DOT_RADIUS) + '" fill="' + color + '" />'
    );
}


console.log('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">')

for (let i = 0; i < MAX;) {
    for (let w = 0; w < args.white && i < MAX; w++) {
        printDot(i, (i <= COLOR3_UNTIL) ? COLOR3 : (i <= COLOR2_UNTIL) ? COLOR2 : COLOR1);
        i++;
    };
    for (let m = 0; m < args.missing && i < MAX; m++) {
        printDot(i, null);
        i++;
    };
    for (let b = 0; b < args.black && i < MAX; b++) {
        printDot(i, COLOR_PASSIVE);
        i++;
    };
}

console.log("</svg>")
