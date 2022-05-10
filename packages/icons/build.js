const fs = require("fs");
const { html } = require("common-tags");
const configFile = "tokens.json";
const icons = require(`./${configFile}`);
const directory = "./dist";
const iconSizes = ["16", "24", "32"];

const rmDir = function(dirPath) {
  try {
    var files = fs.readdirSync(dirPath);
  } catch (e) {
    return;
  }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + "/" + files[i];
      if (fs.statSync(filePath).isFile()) fs.unlinkSync(filePath);
      else rmDir(filePath);
    }
  fs.rmdirSync(dirPath);
};

const createSVG = ({ size, name, path, fillRule }) => {
  return html`
    <svg
      className="fill-current icon-${name} icon-size-${size}"
      width="${size}"
      height="${size}"
      viewBox="0 0 ${size} ${size}"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>${name}</title>
      <path d="${path}" fillRule="${fillRule}" />
    </svg>
  `;
};

const createSVGFilePath = ({ name, size }) =>
  `${directory}/${size}/${name}.svg`;

rmDir(directory);
fs.mkdirSync(directory);
iconSizes.forEach((size) => fs.mkdirSync(`${directory}/${size}`));

Object.keys(icons).forEach((name) => {
  Object.keys(icons[name])
    .filter((key) => key !== "fillRule")
    .forEach((size) => {
      fs.writeFile(
        createSVGFilePath({ name, size }),
        createSVG({
          size,
          name,
          path: icons[name][size],
          fillRule: icons[name].fillRule || "nonzero",
        }),
        (err) => {
          if (err) throw err;
        }
      );
    });
});

fs.copyFile(`./${configFile}`, `${directory}/${configFile}`, (err) => {
  if (err) throw err;
});

console.log(`
✔︎  Icons config file copied over. SVG files generated.

`);
