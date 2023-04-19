import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const videoOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <YouTube videoId="VIDEO_ID" opts={videoOpts} />
    </div>
  );
};

export default Video;
