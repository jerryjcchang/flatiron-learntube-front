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
      mod: "",
      cohort: "",
      newCohort: "DC-",
      submitted: false,
      addCohort: false,
      disableSelectCohort: false,
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
    if(name === "vidId"){
      let parsed = this.parseYoutubeId(value)
      this.setState({
        vidId: parsed
      })
    } else {
    this.setState({ [name]: value })
    }
  }

  formatInstr = () => {
    if(this.props.instructor){
      return this.props.instructor.split(" ")[0]
    }
  }

  showCohort = (e) => {
    e.preventDefault()
    const { addCohort, disableSelectCohort } = this.state
    this.setState({
      addCohort: !addCohort,
      cohort: "",
    })
  }

  parseYoutubeId = (id) => {
    if(id.includes('&')){
      return id.split('&')[0].split('=')[1]
    } else if(id.includes('=')){
      return id.split('=')[1]
    } else if(id.includes('/')){
      return id.split('/')[3]
    } else{return id}
  }

  addVideo = () => {
    this.setState({
      submitted: true
    })
  }

  render(){

    const {name, instructor, description, vidId, length, cohort, mod, submitted, newCohort, addCohort, disableSelectCohort} = this.state

    return(
      <>
      <Form id="add-video-form" onSubmit={this.addVideo}>
        <Form.Group>
          {!addCohort ? <Form.Select id="cohort-dropdwn" required name="cohort" label="Select Cohort" placeholder="Select Cohort" value={cohort} options={this.cohortOptions()} onChange={this.handleChange} search />
            : <Form.Input id="cohort-field" required name="newCohort" label="Add Cohort" placeholder="Cohort Name" value={newCohort} onChange={this.handleChange} />}
          <Button id="add-cohort-btn" content={!addCohort ? "Add" : "Back"} onClick={this.showCohort}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input required fluid name="name" label="Video Name" placeholder="Video Name" value={name} onChange={this.handleChange}/>
          <Form.Input required fluid name="instructor" label="Instructor" value={this.formatInstr()} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input required fluid name="description" label="Video Description" placeholder="Video Description" value={description} onChange={this.handleChange}/>
          <Form.Input required fluid name="vidId" label="Video ID" placeholder="youtube.com/watch?v=[ID]" value={vidId} onChange={this.handleChange}/>
          <Form.Select required fluid name="mod" label="Select Mod" placeholder="Select Mod" value={mod} options={this.modOptions} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button fluid content="Add Video" color="red" className="add-vid-btn" />
      </Form>
      </>
    )
  }
}

export default AddVideoForm
