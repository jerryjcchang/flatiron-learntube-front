import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { debounce } from 'lodash'

class AddVideoForm extends React.Component {

    state = {
      name: "",
      instructor: "",
      description: "",
      vidId: "",
      length: "",
      cohort: "",
      mod: "",
      submitted: false
    }

  modOptions = [
    { key: "Mod 1", text: "Mod 1", value: "mod 1"},
    { key: "Mod 2", text: "Mod 2", value: "mod 2"},
    { key: "Mod 3", text: "Mod 3", value: "mod 3"},
    { key: "Mod 4", text: "Mod 4", value: "mod 4"},
    { key: "Mod 5", text: "Mod 5", value: "mod 5"},
  ]

  cohorts = [
    "DC-Web-040119",
    "DC-Web-051319",
    "DC-Web-062419",
    "DC-Web-080519"
  ]

  cohortOptions = () => (
    this.cohorts.map(cohort => ({
      key: cohort, text: cohort, value: cohort
    }))
  )

  handleChange = (e, {name,value}) => {
    this.setState({ [name]: value })
  }

  formatInstr = () => {
    if(this.props.instructor){
      return this.props.instructor.split(" ")[0]
    }
  }

  render(){

    const {name, instructor, description, vidId, length, cohort, mod, submitted} = this.state

    return(
      <Form>
        <Form.Group widths='equal'>
          <Form.Input required fluid name="name" label="Video Name" placeholder="Video Name" value={name} onChange={this.handleChange} error={!name && submitted ? "Field cannot be left empty": null}/>
          <Form.Input required fluid name="instructor" label="Instructor" value={this.formatInstr()} onChange={this.handleChange} error={!instructor && submitted ? "Field cannot be left empty": null}/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input required fluid name="description" label="Video Description" placeholder="Video Description" value={description} onChange={this.handleChange} error={!description && submitted ? "Field cannot be left empty": null}/>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input required fluid name="vidId" label="Video ID" placeholder="youtube.com/watch?v=[ID]" value={vidId} onChange={this.handleChange} error={!vidId && submitted ? "Field cannot be left empty": null}/>
          <Form.Select required fluid name="mod" label="Select Mod" placeholder="Select Mod" value={mod} options={this.modOptions} onChange={this.handleChange} error={!mod && submitted ? "Field cannot be left empty": null}/>
        </Form.Group>
        <Form.Group inline>
          <Form.Select required fluid name="cohort" label="Select Cohort" placeholder="Select Cohort" value={cohort} options={this.cohortOptions()} onChange={this.handleChange} search error={!cohort && submitted ? "Field cannot be left empty": null}/>
          <Form.Button id="add-cohort-btn" content="+"/>
        </Form.Group>
        <Button content="Add Video" color="red" className="add-vid-btn" />
      </Form>
    )
  }
}

export default AddVideoForm
