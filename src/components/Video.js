import React from 'react';
import YouTube from 'react-youtube';

const Video = () => {
  const videoId = 'RAnGpqrsSyc';
  const videoOpts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <h1 className="text-4xl font-bold">Featured Video Here (using youtube)!</h1>
        <p>blurb about video</p>
      </div>
      <div>
        <YouTube videoId={videoId} opts={videoOpts} />
      </div>
    </div>
  );
};

export default Video;


