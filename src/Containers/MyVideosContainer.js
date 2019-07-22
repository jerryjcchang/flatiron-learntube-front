import React from 'react'
import VideoList from './VideoList'
import { Container, Tab } from 'semantic-ui-react'

class MyVideosContainer extends React.Component {

  panes = () => (
    [
      {menuItem: "My Videos",
        render: () =>
        <VideoList
          videos={this.props.myVideos}
          handleVideoCardClick={this.props.handleVideoCardClick}
          loading={this.props.loading}
          handleRemoveVideo={this.props.handleRemoveVideo}
          buttonType={"remove"}
        />
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
