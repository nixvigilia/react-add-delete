import React, { Component } from "react";

class Form extends Component {
  // We're going to set the initial state of the Form to be an object with some empty properties, and assign that initial state to this.state.

  initialState = {
    name: "",
    job: "",
  };

  // main state
  state = this.initialState;

  // Our goal for this form will be to update the state of Form every time a field is changed in the form, and when we submit, all that data will pass to the App state, which will then update the Table.

  // First, we'll make the function that will run every time a change is made to an input. The event will be passed through, and we'll set the state of Form to have the name (key) and value of the inputs.

  // onchange => When you leave the input field, a function is triggered
  handleChange = (event) => {
    // name & value are attributes
    // const { name, value } = event.target;

    // this.setState({ [name]: value });
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  submitForm = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    console.log(event);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="job">
            Job
          </label>
          <input
            className="form-control"
            type="text"
            id="job"
            name="job"
            value={job}
            onChange={this.handleChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.submitForm}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
