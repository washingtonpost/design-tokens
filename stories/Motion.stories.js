import React from 'react';
import '@washingtonpost/site-components/css/index.css';
import motionTokens from '../packages/motion/dist/json-flat/tokens.json';

export default {
  title: 'Tokens/Motion',
};

const MotionDocBlock = (motion) => (
  <div className="ma-xxl">
    <p className="font-sm gray-darkest mb-xxs">{motion.replace('motion-', '')}</p>
    <style>{` 
      .docsTransition:hover div {
        margin-left: calc(100% - 44px);
      }
    `}</style>
    <div className="brad-4 bg-gray-lightest h-xl flex items-center pointer docsTransition mb-xs relative">
      <div
        className="brad-4 bg-blue ml-xxs"
        style={{
          height: 40,
          width: 40,
          transitionDuration: motionTokens[motion].includes('s') ? motionTokens[motion] : '0.5s',
          transitionTimingFunction: motionTokens[motion],
          transitionProperty: motionTokens[motion],
        }}
      ></div>
      <p className="absolute center w-100 gray-dark">Hover me</p>
    </div>
    <p className="font-xxxs gray-dark">{motionTokens[motion]}</p>
  </div>
);

const MotionPropertyDocBlock = (motionProperty) => (
  <div>
    <p className="font-xxs bold gray-darkest mb-0 mt-xs capitalize">
      {motionProperty.replace('motion-properties-', '')}
    </p>
    <code className="font-xxxs gray-dark mt-xxs">{motionProperty}</code>
    <p className="font-xxxs gray-dark mt-xxs">{motionTokens[motionProperty]}</p>
  </div>
);

export const Ease = () => (
  <div className="mw-600">
    {Object.keys(motionTokens)
      .filter((token) => token.includes('ease'))
      .map((motion) => MotionDocBlock(motion))}
  </div>
);

export const Duration = () => (
  <div className="mw-600">
    {Object.keys(motionTokens)
      .filter((token) => token.includes('duration'))
      .map((motion) => MotionDocBlock(motion))}
  </div>
);

export const Property = () => (
  <div className="mw-600">
    {Object.keys(motionTokens)
      .filter((token) => token.includes('properties'))
      .map((motion) => MotionPropertyDocBlock(motion))}
  </div>
);
