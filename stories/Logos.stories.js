import React from 'react';
import {
  Amazon,
  AmazonMusic,
  Apple,
  ApplePodcast,
  ByTheWay,
  The7,
  The7Blue,
  The7Black,
  Comments,
  Elections,
  Facebook,
  Google,
  GooglePodcast,
  Launcher,
  TooledWashingtonPost,
  Olympics,
  OlympicsDark,
  Rss,
  Spotify,
  Stitcher,
  Voraciously,
  WashingtonPostMagazine,
  WashingtonPost,
  WashingtonPostWhite,
  WpMark,
  WpMarkWhite,
} from '../packages/logos/dist/react/';

export default {
  title: 'Tokens/Logos',
};

const LogoDocBlock = (props) => (
  <div className="ma-md mw-600">
    <div className={`h-lg b bc-gray-light brad-4 pa-md flex justify-center ${props.background}`}>{props.children}</div>
    <p className="font-xxs gray-darkest mb-0 mt-xs bold">
      {props.logoName}
      {props.source && (
        <a class="light" href={props.source}>
          {' '}
          (Source)
        </a>
      )}
    </p>
  </div>
);

export const TheWashingtonPost = () => (
  <div>
    <h3 className="font-md3 light mt-lg mb-sm ml-md gray-darkest">The Washington Post logos</h3>
    <LogoDocBlock logoName="By The Way">
      <ByTheWay width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="The 7">
      <The7 width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="The 7 Blue" background="bg-offblack">
      <The7Blue width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="The 7 Black" background="bg-blue">
      <The7Black width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Comments">
      <Comments width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Elections">
      <Elections width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Elections on dark" background="bg-offblack">
      <Elections width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Launcher" background="bg-offblack">
      <Launcher width={"100%"}/>
    </LogoDocBlock>
    <LogoDocBlock logoName="Olympics">
      <Olympics width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Olympics Dark" background="bg-offblack">
      <OlympicsDark width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Tooled Washington Post">
      <TooledWashingtonPost width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Voraciously">
      <Voraciously width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Washington Post">
      <WashingtonPost width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Washington Post White" background="bg-offblack">
      <WashingtonPostWhite width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Washington Post Magazine" background="bg-offblack">
      <WashingtonPostMagazine width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="WP Mark">
      <WpMark width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="WP Mark White" background="bg-offblack">
      <WpMarkWhite width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Comments">
      <Comments width={'100%'} />
    </LogoDocBlock>
  </div>
);

export const Corporate = () => (
  <div>
    <h3 className="font-md3 light mt-lg mb-sm ml-md gray-darkest">Corporate logos</h3>
    <LogoDocBlock logoName="Amazon">
      <Amazon width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Amazon Music">
      <AmazonMusic width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Apple">
      <Apple width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock
      logoName="Apple Podcast"
      source="https://www.apple.com/itunes/marketing-on-podcasts/identity-guidelines.html#apple-podcasts-icon"
    >
      <ApplePodcast width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Facebook">
      <Facebook width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Google">
      <Google width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Google Podcast" background="bg-offblack">
      <GooglePodcast width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Rss">
      <Rss width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock
      logoName="Spotify"
      source="https://developer.spotify.com/documentation/general/design-and-branding/#using-our-logo"
    >
      <Spotify width={'100%'} />
    </LogoDocBlock>
    <LogoDocBlock logoName="Stitcher">
      <Stitcher width={'100%'} />
    </LogoDocBlock>
  </div>
);
