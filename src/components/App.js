import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  //This will ensure that something is displayed to the screen as soon as the page loads
  componentDidMount(){
      this.onTermSubmit('Urban Gardening')
  }

  // Callback method: This is called anytime a search is made
  onTermSubmit = async term => {
    // Using the youtube instance to make an asynchronous API request
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ 
        videos: response.data.items,
        selectedVideo: response.data.items[0] 
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      // adds a margin on either end of the searchBar
      <div className="ui container">
        {/* Does not have to be called onFormSubmit */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              {/* Passing the list of videos we set on the state object into VideoList as a prop */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
