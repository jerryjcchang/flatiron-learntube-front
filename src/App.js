import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoModal from './Components/VideoModal'
import VideosContainer from './Containers/VideosContainer'
import MyVideosContainer from './Containers/MyVideosContainer'
import Navbar from './Components/Navbar'
import { Grid, Button } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

const FETCHURL = 'http://localhost:3001/api/v1'
const TOKEN = FETCHURL+"/token"
const PROFILE = FETCHURL+"/profile"

class App extends React.Component {

  state = {
    videos: [],
    myVideos: [],
    showModal: false,
    selectedVideo: null,
    loading: true,
    login: false,
    user: {},
    redirectHome: false,
  }

  componentDidMount(){
    let url = new URL(window.location.href)
    let c = url.searchParams.get("code")

    this.fetchVideos()
    if(c && !localStorage.getItem('token')){
      this.login(c)
    } else if(localStorage.getItem('token')){
      this.fetchUser()
    }
  }

  fetchUser = () => {
    let token = localStorage.getItem('token')
    let configObj = {
      method: "POST",
      headers: {
        "Authentication": `Bearer ${token}`
      }
    }
    fetch(PROFILE, configObj)
    .then(r => r.json())
    .then(d => this.setState({user: d, redirectHome: true}))
  }

  login = (code) => {
    // debugger
    let configObj = {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        string: code
      })
    }
    fetch(TOKEN, configObj)
    .then(r => r.json())
    .then(data => {
      console.log(data)
      this.setState({user: data.user, redirectHome: true})
      localStorage.setItem('token', data.token)
    })
  }

  handleLogout = () => {
    this.setState({
      user: {}
    })
    localStorage.clear()
    console.log('logging out')
  }

  fetchVideos = () => {
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
    debugger
    return <Link to={url}/>
  }



  render(){

    const {loading,videos, myVideos, selectedVideo,showModal, redirectHome} = this.state

    return (
      <div className="App">
        <Navbar
          name={this.state.user ? this.state.user.name:null}
          img_url={this.state.user ? this.state.user.avatar_url:null}
          handleLogout={this.handleLogout}
        />
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
            instructor={this.state.user.name}
        />
        {redirectHome ? <Redirect to="/"/> : null}
      </div>
    )
  }
}

export default App;


// <Grid>
//   <Grid.Row columns={2}>
//   </Grid.Row>
// </Grid>
