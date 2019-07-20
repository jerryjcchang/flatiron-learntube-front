import React from 'react'
import { Modal, Button } from 'semantic-ui-react'
import YouTube from 'react-youtube'

class VideoModal extends React.Component {

  state = {
    show: true,
  }

  render(){

    const {show} = this.state
    return(
      <div>
        <Modal
          trigger={<Button>Show Modal</Button>}
          dimmer
          closeIcon
          inverted
          size={"fullscreen"}
        >
          <Modal.Header id="modal-header">Video Modal</Modal.Header>
          <Modal.Content id="modal-body">
            <Modal.Description>
              <YouTube
                videoId={"Uiwxo0vCWe4"}
              />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default VideoModal
