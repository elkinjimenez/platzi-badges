import React from "react";

import "./styles/Badge.css";
import conferenciaLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={conferenciaLogo} alt="Logo de mi conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar de Elkin"
          />
          <h1>
            Elkin <br /> Jiménez
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>Developer Full stack</p>
          <p>@elomjiga</p>
        </div>
        <div className="Badge__footer">
          <p>Elkin Jimenez</p>
        </div>
      </div>
    );
  }
}

export default Badge;
