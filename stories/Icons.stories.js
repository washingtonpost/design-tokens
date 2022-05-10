import React from 'react';
import iconTokens from '../packages/icons/tokens.json';

export default {
  title: 'Tokens/Icons',
};

const IconDocBlock = (icon, size) => (
  <div className="ma-md">
    <div
      className="brad-4 flex items-center justify-center b bc-gray-light"
      style={{
        width: 128,
        height: 128,
      }}
    >
      {iconTokens[icon][size] ? (
        <svg
          className={`subs-theme bg-pink-bright icon-${icon} ${icon}-size-${size}`}
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{icon}</title>
          <path d={iconTokens[icon][size]} fillRule={iconTokens[icon].fillRule} />
        </svg>
      ) : (
        <p className="gray-dark pa-xs font-xxxs center">There is no path data for this icon at this size.</p>
      )}
    </div>
    <p className="font-xxs bold gray-darkest mb-0 mt-xs">{icon}</p>
  </div>
);

export const Size16 = () => (
  <div className="flex flex-wrap">{Object.keys(iconTokens).map((icon) => IconDocBlock(icon, '16'))}</div>
);

export const Size24 = () => (
  <div className="flex flex-wrap">{Object.keys(iconTokens).map((icon) => IconDocBlock(icon, '24'))}</div>
);

export const Size32 = () => (
  <div className="flex flex-wrap">{Object.keys(iconTokens).map((icon) => IconDocBlock(icon, '32'))}</div>
);
