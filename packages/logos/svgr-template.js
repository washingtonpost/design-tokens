function propTypesTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports }
) {
  const plugins = ["jsx"];
  if (opts.typescript) {
    plugins.push("typescript");
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
  import PropTypes from 'prop-types';
  ${interfaces}
  function ${componentName}({width, height, className, title, titleId}) {
    return ${jsx};
  }

  ${componentName}.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    title: PropTypes.string,
    titleId: PropTypes.string
  };

  ${exports}
    `;
}
module.exports = propTypesTemplate;
