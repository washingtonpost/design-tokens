import React from 'react';
import spacingTokens from '../packages/spacing/tokens.json';

export default {
  title: 'Tokens/Spacing',
};

const spaceDocBlock = (spacing) => (
  <div className="ma-md">
    <div
      className="brad-4 bg-gray-light"
      style={{
        height: 24,
        width: `${spacingTokens.size.spacing[spacing].value}px`,
      }}
    />
    <p className="font-xxs bold gray-darkest mb-0 mt-xs">{spacing}</p>
    <p className="font-xxxs gray-dark mt-xxs">{spacingTokens.size.spacing[spacing].value}</p>
  </div>
);

const Template = () => (
  <div className="">{Object.keys(spacingTokens.size.spacing).map((spacing) => spaceDocBlock(spacing))}</div>
);

export const Spacing = Template.bind({});
