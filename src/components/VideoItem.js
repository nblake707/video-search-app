import "./VideoItem.css";
import React from "react";

/* Previously featured a props object as a parameter. 
    Chose to destructure this out and instead include a video object.
    This will cut down on the amount of code that needs to be written 
*/
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //need an arrow function to call onvideoSelect with desired param
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        alt={video.snippet.description}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
