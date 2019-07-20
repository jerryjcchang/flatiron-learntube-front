import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoModal from './Components/VideoModal'

class App extends React.Component {
  render(){
    return (
      <div classsName="App">
        <h3>Flatiron LearnTube</h3>
        <VideoModal />
      </div>
    )
  }
}

export default App;
