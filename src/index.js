// TODO: Render the `App` component to the DOM
// import React from 'react';
// import ReactDom from 'react-dom';
import App from './components/App.js';
import VideoList from './components/VideoList.js';
import VideoListEntry from './components/VideoListEntry.js';
import exampleVideoData from '/src/data/exampleVideoData.js';
console.log('hey');

ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<VideoList />, document.getElementById('videolistcomponent'));
// ReactDOM.render(<VideoListEntry />, document.getElementById('videolistentry'));

