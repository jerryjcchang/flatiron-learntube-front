import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoModal from './Components/VideoModal'
import VideosContainer from './Containers/VideosContainer'

class App extends React.Component {

  state = {
    videos: [],
    showModal: false,
    selectedVideo: null
  }

  componentDidMount(){
    fetch('https://learntube-backend.herokuapp.com/api/v1/videos')
    .then(r => r.json())
    .then(data => this.setState({ videos: data }))
  }

  handleVideoCardClick = (video) => {
    this.setState({
      showModal: true,
      selectedVideo: video
    })
    console.log(video)
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render(){
    return (
      <div className="App">
        <h3>Flatiron LearnTube</h3>
        <VideoModal show={this.state.showModal} handleCloseModal={this.handleCloseModal} video={this.state.selectedVideo}/>
        <VideosContainer videos={this.state.videos} handleVideoCardClick={this.handleVideoCardClick} />
      </div>
    )
  }
}

export default App;
