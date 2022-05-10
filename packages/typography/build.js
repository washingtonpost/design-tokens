const baseConfig = require('../../config.json');
const typographyConfig = {
  ...baseConfig,
  platforms: {
    ...baseConfig.platforms,
    jss: {
      buildPath: 'dist/jss/',
      transforms: ['attribute/cti', 'name/cti/camel', 'color/hex', 'size/rem'],
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested', // we want this nested so we can destructure later
        },
      ],
    },
  },
};

const StyleDictionary = require('style-dictionary').extend(typographyConfig);

StyleDictionary.buildAllPlatforms();
