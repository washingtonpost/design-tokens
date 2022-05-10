# Icons

We have three icon sizes, 16, 24, and 32. Some icons have fill rules. All have a single path.

### Contributing

1. The designer should provide the correct sizes and files needed for all three sizes of icons.
2. Check to make sure each icon is on one path.
3. Optimized the SVG. A good tool for this is [svgomg](https://jakearchibald.github.io/svgomg/). The default setting of SVGOMG should do most of the work, but check precision to make sure the SVG has the smallest file size without compromising path accuracy, 
4. After optimization add the path data object to token.js. The icon should have a name from the designer. That should be the name of the object. Order alphabetically.
5. Be sure to add each size path data and the fill-rule for the icon (ex: `evenodd`, `nonzero`)
6. Create a PR, review dev, and design, get approval! 
7. Work with a site component or design tokens contributor to cut a release.
8. If you’re importing icons via site-components, drop a note in the slack room #site-components to bump the design token package and make a release with your icons.


### Build Process v1

1. We generate SVG files from the `./tokens.json` configuration file. This file was moved over from site-components. It's part of a phased plan to improve and streamline our icons. Below is an example of the HTML of the SVG.

```html
<svg
  className="fill-current icon-add icon-size-16"
  width="16"
  height="16"
  view-box="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>add</title>
  <path d="M7 7V1h2v6h5.929v2H9v5.929H7V9H1V7h6z" fillRule="nonzero" />
</svg>
```

2. They are organized into directories by their size (16, 24, 32). i.e. `./dist/16/add.svg`
3. We also copy over the `./icons.json` file to let any consumer of this package transform their icons in any way they see fit.

_The generated SVG files_ do not contain fill colors. We recommend using CSS's `currentColor` property. We added three helper classes to the SVG: `fill-current`, `icon-${name}`, and `icon-${size}`.
