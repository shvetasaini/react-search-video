import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'

class App extends React.Component {
  state = {video: [], onVideoSelect: null};

  componentDidMount() {
    this.onTermSubmit("Beautiful Himachal")
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {q: term}
    });

    this.setState ({
      video: response.data.items,
      onVideoSelect: response.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({onVideoSelect: video});
  }

  render() {
    return(
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.onVideoSelect}/>
            </div>
            <div className="five wide column">
              <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.video}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;