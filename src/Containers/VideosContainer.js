import React from 'react'
import { Container, Tab } from 'semantic-ui-react'
import VideoList from './VideoList'
import VideoCard from '../Components/VideoCard'

class VideosContainer extends React.Component {

  mods = ["Mod 1", "Mod 2", "Mod 3", "Mod 4", "Mod 5"]

  filteredVideos = (mod) => (
    this.props.videos.filter(video => video.category === mod)
  )

  panes = () => {
    return this.mods.map((mod) =>
      (
        {menuItem: mod,
          render: () =>
          <VideoList
            videos={this.filteredVideos(mod)}
            handleVideoCardClick={this.props.handleVideoCardClick}
            loading={this.props.loading}
            handleAddVideo={this.props.handleAddVideo}
            buttonType={"add"}
          />
        }
      )
    )
  }


  render(){
    return(
      <Container id="video-container">
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

export default VideosContainer
