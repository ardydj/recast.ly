// import React from 'react';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videosList: exampleVideoData,
      currentIndex: 0,

    };
  }
  changeMainVideo() {
    console.log('this is our variable: ', this);
    var currentVideo = props.video;
    this.state.currentIndex = this.state.videosList.indexOf(props.video);

  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videosList[this.state.currentIndex]}/>
          </div>
          <div className="col-md-5" id="videolistcomponent">
            <VideoList videos={this.state.videosList} changeMainVideo={this.changeMainVideo.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


export default App;

// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.