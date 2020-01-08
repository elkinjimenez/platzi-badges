import React from "react";

import "./styles/Badge.css";
import conferenciaLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    // this.props;
    // const firstname = "Elkin";
    // const lastname = "Jiménez";

    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conferenciaLogo} alt="Logo de mi conferencia" />
        </div>
        <div className="Badge__section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {this.props.firstname} <br /> {this.props.lastname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
          <p>
            {this.props.firstname} {this.props.lastname}
          </p>
        </div>
      </div>
    );
  }
}

export default Badge;
