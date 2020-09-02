import VideoListEntry from './VideoListEntry.js';

// console.log(exampleVideoData);

var VideoList = (props) => (
  // console.log('props inside of video list: ', props.videos);

  <div className="video-list">
    {props.videos.map(video => <VideoListEntry video = {video} changeMainVideo = {props.changeMainVideo}/>)}
  </div>
);


// // In the ES6 spec, files are "modules" and do not share a top-level scope.
// // `var` declarations will only exist globally where explicitly defined.
export default VideoList;



// if (Array.isArray(props.videoData))

