import React from 'react';
import shadowTokens from '../packages/shadows/tokens.json';

export default {
  title: 'Tokens/Shadow',
};

const ShadowDocBlock = (shadow) => (
  <div className="ma-md">
    <div
      className="brad-4 b bc-gray-light bg-white mb-xs"
      style={{
        boxShadow: shadowTokens.shadow[shadow].value,
        height: 128,
        width: 128,
      }}
    />
    <p className="font-xxs bold gray-darkest mb-0 mt-xs capitalize">{shadowTokens.shadow[shadow].comment}</p>
    <p className="font-xxxs gray-dark mt-xxs">{shadowTokens.shadow[shadow].value}</p>
  </div>
);

const Template = () => (
  <div className="">{Object.keys(shadowTokens.shadow).map((shadow) => ShadowDocBlock(shadow))}</div>
);

export const Shadow = Template.bind({});
