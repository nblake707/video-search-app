import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = { 
        videos: [],
        selectedVideo: null 
    };

    // Callback method: This is called anytime a search is made
    onTermSubmit = async (term) => {
        // Using the youtube instance to make an asynchronous API request
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        
        this.setState({videos: response.data.items});
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo : video});
    };

    render (){
        return (
            // adds a margin on either end of the searchBar
        <div className="ui container">
           {/* Does not have to be called onFormSubmit */}
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo} />
            {/* Passing the list of videos we set on the state object into VideoList as a prop */}
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
        </div>

        )
    }
}

export default App;