import React from 'react'
import { Card, Tab, Header } from 'semantic-ui-react'
import VideoCard from '../Components/VideoCard'

class VideoList extends React.Component{

  videoCards = () => (
    this.props.videos.map(video =>
      <VideoCard
        video={video}
        key={video.id}
        handleClick={this.props.handleVideoCardClick}
      />
    )
  )

  render(){
    return(
      <Tab.Pane id="tab-pane">
        <Card.Group>
          {this.videoCards()}
        </Card.Group>
      </Tab.Pane>
    )
  }
}

export default VideoList
