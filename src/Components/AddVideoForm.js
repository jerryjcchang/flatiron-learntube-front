import React from 'react'
import { Form } from 'semantic-ui-react'
import { debounce } from 'lodash'

class AddVideoForm extends React.Component {


  state = {
    name: "",
    instructor: "",
    description: "",
    vidId: "",
    length: "",
  }

  options = [
    { key: "Mod 1", text: "Mod 1", value: "mod 1"},
    { key: "Mod 2", text: "Mod 2", value: "mod 2"},
    { key: "Mod 3", text: "Mod 3", value: "mod 3"},
    { key: "Mod 4", text: "Mod 4", value: "mod 4"},
    { key: "Mod 5", text: "Mod 5", value: "mod 5"},
  ]

  handleChange = (e,s) => {
    e.preventDefault()
    let newState = {...this.state}
    newState[s.name] = s.value
    this.setState(
      newState
    )
  }

  render(){
    return(
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid name="name" label="Video Name" placeholder="Video Name" onChange={debounce(this.handleChange, 500)}/>
          <Form.Input fluid name="instructor" label="Instructor" placeholder="Instructor" onChange={debounce(this.handleChange, 500)}/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid name="description" label="Video Description" placeholder="Video Description" onChange={debounce(this.handleChange, 500)}/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input fluid name="vidId" label="Video ID" placeholder="youtube.com/watch?v=[ID]" onChange={debounce(this.handleChange, 500)}/>
          <Form.Input fluid name="length" label="Length" placeholder="In Minutes" onChange={debounce(this.handleChange, 500)}/>
          <Form.Select fluid name="mod" label="Select Mod" placeholder="Select Mod" options={this.options} onChange={debounce(this.handleChange, 500)}/>
        </Form.Group>
      </Form>
    )
  }
}

export default AddVideoForm
