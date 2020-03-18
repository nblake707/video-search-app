import React from 'react';
import VideoItem from './VideoItem';

    /* placed the videos variable as a parameter instead of props - 
    to avoid writing props everytime we want to access video */

    //Videos array passed from the App component
const VideoList = ({videos, onVideoSelect }) => {
    /* the map function will return a new array with each individual 
        VideoItem, featuring videos from the original array
    */
    const renderedList = videos.map( (video) => {
       //returning a video item component that will render each invididual video
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />;
   });
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;