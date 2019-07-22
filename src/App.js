import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoModal from './Components/VideoModal'
import VideosContainer from './Containers/VideosContainer'
import MyVideosContainer from './Containers/MyVideosContainer'
import Navbar from './Components/Navbar'
import { Grid, Button } from 'semantic-ui-react'

class App extends React.Component {

  state = {
    videos: [],
    myVideos: [],
    showModal: false,
    selectedVideo: null,
    loading: true,
  }

  componentDidMount(){
    fetch('https://learntube-backend.herokuapp.com/api/v1/videos')
    .then(r => r.json())
    .then(data => this.setState({ videos: data, loading: false }))
  }

  handleVideoCardClick = (e, video) => {
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

  handleAddVideo = (e, video) => {
    e.stopPropagation()
    if(!this.state.myVideos.includes(video)){
      this.setState({
        myVideos: [...this.state.myVideos, video]
      })
    }
  }

  handleRemoveVideo = (e, video) => {
    e.stopPropagation()
    let myVideos = [...this.state.myVideos]
    let index = myVideos.indexOf(video)
    myVideos.splice(index,1)
    this.setState({
      myVideos
    })
  }

  handleLogin = () => {
    console.log('logging in')
    let url = new URL('https://github.com/login/oauth/authorize')
    let params = { client_id: "8072f40fd7fb862b08a0", state: "my_app"}
    url.search = new URLSearchParams(params)
    fetch(url)
  }

  render(){

    const {loading,videos, myVideos, selectedVideo,showModal} = this.state

    return (
      <div className="App">
        <Navbar/>
        <Button color="yellow" onClick={this.handleLogin}>Login</Button>
        <VideoModal show={showModal} handleCloseModal={this.handleCloseModal} video={selectedVideo}/>
        <VideosContainer
          videos={videos}
          loading={loading}
          handleVideoCardClick={this.handleVideoCardClick}
          handleAddVideo={this.handleAddVideo}
        />
        <MyVideosContainer
            myVideos={this.state.myVideos}
            loading={loading}
            handleVideoCardClick={this.handleVideoCardClick}
            handleRemoveVideo={this.handleRemoveVideo}
        />
      </div>
    )
  }
}

export default App;


// <Grid>
//   <Grid.Row columns={2}>
//   </Grid.Row>
// </Grid>
