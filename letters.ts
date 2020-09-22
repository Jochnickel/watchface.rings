let args = { letter: "1", size: 0, color: "white" }
try {
    args.letter = process.argv[2];
    args.size = parseInt(process.argv[3]);
    args.color = process.argv[4];
    if (!(isFinite(args.size))) {
        throw new Error();
    }
} catch (e) {
    console.error("usage: letter, size, color. example:    node letters.ts A 8 white")
    process.exit()
}


console.log('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"><svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="' + (args.size * 2) + '" height="' + (args.size) + '" viewBox="0 0 ' + (args.size * 2) + ' ' + (args.size) + '" preserveAspectRatio="xMidYMid meet">')

console.log(
    '<text fill="' + args.color + '" >' + args.letter + '</text>'
)


console.log("</svg>")
