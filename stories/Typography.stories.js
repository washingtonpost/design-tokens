import React from "react";
import typographyTokens from "../packages/typography/tokens.json";

export default {
  title: "Tokens/Typography",
};

const ipsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const typeDocBlock = (category, type) => {
  const fontFamily =
    type === "typeface"
      ? typographyTokens.typography[type][category].value
      : "Postoni";
  const fontSize =
    type === "size"
      ? typographyTokens.typography[type][category].value
      : "1.5rem";
  const fontWeight = typographyTokens.typography[type][category].value;

  return (
    <div className="ma-md">
      <p className="font-sm bold gray-darkest mb-xxs">{category}</p>
      <h3
        className="b bc-gray-light brad-4 pa-md center mw-600"
        style={{
          fontFamily,
          fontSize,
          fontWeight,
        }}
      >
        The quick brown fox jumps over the lazy dog.
      </h3>
      <p className="font-xxxs gray-dark mt-xs mb-md">
        {typographyTokens.typography[type][category].value}
      </p>
    </div>
  );
};

const lineHeightDocBlock = (typography) => (
  <div className="ma-md">
    <p className="font-xs gray-darkest bold">
      {typographyTokens.typography["line-height"][typography].value}
    </p>
    <div className="b bc-gray-light brad-4 pa-md mw-600">
      <p
        style={{
          lineHeight: `${typographyTokens.typography["line-height"][typography].value}em`,
        }}
        className="font-xxs gray-darkest"
      >
        {ipsum}
      </p>
    </div>
  </div>
);

export const Typefaces = () => (
  <div>
    {Object.keys(typographyTokens.typography.typeface).map((typography) =>
      typeDocBlock(typography, "typeface")
    )}
  </div>
);

export const FontSize = () => (
  <div>
    {Object.keys(typographyTokens.typography.size).map((size) =>
      typeDocBlock(size, "size")
    )}
  </div>
);

export const Weight = () => (
  <div>
    {Object.keys(typographyTokens.typography.weight).map((weight) =>
      typeDocBlock(weight, "weight")
    )}
  </div>
);

export const LineHeight = () => (
  <div>
    {Object.keys(typographyTokens.typography["line-height"]).map((height) =>
      lineHeightDocBlock(height)
    )}
  </div>
);

export const SupportedGlyphs = () => (
  <div>
    {["headline", "san-serif", "body"].map((typeface) => (
      <h3 className={`font--${typeface} font-xxxl mb-xxl lh-md wrap`}>
        {typographyTokens.typography.glyphs.value.replace(/(.)/g, ' $1')}
      </h3>
    ))}
  </div>
);

export const CommonGlyphs = () => (
  <div>
    {["headline", "san-serif", "body"].map((typeface) => (
      <h3 className={`font--${typeface} font-xxxl mb-xxl lh-md`}>
        a b c d e f g h i j k l m n o p q r s t u v w x y z 
        A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 
        0 1 2 3 4 5 6 7 8 9
        {`( { [ . , ¡ ! ¿ ? * ] } )`}
        {`# $ € £ % @ & ¶ § ¢ † ‡`}
        {`° _ : = ; + − - × ÷ ' ‘ ’ " “ ”`}
        {`< > ≤ ± ≥ « ‹ © ® › »`}
        {`˜ ˙ ¯ ¨ ˝ ´ \` ˆ ˇ ˘ ˚ ¸ ˛`}
      </h3>
    ))}
  </div>
);

// Tests for supported Washington Post ligatures
export const Ligatures = () => (
  <div>
    <h3 className="font--headline font-xxxl">ff fi ffi fl</h3>
    <h3 className="font--franklin font-xxxl">ff</h3>
  </div>
);

// Tests for common Washington Post kerning issues
export const Kerning = () => (
  <h3 className="font--headline font-xxxl">
    Washington
    WASHINGTON
    VA
    ARROWROOT BARLEY CHERVIL DUMPLING ENDIVE FLAXSEED GARBANZO HIJIKI ISHTU
    JICAMA KALE LYCHEE MARJORAM NECTARINE OXTAIL PIZZA QUINOA ROQUEFORT SQUASH
    TOFU UPPUMA VANILLA WHEAT XERGIS YOGURT ZWEIBACK
  </h3>
);
