import React from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import youtube from './apis/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
const KEY = "AIzaSyAKVR0hjzD7mgFK97lJof1XlZpLM32OABg";

class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onSubmitDetails('AnandMovie')
  }

  onSubmitDetails = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      }
    });
    this.setState(
      {
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      }
    )
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <Searchbar onSubmit={this.onSubmitDetails} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
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
