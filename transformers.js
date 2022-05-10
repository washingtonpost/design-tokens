const _ = require('lodash');

const pxStrings = {
  name: 'size/px+strings',
  type: 'value',
  transformer: function (prop) {
    return isNaN(parseInt(prop.original.value)) ? prop.original.value : `${prop.original.value}px`;
  },
};

/**
 * Based on https://github.com/amzn/style-dictionary/blob/master/lib/common/transforms.js#L158
 * This transformer generates camelcase vars based on the final 1/2 leaf nodes in a tree
 * E.g. blueBright instead of colorsBrandBlueBright
 **/
const camelFlat = {
  name: 'name/custom/camel-flat',
  type: 'name',
  transformer: function (prop, options) {
    // If it's extra long, refer to two leaf nodes, not one
    let paths =
      prop.path.length > 3
        ? [prop.path[prop.path.length - 2], prop.path[prop.path.length - 1]]
        : [prop.path[prop.path.length - 1]];
    // Edge case: There are alt blue/green colors under the "subs" color key - mark as alt colors
    if (prop.path[1] === 'subscription' && ['blue', 'green'].includes(prop.path[2])) {
      paths.push('alt');
    }
    // This is based on the approach the builtin name/cti/camel uses
    return _.camelCase(paths.join(' '));
  },
};

module.exports = {
  pxStrings,
  camelFlat,
};
