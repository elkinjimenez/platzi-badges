import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handelSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero text-center">
          <img
            className="img-fluid BadgeNew__hero-image"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstname={this.state.form.firstName || "Nombre"}
                lastname={this.state.form.lastName || "lastName"}
                email={this.state.form.email || "Correo"}
                jobTitle={this.state.form.jobTitle || "Tu jobTitle"}
                twitter={this.state.form.twitter || "Twitter"}
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handelSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
