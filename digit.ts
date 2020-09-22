let args = { digit: 1, radius: 0, color: "white" }
try {
    args.digit = parseInt(process.argv[2]);
    args.radius = parseInt(process.argv[3]);
    args.color = process.argv[4];
    if (!(isFinite(args.digit) && isFinite(args.radius))) {
        throw new Error();
    }
} catch (e) {
    console.error("usage: digit, radius, color. example:    node digits.ts 5 8 white")
    process.exit()
}

function printDot(i, radius, color) {
    if (null === color) return;
    console.log(
        '<circle cx="' + (args.radius + Math.ceil(i / 2) * args.radius * 2) +
        '" cy="' + (args.radius + ((i+1) % 2) * args.radius * 2) +
        '" r="' + (radius) + '" fill="' + color + '" />'
    )
}


console.log('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="' + (args.radius * 14) + '" height="' + (args.radius * 4) + '" viewBox="0 0 ' + (args.radius * 14) + ' ' + (args.radius * 4) + '" preserveAspectRatio="xMidYMid meet">')
for (let i = args.digit; i < 1; i++) {
    printDot(1-i, args.radius/2, args.color)
}
for (let i = 1; i <= args.digit; i++) {
    printDot(i, args.radius, args.color)
}

console.log("</svg>")
