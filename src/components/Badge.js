import React from "react";

import conferenciaLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={conferenciaLogo} alt="Logo de mi conferencia" />
        </div>
        <div>
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar de Elkin"
          />
          <h1>
            Elkin <br /> Jiménez
          </h1>
        </div>
        <div>
          <p>Developer Full stack</p>
          <p>@elomjiga</p>
        </div>
        <div>
          <p>Elkin Jimenez</p>
        </div>
      </div>
    );
  }
}

export default Badge;
