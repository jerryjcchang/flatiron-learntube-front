import React from 'react'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

class VideoCard extends React.Component{
  render(){
    const { video, handleClick } = this.props
    const { name, instructor, youtube_id } = video
    return(
      <Card
        fluid
        id="video-card"
        onClick={() => {handleClick(video)}}
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
            <Button color="blue">Add to My List</Button>
          </Grid.Column>
        </Grid>
      </Card>
    )
  }
}

export default VideoCard
