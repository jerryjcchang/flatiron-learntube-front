import React from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

class VideoCard extends React.Component{
  render(){
    const { video, handleClick } = this.props
    const { name, instructor, youtube_id } = video
    return(
      <Card
        fluid
        className="video-card"
        onClick={(e) => {handleClick(e, video)}}
      >
        <Grid>
          <Grid.Column width={4}>
            <Image
              src={`https://img.youtube.com/vi/${youtube_id}/0.jpg`}
              size="small"
            />
          </Grid.Column>
          <Grid.Column width={9}>
            <Card.Content>
              <Card.Header><b>{name}</b></Card.Header>
              <p className="instructor-div">Instructor: {instructor}</p>
            </Card.Content>
          </Grid.Column>
          <Grid.Column width={3}>
            {this.props.buttonType === "add"
            ?
            <Button
              className="add-vid-btn"
              color="blue"
              onClick={(e) => {this.props.handleAddVideo(e, video)}}>
            Add To My List
            </Button>
            :
            <Button
              className="rmv-vid-btn"
              color="red"
              onClick={(e) => {this.props.handleRemoveVideo(e, video)}}>
            Remove
            </Button>
            }
          </Grid.Column>
        </Grid>
      </Card>
    )
  }
}

export default VideoCard
