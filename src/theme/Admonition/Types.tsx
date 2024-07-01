import Player from 'react-player';

import DefaultAdmonitionTypes from '@theme-original/Admonition/Types';

function YoutubeAdmonition(props) {
  return (
    <div className="border-red border-solid">
      <Player url={`https://www.youtube.com/watch?v=${props.title}`} />
      {props.children}
    </div>
  );
}

function GuideAdmonition(props) {
  return (
    <div className="guide">
      <div className="pl-3 flex flex-wrap gap-2">
        <b>User Guide: </b>
        {props.children}
      </div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  youtube: YoutubeAdmonition,
  guide: GuideAdmonition,
};

export default AdmonitionTypes;
