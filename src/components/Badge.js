import React from "react";

import "./styles/Badge.css";
import conferenciaLogo from "../images/badge-header.svg";

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
          <img
            className="Badge__avatar"
            src="https://s.gravatar.com/avatar/b1c0b02e53a5e415ce2b229716b16677?s=80"
            alt="Avatar de {firstname}"
          />
          <h1>
            {this.props.firstname} <br /> {this.props.lastname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.trabajo}</h3>
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
