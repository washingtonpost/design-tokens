const spacingConfig = {
  source: ['tokens.json'],
  platforms: {
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css', 'size/px+strings'],
      buildPath: 'dist/scss/',
      files: [
        {
          destination: 'tokens.scss',
          format: 'scss/variables',
        },
      ],
    },
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/css', 'size/px+strings'],
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    json: {
      buildPath: 'dist/',
      transforms: ['name/cti/kebab', 'attribute/cti'],
      files: [
        {
          destination: 'tokens.json',
          format: 'json',
        },
      ],
    },
    jss: {
      buildPath: 'dist/jss/',
      transforms: ['name/custom/camel-flat', 'attribute/cti', 'size/px+strings'],
      files: [
        {
          destination: 'tokens.json',
          format: 'json/flat',
        },
      ],
    },
  },
};

const StyleDictionary = require('style-dictionary').extend(spacingConfig);
const {pxStrings, camelFlat} = require('../../transformers');

StyleDictionary.registerTransform(pxStrings);
StyleDictionary.registerTransform(camelFlat);

StyleDictionary.buildAllPlatforms();
