import React from "react";

//incredibly important that this param is placed inside of curly braces - throws error
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      {/* sematic ui will apply automatic styling to enhance display */}
      <div className="ui embed">
        {/* must include title */}
        <iframe title="videoPlayer" src={videoSrc} />
      </div>
      <div className="ui segments">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
