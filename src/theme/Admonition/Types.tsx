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

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,

  // Add all your custom admonition types here...
  // You can also override the default ones if you want
  youtube: YoutubeAdmonition,
};

export default AdmonitionTypes;
