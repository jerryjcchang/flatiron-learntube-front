import React from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react'
import YouTube from 'react-youtube'

class VideoModal extends React.Component {

  render(){

    const opts = {
    height: '500',
    width: '900',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
      }
    }

    const {show, handleCloseModal, video} = this.props
    return(
      <div>
        <Modal
          // trigger={<Button>Show Modal</Button>}
          open={show}
          onClose={handleCloseModal}
          dimmer
          closeIcon={<Icon name="close" inverted color="grey"/>}
          inverted
          size={"fullscreen"}
          id="video-modal"
        >
          <Modal.Header id="modal-header">{video ? video.name : null}</Modal.Header>
          <Modal.Content id="modal-body">
            <Modal.Description>
              <YouTube
                videoId={video ? video.youtube_id : null}
                opts={opts}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default VideoModal
