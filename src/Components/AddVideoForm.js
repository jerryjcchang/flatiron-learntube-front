import React from 'react'
import { Form } from 'semantic-ui-react'

class AddVideoForm extends React.Component {

  options = [
    { key: "Mod 1", text: "Mod 1", value: "mod 1"},
    { key: "Mod 2", text: "Mod 2", value: "mod 2"},
    { key: "Mod 3", text: "Mod 3", value: "mod 3"},
    { key: "Mod 4", text: "Mod 4", value: "mod 4"},
    { key: "Mod 5", text: "Mod 5", value: "mod 5"},
  ]

  render(){
    return(
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label="Video Name" placeholder="Video Name"/>
          <Form.Input fluid label="Instructor" placeholder="Instructor"/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Video Description" placeholder="Video Description"/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid label="Video ID" placeholder="youtube.com/watch?v=[ID]"/>
          <Form.Input fluid label="Length" placeholder="In Minutes"/>
          <Form.Select fluid label="Select Mod" placeholder="Select Mod" options={this.options} />
        </Form.Group>
      </Form>
    )
  }
}

export default AddVideoForm
