import React from 'react';
import '@washingtonpost/site-components/css/index.css';
import colorTokens from '../packages/colors/tokens.json';

export default {
  title: 'Tokens/Colors',
};

const ColorDocBlock = (name, value) => (
  <div className="mr-sm mb-md">
    <div
      className="brad-4"
      style={{
        background: value,
        width: 128,
        height: 128,
        border: `1px solid rgba(0, 0, 0, 0.1) `,
      }}
    />
    <p className="font-xxs bold gray-darkest mb-0 mt-xs capitalize">{name}</p>
    <p className="font-xxxs gray-dark mt-xxs uppercase letter-spacing">{value}</p>
  </div>
);

const Template = () => (
  <div className="ma-lg">
    {Object.keys(colorTokens.color).map((category) => (
      <div>
        <h3 className="font-md3 capitalize light mt-lg mb-sm gray-darkest">{category}</h3>
        <div>
          {Object.keys(colorTokens.color[category]).map((color) => (
            <div>
              <p className="font-md capitalize mb-xs mt-md gray-darkest">{color}</p>
              <div className="flex flex-wrap">
                {colorTokens.color[category][color].value
                  ? ColorDocBlock(color, colorTokens.color[category][color].value)
                  : Object.keys(colorTokens.color[category][color]).map((name) =>
                      ColorDocBlock(name, colorTokens.color[category][color][name].value)
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export const Colors = Template.bind({});
