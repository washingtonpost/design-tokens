const fs = require("fs");
const typographyTokens = require("../packages/typography/tokens.json");
const glyphs = typographyTokens.typography.glyphs.value;

// At the moment, glyphhanger works best reading glyphs from a file
fs.writeFileSync(__dirname + "/supported-characters.txt", glyphs)

// TODO: Subset fonts entirely from this script. This will require some updates from glyphhanger
