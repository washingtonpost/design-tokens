const StyleDictionary = require('style-dictionary').extend('./../../config.json');
const {camelFlat} = require('../../transformers');

StyleDictionary.registerTransform(camelFlat);
StyleDictionary.buildAllPlatforms();
