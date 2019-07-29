import React from 'react'
import VideoList from './VideoList'
import AddVideoForm from '../Components/AddVideoForm'
import { Container, Tab } from 'semantic-ui-react'

class MyVideosContainer extends React.Component {

  state = {
    form: true
  }

  panes = () => (
    [
      {menuItem: !this.state.form ? "My Videos" : "Add Video",
        render: () =>
        !this.state.form ?
        <VideoList
          videos={this.props.myVideos}
          handleVideoCardClick={this.props.handleVideoCardClick}
          loading={this.props.loading}
          handleRemoveVideo={this.props.handleRemoveVideo}
          buttonType={"remove"}
        />
        :
        <AddVideoForm instructor={this.props.instructor} />
      }
    ]
  )

  render(){
    return(
      <Container id="my-video-container">
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={this.panes()}
          id="tab-container"
          // activeIndex={}
        />
      </Container>

    )
  }
}

export default MyVideosContainer
