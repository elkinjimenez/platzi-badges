import React from "react";

class BadgeForm extends React.Component {
  state = {};

  handleChange = e => {
    // console.log({ value: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    // console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Primer nombre</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="primerNombre"
              value={this.state.primerNombre}
            />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="apellido"
              value={this.state.apellido}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="email"
              name="email"
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <label>Título de tu trabajo</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="trabajo"
              value={this.state.trabajo}
            />
          </div>
          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
